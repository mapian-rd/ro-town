import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { AppApiContext } from "../../context/AppApiContext";
import { AppContext, ViewState } from "../../context/AppContext";
import { itemBuffDatabase } from "../../data/database/buff";
import { Item, Named } from "../../data/model/Itemv2";
import Box from "../Box";

const status10 = ["12883", "14886"]
const status20 = ["12429", "12430", "12431", "12432", "12433"]
const atkMatk = ["14862"]
const combatPil = ["12791", "12792"]
const biscuitStick = ["102121"]
const attackSpeedA = ["645", "656", "657"]
const attackSpeedB = ["12414", "12437"]
const scroll = ["23204", "14531"]
const other = ["12320", "12321", "12424", "12427", "12436", "9896", "14869", "101097", "23050"]

export default function BuffStorageView() {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);

    function onClick(item: Named) {
        if (context.viewState === ViewState.AddBuff) {
            api.setViewItem2(item)
        } else {
            api.setViewItem(item)
        }
    }

    function addItemBuffClick(found: boolean, id: string) {
        if (found) {
            const item = context.character.itemBuff.findIndex(item => item.id === id)
            if (item !== -1) {
                context.character.itemBuff.splice(item, 1)
            }
        } else {
            const newItem = [...context.buffStorage ?? [], ...itemBuffDatabase].find(item => item.id === id)
            if (newItem) {
                context.character.itemBuff.push({ ...newItem, isActive: true })
            }
        }
        api.updateCharacter({ itemBuff: context.character.itemBuff });
    }

    function onDeleteBuffClick(id: string) {
        api.deleteBuffStorage(id)
    }

    function getItemCom(item: Item, showDelete: boolean = false): JSX.Element {
        const found = context.character.itemBuff.findIndex(buff => {
            return buff?.id === item.id
        }) !== -1
        const imgId = Item.getImgId(item.id, item.imgId)
        const imgSrc = `https://static.divine-pride.net/images/items/item/${imgId}.png`
        return (
            <div
                id={'buffStorage-' + item.id}
                className={(context.viewItem?.id === item.id) ? 'row storage-item rounded select-ed' : 'row'}
            >
                <div className={"col-auto p-0" + (showDelete ? '' : ' d-none')}>
                    <button className="h-100" onClick={() => onDeleteBuffClick(item.id)}><MdDelete /></button>
                </div>
                <div className="col cursor-pointer" onClick={() => onClick(item)}>
                    <div className="row">
                        <div className="col-auto">
                            <img className="w-100 my-2" src={imgSrc} alt="Item" />
                        </div>
                        <div className='col ps-0 d-flex align-items-center text-break'>
                            {item.name}
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <button
                        className="h-100"
                        onClick={() => addItemBuffClick(found, item.id)}
                    >
                        {found ? "Remove" : "Add"}
                    </button>
                </div>
            </div>
        )
    }

    function getItemList(idList: string[]): JSX.Element[] {
        return idList.flatMap(id => {
            const item = itemBuffDatabase.find(item => item.id === id)
            if (!item) return []
            return getItemCom(item)
        })
    }

    const status10Com = getItemList(status10)
    const status20Com = getItemList(status20)
    const atkMatkCom = getItemList(atkMatk)
    const combatPilCom = getItemList(combatPil)
    const biscuitStickCom = getItemList(biscuitStick)
    const attackSpeedACom = getItemList(attackSpeedA)
    const attackSpeedBCom = getItemList(attackSpeedB)
    const scrollCom = getItemList(scroll)
    const otherCom = getItemList(other)

    const customCom = context.buffStorage.flatMap(buff => {
        return getItemCom(buff, true)
    })

    return (
        <div className="d-flex flex-column h-100">
            <div className="col-12">
                <button onClick={() => api.setViewState(ViewState.Normal)}>Confirm</button>
            </div>
            <div className="row h-100">
                <div className="col-md-4 d-flex flex-column h-100 overflow-auto">
                    <Box title="10 Status Food (Strongest)">
                        {status10Com}
                    </Box>
                    <Box title="20 Status Food">
                        {status20Com}
                    </Box>
                    <Box title="Attack Speed Potion (Strongest)">
                        {attackSpeedACom}
                    </Box>
                    <Box title="Attack Speed Food">
                        {attackSpeedBCom}
                    </Box>
                    <Box title="Battle Pil (Strongest)">
                        {combatPilCom}
                    </Box>
                </div>
                <div className="col-md-4 d-flex flex-column h-100 overflow-auto">
                    <Box className="flex-grow-1" title="Food (Strongest)">
                        {atkMatkCom}
                    </Box>
                    <Box className="flex-grow-1" title="Biscuit Stick">
                        {biscuitStickCom}
                    </Box>
                    <Box className="flex-grow-1" title="Scroll">
                        {scrollCom}
                    </Box>
                </div>
                <div className="col-md-4 d-flex flex-column h-100">
                    <Box className="flex-grow-1" title="Other">
                        {otherCom}
                    </Box>
                    <Box className="flex-grow-1" title="Custom" buttonText="Add custom" onClick={() => api.setViewState(ViewState.AddBuff)}>
                        {customCom}
                    </Box>
                </div>
            </div>
        </div>

    )
}