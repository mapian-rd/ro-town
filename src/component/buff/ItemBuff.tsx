import React, { useContext, useEffect, useState } from "react";
import Box from "../Box";

interface Buff {
    id: string;
    name: string;
    imgSrc?: string;
    isActive: boolean;
}

interface Props {
    title: string;
    list: Buff[];
    buttonText?: string;
    onClick?: () => void;
    handleBuffChange?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void
}

export default function ItemBuff(props: Props) {
    console.log("ItemBuff", props.list)
    const [filterName, setFilterName] = useState<string>()
    const [filteredItemList, setFilteredItemList] = useState<Buff[]>(props.list)

    const itemComList = filteredItemList.map(item => {
        return (
            <div className="row p-1" key={'buff-' + item.id}>
                <div className="col-auto">
                    <img className="w-100 my-2" src={item.imgSrc} alt="Item" />
                </div>
                <div className={'col ps-0 d-flex align-items-center text-break'}>
                    {item.name}
                </div>
                <div className={'col-auto'}>
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
        let itemList = props.list.filter(item => {
            if (filterName) {
                let result = item.name?.toLocaleLowerCase().includes(filterName)
                    || item.id.toString().includes(filterName)
                if (!result) return false
            }
            return true
        })
        setFilteredItemList(itemList)
    }, [filterName, props.list])

    return (
        <Box
            className="h-100"
            title={props.title}
            buttonText={props.onClick ? "Edit" : undefined}
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