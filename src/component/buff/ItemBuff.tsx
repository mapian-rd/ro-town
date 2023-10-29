import React, { useContext, useEffect, useState } from "react";
import { Named } from "../../data/model/Itemv2";
import Box from "../Box";

interface Buff {
    id: string;
    name: string;
    imgSrc?: string;
    isActive: boolean;
    activeLv?: number;
    maxLv?: number;
    suffix?: string[];
}

interface Props {
    title: string;
    list: Buff[];
    buttonText?: string;
    onClick?: () => void;
    handleBuffChange?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void
    handleLvChange?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => number
    onClickBuff: (id: string) => void;
}

export default function ItemBuff(props: Props) {
    console.log("ItemBuff", props.list)
    const [filterName, setFilterName] = useState<string>()
    const [filteredItemList, setFilteredItemList] = useState<Buff[]>(props.list)

    const itemComList = filteredItemList.map(item => {
        let suffix = ""
        if (item.maxLv && item.maxLv > 1) {
            if (item.suffix) {
                suffix = item.suffix[(item.activeLv ?? 1) - 1]
            } else {
                suffix = "Lv." + item.activeLv ?? 1
            }
        }
        return (
            <div className="row p-1 mx-0" key={'buff-' + item.id} id={'buff-' + item.id}>
                <div className="col cursor-pointer" onClick={() => props.onClickBuff(item.id)}>
                    <div className="row">
                        <div className="col-auto ps-0">
                            <img className="w-100 my-2" src={item.imgSrc} alt="Item" />
                        </div>
                        <div className={'col px-0 d-flex align-items-center text-break'}>
                            {item.name} {suffix}
                        </div>
                    </div>
                </div>
                <div className={'col-auto d-flex' + (item.maxLv ? '' : ' d-none')}>
                    <span className="me-1 jc-center"></span>
                    <input
                        type="number"
                        min="1"
                        max={item.maxLv}
                        defaultValue={item.activeLv}
                        onChange={event => props.handleLvChange ? props.handleLvChange(event, item.id) : undefined}
                        onBlur={event => {
                            if (props.handleLvChange) {
                                const result = props.handleLvChange(event, item.id)
                                event.target.value = result.toString()
                            }
                        }}
                    />
                </div>
                <div className='col-auto jc-center px-0'>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id={"switch-" + item.id}
                            onChange={(event) => props.handleBuffChange ? props.handleBuffChange(event, item.id) : undefined}
                            defaultChecked={item.isActive}
                        />
                    </div>
                </div>
            </div>
        )
    })

    function onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log("ItemBuff onSearchChange")
        let { value } = event.target;
        const lower = value.toLocaleLowerCase()
        setFilterName(lower)

    }

    useEffect(() => {
        let itemList = props.list
            .filter(item => {
                if (filterName) {
                    let result = item.name?.toLocaleLowerCase().includes(filterName)
                        || item.id.toString().includes(filterName)
                    if (!result) return false
                }
                return true
            })
        // .sort((a, b) => {
        //     if (a.isActive) return -1
        //     if (b.isActive) return 1
        //     return 0
        // })
        setFilteredItemList(itemList)
    }, [filterName, props.list])

    return (
        <Box
            className="h-100"
            title={props.title}
            buttonText={props.onClick ? "Add" : undefined}
            onClick={props.onClick}
            onSearchChange={onSearchChange}
            searchable
            overflow
        >
            <div className="mh-0">
                {itemComList}
            </div>
        </Box>
    )
}