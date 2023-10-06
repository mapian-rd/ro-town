import { useContext, useEffect, useState } from "react";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext } from "../context/AppContext";
import { Instrument } from "../data/constraint/itemType";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import { ItemTypeEnum } from "../data/model/itemType";
import { Equipment } from "../data/model/Itemv2";
import classNames from 'classnames';
import Box from "./Box";

export default function Storage() {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    const [list, setList] = useState<JSX.Element[]>([])

    function onClick(item: CraftEqiupment) {
        console.log("onClick", item.craftId)
        api.setViewItem(item)
    }

    function onEquip(item: CraftEqiupment) {
        api.equip(item)
    }

    function onDrag(event: React.DragEvent<HTMLDivElement>, item: CraftEqiupment) {
        console.log("onDrag", item)
        api.setDragItem(item)
    }

    function onDrop(event: React.DragEvent<HTMLDivElement>) {
        console.log("onDrop")
        event.preventDefault();
        if (context.dragItem) {
            api.unequip(context.dragItem)
            context.dragItem = undefined
        }
    }

    function allowDrop(event: React.DragEvent<HTMLDivElement>) {
        console.log("allowDrop")
        event.preventDefault();
    }

    // context.storage.items
    useEffect(() => {
        setList(context.storage.items.map(item => {
            console.log("list", item.craftId)

            const found = Array.from(context.character.equipmentMap).findIndex(([key, value]) => {
                return value?.craftId === item.craftId
            }) !== -1
            console.log("Storage", found)

            return (
                <div className="p-1" key={'storage' + item.craftId} onClick={() => onClick(item)}>
                    <div
                        id={'storage' + item.craftId}
                        className={(context.viewItem?.craftId === item.craftId ? 'row storage-item rounded select-ed' : 'row') + (found ? ' storage-equiped' : '')}
                        draggable
                        onDragStart={event => onDrag(event, item)}>
                        <div className="col-auto">
                            <img className="w-100 my-2" src={`https://static.divine-pride.net/images/items/item/${item.itemId}.png`} alt="Item" />
                        </div>
                        <div className={'col ps-0 d-flex align-items-center text-break'}>
                            {item.craftName}
                        </div>
                    </div>
                </div>
            )
        }))
    }, [context.storage])

    return (
        <div className="d-flex flex-column flex-grow-1 h-100 mh-0" onDrop={onDrop} onDragOver={allowDrop}>
            <Box className="flex-grow-1 h-100" searchable overflow>
                <div className="mh-0" >
                    {list}
                </div>
            </Box >
        </div>

    )
}