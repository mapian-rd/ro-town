import React, { useContext } from "react";
import { Atk, Critical, Flee, Hit, Matk } from "../../constraint/attributeType";
import { StatusTypeList, Str } from "../../constraint/status";
import { AppApiContext } from "../../context/AppApiContext";
import { AppContext } from "../../context/AppContext";
import { CharacterModel } from "../../model/character";
import { StatusType } from "../../model/status";
import Box from "../Box";
import Attribute from "./Attribute";
import StatusRow from "./StatusRowProps";

export default function StatusBox() {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    function updateStatus(statusType: StatusType, value: number) {
        let status = context.character.status
        status?.set(statusType, value)
        api.updateCharacter({status})
    }

    const statusList = StatusTypeList.map((statusType) => {
        return <StatusRow key={statusType.name} name={statusType.name} value={context.character.status?.get(statusType)} onValueChange={(value) => updateStatus(statusType, value)} plus={CharacterModel.getBonusStatus?.(context.character, statusType)} />
    })

    return (
        <Box title="Status" buttonText="More">
            <div>
                <div className="row mx-0">
                    <div className="col-md-12 col-xl-5 ps-0 pe-1">
                        {statusList}
                    </div>
                    <div className="col-md-12 col-xl-7 px-0">
                        <div className="row mx-0">
                            <div className="col-md-12 col-xl-6 px-1">
                                <Attribute name="Atk" value={CharacterModel.sumAttribute?.(context.character, Atk)} />
                                <Attribute name="MAtk" value={CharacterModel.sumAttribute?.(context.character, Matk)} />
                                <Attribute name="Hit" value={CharacterModel.sumAttribute?.(context.character, Hit)} />
                                <Attribute name="Critical" value={CharacterModel.sumAttribute?.(context.character, Critical)} />
                            </div>
                            <div className="col-md-12 col-xl-6 ps-1 pe-0">
                                <Attribute name="Def" value={context.character.hardDef + " + " + context.character.softDef} />
                                <Attribute name="MDef" value={context.character.hardMdef + " + " + context.character.softMDef} />
                                <Attribute name="Flee" value={CharacterModel.sumAttribute?.(context.character, Flee)} />
                                <Attribute name="Aspd" value={CharacterModel.calAspd?.(context.character)} />
                            </div>
                            <div className="col ps-1 pe-0">
                                <Attribute name="Status Point" value={CharacterModel.calRemainStatusPoint?.(context.character)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}