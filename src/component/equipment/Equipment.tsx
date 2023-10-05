import { useContext } from "react";
import { AppApiContext } from "../../context/AppApiContext";
import { AppContext, ViewState } from "../../context/AppContext";
import { CraftEqiupment } from "../../data/model/CraftEquipment";
import { EquipmentSlot } from "../../data/model/EquipmentSlot";
import { EquipableType } from "../../data/model/itemType";
import Box from "../Box";
import { EqiupmentCol } from "./EquipmentCol";


interface EquipmentProps {
    title?: string;
    type: Map<EquipmentSlot, EquipableType>
}

export function Equipment(props: EquipmentProps) {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    function onClick(item: CraftEqiupment) {
        console.log("onClick", item.craftId)
        if (context.viewState === ViewState.Storage) {
            api.setViewItem(item)
        }
    }

    function onDrop(event: React.DragEvent<HTMLDivElement>) {
        console.log("onDrop")
        event.preventDefault();
        console.log("onDrop", context.dragItem)
        if (context.dragItem) {
            event.preventDefault();
            api.equip(context.dragItem)
            context.dragItem = undefined
        }
    }

    function onDrag(event: React.DragEvent<HTMLDivElement>, item: CraftEqiupment) {
        console.log("onDrag Equipment")
        api.setDragItem(item)
    }

    function allowDrop(event: React.DragEvent<HTMLDivElement>) {
        console.log("allowDrop")
        event.preventDefault();
    }

    // const api = useContext(AppApiContext);
    const eqipmentList = Array.from(props.type).map(([key, value]) => {
        let equipment = context.character.equipmentMap.get(key)

        return <EqiupmentCol
            key={"equipment-" + key}
            type={value}
            equipment={equipment}
            onDrag={onDrag}
            onClick={onClick}
        />
    })

    return (
        <div onDrop={onDrop} onDragOver={allowDrop}>
            <Box title={props.title} buttonText="Edit" onClick={() => api.setViewState(ViewState.Storage)}>
                <div className="row row-cols-2 justify-content-between">
                    {eqipmentList}
                </div>
            </Box>
        </div>

    )
}