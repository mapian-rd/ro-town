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
}

function getItem(number: DescriptionNumber, name: string, key: string) {
    const min = number?.min
    const max = number?.max
    let text = number?.number.toString()
    if (min && max) {
        text = `${min}~${max}`
    }
    if (number?.number <= 0) return null
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

    const skillDmgList = Array.from(prop.skillDmg).map(([key, value]) => {
        return getItem(value, value.name ?? key.toString(), key.toString())
    })

    return (
        <Box title="More Status" overflow>
            <div className="mh-0" >
            <div className="row" key="skill-title">
                    <div className="col text-decoration-underline">
                        Status
                    </div>
                </div>
                {statusList}
                <div className="row" key="skill-title">
                    <div className="col text-decoration-underline">
                        SkillDmg
                    </div>
                </div>
                {skillDmgList}
                <div className="row" key="skill-title">
                    <div className="col text-decoration-underline">
                        Physical
                    </div>
                </div>
                {physicalAttributeComList}
                <div className="row" key="skill-title">
                    <div className="col text-decoration-underline">
                        Magical
                    </div>
                </div>
                {magicalAttributeComList}
                <div className="row" key="skill-title">
                    <div className="col text-decoration-underline">
                        Other
                    </div>
                </div>
                {attributeComList}
            </div>
        </Box>
    )
}