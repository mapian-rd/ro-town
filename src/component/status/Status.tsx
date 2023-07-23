import { useContext } from "react";
import { Atk, Critical, Def, Flee, Hit, Matk, Mdef } from "../../constraint/attributeType";
import { StatusTypeList } from "../../constraint/status";
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
        console.debug("updateStatus");
        let status = context.character.status
        status?.set(statusType, value)
        api.updateCharacter({ status })
    }

    const statusList = StatusTypeList.map((statusType) => {
        return <StatusRow
            key={statusType.name}
            name={statusType.name}
            value={context.character.status?.get(statusType)}
            onValueChange={(value) => updateStatus(statusType, value)}
            plus={CharacterModel.getBonusStatus?.(context.character, statusType)}
        />
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
                                <Attribute name="Atk" value={CharacterModel.statusAtk?.(context.character) + " + " + CharacterModel.getSecondAtk?.(context.character, Atk)} />
                                <Attribute name="MAtk" value={CharacterModel.statusAtk?.(context.character, Matk) + " + " + CharacterModel.getSecondAtk?.(context.character, Matk)} />
                                <Attribute name="Hit" value={CharacterModel.calHit?.(context.character)} />
                                <Attribute name="Critical" value={CharacterModel.calCrit?.(context.character)} />
                            </div>
                            <div className="col-md-12 col-xl-6 ps-1 pe-0">
                                <Attribute name="Def" value={CharacterModel.calSoftDef(context.character) + " + " + CharacterModel.sumAttribute(context.character, Def)} />
                                <Attribute name="MDef" value={CharacterModel.calSoftMdef(context.character) + " + " + CharacterModel.sumAttribute(context.character, Mdef)} />
                                <Attribute name="Flee" value={CharacterModel.calFlee?.(context.character)} />
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