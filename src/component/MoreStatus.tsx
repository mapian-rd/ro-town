import { attributeList, StatusTypeList } from "../data/constraint/attributeType";
import { AttributeTypeEnum } from "../data/model/attributeType";
import { DescriptionNumber } from "../data/model/Formula";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Box from "./Box";
import { MdInfoOutline } from "react-icons/md";
import { Tooltip } from "react-bootstrap";

interface MoreStatusProps {
    final: Map<AttributeTypeEnum, DescriptionNumber>
}

export default function MoreStatus(prop: MoreStatusProps) {
    console.log("MoreStatus", prop.final)
    const list = [...Array.from(StatusTypeList), ...Array.from(attributeList)].map(([key, value]) => {
        const final = prop.final.get(key)
        const min = final?.min
        const max = final?.max
        let text = final?.number.toString()
        if (min && max) {
            text = `${min}~${max}`
        }
        if (final?.number === -1) return null
        return (
            <div className="row" key={key}>
                <div className="col">
                    {value.name}
                </div>
                <div className="col-auto text-end">
                    {text}
                </div>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{final?.description}</Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <div className="col-auto" ref={ref} {...triggerHandler}>
                            <MdInfoOutline />
                        </div>
                    )}
                </OverlayTrigger>
            </div>
        )
    })

    return (
        <Box title="More Status" className="flex-fill" overflow>
            <div className="mh-0" >
                {list}
            </div>
        </Box>
    )
}