import React, { useContext } from "react";
import Select from "react-select";
import { checkMinMax } from "../common/extension";
import { classList } from "../constraint/class";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext } from "../context/AppContext";
import Box from "./Box";
import { JobClass } from "../model/class"
import classNames from 'classnames';
import { CharacterModel } from "../model/character";

export function Character() {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    const classOption = classList.map((jobClass) => {
        return { value: jobClass, label: jobClass.name }
    })

    const optionStyle = {
        container: ({ data, isDisabled, isFocused, isSelected }: any) =>
            classNames(
                'w-100'
            ),
        control: ({ data, isDisabled, isFocused, isSelected }: any) =>
            classNames(
                isFocused ? 'select-ed' : 'select-none'
            ),
        option: ({ data, isDisabled, isFocused, isSelected }: any) =>
            classNames(
                isFocused ? 'select-hover' : 'select-none',
                isSelected ? 'select-ed' : 'select-none'
            ),
    }

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
    return (
        <Box title={context.character.name} titleEdiable>
            <div>
                <div className="row mx-0">
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
                    <div className="col-xl-7 d-flex">
                        <span className="mx-2 jc-center">/</span>
                        <Select jc-center
                            options={classOption}
                            value={classOption.filter(option => option.value === context.character.clazz)}
                            classNames={optionStyle}
                            onChange={handleClassChange}
                        />
                        {/* <input type="text" value={context.character.clazz?.name} /> */}
                    </div>
                    <div className="col-xl-3 px-0 d-flex">
                        <span className="me-1 text-nowrap jc-center">/ Job LV</span>
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

                    <div className="col-xl-6">
                        <p className="d-flex">
                            HP
                            <span className="mx-1">
                                {CharacterModel.calHp(context.character)} / {CharacterModel.calHp(context.character)}
                            </span>
                        </p>
                    </div>
                    <div className="d-none d-xl-block col-1 text-center">|</div>
                    <div className="col-xl-5">
                        <p className="d-flex">
                            SP
                            <span className="mx-1">
                                {CharacterModel.calSp(context.character)} / {CharacterModel.calSp(context.character)}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </Box>
    );
}