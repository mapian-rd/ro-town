import React, { ReactNode, useContext } from "react";
import Select from "react-select";
import { optionStyle } from "../App";
import { friendly, petFriendlyList } from "../data/constraint/pet";
import { AppApiContext } from "../context/AppApiContext";
import { AppContext } from "../context/AppContext";
import Box from "./Box";
import { petList } from "../data/database/pet";
import { attributeList } from "../data/constraint/attributeType";

interface PetProps {
    // pet: 
}

export default function Pet(prop: PetProps) {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    const petOption = petList.map((pet) => {
        return { value: pet, label: pet.name }
    })

    const friendlyOption = Array.from(petFriendlyList).map(([_, friendly]) => {
        return { value: friendly, label: friendly.name }
    })

    const petAttribute = context.character.pet?.petAttribute.filter(item => item.intimacy === context.character.petFriendly) ?? []
    const attributeCom = [...context.character.pet?.attributeList ?? [], ...petAttribute].map(item => {
        const attributeItem = attributeList.get(item.type)
        return <span className="App-link mx-1">{attributeItem?.name} = {item.formulaText}</span>
    })

    function handlePetChange(option: any) {
        api.updateCharacter({ pet: option.value, petFriendly: friendly });

    };

    function handleFriendlyChange(option: any) {
        api.updateCharacter({ petFriendly: option.value });
    };

    return (
        <Box title="Pet">
            <div className="row">
                <div className="col-3">
                    <img className="w-100 my-2" src={`https://static.divine-pride.net/images/mobs/png/${context.character.pet?.imageId}.png`} alt="Pet" />
                </div>
                <div className="col">
                    <div className="row mb-1">
                        <div className="col-4 align-self-center">
                            Name
                        </div>
                        <div className="col-8 align-self-center">
                            <Select jc-center
                                options={petOption}
                                value={petOption.filter(option => option.value.id === context.character.pet?.id)}
                                classNames={optionStyle}
                                onChange={handlePetChange}
                                menuPlacement={"auto"}
                            />
                        </div>
                        <div className="col-4 align-self-center">
                            สนิทสนม
                        </div>
                        <div className="col-8 align-self-center">
                            <Select jc-center
                                options={friendlyOption}
                                value={friendlyOption.filter(option => option.value.name === context.character.petFriendly?.name)}
                                classNames={optionStyle}
                                onChange={handleFriendlyChange}
                                menuPlacement={"auto"}
                            />
                        </div>
                        <div className="col-12">
                            {attributeCom}
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}