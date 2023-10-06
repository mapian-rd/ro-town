import React, { useContext, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Character } from './component/Character';
import { CraftEquipment } from './CraftEquipment';
import { ItemStorage } from './ItemStorage';
import StatusBox from './component/status/Status';
import { AppContext, ViewState } from './context/AppContext';
import { Equipment } from './component/equipment/Equipment';
import { armor, armorShadow, earringShadow, garment, garmentCostume, lAccessery, lower, lowerCostume, lWeapon, middle, middleCostume, pendantShadow, rAccessery, rWeapon, sheidShadow, shoes, shoesShadow, upper, upperCostume, weaponShadow } from './Constraints';
import { EquipableType } from './data/model/itemType';
import classNames from 'classnames';
import Pet from './component/Pet';
import ItemBuff from './component/ItemBuff';
import Monster from './component/Monster';
import { Combat } from './component/Combat';
import { EquipmentSlot } from "./data/model/EquipmentSlot";
import MoreStatus from './component/MoreStatus';
import { AppApiContext } from './context/AppApiContext';
import Storage from './component/Storage';
import AddItem from './component/AddItem';
import ItemDescription from './component/ItemDescription';
import { PassiveSkill, Skill } from './data/model/skill';
import { Item } from './data/model/Itemv2';
import { itemDatabase } from './data/database/item';
import { itemBuffDatabase, skillBuffDatabase } from './data/database/buff';

