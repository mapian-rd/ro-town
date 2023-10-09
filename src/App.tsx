import React, { useContext, useState, useEffect, useRef, ChangeEvent } from 'react';
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
import ItemBuff from './component/buff/ItemBuff';
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
import BuffStorage from './component/buff/BuffStorage';
import AddBuff from './component/buff/AddBuff';
import { CharacterExport } from './data/model/Characterv2';
import { replacer } from './context/ContextProvider';
import { ExportData } from './data/model/Exportable';
import { AttributeTypeEnum } from './data/model/attributeType';

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

const fr = new FileReader()

function App() {
  console.log("App")
  const context = useContext(AppContext);
  const api = useContext(AppApiContext);
  console.log("App", context.viewItem)

  const [showCharacter, setShowCharacter] = useState<boolean>(true)
  const [showPet, setShowPet] = useState<boolean>(true)
  const [showCombat, setShowCombat] = useState<boolean>(true)
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false)
  const [showStorage, setShowStorage] = useState<boolean>(false)
  const [showAddItem, setShowAddItem] = useState<boolean>(false)
  const [showItemInfo, setShowItemInfo] = useState<boolean>(false)
  const [showBuffStorage, setShowBuffStorage] = useState<boolean>(false)
  const [showAddBuff, setShowAddBuff] = useState<boolean>(false)
  const inputFile = useRef<HTMLInputElement | null>(null)

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
    const imgId = Item.getImgId(item.id, item.imgId)
    let imgSrc
    if (imgId !== -1) {
      imgSrc = `https://static.divine-pride.net/images/skill/${imgId}.png`
    }
    return {
      id: item.id,
      name: item.name,
      imgSrc: imgSrc,
      isActive: item.isActive,
    }
  })
  const skillbuff = skillList.map(item => {
    const imgId = Item.getImgId(item.id, item.imgId)
    return {
      id: item.id,
      name: item.name,
      imgSrc: `https://static.divine-pride.net/images/skill/${imgId}.png`,
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
  console.log("App", context.character.itemBuff)
  const ownItemBuff = context.character.itemBuff.map(item => {
    const imgId = Item.getImgId(item.id, item.imgId)
    return {
      id: item.id,
      name: item.name,
      imgSrc: `https://static.divine-pride.net/images/items/item/${imgId}.png`,
      isActive: item.isActive,
    }
  })

  function onSaveClick() {
    const element = document.createElement("a");
    const data = ExportData.getExportData(context)
    console.log("onSaveClick", data)
    const textFile = new Blob([JSON.stringify(data, replacer)], { type: 'text/plain' });
    console.log("onSaveClick", textFile)
    element.href = URL.createObjectURL(textFile);
    element.download = context.character.name + ".json";
    document.body.appendChild(element);
    element.click();
  }

  function onLoadClick() {
    inputFile.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {

      fr.onloadend = (event) => {
        if (fr.result) {
          localStorage.setItem("data", fr.result.toString())
          window.location.reload();
        }
      }
      fr.readAsText(e.target.files[0])
    }
  };

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

  function handleItemBuffChange(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    let { checked } = event.target;
    const item = context.character.itemBuff.find(item => item.id === id)
    console.log("handleItemBuffChange", item, checked)
    if (item) {
      item.isActive = Boolean(checked)
      console.log("handleItemBuffChange", context.character.itemBuff)
      api.updateCharacter({ itemBuff: context.character.itemBuff });
    }
  };

  function handleSkillBuffChange(event: React.ChangeEvent<HTMLInputElement>, id: string) {
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

  function addClick(list: Item[], found: boolean, id: string) {
    if (found) {
      const item = list.findIndex(item => item.id === id)
      if (item !== -1) {
        context.character.itemBuff.splice(item, 1)
      }
    } else {
      const newItem = [...context.buffStorage ?? [], ...itemBuffDatabase].find(item => item.id === id)
      if (newItem) {
        context.character.itemBuff.push({ ...newItem, isActive: false })
      }
    }
    api.updateCharacter({ itemBuff: context.character.itemBuff });
  }

  function onBuffClick(item: Item) {
    api.setViewItem(item)
  }
  
  function onDeleteBuffClick(id: string) {
    api.deleteBuffStorage(id)
}

  useEffect(() => {
    setShowCharacter(false)
    setShowPet(false)
    setShowCombat(false)
    setShowMoreStatus(false)
    setShowStorage(false)
    setShowAddItem(false)
    setShowAddBuff(false)
    setShowItemInfo(false)
    setShowBuffStorage(false)
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
    } else if (context.viewState === ViewState.BuffStorage) {
      setShowPet(true)
      setShowBuffStorage(true)
      setShowItemInfo(true)
    } else if (context.viewState === ViewState.AddBuff) {
      setShowBuffStorage(true)
      setShowAddBuff(true)
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
          <div className={'col-md-4 h-100' + (showCharacter ? '' : ' d-none')}>
            <button onClick={onSaveClick}>Import</button>
            <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} accept=".json" onChange={handleFileChange} />
            <button onClick={onLoadClick}>Export</button>
            <Character />
            <StatusBox />
            <Equipment title='General Equipment' type={eqipmentTypes} />
            <Equipment title='Special Equipment' type={spEqipmentTypes} />
          </div>
          <div className={'col-md-4 d-flex flex-column mh-0 h-100' + (showPet ? '' : ' d-none')} >
            <div className={'row' + (showBuffStorage ? '' : ' pt-4')}>
              <div className={'col' + (showBuffStorage ? '' : ' d-none')}>
                <button onClick={() => api.setViewState(ViewState.Normal)}>Back</button>
              </div>
            </div>
            <div className={(showBuffStorage ? 'd-none' : '')}>
              <Pet />
            </div>
            <div className='flex-grow-1 mh-0'>
              <div className={(showBuffStorage ? 'h-100' : 'h-50')}>
                <ItemBuff
                  title='Item Buff'
                  list={ownItemBuff}
                  handleBuffChange={handleItemBuffChange}
                  onClick={showBuffStorage ? undefined : () => api.setViewState(ViewState.BuffStorage)}
                />
              </div>
              <div className={'h-50' + (showBuffStorage ? ' d-none' : '')}>
                <ItemBuff
                  title='Skill Buff'
                  list={[...ownSkillBuff, ...skillbuff]}
                  handleBuffChange={handleSkillBuffChange}
                />
              </div>
            </div>
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

          <div className={'col-md-4 d-flex flex-column h-100' + (showBuffStorage ? '' : ' d-none')}>
            <div className='row'>
              <div className='col'>
                <button className={(showAddBuff ? '' : 'd-none')} onClick={() => api.setViewState(ViewState.BuffStorage)}>Back</button>
              </div>
              <div className={'col-auto' + (showAddBuff ? ' d-none' : '')}>
                <button onClick={() => api.setViewState(ViewState.AddBuff)}>Add Custom Item</button>
              </div>
            </div>
            <BuffStorage
              list={context.character.itemBuff}
              storage={[...context.buffStorage ?? [], ...itemBuffDatabase]}
              addClick={addClick}
              onClick={onBuffClick}
              onDeleteClick={onDeleteBuffClick}
            />
          </div>

          <div className={'col-md-4  h-100' + (showAddItem ? '' : ' d-none')}>
            <AddItem />
          </div>

          <div className={'col-md-4  h-100' + (showAddBuff ? '' : ' d-none')}>
            <AddBuff />
          </div>

          <div className={'col-md-4 pt-4 d-flex flex-column h-100' + (showCombat ? '' : ' d-none')}>
            <Monster monster={context.monster} />
            <Combat />
          </div>

          <div className={'col-md-4 d-flex flex-column h-100 align-items-start' + (showMoreStatus ? '' : ' d-none')}>
            <button onClick={() => api.setViewState(ViewState.Normal)}>Back</button>
            <MoreStatus
              final={context.calculatedAttribute.finalAttributeList}
              baseSkillDmg={context.calculatedAttribute.baseSkillAttributeList}
              skillDmg={context.calculatedAttribute.skillAttributeList}
              vct={context.calculatedAttribute.vctAttributeList}
              allVct={api.getRaw(AttributeTypeEnum.VctPercent)}
              fct={api.getRaw(AttributeTypeEnum.Fct)}
              fctP={api.getFinal(AttributeTypeEnum.FctPercent)}
              cooldown={context.calculatedAttribute.cooldownAttributeList}
            />
          </div>

          <div className={'col-md-4 pt-4 d-flex flex-column h-100' + (showItemInfo ? '' : ' d-none')}>
            <ItemDescription item1={context.viewItem} character={context.character} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
