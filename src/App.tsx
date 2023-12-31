import React, { useContext, useState, useEffect, useRef, ChangeEvent } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Character } from './component/Character';
import StatusBox from './component/status/Status';
import { AppContext, ViewState } from './context/AppContext';
import { Equipment } from './component/equipment/Equipment';
import { armor, armorShadow, earringShadow, garment, garmentCostume, lAccessery, lower, lowerCostume, lWeapon, middle, middleCostume, pendantShadow, rAccessery, rWeapon, sheidShadow, shoes, shoesShadow, upper, upperCostume, weaponShadow } from './Constraints';
import { EquipableType } from './data/model/itemType';
import classNames from 'classnames';
import Pet from './component/Pet';
import ItemBuff from './component/buff/ItemBuff';
import Monster from './component/Monster';
import { Combat } from './component/combat/Combat';
import { EquipmentSlot } from "./data/model/EquipmentSlot";
import MoreStatus from './component/MoreStatus';
import { AppApiContext } from './context/AppApiContext';
import Storage from './component/Storage';
import AddItem from './component/AddItem';
import ItemDescription from './component/ItemDescription';
import { Item, Named } from './data/model/Itemv2';
import { itemBuffDatabase } from "./data/database/buff"
import { skillBuffDatabase } from "./data/database/skill"
import BuffStorage from './component/buff/BuffStorage';
import AddBuff from './component/buff/AddBuff';
import { replacer } from './context/ContextProvider';
import { ExportData } from './data/model/Exportable';
import { AttributeTypeEnum } from './data/model/attributeType';
import { MdDarkMode, MdLightMode, MdSettings } from "react-icons/md";
import MoreCombat from './component/combat/MoreCombat';
import { checkMinMax } from './common/extension';
import BuffStorageView from './component/buff/BuffStorageView';
import { debuffDatabase } from './data/database/debuff';
import Box from './component/Box';
import { NewsModel } from './component/NewsModel';

