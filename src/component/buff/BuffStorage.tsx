import { useContext, useEffect, useState } from "react";
import classNames from 'classnames';
import { attributeList } from "../../data/constraint/attributeType";
import { AppContext } from "../../context/AppContext";
import { AppApiContext } from "../../context/AppApiContext";
import { Item } from "../../data/model/Itemv2";
import Box from "../Box";
import { itemBuffDatabase } from "../../data/database/buff";

interface Props {
    list: Item[];
    storage: Item[];
    addClick: (list: Item[], found: boolean, id: string) => void;
    onClick?: (item: Item) => void;
    viewId?: string;
    onDeleteClick?: (id: string) => void;
}

export default function BuffStorage(props: Props) {
    console.log("BuffStorage", props.list)

    const [filterName, setFilterName] = useState<string>()
    const [filteredItemList, setFilteredItemList] = useState<Item[]>(props.storage)
    const [list, setList] = useState<JSX.Element[]>([])

    function onClick(item: Item) {
        if (props.onClick) {
            props.onClick(item)
        }
    }

    function onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("ItemBuff onSearchChange")
        let { value } = event.target;
        const lower = value.toLocaleLowerCase()
        setFilterName(lower)
    }
    
    function onDeleteClick(id: string) {
        if (props.onDeleteClick) {
            props.onDeleteClick(id)
        }
    }

    useEffect(() => {
        console.log("Storage useEffect", filterName)

        let itemList = props.storage.filter(item => {
            if (filterName) {
                let result = item.name?.toLocaleLowerCase().includes(filterName)
                    || item.id.toString().includes(filterName)
                if (!result) return false
            }
            return true
        })
        setFilteredItemList(itemList)
    }, [filterName, props.storage])

    useEffect(() => {
        console.log("BuffStorage useEffect")
        setList(filteredItemList.map(item => {

            const found = props.list.findIndex(buff => {
                return buff?.id === item.id
            }) !== -1
            console.log("Storage", found)

            return (
                <div className="row p-1" key={'buffStorage-' + item.id}>
                    <div className="col-auto">
                        <button onClick={() => onDeleteClick(item.id)}>-</button>
                    </div>
                    <div className="col">
                        <div
                            id={'buffStorage-' + item.id}
                            className={(props.viewId === item.id) ? 'row storage-item rounded select-ed' : 'row'}
                        >
                            <div className="col" onClick={() => onClick(item)}>
                                <div className="row">
                                    <div className="col-auto">
                                        <img className="w-100 my-2" src={`https://static.divine-pride.net/images/items/item/${Item.getImgId(item.id, item.imgId)}.png`} alt="Item" />
                                    </div>
                                    <div className='col ps-0 d-flex align-items-center text-break'>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button
                                    className="h-100"
                                    onClick={() => props.addClick(props.list, found, item.id)}
                                >
                                    {found ? "Remove" : "Add"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }))
    }, [filteredItemList, props, props.list])

    return (
        <div className="d-flex flex-column flex-grow-1 h-100 mh-0">
            <Box className="flex-grow-1 h-100" searchable overflow title="Buff Storage"
                onSearchChange={onSearchChange}
            >
                <div className="mh-0" >
                    {list}
                </div>
            </Box >
        </div>

    )
}