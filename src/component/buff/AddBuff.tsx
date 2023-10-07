import { useContext, useState, useEffect } from "react";
import Select from "react-select";
import { optionStyle } from "../../App";
import { AppApiContext } from "../../context/AppApiContext";
import { AppContext, ViewState } from "../../context/AppContext";
import { attributeList } from "../../data/constraint/attributeType";
import { Attribute } from "../../data/model/Attribute";
import { AttributeTypeEnum } from "../../data/model/attributeType";
import { ItemTypeEnum } from "../../data/model/itemType";
import { Item } from "../../data/model/Itemv2";
import Box from "../Box";

const typeOption = Array.from(attributeList).map(([key, value]) => {
    return { label: value.name, value: key }
})

export default function AddBuff() {
    console.log("AddBuff")

    const api = useContext(AppApiContext);
    const [name, setName] = useState<string>("")
    const [imgId, setImgId] = useState<number>()
    const [attributes, setAttributes] = useState<Attribute[]>([])

    function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
        let { value } = event.target;
        setName(value);
    };

    function onChangeImgId(event: React.ChangeEvent<HTMLInputElement>) {
        let { value } = event.target;
        console.log("onChangeImgId", value)
        if (value === undefined) {
            setImgId(undefined);
        } else {
            console.log("onChangeImgId", Number.parseInt(value))
            setImgId(Number.parseInt(value));
        }
    };

    function handleTypeChange(option: any, index: number) {
        attributes[index].type = option.value
        setAttributes([...attributes])
    };
    function onChangeValue(event: React.ChangeEvent<HTMLInputElement>, index: number) {
        let { value } = event.target;
        attributes[index].formulaText = value
        setAttributes([...attributes])
    };

    function onAddClick() {
        attributes.push(new Attribute(AttributeTypeEnum.Atk))
        setAttributes([...attributes])
    }

    async function saveClick() {
        const item = new Item(crypto.randomUUID(), name, ItemTypeEnum.Buff, attributes)
        item.imgId = imgId
        console.log("saveClick", item)
        api.addBuff(item)
        setName("");
        setImgId(undefined);
        setAttributes([]);
        api.setViewState(ViewState.BuffStorage)
    }

    const attributeComList = attributes.map((attribute, index) => {
        return (
            <div key={"attribute-" + index}>
                <div className="row">
                    <div className="col-3 jc-center">
                        + Type
                    </div>
                    <div className="col">
                        <Select jc-center
                            options={typeOption}
                            value={typeOption.filter(option => option.value === attribute.type)}
                            classNames={optionStyle}
                            onChange={event => handleTypeChange(event, index)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 jc-center">
                        Value
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            value={Number.parseInt(attribute.formulaText)}
                            onChange={event => onChangeValue(event, index)}
                        />
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="d-flex flex-column h-100">
            <div className='d-flex' >
                <button onClick={saveClick}>Save</button>
            </div>
            <Box className="flex-grow-1" title="Add Custom">
                <div>
                    <div className="row">
                        <div className="col-3 jc-center">
                            Name
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                value={name}
                                onChange={onChangeName}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 jc-center">
                            Img Id
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                value={imgId}
                                onChange={onChangeImgId}
                            />
                        </div>
                    </div>
                </div>
                {attributeComList}
                <button onClick={onAddClick}>Add Attribute</button>
            </Box>
        </div>
    )
}