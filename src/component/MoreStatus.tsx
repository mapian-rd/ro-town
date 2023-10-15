import { attributeList, magicalAttributeList, otherAttributeList, physicalAttributeList, StatusTypeList } from "../data/constraint/attributeType";
import { AttributeTypeEnum } from "../data/model/attributeType";
import { DescriptionNumber } from "../data/model/Formula";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Box from "./Box";
import { MdInfoOutline } from "react-icons/md";
import { Tooltip } from "react-bootstrap";
import { SkillEnum } from "../data/model/skill";

interface MoreStatusProps {
    final: Map<AttributeTypeEnum, DescriptionNumber>,
    skillDmg: Map<SkillEnum, DescriptionNumber>,
    baseSkillDmg: Map<SkillEnum, DescriptionNumber>,
    vct: Map<SkillEnum, DescriptionNumber>,
    allVct: DescriptionNumber,
    cooldown: Map<SkillEnum, DescriptionNumber>,
    fct: DescriptionNumber,
    fctP: DescriptionNumber,
}

function getItem(number: DescriptionNumber, name: string, key: string) {
    const min = number?.min
    const max = number?.max
    let text = number?.number.toString()
    if (min && max) {
        text = `${min}~${max}`
    }
    if (number?.number < 0) return null
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
    const statusList = Array.from(StatusTypeList).map(([key, value]) => {
        const final = prop.final.get(key)
        if (!final) return null
        return getItem(final, value.name, key.toString())
    })
    const physicalAttributeComList = Array.from(physicalAttributeList).map(([key, value]) => {
        const final = prop.final.get(key)
        if (!final) return null
        return getItem(final, value.name, key.toString())
    })
    const magicalAttributeComList = Array.from(magicalAttributeList).map(([key, value]) => {
        const final = prop.final.get(key)
        if (!final) return null
        return getItem(final, value.name, key.toString())
    })
    const attributeComList = Array.from(otherAttributeList).map(([key, value]) => {
        const final = prop.final.get(key)
        if (!final) return null
        return getItem(final, value.name, key.toString())
    })

    const baseSkillDmgList = Array.from(prop.baseSkillDmg).map(([key, value]) => {
        return getItem(value, value.name ?? key.toString(), key.toString())
    })

    const skillDmgList = Array.from(prop.skillDmg).map(([key, value]) => {
        return getItem(value, value.name ?? key.toString(), key.toString())
    })

    const allVct = getItem(prop.allVct, prop.allVct.name ?? "all", "allVct")

    const vct = Array.from(prop.vct).map(([key, value]) => {
        return getItem(value, value.name ?? key.toString(), key.toString())
    })


    const fct = getItem(prop.fct, prop.fct.name ?? "Fixed", "fct")
    const fctP = getItem(prop.fctP, prop.fctP.name ?? "Percent", "fctP")

    const cooldown = Array.from(prop.cooldown).map(([key, value]) => {
        return getItem(value, value.name ?? key.toString(), key.toString())
    })

    return (
        <Box title="Status Infomation" className="h-100 mh-0" overflow>
            <div className="mh-0" >
                <div className="row mt-2">
                    <div className="col status-name">
                        Status
                    </div>
                </div>
                {statusList}
                <div className="row mt-2">
                    <div className="col status-name">
                        -
                    </div>
                </div>
                {attributeComList}
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