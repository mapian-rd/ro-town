import { useContext, useState, useEffect } from "react";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext, ViewState } from "../context/AppContext";
import Box from "./Box";
import Select from "react-select";
import { ItemTypeEnum, itemTypeList } from "../data/model/itemType";
import { optionStyle } from "../App";
import { Equipment, Item } from "../data/model/Itemv2";
import { cardDatabase, enchantDatabase, itemDatabase, optionDatabase } from "../data/database/item";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import { checkMinMax } from "../common/extension";
import { CardPrefixSearch, ItemDescriptionSearch } from "../data/DividePride";

const typeOption = Array.from(itemTypeList).map(([key, value]) => {
    return { value: key, label: value.name }
})
const enchantOption = enchantDatabase.map(item => {
    return { value: item.id, label: item.name }
})
const optionOption = optionDatabase.map(item => {
    return { value: item.id, label: item.name }
})
const cardOption = cardDatabase.map(item => {
    return { value: item.id, label: item.name }
})

export default function AddItem() {
    console.log("AddItem")

    const context = useContext(AppContext);
    const api = useContext(AppApiContext);
    const [type, setType] = useState<ItemTypeEnum>()
    const [item, setItem] = useState<Equipment>()
    const [craftEquipment, setCraftEquipment] = useState<CraftEqiupment>()
    const [refineable, setRefineable] = useState<boolean>(false)
    const [itemOption, setItemList] = useState<{ value: Equipment, label: string }[]>([])

    const cardView = craftEquipment?.cardList.map((item, index) => {
        return (
            <div className="row" key={`card-${index}`}>
                <div className="col-3 jc-center">
                    Card {index + 1}
                </div>
                <div className="col">
                    <Select jc-center
                        key={index}
                        options={cardOption}
                        // value={itemOption.filter(option => option.value.id === item?.id)}
                        classNames={optionStyle}
                        onChange={option => handleCardChange(option, index)}
                    />
                </div>
            </div>
        )
    })

    const enchantView = craftEquipment?.enchantList.map((item, index) => {
        return (
            <div className="row" key={`enchant-${index}`}>
                <div className="col-3 jc-center">
                    Enchant {index + 1}
                </div>
                <div className="col">
                    <Select jc-center
                        options={enchantOption}
                        // value={itemOption.filter(option => option.value.id === item?.id)}
                        classNames={optionStyle}
                        onChange={option => handleEnchantChange(option, index)}
                    />
                </div>
            </div>
        )
    })

    const optionView = craftEquipment?.optionList.map((item, index) => {
        return (
            <div className="row" key={`option-${index}`}>
                <div className="col-3 jc-center">
                    Option {index + 1}
                </div>
                <div className="col">
                    <Select jc-center
                        options={optionOption}
                        // value={itemOption.filter(option => option.value.id === item?.id)}
                        classNames={optionStyle}
                        onChange={option => handleOptionChange(option, index)}
                    />
                </div>
            </div>
        )
    })

    console.log("handleRefineChange start", craftEquipment?.refineLevel)

    function handleTypeChange(option: any) {
        console.log("type", option.value)
        if (type === option.value) return
        setType(option.value);
        setItem(undefined)
        setRefineable(false)

        const optionList = itemDatabase.filter(item => item.type === option.value).map(item => {
            return { value: item, label: item.name }
        })
        setItemList(optionList)
    };

    function handleItemChange(option: any) {
        console.log("item", option.value)
        setItem(option.value);
    };

    function handleRefineChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("handleRefineChange", craftEquipment?.id, craftEquipment?.refineLevel)
        if (!craftEquipment) return
        let { value, min, max } = event.target;
        let newValue = checkMinMax(Number(value), Number(min), Number(max));
        setCraftEquipment({ ...craftEquipment, refineLevel: newValue });
    };

    function handleCardChange(option: any, index: number) {
        console.log("card", index)
        if (!craftEquipment) return
        console.log("handleRefineChange card", craftEquipment?.refineLevel)
        craftEquipment.cardList[index] = option.value
        setCraftEquipment({ ...craftEquipment });
    };

    function handleEnchantChange(option: any, index: number) {
        console.log("enchant", index)
        if (!craftEquipment) return
        craftEquipment.enchantList[index] = option.value
        setCraftEquipment({ ...craftEquipment });
    };

    function handleOptionChange(option: any, index: number) {
        console.log("card", index)
        if (!craftEquipment) return
        craftEquipment.optionList[index] = option.value
        setCraftEquipment({ ...craftEquipment });
    };

    async function saveClick() {
        if (craftEquipment) {
            console.log(craftEquipment)
            let refineText = ""
            if (craftEquipment.refineLevel > 0) {
                refineText = `+${craftEquipment.refineLevel} `
            }

            const value = await Promise.all(craftEquipment.cardList.flatMap(card => {
                if (!card) return []
                const id = Number.parseInt(card)
                if (isNaN(id)) return []
                return CardPrefixSearch(id)
            }))
            value.sort()
            let cardTextMap: Map<string, number> = new Map()
            value.forEach((item) => {
                const i = cardTextMap.get(item) ?? 0
                cardTextMap.set(item, i + 1)
            })
            let cardText = ""
            Array.from(cardTextMap).forEach(([key, value]) => {
                if (value === 2) {
                    cardText += "Double "
                } else if (value === 3) {
                    cardText += "Triple "
                } else if (value === 4) {
                    cardText += "Quadruple "
                }
                cardText += `${key} `
            })
            let cardSlotText = ""
            if (craftEquipment.cardList.length > 0) {
                cardSlotText = ` [${craftEquipment.cardList.length}]`
            }


            let optionText = ""
            let fillOptionList = craftEquipment.optionList.flatMap(item => item ?? [])
            if (fillOptionList.length > 0) {
                optionText += ` [${fillOptionList.length}Option]`
            }

            craftEquipment.name = refineText + cardText + item?.name + cardSlotText + optionText
            api.addItem(craftEquipment)
            setType(undefined);
            setItem(undefined);
            setCraftEquipment(undefined);
            setRefineable(false);
            api.setViewState(ViewState.Storage)
        }
    }

    useEffect(() => {
        console.log("useEffect item")
        if (!item) return
        setCraftEquipment(new CraftEqiupment(item, 0))
        if (itemTypeList.get(item.type)?.refineable) {
            setRefineable(true)
        }
    }, [item])

    useEffect(() => {
        console.log("useEffect refineLevel", craftEquipment?.refineLevel)
    }, [craftEquipment])

    console.log("handleRefineChange ens", craftEquipment?.refineLevel)

    return (
        <div className="d-flex flex-column h-100">
            <div className='d-flex' >
                <button onClick={saveClick}>Save</button>
            </div>
            <Box className="flex-grow-1" title="Craft">
                <div>
                    <div className="row">
                        <div className="col-3 jc-center">
                            Type
                        </div>
                        <div className="col">
                            <Select jc-center
                                options={typeOption}
                                value={typeOption.filter(option => option.value === type)}
                                classNames={optionStyle}
                                onChange={handleTypeChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 jc-center">
                            Name
                        </div>
                        <div className="col">
                            <Select jc-center
                                options={itemOption}
                                value={itemOption.filter(option => option.value.id === item?.id)}
                                classNames={optionStyle}
                                onChange={handleItemChange}
                            />
                        </div>
                    </div>
                    <div className={'row' + (refineable ? '' : ' d-none')}>
                        <div className="col-3 jc-center">
                            Refine
                        </div>
                        <div className="col">
                            <input
                                className="px-2"
                                type="number"
                                value={craftEquipment?.refineLevel ?? 0}
                                min={0}
                                max={20}
                                onChange={handleRefineChange}
                            />
                        </div>
                    </div>
                    {cardView}
                    {enchantView}
                    {optionView}
                </div>
            </Box>
        </div>
    )
}