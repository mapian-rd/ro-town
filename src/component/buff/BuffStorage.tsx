import { useContext, useEffect, useState } from "react";
import classNames from 'classnames';
import { attributeList } from "../../data/constraint/attributeType";
import { AppContext } from "../../context/AppContext";
import { AppApiContext } from "../../context/AppApiContext";
import { Item, Named } from "../../data/model/Itemv2";
import Box from "../Box";
import { itemBuffDatabase } from "../../data/database/buff";
import { SkillBuff } from "../../data/model/Buff";

interface Props {
    list: Named[];
    storage: Named[];
    addClick: (list: Named[], found: boolean, id: string) => void;
    onClick?: (item: Named) => void;
    viewId?: string;
    onDeleteClick?: (id: string) => void;
}

export default function BuffStorage(props: Props) {
    console.log("BuffStorage", props.list)

    const [filterName, setFilterName] = useState<string>()
    const [filteredItemList, setFilteredItemList] = useState<Named[]>(props.storage)
    const [list, setList] = useState<JSX.Element[]>([])

    function onClick(item: Named) {
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

        let itemList = props.storage
            .filter(item => {
                if (filterName) {
                    let result = item.name?.toLocaleLowerCase().includes(filterName)
                        || item.id.toString().includes(filterName)
                    if (!result) return false
                }
                return true
            })
            .sort((a, b) => {
                console.log("sort list", props.list)
                for (let i = 0; i < props.list.length; i++) {
                    const buff = props.list[i]
                    if (buff.id === a.id) {
                        console.log("found a", buff)
                        return -1
                    }
                    if (buff.id === b.id) {
                        console.log("found b", buff)
                        return 1
                    }
                }
                console.log("found 0", props.list)
                return 0
            })
        setFilteredItemList(itemList)
    }, [filterName, props.storage, props.list])

    useEffect(() => {
        console.log("BuffStorage useEffect")
        setList(filteredItemList.map(item => {

            const found = props.list.findIndex(buff => {
                return buff?.id === item.id
            }) !== -1
            console.log("Storage", found)
              
            let inCommon = true
            let imgSrc
            if (Item.is(item)) {
                const imgId = Item.getImgId(item.id, item.imgId)
                imgSrc = `https://static.divine-pride.net/images/items/item/${imgId}.png`
                inCommon = itemBuffDatabase.findIndex(buff => buff.id === item.id) !== -1
            } else if (SkillBuff.is(item)) {
                const imgId = Item.getImgId(item.id, item.imgId)
                imgSrc = `https://static.divine-pride.net/images/skill/${imgId}.png`
            }
            return (
                <div className="row p-1" key={'buffStorage-' + item.id}>
                    <div className={"col-auto" + (inCommon ? ' d-none' : '')}>
                        <button onClick={() => onDeleteClick(item.id)}>-</button>
                    </div>
                    <div className="col">
                        <div
                            id={'buffStorage-' + item.id}
                            className={(props.viewId === item.id) ? 'row storage-item rounded select-ed' : 'row'}
                        >
                            <div className="col cursor-pointer" onClick={() => onClick(item)}>
                                <div className="row">
                                    <div className="col-auto">
                                        <img className="w-100 my-2" src={imgSrc} alt="Item" />
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