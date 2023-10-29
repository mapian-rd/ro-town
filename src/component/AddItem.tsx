import { useContext, useState, useEffect } from "react";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext, ViewState } from "../context/AppContext";
import Box from "./Box";
import Select from "react-select";
import { EquipableType, ItemTypeEnum } from "../data/model/itemType";
import { optionStyle } from "../App";
import { Equipment, Item } from "../data/model/Itemv2";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import { checkMinMax } from "../common/extension";
import { CardPrefixSearch } from "../data/DividePride";
import { cardDatabase } from "../data/database/card";
import { enchantDatabase } from "../data/database/enchant";
import { itemDatabase } from "../data/database/item";
import { optionDatabase } from "../data/database/option";
import { costumeEnchantTypeList, itemTypeList, weaponTypeList } from "../data/constraint/itemType";

export default function AddItem() {
    console.log("AddItem")

    const context = useContext(AppContext);
    const api = useContext(AppApiContext);
    const [type, setType] = useState<ItemTypeEnum>()
    const [weaponType, setWeaponType] = useState<ItemTypeEnum>()
    const [item, setItem] = useState<Equipment>()
    const [craftEquipment, setCraftEquipment] = useState<CraftEqiupment>()
    const [refineable, setRefineable] = useState<boolean>(false)
    const [refineMax, setRefineMax] = useState<number>(20)
    const [typeList, setTypeList] = useState<Map<ItemTypeEnum, EquipableType>>(itemTypeList)
    const [typeOption, setTypeOption] = useState<{ value: ItemTypeEnum, label: string }[]>([])
    const [weaponTypeOption, setWeaponTypeOption] = useState<{ value: ItemTypeEnum, label: string }[]>([])
    const [itemOption, setItemOption] = useState<{ value: Equipment, label: any }[]>([])
    const [cardOption, setCardOption] = useState<{ value: Item, label: string }[]>([])
    const [enchantOption, setEnchantOption] = useState<{ value: Item, label: string }[]>([])
    const [optionOption, setOptionOption] = useState<{ value: string, label: string }[]>([])

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
                        value={cardOption.filter(option => option.value.id === craftEquipment.cardList[index])}
                        classNames={optionStyle}
                        onChange={option => handleCardChange(option, index)}
                        isClearable
                    />
                </div>
            </div>
        )
    })

    const enchantView = craftEquipment?.enchantList.map((item, index) => {
        let title = "Enchant " + (index + 1)
        let optionFilter = enchantOption
        if (type !== undefined) {
            const itemType = itemTypeList.get(type)
            if (itemType?.enchantSlotList !== undefined) {
                if (itemType.enchantSlotList.length > index) {
                    const slot = itemType.enchantSlotList[index]
                    optionFilter = enchantOption.filter(item => item.value.type === slot)
                    const enchant = costumeEnchantTypeList.get(slot)
                    if (enchant !== undefined) {
                        title = enchant.name
                    } else {
                        title = slot
                    }
                }
            }
        }
        return (
            <div className="row" key={`enchant-${index}`}>
                <div className="col-3 jc-center">
                    {title}
                </div>
                <div className="col">
                    <Select jc-center
                        options={optionFilter}
                        value={enchantOption.filter(option => option.value.id === craftEquipment.enchantList[index])}
                        classNames={optionStyle}
                        onChange={option => handleEnchantChange(option, index)}
                        isClearable
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
                        isClearable
                    />
                </div>
            </div>
        )
    })

    function handleTypeChange(option: any) {
        console.log("AddItem handleTypeChange", option.value)
        if (type === option.value) return
        console.log("AddItem handleTypeChange setType", option.value)
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

    function handleRefineChange(event: React.ChangeEvent<HTMLInputElement>): number {
        console.log("AddItem handleRefineChange", craftEquipment?.id, craftEquipment?.refineLevel)
        if (!craftEquipment) return 0
        let { value, min, max } = event.target;
        let newValue = checkMinMax(Number(value), Number(min), Number(max));
        setCraftEquipment({ ...craftEquipment, refineLevel: newValue });
        return newValue
    };

    function handleCardChange(option: any, index: number) {
        if (!craftEquipment) return
        if (option) {
            craftEquipment.cardList[index] = option.value.id
        } else {
            craftEquipment.cardList[index] = undefined
        }
        setCraftEquipment({ ...craftEquipment });
    };

    function handleEnchantChange(option: any, index: number) {
        if (!craftEquipment) return
        if (option) {
            craftEquipment.enchantList[index] = option.value.id
        } else {
            craftEquipment.enchantList[index] = undefined
        }
        setCraftEquipment({ ...craftEquipment });
    };

    function handleOptionChange(option: any, index: number) {
        if (!craftEquipment) return
        if (option) {
            craftEquipment.optionList[index] = option.value
        } else {
            craftEquipment.optionList[index] = undefined
        }
        setCraftEquipment({ ...craftEquipment });
    };

    async function saveClick(setCardText: boolean = true) {
        if (craftEquipment) {
            let refineText = ""
            if (craftEquipment.refineLevel > 0) {
                refineText = `+${craftEquipment.refineLevel} `
            }

            let cardText = ""
            if (setCardText) {
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
                if (context.viewState === ViewState.ChangeItem) {
                    api.setEditItem(craftEquipment)
                }
            }

            if (context.viewState !== ViewState.ChangeItem) {
                clearClick()
            }
        }
    }

    async function equipClick() {
        let setCardText = true
        if (context.viewState === ViewState.ChangeItem) {
            setCardText = false
        }
        await saveClick(setCardText)
        if (craftEquipment) {
            api.equip(craftEquipment)
        }
        console.log("equipClick", craftEquipment?.refineLevel, context.viewState)
    }

    function clearClick() {
        clearUI()
        api.setEditItem(undefined)
        api.setViewItem(undefined)
        if (context.viewState === ViewState.ChangeItem) {
            if (craftEquipment) {
                api.deleteItemStorage(craftEquipment.id)
            }
        } else {
            console.log("clearClick setType", undefined)
            setType(undefined)
        }

        if (context.mode === "storage") {
            api.setViewState(ViewState.Storage)
        }
    }

    function clearUI() {
        setWeaponType(undefined)
        setItem(undefined);
        setCraftEquipment(undefined);
        setRefineable(false);
        if (context.changeSlot === undefined) {
            console.log("clearUI setType", undefined)
            setType(undefined)
        }
    }

    function clearAll() {
        clearUI()
        api.setEditItem(undefined)
        api.setViewItem(undefined)
        api.setChangeSlot(undefined)
    }

    useEffect(() => {
        const option = Array.from(typeList).map(([key, value]) => {
            return { value: key, label: value.name }
        })
        setTypeOption(option)
    }, [typeList])

    useEffect(() => {
        setWeaponTypeOption(Array.from(weaponTypeList)
            .filter(([key, value]) => context.character.clazz.weaponType.includes(key))
            .map(([key, value]) => {
                return { value: key, label: value.name }
            })
        )
    }, [context.character.clazz.enum])

    useEffect(() => {
        if (context.editItem?.item) {
            if (typeOption.find((item) => item.value === context.editItem?.item?.type)) {
                console.log("context.editItem?.item setType", context.editItem.item?.type)
                setType(context.editItem.item?.type)
            } else {
                console.log("Weapon setType", ItemTypeEnum.Weapon)
                setType(ItemTypeEnum.Weapon)
            }
        } else if (typeOption.length > 0 && context.mode === "single") {
            console.log("typeOption first setType", typeOption[0].value)
            setType(typeOption[0].value)
        }
    }, [typeOption, context.editItem])

    useEffect(() => {
        const finalType = weaponType ?? type
        console.log("setItemOption", finalType)
        if (finalType === undefined) {
            setItemOption([])
            setCardOption([])
            setEnchantOption([])
            return
        }
        if (finalType !== craftEquipment?.item?.type) {
            console.log("setItemOption setCraftEquipment undefined", craftEquipment?.item?.type)
            setCraftEquipment(undefined)
            setItem(undefined)
            setRefineable(false)
        }

        const optionList = itemDatabase.filter(item => item.type === finalType).map(item => {
            return { value: item, label: <div><img className="me-1" src={`https://static.divine-pride.net/images/items/item/${Item.getImgId(item.id, item.imgId)}.png`} />{item.name}</div> }
        })
        setItemOption(optionList)

        const typeObject = itemTypeList.get(finalType) ?? weaponTypeList.get(finalType)
        const cardOptionList = cardDatabase.filter(item => typeObject?.cardTypeList?.includes(item.type)).map(item => {
            return { value: item, label: item.name }
        })
        setCardOption(cardOptionList)
    }, [type, weaponType])

    useEffect(() => {
        if (!item) {
            return
        }
        let enchants: Item[]
        let options: Item[]
        if (item.enchantSpecified) {
            enchants = item.enchantSpecified.flatMap(id => {
                return enchantDatabase.find(item => item.id === id) ?? []
            })
        } else {
            enchants = enchantDatabase
        }
        if (item.optionSpecified) {
            options = item.optionSpecified.flatMap(id => {
                return optionDatabase.find(item => item.id === id) ?? []
            })
        } else {
            options = optionDatabase
        }

        const enchantOption = enchants
            .filter(enchant => {
                return Item.checkSpecifed(item.id, context.character.clazz.enum, enchant.specified)
            })
            .map(enchant => {
                return { value: enchant, label: enchant.name }
            })
        const optionOption = options
            .filter(option => {
                return Item.checkSpecifed(item.id, context.character.clazz.enum, option.specified)
            })
            .map(option => {
                return { value: option.id, label: option.name }
            })
        setEnchantOption(enchantOption)
        setOptionOption(optionOption)
    }, [context.character.clazz.enum, item])

    useEffect(() => {
        console.log("AddItem useEffect item")
        if (!item) return
        const type = itemTypeList.get(item.type) ?? weaponTypeList.get(item.type)
        setRefineable(type?.refineable ?? false)
        setRefineMax(type?.refineMax ?? 20)
        if (item.id === craftEquipment?.itemId) return
        setCraftEquipment(new CraftEqiupment(item, 0))
        if (context.viewState === ViewState.Storage) {
            api.setViewState(ViewState.AddItem)
        }
    }, [item])

    useEffect(() => {
        console.log("AddItem useEffect refineLevel", craftEquipment?.refineLevel, context.viewState)
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

            if (context.viewState === ViewState.ChangeItem) {
                equipClick()
            }
        }
    }, [craftEquipment])

    useEffect(() => {
        console.log("AddItem editItem", context.editItem, context.changeSlot)
        if (context.editItem) {
            const type = context.editItem?.item?.type
            if (type) {
                const weaponType = weaponTypeList.get(type)
                if (weaponType) {
                    console.log("Weapon setType", ItemTypeEnum.Weapon)
                    setType(ItemTypeEnum.Weapon)
                    setWeaponType(type)
                } else {
                    console.log("type setType", type)
                    setType(type)
                    setWeaponType(undefined)
                }
            }
            setItem(context.editItem?.item)
            if (context.changeSlot === undefined) {
                const copy: CraftEqiupment = structuredClone(context.editItem)
                copy.id = crypto.randomUUID();
                setCraftEquipment(copy)
            } else {
                setCraftEquipment(context.editItem)
            }
        } else {
            clearUI()
        }
    }, [context.editItem, context.changeSlot])

    useEffect(() => {
        if (type !== undefined) {
            if (!context.viewState.includes("Item-")) {
                clearAll()
            }
        }
    }, [context.viewState])

    useEffect(() => {
        if (context.changeSlot !== undefined) {
            const types = new Map(Array.from(itemTypeList).filter(([key, value]) => {
                return value.equipSlot?.includes(context.changeSlot!)
            }))
            if (types.size > 0) {
                setTypeList(types)
            } else {
                const weapon = itemTypeList.get(ItemTypeEnum.Weapon)
                if (weapon) {
                    setTypeList(new Map<ItemTypeEnum, EquipableType>([[ItemTypeEnum.Weapon, weapon]]))
                }
            }
        }
    }, [context.changeSlot])

    return (
        <div className="d-flex flex-column h-100">
            <div className={'row' + (context.mode === "storage" ? ' pt-4' : '')}>
                <div className={'col' + (context.mode === "storage" ? ' d-none' : '')}>
                    <button onClick={() => api.setViewState(ViewState.Normal)}>Back</button>
                </div>
            </div>
            <Box
                className="flex-grow-1"
                title={context.viewState === ViewState.EditItem ? "Edit Equipment" : "Craft Equipment"}
                buttonText={context.viewState === ViewState.ChangeItem ? "Remove" : "Clear"}
                onClick={clearClick}
            >
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
                                isDisabled={context.viewState === ViewState.EditItem}
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
                                isDisabled={context.viewState === ViewState.EditItem}
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
                                isDisabled={context.viewState === ViewState.EditItem}
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
                                max={refineMax}
                                onChange={handleRefineChange}
                            />
                        </div>
                    </div>
                    {cardView}
                    {enchantView}
                    {optionView}
                    <div className={craftEquipment ? 'd-flex justify-content-around mt-4' : ' d-none'} >
                        <button onClick={() => saveClick()} className={context.mode === "single" ? 'd-none' : ''}>{context.viewState === ViewState.EditItem ? "Done" : "Save"}</button>
                        <button className={context.viewState === ViewState.AddItem ? '' : 'd-none'} onClick={equipClick}>Equip</button>
                    </div>
                </div>
            </Box>
        </div>
    )
}