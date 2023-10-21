import { useContext, useState, useEffect } from "react";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext, ViewState } from "../context/AppContext";
import Box from "./Box";
import Select from "react-select";
import { ItemTypeEnum } from "../data/model/itemType";
import { optionStyle } from "../App";
import { Equipment } from "../data/model/Itemv2";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import { checkMinMax } from "../common/extension";
import { CardPrefixSearch } from "../data/DividePride";
import { cardDatabase } from "../data/database/card";
import { enchantDatabase } from "../data/database/enchant";
import { itemDatabase } from "../data/database/item";
import { optionDatabase } from "../data/database/option";
import { itemTypeList, weaponTypeList } from "../data/constraint/itemType";

const typeOption = Array.from(itemTypeList).map(([key, value]) => {
    return { value: key, label: value.name }
})
const weaponTypeOption = Array.from(weaponTypeList).map(([key, value]) => {
    return { value: key, label: value.name }
})
const enchantOption = enchantDatabase.map(item => {
    return { value: item.id, label: item.name }
})
const optionOption = optionDatabase.map(item => {
    return { value: item.id, label: item.name }
})

export default function AddItem() {
    console.log("AddItem")

    const context = useContext(AppContext);
    const api = useContext(AppApiContext);
    const [type, setType] = useState<ItemTypeEnum>()
    const [weaponType, setWeaponType] = useState<ItemTypeEnum>()
    const [item, setItem] = useState<Equipment>()
    const [craftEquipment, setCraftEquipment] = useState<CraftEqiupment>()
    const [refineable, setRefineable] = useState<boolean>(false)
    const [itemOption, setItemOption] = useState<{ value: Equipment, label: string }[]>([])
    const [cardOption, setCardOption] = useState<{ value: string, label: string }[]>([])

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
                        value={cardOption.filter(option => option.value === craftEquipment.cardList[index])}
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
                        value={enchantOption.filter(option => option.value === craftEquipment.enchantList[index])}
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
                        value={optionOption.filter(option => option.value === craftEquipment.optionList[index])}
                        classNames={optionStyle}
                        onChange={option => handleOptionChange(option, index)}
                    />
                </div>
            </div>
        )
    })

    console.log("AddItem handleRefineChange start", craftEquipment?.refineLevel)

    function handleTypeChange(option: any) {
        console.log("AddItem handleTypeChange", option.value)
        if (type === option.value) return
        setType(option.value);
        setWeaponType(undefined)
    };

    function handleWeaponTypeChange(option: any) {
        console.log("AddItem handleTypeChange", option.value)
        if (weaponType === option.value) return
        setWeaponType(option.value);
    };

    function handleItemChange(option: any) {
        console.log("AddItem item", option.value)
        setItem(option.value);
    };

    function handleRefineChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("AddItem handleRefineChange", craftEquipment?.id, craftEquipment?.refineLevel)
        if (!craftEquipment) return
        let { value, min, max } = event.target;
        let newValue = checkMinMax(Number(value), Number(min), Number(max));
        setCraftEquipment({ ...craftEquipment, refineLevel: newValue });
    };

    function handleCardChange(option: any, index: number) {
        console.log("AddItem card", index)
        if (!craftEquipment) return
        console.log("AddItem handleRefineChange card", craftEquipment?.refineLevel)
        craftEquipment.cardList[index] = option.value
        setCraftEquipment({ ...craftEquipment });
    };

    function handleEnchantChange(option: any, index: number) {
        console.log("AddItem enchant", index)
        if (!craftEquipment) return
        craftEquipment.enchantList[index] = option.value
        setCraftEquipment({ ...craftEquipment });
    };

    function handleOptionChange(option: any, index: number) {
        console.log("AddItem card", index)
        if (!craftEquipment) return
        craftEquipment.optionList[index] = option.value
        setCraftEquipment({ ...craftEquipment });
    };

    async function saveClick() {
        if (craftEquipment) {
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
            if (context.editItem) {
                const equip = Array.from(context.character.equipmentMap).find(([key, value]) => {
                    return value?.id === context.editItem?.id
                })
                api.deleteItemStorage(context.editItem.id)
                api.addItem(craftEquipment)
                if (equip) {
                    api.equip(craftEquipment)
                }
            } else {
                api.addItem(craftEquipment)
            }
            clearClick()
        }
    }

    async function equipClick() {
        await saveClick()
        if (craftEquipment) {
            api.equip(craftEquipment)
        }
    }

    function clearClick() {
        setType(undefined);
        setWeaponType(undefined)
        setItem(undefined);
        setCraftEquipment(undefined);
        setRefineable(false);
        api.setEditItem(undefined)
        api.setViewItem(undefined)
    }

    useEffect(() => {
        const finalType = weaponType ?? type
        if (finalType === undefined) {
            setItemOption([])
            setCardOption([])
            return
        }
        if (finalType !== craftEquipment?.item?.type) {
            setItem(undefined)
            setRefineable(false)
        }

        const optionList = itemDatabase.filter(item => item.type === finalType).map(item => {
            return { value: item, label: item.name }
        })
        setItemOption(optionList)

        const typeObject = itemTypeList.get(finalType) ?? weaponTypeList.get(finalType)
        const cardOptionList = cardDatabase.filter(item => typeObject?.cardTypeList?.includes(item.type)).map(item => {
            return { value: item.id, label: item.name }
        })
        setCardOption(cardOptionList)
    }, [type, weaponType])

    useEffect(() => {
        console.log("AddItem useEffect item")
        if (!item) return
        const type = itemTypeList.get(item.type) ?? weaponTypeList.get(item.type)
        if (type?.refineable) {
            setRefineable(true)
        }
        if (item.id === craftEquipment?.itemId) return
        setCraftEquipment(new CraftEqiupment(item, 0))
    }, [item])

    useEffect(() => {
        console.log("AddItem useEffect refineLevel", craftEquipment?.refineLevel)
        if (craftEquipment) {
            let refineText = ""
            if (craftEquipment.refineLevel > 0) {
                refineText = `+${craftEquipment.refineLevel} `
            }
            let cardSlotText = ""
            if (craftEquipment.cardList.length > 0) {
                cardSlotText = ` [${craftEquipment.cardList.length}]`
            }
            let optionText = ""
            let fillOptionList = craftEquipment.optionList.flatMap(item => item ?? [])
            if (fillOptionList.length > 0) {
                optionText += ` [${fillOptionList.length}Option]`
            }
            craftEquipment.name = refineText + item?.name + cardSlotText + optionText
            api.setViewItem(craftEquipment)
        }
    }, [craftEquipment])

    useEffect(() => {
        if (context.editItem) {
            console.log("AddItem editItem", context.editItem)
            const type = context.editItem?.item?.type
            if (type) {
                const weaponType = weaponTypeList.get(type)
                if (weaponType) {
                    setType(ItemTypeEnum.Weapon)
                    setWeaponType(type)
                } else {
                    setType(type)
                }
            }
            setItem(context.editItem?.item)
            const copy = { ...context.editItem }
            copy.id = crypto.randomUUID();
            setCraftEquipment(copy)
        }
    }, [context.editItem])

    useEffect(() => {
        if (context.viewState !== ViewState.AddItem && context.viewState !== ViewState.EditItem) {
            clearClick()
        }
    }, [context.viewState])

    console.log("AddItem handleRefineChange ens", craftEquipment?.refineLevel)
    console.log("AddItem", itemOption, craftEquipment?.itemId, itemOption.filter(option => option.value.id === item?.id || option.value.id === craftEquipment?.itemId))

    return (
        <div className="d-flex flex-column h-100 pt-4">
            <Box className="flex-grow-1" title={context.editItem ? "Edit Equipment" : "Craft Equipment"} buttonText="Clear" onClick={clearClick}>
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
                                isDisabled={context.editItem !== undefined}
                            />
                        </div>
                    </div>
                    <div className={"row" + (type === ItemTypeEnum.Weapon ? '' : ' d-none')}>
                        <div className="col-3 jc-center">
                            Weapon Type
                        </div>
                        <div className="col">
                            <Select jc-center
                                options={weaponTypeOption}
                                value={weaponTypeOption.filter(option => option.value === weaponType)}
                                classNames={optionStyle}
                                onChange={handleWeaponTypeChange}
                                isDisabled={context.editItem !== undefined}
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
                                value={itemOption.filter(option => option.value.id === item?.id || option.value.id === craftEquipment?.item?.id)}
                                classNames={optionStyle}
                                onChange={handleItemChange}
                                isDisabled={context.editItem !== undefined}
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
                    <div className={craftEquipment ? 'd-flex justify-content-around mt-4' : ' d-none'} >
                        <button onClick={saveClick}>{context.editItem ? "Done" : "Save"}</button>
                        <button className={context.editItem ? 'd-none' : ''} onClick={equipClick}>Equip</button>
                    </div>
                </div>
            </Box>
        </div>
    )
}