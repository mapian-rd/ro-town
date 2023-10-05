import { EquipableType } from "../../data/model/itemType";
import { CraftEqiupment } from "../../data/model/CraftEquipment";

interface EquipmentColProps {
    type: EquipableType;
    equipment?: CraftEqiupment;
    onDrag?: (event: React.DragEvent<HTMLDivElement>, item: CraftEqiupment) => void;
    onClick?: (item: CraftEqiupment) => void;
}

export function EqiupmentCol(props: EquipmentColProps) {
    let element: JSX.Element
    if (props.equipment) {
        element = (
            <div
                id={"equipment-" + props.equipment.craftId}
                className="col-5 equipment-col"
                draggable
                onDragStart={(event) => (props.onDrag && props.equipment) ? props.onDrag(event, props.equipment) : undefined}
                onClick={() => (props.onClick && props.equipment) ? props.onClick(props.equipment) : undefined}
            >
                <div className="row">
                    <div className="col-4 my-2 pe-0">
                        <img className="h-100" src={`https://static.divine-pride.net/images/items/item/${props.equipment.itemId}.png`} alt="Item" />
                    </div>
                    <div className="col px-1 equipment-ed">
                        {props.equipment.craftName}
                    </div>
                </div>
            </div>
        )
    } else {
        element = (
            <div className="col-5 equipment-col">
                <div className="row">
                    <div className="col-4 my-2">
                        <img className="w-100" src="./item_invert.png" alt="Item" />
                    </div>
                    <div className="col px-1 equipment-no">
                        {props.type.hint ?? ""}
                    </div>
                </div>
            </div>
        )
    }
    return (
        element
    )
}