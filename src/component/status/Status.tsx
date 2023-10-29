import { useContext, useEffect, useState } from "react";
import { StatusTypeList } from "../../data/constraint/attributeType";
import { AppApiContext } from "../../context/AppApiContext";
import { AppContext, ViewState } from "../../context/AppContext";
import { CharacterModel } from "../../data/model/Characterv1";
import { Status } from "../../data/model/status";
import Box from "../Box";
import Attribute from "./Attribute";
import StatusRow from "./StatusRowProps";
import { checkMinMax } from "../../common/extension";
import { AttributeTypeEnum } from "../../data/model/attributeType";
import { DescriptionNumber } from "../../data/model/Formula";

let firstStatusList: JSX.Element[] = []

export default function StatusBox() {
    console.log("StatusBox")
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    if (firstStatusList.length === 0) {
        firstStatusList = getStatusList()
    }

    const [statusList, setStatusList] = useState<JSX.Element[]>(firstStatusList)
    const [atk, setAtk] = useState<number>(0)
    const [matk, setMAtk] = useState<number>(0)
    const [hit, setHit] = useState<DescriptionNumber>(new DescriptionNumber())
    const [critical, setCritical] = useState<DescriptionNumber>(new DescriptionNumber())
    const [softDef, setSoftDef] = useState<DescriptionNumber>(new DescriptionNumber())
    const [def, setDef] = useState<DescriptionNumber>(new DescriptionNumber())
    const [softMdef, setSoftMdef] = useState<DescriptionNumber>(new DescriptionNumber())
    const [mdef, setMdef] = useState<DescriptionNumber>(new DescriptionNumber())
    const [flee, setFlee] = useState<DescriptionNumber>(new DescriptionNumber())
    const [aspd, setAspd] = useState<DescriptionNumber>(new DescriptionNumber())

    function getStatusList(): JSX.Element[] {
        return Array.from(StatusTypeList).map(([key, statusType]) => {
            console.log("statusList")
            return <StatusRow
                key={statusType.name}
                name={statusType.name}
                value={Status.get(context.character.status, key)}
                onChange={(e) => updateStatus(key, e)}
                plus={Status.get(context.calculatedAttribute.bonusStatus, key) + api.getRaw(key).number}
                clazz={context.character.clazz}
            />
        })
    }

    function updateStatus(statusType: AttributeTypeEnum, event: React.ChangeEvent<HTMLInputElement>): number {
        console.debug("updateStatus");
        let { value, min, max } = event.target;
        let newValue = checkMinMax(Number(value), Number(min), Number(max));
        let status = context.character.status
        Status.set(status, statusType, newValue)
        api.updateCharacter({ status })
        return newValue
    }

    function onClick() {
        api.setViewState(ViewState.MoreStatus)
    }

    useEffect(() => {
        setStatusList(getStatusList())
        firstStatusList = []
    }, [context.character, context.calculatedAttribute.calRawCall])

    useEffect(() => {
        setAtk(
            context.calculatedAttribute.rWeaponAtk
            + context.calculatedAttribute.rRefineAtk
            + api.getRaw(AttributeTypeEnum.Atk).number
        )
        setMAtk(
            context.calculatedAttribute.rWeaponMatk
            + context.calculatedAttribute.lWeaponMatk
            + context.calculatedAttribute.rRefineMatk
            + context.calculatedAttribute.lRefineMatk
            + api.getRaw(AttributeTypeEnum.Matk).number
        )
        setHit(api.getFinal(AttributeTypeEnum.Hit))
        setCritical(api.getFinal(AttributeTypeEnum.Critical))
        setSoftDef(api.getFinal(AttributeTypeEnum.SoftDef))
        setDef(api.getFinal(AttributeTypeEnum.Def))
        setSoftMdef(api.getFinal(AttributeTypeEnum.SoftMdef))
        setMdef(api.getFinal(AttributeTypeEnum.Mdef))
        setFlee(api.getFinal(AttributeTypeEnum.Flee))
        setAspd(api.getFinal(AttributeTypeEnum.Aspd))
    }, [context.calculatedAttribute])

    return (
        <Box title="Status">
            <div>
                <div className="row mx-0">
                    <div className="col-5 col-xl-6 col-xxl-5 ps-0 pe-1">
                        {statusList}
                    </div>
                    <div className="col-7 col-xl-6 col-xxl-7 px-0">
                        <div className="row mx-0">
                            <div className="col-12 col-sm-6 col-lg-12 col-xxl-6 px-1">
                                <Attribute name="Atk" value={context.calculatedAttribute.statusAtk + " + " + atk} />
                                <Attribute name="MAtk" value={context.calculatedAttribute.statusMatk + " + " + matk} />
                                <Attribute name="Hit" value={hit.number} />
                                <Attribute name="Critical" value={critical.number} />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-12 col-xxl-6 ps-1 pe-0">
                                <Attribute name="Def" value={softDef.number + " + " + def.number} />
                                <Attribute name="MDef" value={softMdef.number + " + " + mdef.number} />
                                <Attribute name="Flee" value={flee.number} />
                                <Attribute name="Aspd" value={aspd.number} />
                            </div>
                            <div className="col ps-1 pe-0">
                                <Attribute name="Status Point" value={context.calculatedAttribute.remainStatusPoint} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}