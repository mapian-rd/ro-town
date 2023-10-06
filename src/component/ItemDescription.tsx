import { useContext, useEffect, useState } from "react";
import { enchantDatabase, optionDatabase } from "../data/database/item";
import { ItemDescriptionSearch } from "../data/DividePride";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import { Item, Named } from "../data/model/Itemv2";
import ItemBox from "./ItemBox";

interface Props {
    item1?: Named;
    item2?: Named;
}

export default function ItemDescription(props: Props) {
    console.log("ItemDescription", props.item1, props.item2)
    const [item1, setItem1] = useState<JSX.Element>()
    const [item2, setItem2] = useState<JSX.Element>()
    const [description1, setDescription1] = useState<JSX.Element[]>()
    const [description2, setDescription2] = useState<JSX.Element[]>()
    // const [optionName, setOptionNam

    function getItemBox(item: Named): JSX.Element {
        if (CraftEqiupment.is(item)) {
            const option = item.optionList.flatMap(option => optionDatabase.find(data => {
                return data.id === option
            })?.name ?? [])
            return (
                <ItemBox
                    key={'item1'}
                    imgSrc={`https://www.divine-pride.net/img/items/collection/thROG/${Item.getImgId(item.itemId, item.item?.imgId)}`}
                    title={item.name}
                    description={description1}
                    cardSlot={item.cardList.length}
                    card={item.cardList.flatMap(item => item ?? [])}
                    enchant={item.enchantList.flatMap(option => enchantDatabase.find(data => data.id === option) ?? [])}
                    option={option}
                >
                </ItemBox>
            )
        }
        if (Item.is(item)) {
            return (
                <ItemBox
                    key={'item1'}
                    imgSrc={`https://static.divine-pride.net/images/items/item/${Item.getImgId(item.id, item.imgId)}.png`}
                    title={item.name}
                    description={description1}
                >
                </ItemBox>
            )
        }
        return (<span></span>)
    }

    async function getDescription(item: Named): Promise<JSX.Element[]> {
        console.log("getDescription", item)
        let itemId
        if (CraftEqiupment.is(item)) {
            itemId = item.itemId
        } else if (Item.is(item)) {
            itemId = item.id
        }
        console.log("getDescription", itemId)
        if (itemId) {
            const id = Number.parseInt(itemId)
            console.log("getDescription", id, !isNaN(id))
            if (!isNaN(id)) {
                const description = await ItemDescriptionSearch(id)
                console.log("getDescription", description)
                const match = Array.from(description.matchAll(/\^?(\d{6})?([^^]*)/g))
                const arr = match.map((arr) => {
                    return <span style={{ color: '#' + arr[1] ?? '000000' }}>{arr[2]}</span>
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
            setItem1(getItemBox(props.item1))
            getDescription(props.item1)
                .then(description => setDescription1(description))
        } else {
            setDescription1(undefined)
        }
    }, [props.item1])

    useEffect(() => {
        if (props.item1) {
            setItem1(getItemBox(props.item1))
        } else {
            setItem1(undefined)
        }
    }, [description1])

    useEffect(() => {
        if (props.item2) {
            setItem2(getItemBox(props.item2))
            getDescription(props.item2)
                .then(description => setDescription2(description))
        } else {
            setDescription2(undefined)
        }
    }, [props.item2])

    useEffect(() => {
        if (props.item2) {
            setItem2(getItemBox(props.item2))
        } else {
            setItem2(undefined)
        }
    }, [description2])

    return (
        <div className="h-100 d-flex flex-column">
            <div className={props.item2 ? "h-50" : "h-100"}>
                {item1}
            </div>

            <div className={props.item1 ? "h-50" : "h-100"}>
                {item2}
            </div>
        </div>


    )
}