import Box from "../Box";
import Select, { InputActionMeta } from "react-select";
import { optionStyle } from "../../App";
import { useContext, useEffect } from "react";
import { AppApiContext } from "../../context/AppApiContext";
import { AppContext, ViewState } from "../../context/AppContext";
import { ActiveSkill } from "../../data/model/skill";

export function Combat() {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    const skillOption = context.character.clazz.activeSkillItem.map(skill => {
        return { value: skill, label: skill.name }
    })

    const skillLevelOption = Array.from(Array(context.skill?.percent.length).keys()).map(i => {
        return { value: i + 1, label: i + 1 }
    })

    function handleSkillChange(option: any) {
        console.log("handleSkillChange" + (option.value as ActiveSkill).name)
        api.setSkill(option.value);
    }

    function handleSkillLevelChange(option: any) {
        api.setSkillLevel(option.value);
    }

    return (
        <Box className="flex-grow-1" title="Combat" buttonText="More Info" onClick={() => api.setViewState(ViewState.MoreCombat)}>
            <div className="row m-0">
                <div className="col-7 col-xl-12 col-xxl-7 px-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center">Skill</span>
                        <Select jc-center
                            options={skillOption}
                            value={skillOption.find(option => option.label === context.skill?.name)}
                            classNames={optionStyle}
                            onChange={handleSkillChange}
                        />
                    </div>
                </div>
                <div className="col-5 col-xl-12 col-xxl-5 px-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Skill Lv</span>
                        <Select jc-center
                            options={skillLevelOption}
                            value={skillLevelOption.filter(option => option.value === context.skillLevel)}
                            classNames={optionStyle}
                            onChange={handleSkillLevelChange}
                        />
                    </div>
                </div>

                <div className="col-6 ps-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">DMG%</span>
                        <span className="w-100 text-end">{context.skill?.percent[(context.skillLevel ?? 0) - 1]}%</span>
                    </div>
                </div>
                <div className="col-6 px-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Hit/Skill</span>
                        <span className="w-100 text-end">{context.skill?.hit[(context.skillLevel ?? 0) - 1]}</span>
                    </div>
                </div>

                <div className="col-6 ps-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center">Vct</span>
                        <span className="w-100 text-end">{context.skill?.vct[(context.skillLevel ?? 0) - 1]}</span>
                    </div>
                </div>
                <div className="col-6 px-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Fct</span>
                        <span className="w-100 text-end">{context.skill?.fct[(context.skillLevel ?? 0) - 1]}</span>
                    </div>
                </div>

                <div className="col-6 ps-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center">Cooldown</span>
                        <span className="w-100 text-end">{context.skill?.cooldown[(context.skillLevel ?? 0) - 1]}</span>
                    </div>
                </div>
                <div className="col-6 px-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Delay</span>
                        <span className="w-100 text-end">{context.skill?.delay[(context.skillLevel ?? 0) - 1]}</span>
                    </div>
                </div>

                <hr className="h-line" />

                <div className="d-flex px-0">
                    <span className="me-1 jc-center text-nowrap">Min Dmg</span>
                    <span className="w-100 text-end">{context.combatStatus.skillN !== 1 ? context.combatStatus.skillN + " x " : ""}{context.combatStatus.minDmg} ({context.combatStatus.minDmgph} x {context.combatStatus.skillHit})</span>
                </div>
                <div className="d-flex px-0">
                    <span className="me-1 jc-center text-nowrap">Max Dmg</span>
                    <span className="w-100 text-end">{context.combatStatus.skillN !== 1 ? context.combatStatus.skillN + " x " : ""}{context.combatStatus.maxDmg} ({context.combatStatus.maxDmgph} x {context.combatStatus.skillHit})</span>
                </div>
                <div className="d-flex final-dps px-0">
                    <span className="me-1 jc-center text-nowrap">Avg Dmg</span>
                    <span className="w-100 text-end final-dps-value">{context.combatStatus.skillN !== 1 ? context.combatStatus.skillN + " x " : ""}{context.combatStatus.avgDmg} ({context.combatStatus.avgDmgph} x {context.combatStatus.skillHit})</span>
                </div>

                <div className="col-12 px-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Final Cast Time</span>
                        <span className="w-100 text-end">{(context.combatStatus.remainVct + context.combatStatus.remainFct).toFixed(2).replace(/[.,]00$/, "")}</span>
                    </div>
                </div>

                {/* <div className="col-6">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Vct</span>
                        <span className="w-100 text-end">{context.combatStatus.remainVct.toFixed(2)}</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Fct</span>
                        <span className="w-100 text-end">{context.combatStatus.remainFct.toFixed(2)}</span>
                    </div>
                </div> */}

                {/* <div className="col-6">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Cooldown</span>
                        <span className="w-100 text-end">{context.combatStatus.remainCooldown}</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Delay</span>
                        <span className="w-100 text-end">{context.combatStatus.remainDelay.toFixed(2)}</span>
                    </div>
                </div>
                <div className="d-flex">
                    <span className="me-1 jc-center text-nowrap">Second per Hit (aspd)</span>
                    <span className="w-100 text-end">{context.combatStatus.secph.toFixed(2)}</span>
                </div> */}
                <div className="d-flex px-0">
                    <span className="me-1 jc-center text-nowrap">Final After Cast Time</span>
                    <span className="w-100 text-end">{Math.max(context.combatStatus.remainCooldown, context.combatStatus.remainDelay, context.combatStatus.secph).toFixed(2).replace(/[.,]00$/, "")}</span>
                </div>
                <div className="d-flex px-0">
                    <span className="me-1 jc-center text-nowrap">Hit Ratio</span>
                    <span className="w-100 text-end">{context.combatStatus.finalHitRaio}%</span>
                </div>
                <div className="d-flex flex-column final-dps px-0">
                    <div className="d-flex">
                        <span className="me-1 jc-center text-nowrap">Final Dps</span>
                        <span className="w-100 text-end final-dps-value">{context.combatStatus.final.toFixed(2).replace(/[.,]00$/, "")}</span>
                    </div>
                    <span className="text-end text-nowrap remark w-100">* Ignore Ping & Computer Performance</span>
                </div>
            </div>
        </Box>
    )
}