export const optionStyle = {
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

const eqipmentTypes: Map<EquipmentSlot, EquipableType> = new Map([
  [EquipmentSlot.upper, upper], [EquipmentSlot.middle, middle],
  [EquipmentSlot.lower, lower], [EquipmentSlot.armor, armor],
  [EquipmentSlot.rWeapon, rWeapon], [EquipmentSlot.lWeapon, lWeapon],
  [EquipmentSlot.garment, garment], [EquipmentSlot.shoes, shoes],
  [EquipmentSlot.rAccessery, rAccessery], [EquipmentSlot.lAccessery, lAccessery]])
const spEqipmentTypes: Map<EquipmentSlot, EquipableType> = new Map([
  [EquipmentSlot.upperCostume, upperCostume], [EquipmentSlot.middleCostume, middleCostume],
  [EquipmentSlot.lowerCostume, lowerCostume], [EquipmentSlot.armorShadow, armorShadow],
  [EquipmentSlot.weaponShadow, weaponShadow], [EquipmentSlot.sheidShadow, sheidShadow],
  [EquipmentSlot.garmentCostume, garmentCostume], [EquipmentSlot.shoesShadow, shoesShadow],
  [EquipmentSlot.earringShadow, earringShadow], [EquipmentSlot.pendantShadow, pendantShadow]])

function App() {
  console.log("App")
  const context = useContext(AppContext);
  const api = useContext(AppApiContext);

  const [showCharacter, setShowCharacter] = useState<boolean>(true)
  const [showPet, setShowPet] = useState<boolean>(true)
  const [showCombat, setShowCombat] = useState<boolean>(true)
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false)
  const [showStorage, setShowStorage] = useState<boolean>(false)
  const [showAddItem, setShowAddItem] = useState<boolean>(false)
  const [showItemInfo, setShowItemInfo] = useState<boolean>(false)

  const passiveSkillList = context.character.clazz.passiveSkill ?? []

  const skillList = [...passiveSkillList, ...skillBuffDatabase]
  context.character.skillBuff.forEach(item => {
    const found = skillList.findIndex(skill => skill.id === item.id)
    console.log("findIndex", found)
    if (found !== -1) {
      skillList.splice(found, 1)
    }
    console.log("findIndex", skillList)
  })
  const ownSkillBuff = context.character.skillBuff.map(item => {
    return {
      id: item.id,
      name: item.name,
      imgSrc: `https://static.divine-pride.net/images/skill/${item.id}.png`,
      isActive: item.isActive,
    }
  })
  const skillbuff = skillList.map(item => {
    return {
      id: item.id,
      name: item.name,
      imgSrc: `https://static.divine-pride.net/images/skill/${item.id}.png`,
      isActive: false,
    }
  })

  const itemBuffList = [...itemBuffDatabase]
  context.character.itemBuff.forEach(item => {
    const found = itemBuffList.findIndex(skill => skill.id === item.id)
    if (found !== -1) {
      itemBuffList.splice(found, 1)
    }
  })
  const ownItemBuff = context.character.itemBuff.map(item => {
    return {
      id: item.id,
      name: item.name,
      imgSrc: `https://static.divine-pride.net/images/items/${item.id}.png`,
      isActive: item.isActive,
    }
  })
  const itemBuff = itemBuffList.map(item => {
    return {
      id: item.id,
      name: item.name,
      imgSrc: `https://static.divine-pride.net/images/items/${item.id}.png`,
      isActive: false,
    }
  })

  function onDrop(event: React.DragEvent<HTMLDivElement>) {
    console.log("onDrop")
    event.preventDefault();
    if (context.dragItem) {
      api.unequip(context.dragItem)
      context.dragItem = undefined
    }
  }

  function allowDrop(event: React.DragEvent<HTMLDivElement>) {
    console.log("allowDrop")
    event.preventDefault();
  }

  function handleItemBuffChange(event: React.ChangeEvent<HTMLInputElement>, id: number) {
    let { checked } = event.target;
    const item = context.character.itemBuff.find(item => item.id === id)
    if (item) {
      item.isActive = Boolean(checked)
    } else {
      const newItem = itemBuffDatabase.find(item => item.id === id)
      if (newItem) {
        context.character.itemBuff.push({ ...newItem, isActive: Boolean(checked) })
      }
    }
    console.log("handleItemBuffChange", context.character.itemBuff)
    api.updateCharacter({ itemBuff: context.character.itemBuff });
  };

  function handleSkillBuffChange(event: React.ChangeEvent<HTMLInputElement>, id: number) {
    let { checked } = event.target;
    const item = context.character.skillBuff.find(item => item.id === id)
    if (item) {
      console.log("handleSkillBuffChange", checked)
      item.isActive = checked
    } else {
      const newItem = [...passiveSkillList, ...skillBuffDatabase].find(item => item.id === id)
      if (newItem) {
        context.character.skillBuff.push({ ...newItem, isActive: checked })
      }
    }
    console.log("handleSkillBuffChange", context.character.skillBuff)
    api.updateCharacter({ skillBuff: context.character.skillBuff });
  };

  useEffect(() => {
    setShowCharacter(false)
    setShowPet(false)
    setShowCombat(false)
    setShowMoreStatus(false)
    setShowStorage(false)
    setShowAddItem(false)
    setShowItemInfo(false)
    if (context.viewState === ViewState.MoreStatus) {
      setShowCharacter(true)
      setShowPet(true)
      setShowMoreStatus(true)
    } else if (context.viewState === ViewState.Storage) {
      setShowCharacter(true)
      setShowStorage(true)
      setShowItemInfo(true)
    } else if (context.viewState === ViewState.AddItem) {
      setShowStorage(true)
      setShowAddItem(true)
      setShowItemInfo(true)
    } else {
      setShowCharacter(true)
      setShowPet(true)
      setShowCombat(true)
    }
  }, [context.viewState])

  return (
    <div className='App'>
      <header className='App-header'>
        RO Calculator
      </header>
      <body className='App-body container mb-0 vh-100 py-2'>
        <div className='row h-100'>
          <div className={'col-md-4' + (showCharacter ? '' : ' d-none')}>
            <button>Save</button>
            <button>Load</button>
            <Character />
            <StatusBox />
            <Equipment title='General Equipment' type={eqipmentTypes} />
            <Equipment title='Special Equipment' type={spEqipmentTypes} />
          </div>
          <div className={'col-md-4 pt-4 d-flex flex-column' + (showPet ? '' : ' d-none')} >
            <Pet />
            <ItemBuff title='Item Buff' list={[...ownItemBuff, ...itemBuff]} handleBuffChange={handleItemBuffChange} />
            <ItemBuff title='Skill Buff' list={[...ownSkillBuff, ...skillbuff]} handleBuffChange={handleSkillBuffChange} />
          </div>

          <div className={'col-md-4 d-flex flex-column h-100' + (showStorage ? '' : ' d-none')}>
            <div className='row'>
              <div className='col'>
                <button onClick={() => api.setViewState(showAddItem ? ViewState.Storage : ViewState.Normal)}>Back</button>
              </div>
              <div className={'col-auto' + (showAddItem ? ' d-none' : '')}>
                <button onClick={() => api.setViewState(ViewState.AddItem)}>Add New Item</button>
              </div>
            </div>
            <Storage />
          </div>

          <div className={'col-md-4  h-100' + (showAddItem ? '' : ' d-none')}>
            <AddItem />
          </div>

          <div className={'col-md-4 pt-4 d-flex flex-column h-100' + (showCombat ? '' : ' d-none')}>
            <Monster monster={context.monster} />
            <Combat />
          </div>

          <div className={'col-md-4 d-flex flex-column h-100 align-items-start' + (showMoreStatus ? '' : ' d-none')}>
            <button onClick={() => api.setViewState(ViewState.Normal)}>Back</button>
            <MoreStatus
              final={context.calculatedAttribute.finalAttributeList}
              skillDmg={context.calculatedAttribute.skillAttributeList}
            />
          </div>

          <div className={'col-md-4 pt-4 d-flex flex-column' + (showItemInfo ? '' : ' d-none')}>
            <ItemDescription item1={context.viewItem} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