export const optionStyle = {
  container: ({ data, isDisabled, isFocused, isSelected }: any) =>
    classNames(
      'w-100',
      'select-container cursor-pointer',
      isDisabled ? 'select-disable' : '',
    ),
  control: ({ data, isDisabled, isFocused, isSelected }: any) =>
    classNames(
      'select-control',
      isFocused ? 'select-ed' : 'select-none',
      isDisabled ? 'select-disable' : '',
    ),
  singleValue: ({ data, isDisabled, isFocused, isSelected }: any) =>
    classNames(
      'select-singleValue',
    ),
  option: ({ data, isDisabled, isFocused, isSelected }: any) =>
    classNames(
      isFocused ? 'select-hover' : 'select-none',
      isSelected ? 'select-ed' : 'select-none'
    ),
  menu: ({ data, isDisabled, isFocused, isSelected }: any) =>
    classNames(
      'select-menu'
    )
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

  const [showCharacter, setShowCharacter] = useState<boolean>(true)
  const [showBuff, setShowBuff] = useState<boolean>(true)
  const [showMonster, setShowMonster] = useState<boolean>(true)
  const [showCombat, setShowCombat] = useState<boolean>(true)
  const [showMoreCombat, setShowMoreCombatf] = useState<boolean>(false)
  const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false)
  const [showStorage, setShowStorage] = useState<boolean>(false)
  const [showAddItem, setShowAddItem] = useState<boolean>(false)
  const [showItemInfo, setShowItemInfo] = useState<boolean>(false)
  const [showBuffStorage, setShowBuffStorage] = useState<boolean>(false)
  const [showSkillStorage, setShowSkillStorage] = useState<boolean>(false)
  const [showDebuffStorage, setShowDebuffStorage] = useState<boolean>(false)
  const [showAddBuff, setShowAddBuff] = useState<boolean>(false)
  const [showEditItem, setShowEditItem] = useState<boolean>(false)

  const [showSetting, setShowSetting] = useState<boolean>(false)

  const moreCombatRef = useRef<HTMLInputElement | null>(null)
  const itemInfoRef = useRef<HTMLInputElement | null>(null)
  const settingRef = useRef<HTMLDialogElement | null>(null)

  const inputFile = useRef<HTMLInputElement | null>(null)

  const passiveSkillList = context.character.clazz.passiveSkillItem ?? []

  const skillList = [...passiveSkillList, ...skillBuffDatabase]
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
      activeLv: item.activeLv,
      maxLv: item.maxLv,
      suffix: item.suffix,
    }
  })

  const ownItemBuff = context.character.itemBuff.map(item => {
    const imgId = Item.getImgId(item.id, item.imgId)
    return {
      id: item.id,
      name: item.name,
      imgSrc: `https://static.divine-pride.net/images/items/item/${imgId}.png`,
      isActive: item.isActive,
    }
  })

  const debuff = context.character.debuff.map(item => {
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
      activeLv: item.activeLv,
      maxLv: item.maxLv,
      suffix: item.suffix,
    }
  })

  function onSaveClick() {
    const element = document.createElement("a");
    const data = ExportData.getExportData(context)
    const textFile = new Blob([JSON.stringify(data, replacer)], { type: 'text/plain' });
    element.href = URL.createObjectURL(textFile);
    element.download = context.character.name + ".json";
    document.body.appendChild(element);
    element.click();
    console.log("onSaveClick", data, textFile)
  }

  function onClearClick() {
    if (window.confirm("Are you sure to clear all data?")) {
      localStorage.clear()
      window.location.reload();
    }
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
    if (item) {
      item.isActive = Boolean(checked)
      api.updateCharacter({ itemBuff: context.character.itemBuff });
    }
    console.log("handleItemBuffChange", item, checked, context.character.itemBuff)
  };

  function onClickBuff(id: string) {
    const item = context.character.itemBuff.find(item => item.id === id)
    if (item) {
      api.setViewItem(item)
      return
    }
    const skill = context.character.skillBuff.find(item => item.id === id)
    if (skill) {
      api.setViewItem(skill)
      return
    }
    const debuff = context.character.debuff.find(item => item.id === id)
    if (debuff) {
      api.setViewItem(debuff)
      return
    }
  }

  function handleSkillBuffChange(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    let { checked } = event.target;
    const item = context.character.skillBuff.find(item => item.id === id)
    if (item) {
      item.isActive = checked
      api.updateCharacter({ skillBuff: context.character.skillBuff });
    }
  };

  function handleLvSkillChange(event: React.ChangeEvent<HTMLInputElement>, id: string): number {
    let { value, max, min } = event.target;
    let newValue = checkMinMax(Number(value), Number(min), Number(max));
    const item = context.character.skillBuff.find(item => item.id === id)
    if (item && newValue !== item.activeLv) {
      item.activeLv = newValue
      api.updateCharacter({ skillBuff: context.character.skillBuff });
    }
    return newValue
  };

  function handleDebuffChange(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    let { checked } = event.target;
    const item = context.character.debuff.find(item => item.id === id)
    if (item) {
      item.isActive = checked
      api.updateCharacter({ debuff: context.character.debuff });
    }
  };

  function handleLvDebuffChange(event: React.ChangeEvent<HTMLInputElement>, id: string): number {
    let { value, max, min } = event.target;
    let newValue = checkMinMax(Number(value), Number(min), Number(max));
    const item = context.character.debuff.find(item => item.id === id)
    if (item && newValue !== item.activeLv) {
      item.activeLv = newValue
      api.updateCharacter({ debuff: context.character.debuff });
    }
    return newValue
  };

  function addItemBuffClick(list: Named[], found: boolean, id: string) {
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

  function addSkillBuffClick(list: Named[], found: boolean, id: string) {
    if (found) {
      const item = context.character.skillBuff.findIndex(item => item.id === id)
      if (item !== -1) {
        context.character.skillBuff.splice(item, 1)
      }
    } else {
      const newItem = skillList.find(item => item.id === id)
      if (newItem) {
        context.character.skillBuff.push({ ...newItem, isActive: true, activeLv: newItem.maxLv })
      }
    }
    api.updateCharacter({ skillBuff: context.character.skillBuff });
  }

  function addDebuffClick(list: Named[], found: boolean, id: string) {
    if (found) {
      const item = context.character.debuff.findIndex(item => item.id === id)
      if (item !== -1) {
        context.character.debuff.splice(item, 1)
      }
    } else {
      const newItem = debuffDatabase.find(item => item.id === id)
      if (newItem) {
        context.character.debuff.push({ ...newItem, isActive: true, activeLv: newItem.maxLv })
      }
    }
    api.updateCharacter({ debuff: context.character.debuff });
  }

  function onBuffClick(item: Named) {
    if (context.viewState === ViewState.AddBuff) {
      api.setViewItem2(item)
    } else {
      api.setViewItem(item)
    }
  }

  function onDeleteBuffClick(id: string) {
    api.deleteBuffStorage(id)
  }

  function onDeleteDebuffClick(id: string) {
    api.deleteDebuffStorage(id)
  }

  function hideItemDescription() {
    api.setViewItem(undefined)
    api.setViewItem2(undefined)
  }

  useEffect(() => {
    setShowCharacter(false)
    setShowBuff(false)
    setShowMonster(false)
    setShowCombat(false)
    setShowMoreCombatf(false)
    setShowMoreStatus(false)
    setShowStorage(false)
    setShowAddItem(false)
    setShowAddBuff(false)
    setShowBuffStorage(false)
    setShowSkillStorage(false)
    setShowDebuffStorage(false)
    setShowEditItem(false)
    if (context.viewState === ViewState.MoreStatus) {
    } else if (context.viewState === ViewState.Storage
      || context.viewState === ViewState.AddItem) {
      setShowCharacter(true)
      setShowStorage(true)
      setShowAddItem(true)
      setShowCombat(true)
    } else if (context.viewState === ViewState.BuffStorage) {
      setShowBuffStorage(true)
    } else if (context.viewState === ViewState.SkillStorage) {
      setShowCharacter(true)
      setShowSkillStorage(true)
      setShowMonster(true)
      setShowCombat(true)
    } else if (context.viewState === ViewState.DebuffStorage) {
      setShowCharacter(true)
      setShowBuff(true)
      setShowDebuffStorage(true)
      setShowCombat(true)
    } else if (context.viewState === ViewState.AddBuff) {
      setShowBuffStorage(true)
      setShowAddBuff(true)
    } else if (context.viewState === ViewState.MoreCombat) {
      setShowCharacter(true)
      setShowBuff(true)
      setShowMonster(true)
      setShowCombat(true)
      setShowMoreCombatf(true)
    } else if (context.viewState === ViewState.EditItem
      || context.viewState === ViewState.ChangeItem) {
      setShowCharacter(true)
      setShowStorage(true)
      setShowAddItem(true)
      setShowEditItem(true)
      setShowCombat(true)
    } else {
      setShowCharacter(true)
      setShowBuff(true)
      setShowMonster(true)
      setShowCombat(true)
    }
    if (context.mode === "single") {
      setShowStorage(false)
    }
  }, [context.viewState, context.mode])

  useEffect(() => {
    console.log("viewItem", context.viewItem)
    if (context.viewItem) {
      setShowItemInfo(true)
    } else {
      setShowItemInfo(false)
      api.setViewItem2(undefined)
    }
  }, [context.viewItem])

  useEffect(() => {
    moreCombatRef.current?.scrollIntoView()
  }, [showMoreCombat])

  useEffect(() => {
    itemInfoRef.current?.scrollIntoView()
  }, [showItemInfo])

  useEffect(() => {
    if (showSetting) {
      settingRef.current?.showModal()
    } else {
      settingRef.current?.close()
    }
  }, [showSetting])

  return (
    <div className={'App ' + context.theme}>
      <header className='App-header'>
        <div className='row'>
          <div className='col'>
            RO Calculator
          </div>
          <div className='col-auto d-flex'>
            <button className={'header-theme' + (context.theme === '' ? ' d-none' : '')} onClick={() => api.setTheme('')}>
              <MdLightMode size={24} />
            </button>
            <button className={'header-theme' + (context.theme === 'dark' ? ' d-none' : '')} onClick={() => api.setTheme('dark')}>
              <MdDarkMode size={24} />
            </button>
          </div>
          <div className='col-auto d-flex'>
            <button className={'header-theme'} onClick={() => setShowSetting(true)}>
              <MdSettings size={24} />
            </button>
          </div>
        </div>
      </header>
      <body className='App-body container-fluid mb-0 mt-1 vh-100'>
        <div className='row flex-nowrap h-100 pt-3'>
          <div className={'col-md-6 col-lg-4 col-xl-3 h-100 overflow-y-auto' + (showCharacter ? '' : ' d-none')}>
            <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} accept=".json" onChange={handleFileChange} />
            <button onClick={onLoadClick}>Import</button>
            <button onClick={onSaveClick}>Export</button>
            <button onClick={onClearClick}>Clear</button>
            <Character />
            <StatusBox />
            <div className={'w-100 d-flex justify-content-end' + (context.mode === 'single' || context.viewState.includes("Item-") ? ' pt-4' : '')}>
              <button className={(context.mode === 'single' || context.viewState.includes("Item-")) ? 'd-none' : ''} onClick={() => api.setViewState(ViewState.Storage)}>Add Item</button>
            </div>
            <Equipment title='General Equipment' type={eqipmentTypes} />
            <Equipment title='Special Equipment' type={spEqipmentTypes} />
          </div>

          <div className={'col-md-6 col-lg-4 col-xl-3 d-flex flex-column h-100' + (showStorage ? '' : ' d-none')}>
            <div className='row'>
              <div className='col'>
                <button onClick={() => api.setViewState(ViewState.Normal)}>Back</button>
              </div>
              <div className={'col-auto' + (showAddItem ? ' d-none' : '')}>
                <button onClick={() => api.setViewState(ViewState.AddItem)}>Add New Item</button>
              </div>
            </div>
            <Storage />
          </div>

          <div className={'col-md-6 col-lg-4 col-xl-3 pt-4 d-flex flex-column mh-0 h-100' + (showBuff ? '' : ' d-none')} >
            <Pet />
            <div className='flex-grow-1 mh-0'>
              <div className={'h-50'}>
                <ItemBuff
                  title='Item Buff'
                  list={ownItemBuff}
                  handleBuffChange={handleItemBuffChange}
                  onClick={showBuffStorage ? undefined : () => api.setViewState(ViewState.BuffStorage)}
                  onClickBuff={onClickBuff}
                />
              </div>
              <div className={'h-50'}>
                <ItemBuff
                  title='Skill Buff'
                  list={ownSkillBuff}
                  handleBuffChange={handleSkillBuffChange}
                  handleLvChange={handleLvSkillChange}
                  onClick={showSkillStorage ? undefined : () => api.setViewState(ViewState.SkillStorage)}
                  onClickBuff={onClickBuff}
                />
              </div>
            </div>
          </div>

          <div className={'col-sm-6 col-md-8 col-lg-9 d-flex flex-column h-100' + (showBuffStorage ? '' : ' d-none')}>
            <BuffStorageView />
          </div>

          <div className={'col-md-6 col-lg-4 col-xl-3 d-flex flex-column h-100' + (showSkillStorage ? '' : ' d-none')}>
            <div className='row'>
              <div className='col'>
                <button onClick={() => api.setViewState(ViewState.Normal)}>Back</button>
              </div>
            </div>
            <BuffStorage
              title='Buff Storage'
              list={context.character.skillBuff}
              storage={skillList}
              addClick={addSkillBuffClick}
              onClick={onBuffClick}
              onDeleteClick={onDeleteBuffClick}
            />
          </div>

          <div className={'col-md-6 col-lg-4 col-xl-3 d-flex flex-column h-100' + (showDebuffStorage ? '' : ' d-none')}>
            <div className='row'>
              <div className='col'>
                <button onClick={() => api.setViewState(ViewState.Normal)}>Back</button>
              </div>
            </div>
            <BuffStorage
              title='Monster Debuff Storage'
              list={context.character.debuff}
              storage={debuffDatabase}
              addClick={addDebuffClick}
              onClick={onBuffClick}
              onDeleteClick={onDeleteDebuffClick}
            />
          </div>

          <div className={'col-md-6 col-lg-4 col-xl-3 h-100' + (showAddItem ? '' : ' d-none')}>
            <AddItem />
          </div>

          <div className={'col-md-6 col-lg-4 col-xl-3 h-100' + (showAddBuff ? '' : ' d-none')}>
            <AddBuff />
          </div>

          <div className={'col-md-6 col-lg-4 col-xl-3 mt-4 d-flex flex-column' + (showMonster ? '' : ' d-none')}>
            <Monster monster={context.monster} />
            <ItemBuff
              title='Monster Debuff'
              list={debuff}
              handleBuffChange={handleDebuffChange}
              handleLvChange={handleLvDebuffChange}
              onClick={showDebuffStorage ? undefined : () => api.setViewState(ViewState.DebuffStorage)}
              onClickBuff={onClickBuff}
            />
          </div>

          <div ref={itemInfoRef} className={'col-md-6 col-lg-4 col-xl-3 d-flex flex-column h-100 align-items-start' + (showItemInfo ? '' : ' d-none')}>
            <button onClick={() => hideItemDescription()}>Hide</button>
            <ItemDescription item1={context.viewItem} character={context.character} item2={context.viewItem2} buttonText={context.mode === 'storage' ? 'Edit' : undefined} />
          </div>

          <div className={'col-md-6 col-lg-4 col-xl-3 pt-4 d-flex flex-column h-100 overflow-auto' + (showCombat ? '' : ' d-none')}>
            <MoreStatus
              final={context.calculatedAttribute.finalAttributeList}
              baseSkillDmg={context.calculatedAttribute.baseSkillAttributeList}
              skillDmg={context.calculatedAttribute.skillAttributeList}
              vct={context.calculatedAttribute.vctAttributeList}
              allVct={api.getRaw(AttributeTypeEnum.VctPercent)}
              vct530={context.calculatedAttribute.vct530}
              fct={api.getRaw(AttributeTypeEnum.Fct)}
              fctP={api.getFinal(AttributeTypeEnum.FctPercent)}
              cooldown={context.calculatedAttribute.cooldownAttributeList}
              sizePanalty={context.calculatedAttribute.sizePenalty}
            />
            <Combat />
          </div>

          <div ref={moreCombatRef} className={'col-md-6 col-lg-4 col-xl-3 d-flex flex-column h-100 align-items-start' + (showMoreCombat ? '' : ' d-none')}>
            <button onClick={() => api.setViewState(ViewState.Normal)}>Back</button>
            <MoreCombat
              combatStatus={context.combatStatus}
            />
          </div>
        </div>
      </body>

      <dialog ref={settingRef}>
        <Box id='setting' className='h-100' buttonText='Close' onClick={() => setShowSetting(false)} overflow>
          <div className='row py-3'>
            <h4>Setting</h4>
            <div className='col-2 status-name justify-content-start'>
              Equipment Mode
            </div>
            <div className='col-10 d-flex'>
              <div className="form-check flex-grow-1">
                <input className="form-check-input" type="radio" name="equipmentStyle" id="singleStyle" value={"single"} checked={context.mode === "single"} onChange={e => api.setMode(e.target.value)} />
                <div className="form-check-label d-flex flex-column" >
                  Single
                  <img className='w-100' src={process.env.PUBLIC_URL + "/singleStyle.jpg"} alt="Single style" />
                </div>
              </div>
              <div className="form-check flex-grow-1">
                <input className="form-check-input" type="radio" name="equipmentStyle" id="storageStyle" value={"storage"} checked={context.mode === "storage"} onChange={e => api.setMode(e.target.value)} />
                <div className="form-check-label d-flex flex-column" >
                  Storage
                  <img className='w-100' src={process.env.PUBLIC_URL + "/storageStyle.jpg"} alt="Storage style" />
                </div>
              </div>
            </div>

            <div className='col-2 status-name justify-content-start'>
              Style
            </div>
            <div className='col-10 d-flex'>
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="dayStyle" id="day" value={""} checked={context.theme === ""} onChange={e => api.setTheme(e.target.value)} />
                <div className="form-check-label d-flex align-items-center" >
                  <MdLightMode className='me-2' /> Day
                </div>
              </div>
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="dayStyle" id="night" value={"dark"} checked={context.theme === "dark"} onChange={e => api.setTheme(e.target.value)} />
                <div className="form-check-label d-flex align-items-center" >
                  <MdDarkMode className='me-2' /> Night
                </div>
              </div>
            </div>

            <hr className="h-line" />

            <h4>About</h4>

            <div className='col-2'>
              <img className='w-100' src={process.env.PUBLIC_URL + "/logo192.png"} alt="Author" />
            </div>
            <div className='col d-flex flex-column justify-content-center'>
              <p>Mapian-rd (aka. Ice)</p>
              <p className='storage-equiped'>เมนแมวทุกสาย แต่ดันไม่มีตังทำของ</p>
            </div>

            <h5 className='mt-3'>Credit</h5>
            <div className='col'>
              Monster Data & Item Description : <a href='https://www.divine-pride.net/'>Divide Pride</a>
            </div>

            <h6 className='mt-3'>Inspired by</h6>
            <div className='col d-flex flex-column'>
              <a href='https://newcalc.irowiki.org/'>IRO's newcalc</a>
              <a href='https://roprime-simulator.com/'>RO Prime Simulator</a>
              <a href='https://www.facebook.com/profile.php?id=100081543407330'>The World's Spreadsheets</a>
            </div>
          </div>
        </Box>
      </dialog>
      <NewsModel />
    </div>
  );
}

export default App;
