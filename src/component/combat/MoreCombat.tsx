import Box from "../Box";
import { CombatStatus } from "../../data/model/CombatStatus";
import { CalculatedAttribute } from "../../data/model/CalculatedAttribute";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdInfoOutline } from "react-icons/md";
import { DescriptionNumber } from "../../data/model/Formula";
import { AttributeTypeEnum } from "../../data/model/attributeType";

interface MoreCombatProps {
    combatStatus: CombatStatus;
}

function getItem(number: string | number, name: string, key: string) {
    return (
        <div className="row" key={key}>
            <div className="col">
                {name}
            </div>
            <div className="col-auto text-end">
                {number}
            </div>
            <div className="col-auto">
                <div style={{ width: '16px' }}>
                </div>
            </div>
        </div>
    )
}

function getItemNumber(number: DescriptionNumber, name: string, key: string) {
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

export default function MoreCombat(prop: MoreCombatProps) {
    console.log("MoreCombat", prop.combatStatus)

    return (
        <Box title="More Combat" className="h-100 mh-0" overflow>
            <div className="mh-0" >
                {getItem((prop.combatStatus.type === AttributeTypeEnum.Atk) ? "Physical" : "Magical", "Type", "type")}
                {getItem(prop.combatStatus.isWeaponRange ? "Range" : "Not Range", "Weapon type", "weaponRange")}
                <div className="mb-2"></div>
                {getItemNumber(prop.combatStatus.finalWeapontk, "Final weapon power", "finalWeapontk")}
                {getItemNumber(prop.combatStatus.equipmenttk, "Final equipment power", "equipmenttk")}
                {prop.combatStatus.isThanatos ? (
                    getItem(prop.combatStatus.useDeftk, "Def power", "useDeftk")
                ) : (
                    undefined
                )}
                {prop.combatStatus.isEdp ? (
                    getItem(prop.combatStatus.edpM, "Edp multiplier", "edpM")
                ) : (
                    undefined
                )}
                {getItem(prop.combatStatus.pseudoElementtk, "Pseudo element power", "pseudoElementtk")}
                {getItemNumber(prop.combatStatus.sizeAddMulAP, "Size multiplier", "sizeAddMulAP")}
                {getItemNumber(prop.combatStatus.elementAddMulAP, "Element multiplier", "elementAddMulAP")}
                {getItemNumber(prop.combatStatus.raceAddMulAP, "Race multiplier", "raceAddMulAP")}
                {getItemNumber(prop.combatStatus.classAddMulAP, "Class multiplier", "classAddMulAP")}
                {getItem(prop.combatStatus.elementMulP, "Element Table", "elementMulP")}
                {getItem(prop.combatStatus.statustk, "Status power", "statustk")}
                {prop.combatStatus.elementSkillMulP ? (
                    getItem(prop.combatStatus.elementSkillMulP, "Skill Element Table", "elementSkillMulP")
                ) : (
                    undefined
                )}
                {prop.combatStatus.elementMildWindMulP ? (
                    getItem(prop.combatStatus.elementMildWindMulP, "Mild Wind Element Table", "elementMildWindMulP")
                ) : (
                    undefined
                )}
                {getItem(prop.combatStatus.finaltk[0] + " ~ " + prop.combatStatus.finaltk[1], "Final Power", "finaltk")}
                <div className="mb-2"></div>
                {prop.combatStatus.isMysticalAmp ? (
                    getItem(prop.combatStatus.mysticalAmpM, "Mystical Amp", "mysticalAmpM")
                ) : (
                    undefined
                )}
                {getItemNumber(prop.combatStatus.tkAP, "Power percent", "tkAP")}
                <div className="mb-2"></div>
                {getItemNumber(prop.combatStatus.skillP, "Skill percent", "skillP")}
                {getItem(prop.combatStatus.finalSkillP, "Final Skill percent", "finalSkillP")}
                <div className="mb-2"></div>
                {prop.combatStatus.isPowerThrust ? (
                    getItem(prop.combatStatus.powerThrustAP, "Power Thrust", "powerThrustAP")
                ) : (
                    undefined
                )}
                {getItemNumber(prop.combatStatus.skillMulAP, "Skill Dmg Multiplier", "skillMulAP")}
                {getItemNumber(prop.combatStatus.elementDmgMulAP, "Element Dmg Multiplier", "elementDmgMulAP")}
                <div className="mb-2"></div>
                {getItemNumber(prop.combatStatus.ignoreP, "Ignore Def/Mdef", "ignoreP")}
                {getItem(prop.combatStatus.monhardef, "Target Hard Def/Mdef", "monhardef")}
                {getItem(prop.combatStatus.remainHardef, "Remain Hard Def/Mdef", "remainHardef")}
                {getItem(prop.combatStatus.hardefRM, "Hard Def/Mdef Reduce Multiplier", "hardefRM")}
                <div className="mb-2"></div>
                {getItem(prop.combatStatus.softef, "Target Soft Def/Mdef", "softef")}
                <div className="mb-2"></div>

                {prop.combatStatus.isSkillRange ? (
                    getItemNumber(prop.combatStatus.rangeMulAP, "Range Multiplier", "rangeMulAP")
                ) : (
                    undefined
                )}

                {prop.combatStatus.isCrit ? (
                    <div>
                        {getItemNumber(prop.combatStatus.critDmgAP, "Crit Dmg Addition", "critDmgAP")}
                        {getItem(prop.combatStatus.finalCritDmg, "Final Crit Dmg", "finalCritDmg")}
                    </div>
                ) : (
                    undefined
                )}

                {prop.combatStatus.darkClawLv ? (
                    <div>
                        {getItem(prop.combatStatus.darkClawLv, "Dark Claw Lv", "darkClawLv")}
                        {getItem(prop.combatStatus.darkClawM, "Dark Claw Multiplier", "darkClawM")}
                    </div>
                ) : (
                    undefined
                )}


                {getItem(prop.combatStatus.darkClawM, "Dark Claw Multiplier", "darkClawM")}
                <div className="mb-2"></div>

                {getItemNumber(prop.combatStatus.vct, "Vct global", "vct")}
                {getItemNumber(prop.combatStatus.skillVct, "Vct skill", "skillVct")}
                {getItemNumber(prop.combatStatus.fct, "Fct", "fct")}
                {getItemNumber(prop.combatStatus.fctP, "Fct percent", "fctP")}
                {getItemNumber(prop.combatStatus.cooldown, "Cooldown", "cooldown")}
                {getItemNumber(prop.combatStatus.delay, "Delay", "delay")}

                {getItemNumber(prop.combatStatus.hit, "Hit", "hit")}
            </div>
        </Box>
    )
}