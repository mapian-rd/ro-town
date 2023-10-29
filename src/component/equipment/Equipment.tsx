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

    function onClick(slot: EquipmentSlot, item?: CraftEqiupment) {
        if (context.viewState === ViewState.AddItem || context.viewState === ViewState.EditItem) {
            api.setViewItem2(item)
        } else {
            api.setViewItem(item)
        }
        if (context.mode === "storage") {
            if (!item) {
                api.setViewState(ViewState.AddItem)
            }
        } else {
            api.setChangeSlot(slot)
            api.setEditItem(item) // set undefined
            api.setViewState(ViewState.ChangeItem)
        }
    }

    function onDrop(event: React.DragEvent<HTMLDivElement>) {
        console.log("onDrop")
        event.preventDefault();
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

    function onEditClearClick() {
        const ids = new Map<string, boolean>()
        Array.from(props.type).forEach(([key, value]) => {
            let equipment = context.character.equipmentMap.get(key)
            if (equipment) {
                if (!ids.get(equipment.id)) {
                    if (context.mode === "storage") {
                        api.unequip(equipment)
                    } else {
                        api.deleteItemStorage(equipment.id)
                    }
                    ids.set(equipment.id, true)
                }
            }
        })

        if (context.changeSlot && Array.from(props.type.keys()).includes(context.changeSlot)) {
            api.setEditItem(undefined)
            api.setViewItem(undefined)
        }
    }

    // const api = useContext(AppApiContext);
    const eqipmentList = Array.from(props.type).map(([key, value]) => {
        let equipment = context.character.equipmentMap.get(key)

        return <EqiupmentCol
            key={"equipment-" + key}
            type={value}
            equipment={equipment}
            onDrag={onDrag}
            onClick={() => onClick(key, equipment)}
        />
    })

    let buttonText: string | undefined
    if (context.viewState === ViewState.AddItem || context.viewState === ViewState.EditItem || context.viewState === ViewState.ChangeItem) {
        if (context.mode === 'storage') {
            buttonText = "Unequip All"
        } else {
            buttonText = "Remove All"
        }
    }

    return (
        <div onDrop={onDrop} onDragOver={allowDrop}>
            <Box title={props.title} buttonText={buttonText} onClick={onEditClearClick}>
                <div className="row row-cols-2 justify-content-between">
                    {eqipmentList}
                </div>
            </Box>
        </div>

    )
}