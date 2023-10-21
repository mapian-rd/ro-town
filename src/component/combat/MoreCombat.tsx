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
                {getItemNumber(prop.combatStatus.finalWeapontk, "Final weapon Atk/Matk", "finalWeapontk")}
                {getItemNumber(prop.combatStatus.equipmenttk, "Final equipment Atk/Matk", "equipmenttk")}
                {prop.combatStatus.isThanatos ? (
                    getItem(prop.combatStatus.useDeftk, "Def Atk", "useDeftk")
                ) : (
                    undefined
                )}
                {prop.combatStatus.isEdp ? (
                    getItem(prop.combatStatus.edpM, "Edp multiplier", "edpM")
                ) : (
                    undefined
                )}
                {prop.combatStatus.type === AttributeTypeEnum.Atk ? (
                    getItem(prop.combatStatus.pseudoElementtk, "Pseudo element Atk", "pseudoElementtk")
                ) : (
                    undefined
                )}
                {getItemNumber(prop.combatStatus.sizeAddMulAP, "Size multiplier", "sizeAddMulAP")}
                {getItemNumber(prop.combatStatus.elementAddMulAP, "Element multiplier", "elementAddMulAP")}
                {getItemNumber(prop.combatStatus.raceAddMulAP, "Race multiplier", "raceAddMulAP")}
                {getItemNumber(prop.combatStatus.classAddMulAP, "Class multiplier", "classAddMulAP")}
                {getItem(prop.combatStatus.elementMulP, "Element Table", "elementMulP")}
                {getItem(prop.combatStatus.statustk, "Status Atk/Matk", "statustk")}
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
                {getItem(prop.combatStatus.finaltk[0] + " ~ " + prop.combatStatus.finaltk[1], "Final Atk/Matk", "finaltk")}
                <div className="mb-2"></div>
                {prop.combatStatus.isMysticalAmp ? (
                    getItem(prop.combatStatus.mysticalAmpM, "Mystical Amp", "mysticalAmpM")
                ) : (
                    undefined
                )}
                {getItemNumber(prop.combatStatus.tkAP, "Atk/Matk percent", "tkAP")}
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
                {getItem(prop.combatStatus.remainHardef.toFixed(2), "Remain Hard Def/Mdef", "remainHardef")}
                {getItem(prop.combatStatus.hardefRM, "Hard Def/Mdef Reduce Multiplier", "hardefRM")}
                <div className="mb-2"></div>
                {getItem(prop.combatStatus.softef, "Target Soft Def/Mdef", "softef")}
                <div className="mb-2"></div>

                {prop.combatStatus.type === AttributeTypeEnum.Atk && prop.combatStatus.isSkillRange ? (
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

                {!prop.combatStatus.isSkillRange && prop.combatStatus.type === AttributeTypeEnum.Atk ? (
                    <div>
                        {getItem(prop.combatStatus.darkClawM, "Dark Claw Multiplier", "darkClawM")}
                    </div>
                ) : (
                    undefined
                )}
                {getItemNumber(prop.combatStatus.mulAP, "Other Multipier", "mulAP")}

                <div className="mb-2"></div>

                {getItemNumber(prop.combatStatus.vct, "Vct global", "vct")}
                {getItemNumber(prop.combatStatus.skillVct, "Vct skill", "skillVct")}
                {getItem(prop.combatStatus.remainVct.toFixed(2), "Remain Vct", "remainVct")}
                <div className="mb-2"></div>
                {getItemNumber(prop.combatStatus.fct, "Fct", "fct")}
                {getItemNumber(prop.combatStatus.fctP, "Fct percent", "fctP")}
                {getItem(prop.combatStatus.remainFct.toFixed(2), "Remain Fct", "remainFct")}
                <div className="mb-2"></div>
                {getItemNumber(prop.combatStatus.cooldown, "Cooldown", "cooldown")}
                {getItem(prop.combatStatus.remainCooldown, "Remain Cooldown", "remainCooldown")}
                <div className="mb-2"></div>
                {getItemNumber(prop.combatStatus.delay, "Delay", "delay")}
                {getItem(prop.combatStatus.remainDelay.toFixed(2), "Remain Delay", "remainDelay")}

                <div className="mb-2"></div>

                {getItem(prop.combatStatus.secph.toFixed(2), "Second per Hit (aspd)", "secph")}

                <div className="mb-2"></div>

                {prop.combatStatus.type === AttributeTypeEnum.Atk ? (
                    <div>
                        {getItemNumber(prop.combatStatus.hit, "Hit Ratio", "hit")}
                        {getItemNumber(prop.combatStatus.ph, "Perfect Hit", "ph")}
                        {getItem(prop.combatStatus.finalHitRaio, "Final Hit Ratio", "finalHitRaio")}
                    </div>
                ) : (
                    undefined
                )}
                <div className="mb-2"></div>
                {getItem(prop.combatStatus.killedSec.toFixed(2), "Used second to kill", "killedSec")}
            </div>
        </Box>
    )
}