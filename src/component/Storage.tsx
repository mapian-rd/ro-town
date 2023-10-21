import { createRef, useContext, useEffect, useRef, useState } from "react";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext, ViewState } from "../context/AppContext";
import { CraftEqiupment } from "../data/model/CraftEquipment";
import { ItemTypeEnum } from "../data/model/itemType";
import { Item } from "../data/model/Itemv2";
import Box from "./Box";
import { MdDelete } from "react-icons/md";
import { itemTypeList, weaponTypeList } from "../data/constraint/itemType";

const searchDropdownList = [...Array.from(weaponTypeList), ...Array.from(itemTypeList)].flatMap(([key, value]) => {
    if (key === ItemTypeEnum.Weapon) return []
    return { label: value.name, value: key }
})

let scrollToLast = false

export default function Storage() {
    console.log("Storage")
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);
    const lastItemRef = useRef<HTMLDivElement | null>(null);

    const [filterName, setFilterName] = useState<string>()
    const [filterType, setFilterType] = useState<ItemTypeEnum>()
    const [filteredItemList, setFilteredItemList] = useState<CraftEqiupment[]>(context.storage.items)
    const [list, setList] = useState<JSX.Element[]>([])
    const [refMap, setRefMap] = useState<Map<string, React.RefObject<HTMLDivElement>>>(new Map())

    function onClick(item: CraftEqiupment) {
        console.log("onClick", item.id)
        if (context.viewState === ViewState.AddItem) {
            api.setViewItem2(item)
        } else {
            api.setViewItem(item)
        }
    }

    function onEquip(found: boolean, item: CraftEqiupment) {
        if (found) {
            api.unequip(item)
        } else {
            api.equip(item)
        }
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

    function onDeleteClick(id: string) {
        api.deleteItemStorage(id)
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

    useEffect(() => {
        scrollToLast = true
    }, [context.storage])

    // context.storage.items
    useEffect(() => {
        console.log("Storage list")
        setList(filteredItemList.map(item => {
            const itemRef = createRef<HTMLDivElement>();
            refMap.set(item.id, itemRef)

            console.log("Storage list", item.id)

            const found = Array.from(context.character.equipmentMap).findIndex(([key, value]) => {
                return value?.id === item.id
            }) !== -1
            console.log("Storage", item, item.id, item.name, context.viewItem)

            return (
                <div className={"row p-1" + (found ? ' storage-equiped' : '')} key={'storage-' + item.id} ref={itemRef}>
                    <div className="col-auto p-0">
                        <button className="h-100" onClick={() => onDeleteClick(item.id)}><MdDelete /></button>
                    </div>
                    <div className="col">
                        <div
                            id={'storage-' + item.id}
                            className={'row cursor-pointer' + (context.viewItem?.id === item.id ? ' storage-item rounded select-ed' : '')}
                            draggable
                            onClick={() => onClick(item)}
                            onDragStart={event => onDrag(event, item)}>
                            <div className="col-auto">
                                <img className="w-100 my-2" src={`https://static.divine-pride.net/images/items/item/${Item.getImgId(item.itemId, item.item?.imgId)}.png`} alt="Item" />
                            </div>
                            <div className={'col ps-0 d-flex align-items-center text-break'}>
                                {item.name}
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button
                            className={"h-100 storage-button" + (found ? ' storage-equiped' : '')}
                            onClick={() => onEquip(found, item)}
                        >
                            {found ? "Unequip" : "Equip"}
                        </button>
                    </div>
                </div>
            )
        }))
    }, [filteredItemList, context.character])

    useEffect(() => {
        if (scrollToLast && lastItemRef) {
            lastItemRef?.current?.scrollIntoView()
            scrollToLast = false
        }
    }, [list])

    useEffect(() => {
        if (context.viewItem) {
            const ref = refMap.get(context.viewItem.id)
            ref?.current?.scrollIntoView()
        }
    }, [context.viewItem])

    return (
        <div className="d-flex flex-column flex-grow-1 h-100 mh-0" onDrop={onDrop} onDragOver={allowDrop}>
            <Box className="flex-grow-1 h-100" searchable overflow
                onSearchChange={onSearchChange}
                searchDropdownList={searchDropdownList}
                handleSearchDropdownChange={handleSearchDropdownChange}
            >
                <div className={"position-relative top-50 start-50 translate-middle text-center" + (list.length > 0 ? ' d-none' : '')}>
                    <h5>Nothing here?</h5>
                    <p>Feel free to create your item</p>
                    <p>{"on the right side  ------->"}</p>
                </div>
                <div className={"mh-0" + (list.length > 0 ? '' : ' d-none')} >
                    {list}
                    <div ref={lastItemRef}></div>
                </div>
            </Box >
        </div>

    )
}