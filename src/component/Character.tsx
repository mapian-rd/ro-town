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

    function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
        let { value } = event.target;
        api.updateCharacter({ name: value })
    }

    function handleLvChange(event: React.ChangeEvent<HTMLInputElement>): number {
        let { value, min, max } = event.target;
        let newValue = checkMinMax(Number(value), Number(min), Number(max));
        api.updateCharacter({ baseLv: newValue });
        return newValue
    };

    function handleJobLvChange(event: React.ChangeEvent<HTMLInputElement>): number {
        let { value, min, max } = event.target;
        let newValue = checkMinMax(Number(value), Number(min), Number(max));
        api.updateCharacter({ jobLv: newValue });
        return newValue
    };

    function handleClassChange(option: any) {
        let newClass = option.value;
        let baseLv = checkMinMax(context.character.baseLv, newClass.lvMin, newClass.lvMax)
        let jobLv = checkMinMax(context.character.jobLv, 1, newClass.jobMax)
        api.updateCharacter({ clazz: option.value, baseLv, jobLv });
    };

    useEffect(() => {
        setHp(api.getFinal(AttributeTypeEnum.Hp))
        setSp(api.getFinal(AttributeTypeEnum.Sp))
    }, [context.calculatedAttribute])

    return (
        <Box title={context.character.name} titleEdiable onChangeTitle={onChangeName}>
            <div>
                <div className="row mx-0">
                    <div className="col-sm-2 col-lg-12 col-xxl-2 px-0 d-flex">
                        <span className="me-1 jc-center">LV</span>
                        <input
                            type="number"
                            min={context.character.clazz.lvMin}
                            max={context.character.clazz.lvMax}
                            defaultValue={context.character.baseLv.toString()}
                            onChange={handleLvChange}
                            onBlur={(event) => {
                                const result = handleLvChange(event)
                                event.target.value = result.toString()
                            }}
                        />
                    </div>
                    <div className="col-sm-7 col-lg-12 col-xxl-7 px-md-0 px-xl-2 d-flex">
                        <span className="mx-2 d-none d-sm-inline-flex d-lg-none d-xxl-inline-flex jc-center">/</span>
                        <Select jc-center
                            options={classOption}
                            value={classOption.filter(option => option.value === context.character.clazz)}
                            classNames={optionStyle}
                            onChange={handleClassChange}
                        />
                        {/* <input type="text" value={context.character.clazz?.name} /> */}
                    </div>
                    <div className="col-sm-3 col-lg-12 col-xxl-3 px-0 d-flex">
                        <span className="me-1 d-none d-sm-inline-flex d-lg-none d-xxl-inline-flex text-nowrap jc-center">/</span>
                        <span className="me-1 text-nowrap jc-center">Job LV</span>
                        <input
                            type="number"
                            min={1}
                            max={context.character.clazz.jobMax}
                            defaultValue={context.character.jobLv}
                            onChange={handleJobLvChange}
                            onBlur={(event) => {
                                const result = handleJobLvChange(event)
                                event.target.value = result.toString()
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm col-lg-12 col-xxl">
                        <div className="d-flex">
                            HP
                            <span className="mx-1">
                                {hp.number} / {hp.number}
                            </span>
                        </div>
                    </div>
                    <div className="d-none d-sm-block d-lg-none d-xxl-block col-1 text-center">|</div>
                    <div className="col-sm col-lg-12 col-xxl">
                        <div className="d-flex">
                            SP
                            <span className="mx-1">
                                {sp.number} / {sp.number}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}