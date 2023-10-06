import { useContext, useEffect, useState } from "react";
import { enchantDatabase, optionDatabase } from "../data/database/item";
import { ItemDescriptionSearch } from "../data/DividePride";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import ItemBox from "./ItemBox";

interface Props {
    item1?: CraftEqiupment;
    item2?: CraftEqiupment;
}

export default function ItemDescription(props: Props) {
    console.log("ItemDescription")
    const [description1, setDescription1] = useState<any[]>()
    const [description2, setDescription2] = useState<any[]>()
    // const [optionName, setOptionNam

    let item1
    let item2
    if (props.item1) {
        console.log("optionView optionList", props.item1.optionList)
        console.log("optionView optionDatabase", optionDatabase)
        const option = props.item1.optionList.flatMap(option => optionDatabase.find(data => {
            console.log("optionView", data.id, option)
            return data.id === option
        })?.name ?? [])
        console.log("optionView", option)
        item1 = (
            <ItemBox
                key={'item1'}
                imgSrc={`https://www.divine-pride.net/img/items/collection/thROG/${props.item1.itemId}`}
                title={props.item1.craftName}
                description={description1}
                cardSlot={props.item1.cardList.length}
                card={props.item1.cardList.flatMap(item => item ?? [])}
                enchant={props.item1.enchantList.flatMap(option => enchantDatabase.find(data => data.id === option) ?? [])}
                option={option}
            >
            </ItemBox>
        )
        // item2 = (
        //     <ItemBox
        //         key={'item1'}
        //         imgSrc={`https://www.divine-pride.net/img/items/collection/thROG/${props.item1.itemId}`}
        //         title={props.item1.craftName}
        //         description={description1}
        //         cardSlot={props.item1.cardList.length}
        //         card={props.item1.cardList.flatMap(item => item ?? [])}
        //         enchant={props.item1.enchantList.flatMap(option => enchantDatabase.find(data => data.id === option) ?? [])}
        //         option={option}
        //     >
        //     </ItemBox>
        // )
    }
    if (props.item2) {
        const option = props.item2.optionList.flatMap(option => optionDatabase.find(data => {
            return data.id === option
        })?.name ?? [])
        item2 = (
            <ItemBox
                key={'item2'}
                imgSrc={`https://www.divine-pride.net/img/items/collection/thROG/${props.item2.itemId}`}
                title={props.item2.craftName}
                description={description2}
                cardSlot={props.item2.cardList.length}
                card={props.item2.cardList.flatMap(item => item ?? [])}
                enchant={props.item2.enchantList.flatMap(option => enchantDatabase.find(data => data.id === option) ?? [])}
                option={option}
            >
            </ItemBox>
        )
    }

    useEffect(() => {
        console.log("useEffect item1")
        if (props.item1) {
            ItemDescriptionSearch(props.item1.itemId)
                .then((description) => {
                    console.log("item1", description)
                    const match = Array.from(description.matchAll(/\^?(\d{6})?([^^]*)/g))
                    console.log("item1", match)
                    const arr = match.map((arr) => {
                        return <span style={{ color: '#' + arr[1] ?? '000000' }}>{arr[2]}</span>
                    })
                    console.log("item1", arr)
                    setDescription1([...arr])
                })
        }
    }, [props.item1])

    useEffect(() => {
        if (props.item2) {
            ItemDescriptionSearch(props.item2.itemId)
                .then((description) => {
                    const match = Array.from(description.matchAll(/\^?(\d{6})?([^^]*)/g))
                    const arr = match.map((arr) => {
                        return <span style={{ color: '#' + arr[1] ?? '000000' }}>{arr[2]}</span>
                    })
                    setDescription2([...arr])
                })
        }
    }, [props.item2])

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