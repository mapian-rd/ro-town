import { optionStyle } from "../App";
import { Monster as MonsterModel } from "../data/model/monster";
import Select from "react-select";
import Box from "./Box";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AppApiContext } from "../context/AppApiContext";
import { MonsterList } from "../data/database/monster";

interface MonsterProps {
    monster?: MonsterModel
}

export default function Monster(prop: MonsterProps) {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    const monsterOption = MonsterList.map((monsterId) => {
        return { value: monsterId, label: monsterId.name }
    })

    function handleMonsterChange(option: any) {
        console.log(option.value)
        if (context.monsterId?.id === option.value.id) {
            console.error("same id ignore")
            return
        }
        api.setMonsterId(option.value);
    };

    return (
        <Box title="Monster">
            <div className="row">
                <div className="col-auto">
                    <img className="w-100 my-2" src={`https://static.divine-pride.net/images/mobs/png/${context.monsterId?.id}.png`} alt="Monster" />
                </div>
                <div className="col-10">
                    <div className="d-flex">
                        <span className="me-1 jc-center">Name</span>
                        <Select jc-center
                            options={monsterOption}
                            value={monsterOption.filter(option => option.value.name === context.monsterId?.name)}
                            classNames={optionStyle}
                            onChange={handleMonsterChange}
                        />
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-12">
                            <div className="d-flex">
                                <span className="monster-status me-1 jc-center">Lv</span>
                                <span className="w-100 text-end">{prop.monster?.level}</span>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12">
                            <div className="d-flex">
                                <span className="monster-status me-1 jc-center">Size</span>
                                <span className="w-100 text-end">{prop.monster?.size.name}</span>
                            </div>
                            <div className="d-flex">
                                <span className="monster-status me-1 jc-center">Type</span>
                                <span className="w-100 text-end">{prop.monster?.race.name}</span>
                            </div>
                            <div className="d-flex">
                                <span className="monster-status me-1 jc-center">Attri</span>
                                <span className="w-100 text-end">{prop.monster?.attribute.element.name} {prop.monster?.attribute.lv}</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-12">
                            <div className="d-flex">
                                <span className="monster-status me-1 jc-center">Def</span>
                                <span className="w-100 text-end">{prop.monster?.softDef()} + {prop.monster?.hardDef}</span>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12">
                            <div className="d-flex">
                                <span className="monster-status me-1 jc-center">MDef</span>
                                <span className="w-100 text-end">{prop.monster?.softMDef()} + {prop.monster?.hardMdef}</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-12">
                            <div className="d-flex">
                                <span className="monster-status me-1 jc-center text-nowrap">100% Hit</span>
                                <span className="w-100 text-end">{prop.monster?.hit}</span>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12">
                            <div className="d-flex">
                                <span className="monster-status me-1 jc-center text-nowrap">95% Flee</span>
                                <span className="w-100 text-end">{prop.monster?.flee}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )

}