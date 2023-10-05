import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { checkMinMax } from "../common/extension";
import { classList } from "../data/constraint/class";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext } from "../context/AppContext";
import Box from "./Box";
import { CharacterModel } from "../data/model/Characterv1";
import { optionStyle } from "../App";
import { AttributeTypeEnum } from "../data/model/attributeType";
import { DescriptionNumber } from "../data/model/Formula";

const classOption = Array.from(classList).map(([key, value]) => {
    return { value: value, label: value.name }
})

export function Character() {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    const [hp, setHp] = useState<DescriptionNumber>(new DescriptionNumber())
    const [sp, setSp] = useState<DescriptionNumber>(new DescriptionNumber())

    function handleLvChange(event: React.ChangeEvent<HTMLInputElement>) {
        let { value, min, max } = event.target;
        let newValue = checkMinMax(Number(value), Number(min), Number(max));
        api.updateCharacter({ baseLv: newValue });
    };

    function handleJobLvChange(event: React.ChangeEvent<HTMLInputElement>) {
        let { value, min, max } = event.target;
        let newValue = checkMinMax(Number(value), Number(min), Number(max));
        api.updateCharacter({ jobLv: newValue });
    };

    function handleClassChange(option: any) {
        let newClass = option.value;
        let baseLv = checkMinMax(context.character.baseLv, newClass.lvMin, newClass.lvMax)
        let jobLv = checkMinMax(context.character.jobLv, 1, newClass.jobMax)
        console.log(`${baseLv} ${jobLv}`)
        api.updateCharacter({ clazz: option.value, baseLv, jobLv });
    };

    useEffect(() => {
        setHp(api.getFinal(AttributeTypeEnum.Hp))
        setSp(api.getFinal(AttributeTypeEnum.Sp))
    }, [context.calculatedAttribute])

    return (
        <Box title={context.character.name} titleEdiable>
            <div>
                <div className="row mx-0 mb-2">
                    <div className="col-xl-2 px-0 d-flex">
                        <span className="me-1 jc-center">LV</span>
                        <input
                            type="number"
                            min={context.character.clazz.lvMin}
                            max={context.character.clazz.lvMax}
                            value={context.character.baseLv}
                            onChange={handleLvChange}
                        />
                    </div>
                    <div className="col-xl-7 px-md-0 px-xl-2 d-flex">
                        <span className="mx-2 d-md-none d-xl-inline-flex jc-center">/</span>
                        <Select jc-center
                            options={classOption}
                            value={classOption.filter(option => option.value === context.character.clazz)}
                            classNames={optionStyle}
                            onChange={handleClassChange}
                        />
                        {/* <input type="text" value={context.character.clazz?.name} /> */}
                    </div>
                    <div className="col-xl-3 px-0 d-flex">
                        <span className="me-1 d-md-none d-xl-inline-flex text-nowrap jc-center">/</span>
                        <span className="me-1 text-nowrap jc-center">Job LV</span>
                        <input
                            type="number"
                            min={1}
                            max={context.character.clazz.jobMax}
                            value={context.character.jobLv}
                            onChange={handleJobLvChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl col-md-12">
                        <p className="d-flex">
                            HP
                            <span className="mx-1">
                                {hp.number} / {hp.number}
                            </span>
                        </p>
                    </div>
                    <div className="d-none d-xl-block col-1 text-center">|</div>
                    <div className="col-xl col-md-12">
                        <p className="d-flex">
                            SP
                            <span className="mx-1">
                                {sp.number} / {sp.number}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </Box>
    );
}