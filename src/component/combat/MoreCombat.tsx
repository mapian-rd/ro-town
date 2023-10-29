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

function getItem(numberText: string | number, name: string, key: string) {
    let text
    if (typeof numberText === "number") {
        text = numberText.toFixed(2)
    } else {
        text = numberText
    }
    text = text.replace(/[.,]00$/, "");
    return (
        <div className="row" key={key}>
            <div className="col">
                {name}
            </div>
            <div className="col-auto text-end">
                {text}
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
    let text = number?.number.toFixed(2).replace(/[.,]00$/, "");
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

                <div className="row mt-2">
                    <div className="col status-name">
                        Atk/Matk
                    </div>
                </div>
                {getItemNumber(prop.combatStatus.finalWeapontk, "Final weapon Atk/Matk", "finalWeapontk")}
                {getItemNumber(prop.combatStatus.equipmenttk, "Final equipment Atk/Matk", "equipmenttk")}
                {prop.combatStatus.isThanatos ? (
                    getItem(prop.combatStatus.useDeftk, "Def Atk", "useDeftk")
                ) : (
                    undefined
                )}
                {prop.combatStatus.type === AttributeTypeEnum.Atk ? (
                    getItem(prop.combatStatus.pseudoElementtk, "Pseudo element Atk", "pseudoElementtk")
                ) : (
                    undefined
                )}
                {getItem(prop.combatStatus.statustk, "Status Atk/Matk", "statustk")}

                <div className="row mt-2">
                    <div className="col status-name">
                        Atk/Matk Multiplier
                    </div>
                </div>
                {prop.combatStatus.isEdp ? (
                    getItem(prop.combatStatus.edpM, "Edp multiplier", "edpM")
                ) : (
                    undefined
                )}
                {getItemNumber(prop.combatStatus.sizeAddMulAP, "Size multiplier", "sizeAddMulAP")}
                {getItemNumber(prop.combatStatus.elementAddMulAP, "Element multiplier", "elementAddMulAP")}
                {getItemNumber(prop.combatStatus.raceAddMulAP, "Race multiplier", "raceAddMulAP")}
                {getItemNumber(prop.combatStatus.classAddMulAP, "Class multiplier", "classAddMulAP")}
                {getItem(prop.combatStatus.elementMulP, "Element Table", "elementMulP")}

                <div className="mb-2"></div>
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

                <div className="mb-2"></div>
                {prop.combatStatus.isMysticalAmp ? (
                    getItem(prop.combatStatus.mysticalAmpM, "Mystical Amp", "mysticalAmpM")
                ) : (
                    undefined
                )}
                {getItemNumber(prop.combatStatus.tkAP, "Atk/Matk percent", "tkAP")}

                <div className="mb-2"></div>
                {getItem(prop.combatStatus.finaltk[0] + " ~ " + prop.combatStatus.finaltk[1], "Final Atk/Matk", "finaltk")}
                <div className="mb-2"></div>

                <div className="row mt-2">
                    <div className="col status-name">
                        Dmg Multiplier
                    </div>
                </div>
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
                {getItemNumber(prop.combatStatus.mulAP, "Other Multipier", "mulAP")}

                <div className="row mt-2">
                    <div className="col status-name">
                        Ignore Def/Mef
                    </div>
                </div>
                {getItemNumber(prop.combatStatus.ignoreP, "Ignore Def/Mdef", "ignoreP")}
                {getItem(prop.combatStatus.monhardef, "Target Hard Def/Mdef", "monhardef")}
                {getItem(prop.combatStatus.remainHardef.toFixed(2).replace(/[.,]00$/, ""), "Remain Hard Def/Mdef", "remainHardef")}
                {getItem(prop.combatStatus.hardefRM, "Hard Def/Mdef Reduce Multiplier", "hardefRM")}
                <div className="mb-2"></div>
                {getItem(prop.combatStatus.softef, "Target Soft Def/Mdef", "softef")}

                <div className="row mt-2">
                    <div className="col status-name">
                        Final Dmg Multiplier
                    </div>
                </div>
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

                <div className="row mt-2">
                    <div className="col status-name">
                        Cast Time (sum remain)
                    </div>
                </div>
                {getItemNumber(prop.combatStatus.vct530, "Vct 530", "vct530")}
                {getItemNumber(prop.combatStatus.vct, "Vct global", "vct")}
                {getItemNumber(prop.combatStatus.skillVct, "Vct skill", "skillVct")}
                {getItem(prop.combatStatus.remainVct.toFixed(2).replace(/[.,]00$/, ""), "Remain Vct", "remainVct")}

                <div className="mb-2"></div>
                {getItemNumber(prop.combatStatus.fct, "Fct Fixed", "fct")}
                {getItemNumber(prop.combatStatus.fctP, "Fct percent", "fctP")}
                {getItem(prop.combatStatus.remainFct.toFixed(2).replace(/[.,]00$/, ""), "Remain Fct", "remainFct")}

                <div className="row mt-2">
                    <div className="col status-name">
                        After Cast Time (longest remain)
                    </div>
                </div>
                {getItemNumber(prop.combatStatus.cooldown, "Cooldown", "cooldown")}
                {getItem(prop.combatStatus.remainCooldown, "Remain Cooldown", "remainCooldown")}

                <div className="mb-2"></div>
                {getItemNumber(prop.combatStatus.delay, "Delay", "delay")}
                {getItem(prop.combatStatus.remainDelay.toFixed(2).replace(/[.,]00$/, ""), "Remain Delay", "remainDelay")}

                <div className="mb-2"></div>

                {getItem(prop.combatStatus.secph.toFixed(2).replace(/[.,]00$/, ""), "Second per Hit (aspd)", "secph")}

                <div className="row mt-2">
                    <div className="col status-name">
                        Hit
                    </div>
                </div>
                {prop.combatStatus.type === AttributeTypeEnum.Atk ? (
                    <div>
                        {getItemNumber(prop.combatStatus.hit, "Hit Ratio", "hit")}
                        {getItemNumber(prop.combatStatus.ph, "Perfect Hit", "ph")}
                        {getItem(prop.combatStatus.finalHitRaio, "Final Hit Ratio", "finalHitRaio")}
                    </div>
                ) : (
                    undefined
                )}
                <div className="row mt-2">
                    <div className="col status-name">
                        Dps
                    </div>
                </div>
                {getItem(prop.combatStatus.killedSec.toFixed(2).replace(/[.,]00$/, ""), "Used second to kill", "killedSec")}
            </div>
        </Box>
    )
}