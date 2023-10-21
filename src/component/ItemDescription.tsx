import { useContext, useEffect, useState } from "react";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext, ViewState } from "../context/AppContext";
import { attributeList } from "../data/constraint/attributeType";
import { cardDatabase } from "../data/database/card";
import { enchantDatabase } from "../data/database/enchant";
import { optionDatabase } from "../data/database/option";
import { ItemDescriptionSearch, SkillDescriptionSearch } from "../data/DividePride";
import { AttributeTypeEnum } from "../data/model/attributeType";
import { SkillBuff } from "../data/model/Buff";
import { Character } from "../data/model/Characterv2";
import { checkCraft, CraftEqiupment, sumCraft } from "../data/model/CraftEquipment";
import { calString, DescriptionNumber, FormulaString } from "../data/model/Formula";
import { Item, Named } from "../data/model/Itemv2";
import ItemBox from "./ItemBox";

interface Props {
    item1?: Named;
    item2?: Named;
    character?: Character;
}

export default function ItemDescription(props: Props) {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);
    console.log("ItemDescription", props.item1, props.item2)
    const [item1, setItem1] = useState<JSX.Element>()
    const [item2, setItem2] = useState<JSX.Element>()
    const [description1, setDescription1] = useState<JSX.Element[]>()
    const [description2, setDescription2] = useState<JSX.Element[]>()
    const [attribute1, setAttribute1] = useState<JSX.Element[]>()
    const [attribute2, setAttribute2] = useState<JSX.Element[]>()

    function onClickCard(item: Item, itemId?: string) {
        if (itemId && context.viewItem2 && context.viewItem2?.id === itemId) {
            api.setViewItem(context.viewItem2)
        }
        api.setViewItem2(item)
    }

    function onEditClick(craftId?: string) {
        if (props.item1 && CraftEqiupment.is(props.item1) &&props.item1?.id === craftId) {
            api.setEditItem(props.item1)
            api.setViewState(ViewState.EditItem)
        } else if (props.item2 && CraftEqiupment.is(props.item2) &&props.item2?.id === craftId) {
            api.setEditItem(props.item2)
            api.setViewState(ViewState.EditItem)
        }
    }

    function getItemBox(item: Named, description: JSX.Element[]): JSX.Element {
        if (CraftEqiupment.is(item)) {
            const option = item.optionList.flatMap(option => optionDatabase.find(data => {
                return data.id === option
            }) ?? [])
            return (
                <ItemBox
                    key={item.id}
                    imgSrc={`https://www.divine-pride.net/img/items/collection/thROG/${Item.getImgId(item.itemId, item.item?.imgId)}`}
                    id={item.id}
                    title={item.name}
                    description={description}
                    cardSlot={item.cardList.length}
                    card={item.cardList.flatMap(item => cardDatabase.find(data => data.id === item) ?? [])}
                    enchant={item.enchantList.flatMap(option => enchantDatabase.find(data => data.id === option) ?? [])}
                    option={option}
                    onClickCard={onClickCard}
                    buttonText="Edit"
                    onClick={onEditClick}
                >
                </ItemBox>
            )
        }
        if (Item.is(item)) {
            return (
                <ItemBox
                    key={item.id}
                    imgSrc={`https://www.divine-pride.net/img/items/collection/thROG/${Item.getImgId(item.id, item.imgId)}`}
                    title={item.name}
                    description={description}
                >
                </ItemBox>
            )
        }
        if (SkillBuff.is(item)) {
            return (
                <ItemBox
                    key={item.id}
                    imgSrc={`https://static.divine-pride.net/images/skill/${Item.getImgId(item.id, item.imgId)}.png`}
                    title={item.name}
                    description={description}
                >
                </ItemBox>
            )
        }
        return (<span></span>)
    }

    function getAttribute(item: Named): JSX.Element[] {
        if (CraftEqiupment.is(item)) {
            sumCraft(item)
            let descriptionNumbers = new Map<AttributeTypeEnum, DescriptionNumber>()
            if (props.character) {
                const map = new Map<AttributeTypeEnum, FormulaString[]>()
                const attributeSum = checkCraft(item, props.character)
                attributeSum.forEach(attribute => {
                    const string = new FormulaString(item.id, attribute.formulaText, attribute.name, attribute.max, attribute.skill, item)
                    let old = map.get(attribute.type)
                    if (!old) {
                        old = []
                    }
                    map.set(attribute.type, [...old, string])
                })
                map.forEach((value, key) => {
                    const number = calString(value, props.character!.equipmentMap ?? new Map(), props.character!.status, props.character!.clazz.getSkill(), props.character!.baseLv)
                    descriptionNumbers.set(key, number)
                })
            }
            return Array.from(descriptionNumbers).flatMap(([key, value]) => {
                const attributeItem = attributeList.get(key)
                return <p className="App-link">{attributeItem?.name} = {value.number}</p>
            })
        }
        if (Item.is(item) || SkillBuff.is(item)) {
            return (item.attributeList ?? []).flatMap((attribute) => {
                const attributeItem = attributeList.get(attribute.type)
                return <p className="App-link">{attributeItem?.name} = {attribute.formulaText}</p>
            })
        }
        return []
    }

    async function getDescription(item: Named): Promise<JSX.Element[]> {
        console.log("getDescription", item)
        let itemId
        if (CraftEqiupment.is(item)) {
            itemId = item.itemId
        } else if (Item.is(item) || SkillBuff.is(item)) {
            itemId = item.id
        }
        console.log("getDescription", itemId)
        if (itemId) {
            const id = Number.parseInt(itemId)
            console.log("getDescription", id, !isNaN(id))
            if (!isNaN(id)) {
                let description
                if (CraftEqiupment.is(item) || Item.is(item)) {
                    description = await ItemDescriptionSearch(id)
                } else {
                    description = await SkillDescriptionSearch(id)
                }
                console.log("getDescription", description)
                const match = Array.from(description.matchAll(/\^?(\d{6})?([^^]*)/g))
                const arr = match.map((arr) => {
                    let color = arr[1] ?? '000000'
                    if (color === '000000') {
                        color = 'var(--black)'
                    } else {
                        color = '#' + color
                    }
                    return <span style={{ color: color }}>{arr[2]}</span>
                })
                console.log("getDescription", arr)
                return [...arr]
            }
        }
        return []
    }

    useEffect(() => {
        console.log("useEffect item1")
        if (props.item1) {
            setAttribute1(getAttribute(props.item1))
            setItem1(getItemBox(props.item1, []))
            getDescription(props.item1)
                .then(description => setDescription1(description))
        } else {
            setDescription1(undefined)
        }
    }, [props.item1])

    useEffect(() => {
        if (props.item1) {
            setItem1(getItemBox(props.item1, [...description1 ?? [], ...attribute1 ?? []]))
        } else {
            setItem1(undefined)
        }
    }, [description1, attribute1])

    useEffect(() => {
        if (props.item2) {
            setAttribute2(getAttribute(props.item2))
            setItem2(getItemBox(props.item2, []))
            getDescription(props.item2)
                .then(description => setDescription2(description))
        } else {
            setDescription2(undefined)
        }
    }, [props.item2])

    useEffect(() => {
        if (props.item2) {
            setItem2(getItemBox(props.item2, [...description2 ?? [], ...attribute2 ?? []]))
        } else {
            setItem2(undefined)
        }
    }, [description2])

    return (
        <div className="h-100 d-flex flex-column w-100 mh-0">
            <div className={props.item2 ? "h-50" : "h-100"}>
                {item1}
            </div>

            <div className={props.item1 ? "h-50" : "h-100"}>
                {item2}
            </div>
        </div>


    )
}