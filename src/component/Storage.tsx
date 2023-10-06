import { useContext, useEffect, useState } from "react";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext } from "../context/AppContext";
import { Instrument } from "../data/constraint/itemType";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import { ItemTypeEnum, itemTypeList } from "../data/model/itemType";
import { Equipment, Item } from "../data/model/Itemv2";
import classNames from 'classnames';
import Box from "./Box";

const searchDropdownList = Array.from(itemTypeList).map(([key, value]) => {
    return { label: value.name, value: key }
})

export default function Storage() {
    console.log("Storage")
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    const [filterName, setFilterName] = useState<string>()
    const [filterType, setFilterType] = useState<ItemTypeEnum>()
    const [filteredItemList, setFilteredItemList] = useState<CraftEqiupment[]>(context.storage.items)
    const [list, setList] = useState<JSX.Element[]>([])

    function onClick(item: CraftEqiupment) {
        console.log("onClick", item.id)
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

    function onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("ItemBuff onSearchChange")
        let { value } = event.target;
        const lower = value.toLocaleLowerCase()
        setFilterName(lower)
    }

    function handleSearchDropdownChange(option: any) {
        console.log("Storage handleSearchDropdownChange", option)
        if (option) {
            setFilterType(option.value)
        } else {
            setFilterType(undefined)
        }
    }

    useEffect(() => {
        console.log("Storage useEffect", filterName, filterType)
        let itemList = context.storage.items.filter(item => {
            if (filterName) {
                let result = item.name?.toLocaleLowerCase().includes(filterName)
                    || item.id.toString().includes(filterName)
                if (!result) return false
            }
            if (filterType !== undefined) {
                let result = item.item?.type === filterType
                if (!result) return false
            }
            return true
        })
        setFilteredItemList(itemList)
    }, [context.storage, filterName, filterType])

    // context.storage.items
    useEffect(() => {
        console.log("Storage list")
        setList(filteredItemList.map(item => {
            console.log("Storage list", item.id)

            const found = Array.from(context.character.equipmentMap).findIndex(([key, value]) => {
                return value?.id === item.id
            }) !== -1
            console.log("Storage", item, item.id, item.name, context.viewItem)

            return (
                <div className="p-1" key={'storage-' + item.id} onClick={() => onClick(item)}>
                    <div
                        id={'storage-' + item.id}
                        className={(context.viewItem?.id === item.id ? 'row storage-item rounded select-ed' : 'row') + (found ? ' storage-equiped' : '')}
                        draggable
                        onDragStart={event => onDrag(event, item)}>
                        <div className="col-auto">
                            <img className="w-100 my-2" src={`https://static.divine-pride.net/images/items/item/${Item.getImgId(item.itemId, item.item?.imgId)}.png`} alt="Item" />
                        </div>
                        <div className={'col ps-0 d-flex align-items-center text-break'}>
                            {item.name}
                        </div>
                    </div>
                </div>
            )
        }))
    }, [filteredItemList, context.viewItem])

    return (
        <div className="d-flex flex-column flex-grow-1 h-100 mh-0" onDrop={onDrop} onDragOver={allowDrop}>
            <Box className="flex-grow-1 h-100" searchable overflow
                onSearchChange={onSearchChange}
                searchDropdownList={searchDropdownList}
                handleSearchDropdownChange={handleSearchDropdownChange}
            >
                <div className="mh-0" >
                    {list}
                </div>
            </Box >
        </div>

    )
}