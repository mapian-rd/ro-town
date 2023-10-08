import { useContext, useState, useEffect } from "react";
import Select from "react-select";
import { optionStyle } from "../../App";
import { AppApiContext } from "../../context/AppApiContext";
import { AppContext, ViewState } from "../../context/AppContext";
import { attributeList, StatusTypeList } from "../../data/constraint/attributeType";
import { classList } from "../../data/constraint/class";
import { Attribute } from "../../data/model/Attribute";
import { AttributeTypeEnum } from "../../data/model/attributeType";
import { ItemTypeEnum } from "../../data/model/itemType";
import { Item } from "../../data/model/Itemv2";
import { SkillEnum } from "../../data/model/skill";
import Box from "../Box";

const typeOption = Array.from(attributeList).flatMap(([key, value]) => {
    if (value.addAsCustom === false) return []
    return { label: value.name, value: key }
})

const uniqueSkill: Map<SkillEnum, 1> = new Map()

const skillOption = Array.from(classList).flatMap(([key, value]) => value.activeSkill.flatMap(skill => {
    const isAdded = uniqueSkill.get(skill.enum) ?? 0
    if (isAdded === 1) return []
    uniqueSkill.set(skill.enum, 1)
    return { label: skill.name, value: skill.enum }
}))

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
    function handleSkillChange(option: any, index: number) {
        attributes[index].skill = option.value
        setAttributes([...attributes])
    };
    function onChangeValue(event: React.ChangeEvent<HTMLInputElement>, index: number) {
        let { value } = event.target;
        attributes[index].formulaText = value
        setAttributes([...attributes])
    };

    function onAddClick() {
        attributes.push(new Attribute(AttributeTypeEnum.Str))
        setAttributes([...attributes])
    }

    function onDeleteClick(index: number) {
        attributes.splice(index, 1)
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
        let skill
        if (attribute.type === AttributeTypeEnum.SkillDmg) {
            skill = (
                <div className="row">
                    <div className="col-3 jc-center">
                        Skill
                    </div>
                    <div className="col">
                        <Select jc-center
                            options={skillOption}
                            value={skillOption.filter(option => option.value === attribute.skill)}
                            classNames={optionStyle}
                            onChange={event => handleSkillChange(event, index)}
                        />
                    </div>
                </div>
            )
        }
        return (
            <div className="row" key={"attribute-" + index}>
                <div className="col-auto">
                    <button onClick={() => onDeleteClick(index)}>-</button>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-3 jc-center">
                            Type
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
                    {skill}
                    <div className="row mb-2">
                        <div className="col-3 jc-center">
                            Value
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                value={attribute.formulaText}
                                onChange={event => onChangeValue(event, index)}
                            />
                        </div>
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
                    <div className="row mb-2">
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
                    <div className="row mb-2">
                        <div className="col-3 jc-center">
                            Image Id
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