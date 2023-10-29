import React, { useContext, useState, useEffect, useRef, ChangeEvent } from 'react';
import { attributeList, importantAttributeList, magicalAttributeList, otherAttributeList, physicalAttributeList, StatusTypeList } from "../data/constraint/attributeType";
import { AttributeTypeEnum } from "../data/model/attributeType";
import { DescriptionNumber } from "../data/model/Formula";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Box from "./Box";
import { MdInfoOutline } from "react-icons/md";
import { Tooltip } from "react-bootstrap";
import { SkillEnum } from "../data/model/skill";
import { SizePenalty } from "../data/model/itemType";

interface MoreStatusProps {
    final: Map<AttributeTypeEnum, DescriptionNumber>,
    skillDmg: Map<SkillEnum, DescriptionNumber>,
    baseSkillDmg: Map<SkillEnum, DescriptionNumber>,
    vct: Map<SkillEnum, DescriptionNumber>,
    allVct: DescriptionNumber,
    vct530: DescriptionNumber,
    cooldown: Map<SkillEnum, DescriptionNumber>,
    fct: DescriptionNumber,
    fctP: DescriptionNumber,
    sizePanalty: SizePenalty,
}

function getItem(number: DescriptionNumber, name: string, key: string, minimum: number = 0) {
    const min = number?.min
    const max = number?.max
    let text = number?.number.toFixed(2).replace(/[.,]00$/, "");
    if (min && max) {
        text = `${min}~${max}`
    }
    if (number?.number < minimum && number?.number >= 0) return null
    return (
        <div className="row" key={key}>
            <div className="col">
                {name}
            </div>
            <div className="col-auto text-end">
                {text}
            </div>
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>{number?.description}</Tooltip>}
            >
                {({ ref, ...triggerHandler }) => (
                    <div className="col-auto" ref={ref} {...triggerHandler}>
                        <MdInfoOutline />
                    </div>
                )}
            </OverlayTrigger>
        </div>
    )
}

export default function MoreStatus(prop: MoreStatusProps) {
    console.log("MoreStatus", prop.final)

    const [isAll, setIsAll] = useState<boolean>(false)

    const statusList = Array.from(StatusTypeList).map(([key, value]) => {
        const final = prop.final.get(key)
        if (!final) return null
        return getItem(final, value.name, key.toString(), isAll ? 0 : 1)
    })
    const physicalAttributeComList = Array.from(physicalAttributeList).map(([key, value]) => {
        const final = prop.final.get(key)
        if (!final) return null
        return getItem(final, value.name, key.toString(), isAll ? 0 : 1)
    })
    const magicalAttributeComList = Array.from(magicalAttributeList).map(([key, value]) => {
        const final = prop.final.get(key)
        if (!final) return null
        return getItem(final, value.name, key.toString(), isAll ? 0 : 1)
    })
    const otherAttributeComList = Array.from(otherAttributeList).map(([key, value]) => {
        const final = prop.final.get(key)
        if (!final) return null
        return getItem(final, value.name, key.toString(), isAll ? 0 : 1)
    })
    const importantAttributeComList = Array.from(importantAttributeList).map(([key, value]) => {
        const final = prop.final.get(key)
        if (!final) return null
        return getItem(final, value.name, key.toString(), isAll ? 0 : 1)
    })

    const baseSkillDmgList = Array.from(prop.baseSkillDmg).map(([key, value]) => {
        return getItem(value, value.name ?? key.toString(), key.toString(), isAll ? 0 : 1)
    })

    const skillDmgList = Array.from(prop.skillDmg).map(([key, value]) => {
        return getItem(value, value.name ?? key.toString(), key.toString(), isAll ? 0 : 1)
    })
    const vct530 = getItem(prop.vct530, prop.vct530.name ?? "530", "vct530", isAll ? 0 : 1)
    const allVct = getItem(prop.allVct, prop.allVct.name ?? "all", "allVct", isAll ? 0 : 1)

    const vct = Array.from(prop.vct).map(([key, value]) => {
        return getItem(value, value.name ?? key.toString(), key.toString(), isAll ? 0 : 1)
    })


    const fct = getItem(prop.fct, prop.fct.name ?? "Fixed", "fct")
    const fctP = getItem(prop.fctP, prop.fctP.name ?? "Percent", "fctP", isAll ? 0 : 1)

    const cooldown = Array.from(prop.cooldown).map(([key, value]) => {
        return getItem(value, value.name ?? key.toString(), key.toString(), isAll ? 0 : 1)
    })

    function onAllClick() {
        setIsAll(!isAll)
    }

    return (
        <Box title="Status Infomation" className="h-100 mh-0" overflow buttonText={isAll ? "Show Minimal" : "Show All"} onClick={onAllClick}>
            <div className="mh-0" >
                <div className={isAll ? '' : 'd-none'}>
                    <div className="row mt-2">
                        <div className="col status-name">
                            Status
                        </div>
                    </div>
                    {statusList}
                </div>
                <div className={isAll ? '' : 'd-none'}>
                    <div className="row mt-2">
                        <div className="col status-name">
                            -
                        </div>
                    </div>
                    {otherAttributeComList}
                </div>
                {importantAttributeComList}
                <div className="row mt-2">
                    <div className="col status-name">
                        Size Penalty
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Small
                    </div>
                    <div className="col-auto text-end">
                        {prop.sizePanalty.small}%
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Medium
                    </div>
                    <div className="col-auto text-end">
                        {prop.sizePanalty.medium}%
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Large
                    </div>
                    <div className="col-auto text-end">
                        {prop.sizePanalty.large}%
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col status-name">
                        Base Skill Percent Dmg
                    </div>
                </div>
                {baseSkillDmgList}
                <div className="row mt-2">
                    <div className="col status-name">
                        Skill Dmg
                    </div>
                </div>
                {skillDmgList}
                <div className="row mt-2">
                    <div className="col status-name">
                        Vct
                    </div>
                </div>
                {vct530}
                {allVct}
                {vct}
                <div className="row mt-2">
                    <div className="col status-name">
                        Fct
                    </div>
                </div>
                {fct}
                {fctP}
                <div className="row mt-2">
                    <div className="col status-name">
                        Cooldown
                    </div>
                </div>
                {cooldown}
                <div className="row mt-2">
                    <div className="col status-name">
                        Physical
                    </div>
                </div>
                {physicalAttributeComList}
                <div className="row mt-2">
                    <div className="col status-name">
                        Magical
                    </div>
                </div>
                {magicalAttributeComList}
            </div>
        </Box>
    )
}