import { useEffect, useState } from "react";
import { attributeList, getAttributeType, StatusTypeList } from "../data/constraint/attributeType";
import { itemTypeList, weaponTypeList } from "../data/constraint/itemType";
import { friendly } from "../data/constraint/pet";
import { itemDatabase } from "../data/database/item";
import { MonsterList } from "../data/database/monster";
import { MonsterSearch } from "../data/DividePride";
import { calAspd } from "../data/formula/Aspd";
import { calCrit } from "../data/formula/Critical";
import { calSoftDef, calSoftMdef } from "../data/formula/Def";
import { calFlee } from "../data/formula/Flee";
import { calHit } from "../data/formula/Hit";
import { caljobHp, calHp } from "../data/formula/Hp";
import { caljobSp } from "../data/formula/Sp";
import { calRemainStatusPoint } from "../data/formula/StatusPoint";
import { vct530 } from "../data/formula/Vct";
import { Attribute, AttributeName } from "../data/model/Attribute";
import { AttributeTypeEnum } from "../data/model/attributeType";
import { SkillBuff } from "../data/model/Buff";
import { CalculatedAttribute } from "../data/model/CalculatedAttribute";
import { Character, CharacterExport } from "../data/model/Characterv2";
import { JobClass } from "../data/model/class";
import { CombatStatus } from "../data/model/CombatStatus";
import { CraftEqiupment, checkCraft, sumCraft } from "../data/model/CraftEquipment";
import { EquipmentSlot } from "../data/model/EquipmentSlot";
import { ExportData } from "../data/model/Exportable";
import { FormulaString, calString, DescriptionNumber } from "../data/model/Formula";
import { WeaponType, ItemTypeEnum, SizePenalty, EquipableType } from "../data/model/itemType";
import { Item, Named } from "../data/model/Itemv2";
import { Monster, MonsterId } from "../data/model/monster";
import { Pet } from "../data/model/Petv2";
import { ActiveSkill } from "../data/model/skill";
import { Status } from "../data/model/status";
import { Storage } from "../data/model/storage";
import { getMinMaxOverRefine, getMinMaxVarianceTK, overRefineWeapon, refineTK, statusAtk, statusBonus, statusMATK, varianceATK, varianceMATK } from "../formula";
import { AppApiContext } from "./AppApiContext";
import { AppContext, ViewState } from "./AppContext";

export function replacer(key: string, value: any) {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  }
  return value;
}

export function reviver(key: string, value: any) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

interface Props {
  children: React.ReactNode;
}

let data: ExportData
const json = localStorage.getItem("data")
if (json) {
  data = JSON.parse(json, reviver) as ExportData
} else {
  data = new ExportData()
}

export const ContextProvider = (props: Props): JSX.Element => {
  console.log("ContextProvider")

  const [viewState, setViewState] = useState<ViewState>(ViewState.Normal);
  const [viewItem, setViewItem] = useState<Named>();
  const [viewItem2, setViewItem2] = useState<Named>();
  const [dragItem, setDragItem] = useState<CraftEqiupment>();
  const [editItem, setEditItem] = useState<CraftEqiupment>();

  const [storage, setStorage] = useState<Storage>(data.storage);
  const [buffStorage, setBuffStorage] = useState<Item[]>(data.buffStorage);
  const [character, setCharacter] = useState<Character>(CharacterExport.getCharacter(data.character, storage, buffStorage));
  const [cal, setAttribute] = useState<CalculatedAttribute>(new CalculatedAttribute())
  const [monsterId, setMonsterId] = useState<MonsterId>(MonsterList.find(monster => monster.id === data.monsterId) ?? MonsterList.find(monster => monster.id === "2408") ?? MonsterList[0]);
  const [monster, setMonster] = useState<Monster>()
  const [skill, setSkill] = useState<ActiveSkill>(() => {
    return character.clazz.activeSkillItem.find(skill => skill.enum === data.skill) ?? character.clazz.activeSkillItem[0]
  });
  /**
   * Start from 1
   */
  const [skillLevel, setSkillLevel] = useState<number>(() => {
    const saved = data.skillLevel
    if (skill.percent.length < saved) {
      return skill.percent.length
    }
    return saved
  });
  const [combatStatus, setCombatStatus] = useState<CombatStatus>(new CombatStatus())

  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? "");
  const [mode, setMode] = useState<string>(localStorage.getItem("mode") ?? "single");
  const [changeSlot, setChangeSlot] = useState<EquipmentSlot>();

  const app = {
    viewState,
    viewItem,
    viewItem2,
    dragItem,
    editItem,
    character,
    storage,
    buffStorage,
    calculatedAttribute: cal,
    monsterId,
    monster,
    skill,
    skillLevel,
    combatStatus,
    theme,
    mode,
    changeSlot,
  }

  function setCookie() {
    console.log("setCookie")
    data.storage = storage
    data.buffStorage = buffStorage
    data.character = CharacterExport.getExport(character)
    data.monsterId = monsterId.id
    data.skill = skill.enum
    data.skillLevel = skillLevel
    localStorage.setItem("data", JSON.stringify(data, replacer))
  }

  function getRaw(cal: CalculatedAttribute, type: AttributeTypeEnum): DescriptionNumber {
    const number = cal.rawAttributeList.get(type) ?? new DescriptionNumber()
    return number
  }

  function getFinal(cal: CalculatedAttribute, type: AttributeTypeEnum): DescriptionNumber {
    console.log("getFinal", type)
    return cal.finalAttributeList.get(type) ?? new DescriptionNumber()
  }

  function refineATK(weapon: CraftEqiupment, type: AttributeTypeEnum = AttributeTypeEnum.Atk): number {
    const equipmentLevel = weapon.item!.equipmentLevel
    const refineLevel = weapon.refineLevel
    return refineTK(refineLevel, equipmentLevel)
  }

  function calClass(baseLv: number, clazz: JobClass, jobLv: number) {
    Array.from(StatusTypeList.keys()).forEach(statusType => {
      Status.set(cal.bonusStatus, statusType, JobClass.getBonus(clazz, jobLv, statusType))
    })

    if (clazz.baseHps) {
      cal.jobHp = clazz.baseHps[baseLv - 1]
    } else {
      cal.jobHp = caljobHp(
        baseLv,
        clazz.baseHp,
        clazz.hpJobA,
        clazz.hpJobB
      )
    }

    if (clazz.baseSps) {
      cal.jobSp = clazz.baseSps[baseLv - 1]
    } else {
      cal.jobSp = caljobSp(
        baseLv,
        clazz.baseSp,
        clazz.spJob,
      )
    }
  }

  function calculateRemainStatusPoint(baseLv: number, status: Status, clazz: JobClass) {
    cal.remainStatusPoint = calRemainStatusPoint(
      baseLv,
      status.str,
      status.agi,
      status.vit,
      status.int,
      status.dex,
      status.luk,
      clazz.isTrans
    );
  }

  function calEquipment(character: Character) {
    console.log("calEquipment", character.equipmentMap)
    const equipmentList = Array.from(character.equipmentMap.values())
    equipmentList.forEach(equipment => {
      if (equipment) {
        sumCraft(equipment)
      }
    })

    cal.rWeaponAtk = 0
    cal.rWeaponMatk = 0
    cal.rRefineAtk = 0
    cal.rRefineMatk = 0
    cal.rVarianceAtk = 0
    cal.rVarianceMatk = 0
    cal.rOverRefine = 0
    cal.isWeaponRange = false
    cal.sizePenalty = new SizePenalty()
    cal.weaponPenalty = 0

    cal.lWeaponAtk = 0
    cal.lWeaponMatk = 0
    cal.lRefineAtk = 0
    cal.lRefineMatk = 0
    cal.lVarianceAtk = 0
    cal.lVarianceMatk = 0
    cal.lOverRefine = 0
    cal.shieldPenalty = 0

    cal.checkedAttributeList.clear()
    cal.formulaList.clear()
    equipmentList.forEach(equipment => {
      if (equipment) {
        const old = cal.checkedAttributeList.get(equipment.id)
        if (!old) {
          const check = checkCraft(equipment, character)
          cal.checkedAttributeList.set(equipment.id, check)

          check.forEach(attribute => {
            let oldValue = cal.formulaList.get(attribute.type)
            if (!oldValue) {
              oldValue = []
            }
            cal.formulaList.set(attribute.type, [...oldValue, new FormulaString(equipment.id, attribute.formulaText, attribute.name, attribute.max, attribute.skill)])
          })
        }
      }
    })

    if (character.pet) {
      const petAttributes = [...character.pet?.attributeList ?? [], ...Pet.findPetAttribute(character.pet, character.petFriendly ?? friendly)]
        .map(attribute => {
          return { ...attribute, name: character.pet!.name }
        })
      const check = petAttributes.filter(attribute => Attribute.checkAttribute(attribute, character))
      cal.checkedAttributeList.set("pet", check)

      check.forEach(attribute => {
        let oldValue = cal.formulaList.get(attribute.type)
        if (!oldValue) {
          oldValue = []
        }
        cal.formulaList.set(attribute.type, [...oldValue, new FormulaString("pet", attribute.formulaText, attribute.name, attribute.max, attribute.skill)])
      })
    }

    const itemBuffAttributes = character.itemBuff
      .filter(item => item.isActive)
      .flatMap(item => {
        return item.attributeList.map(attribute => {
          return { ...attribute, name: item.name }
        })
      })

    const checkItemBuff = itemBuffAttributes.filter(attribute => Attribute.checkAttribute(attribute, character))
    cal.checkedAttributeList.set("itemBuff", checkItemBuff)
    checkItemBuff.forEach(attribute => {
      let oldValue = cal.formulaList.get(attribute.type)
      if (!oldValue) {
        oldValue = []
      }
      cal.formulaList.set(attribute.type, [...oldValue, new FormulaString("itemBuff", attribute.formulaText, attribute.name, attribute.max, attribute.skill)])
    })

    const skillBuffAttributes: AttributeName[] = character.skillBuff
      .filter(item => item.isActive)
      .flatMap(item => {
        return item.attributeList.map(attribute => {
          return { ...attribute, name: item.name, formulaText: attribute.formulaText[item.activeLv - 1], max: attribute.max ? attribute.max[item.activeLv - 1] : undefined }
        })
      })
    const checkSkillBuff = skillBuffAttributes.filter(attribute => Attribute.checkAttribute(attribute, character))
    cal.checkedAttributeList.set("itemBuff", checkSkillBuff)
    checkSkillBuff.forEach(attribute => {
      let oldValue = cal.formulaList.get(attribute.type)
      if (!oldValue) {
        oldValue = []
      }
      cal.formulaList.set(attribute.type, [...oldValue, new FormulaString("skillBuff", attribute.formulaText, attribute.name, attribute.max, attribute.skill)])
    })

    const debuffAttributes: AttributeName[] = character.debuff
      .filter(item => item.isActive)
      .flatMap(item => {
        return item.attributeList.map(attribute => {
          return { ...attribute, name: item.name, formulaText: attribute.formulaText[item.activeLv - 1], max: attribute.max ? attribute.max[item.activeLv - 1] : undefined }
        })
      })
    const checkdebuff = debuffAttributes.filter(attribute => Attribute.checkAttribute(attribute, character))
    cal.checkedAttributeList.set("debuff", checkdebuff)
    checkdebuff.forEach(attribute => {
      let oldValue = cal.formulaList.get(attribute.type)
      if (!oldValue) {
        oldValue = []
      }
      cal.formulaList.set(attribute.type, [...oldValue, new FormulaString("Debuff", attribute.formulaText, attribute.name, attribute.max, attribute.skill)])
    })

    cal.rawAttributeList.clear()
    cal.skillFormulaList.clear()
    cal.baseSkillFormulaList.clear()
    cal.vctFormulaList.clear()
    cal.cooldownFormulaList.clear()
    cal.formulaList.forEach((formula, attributeType) => {
      if (attributeType === AttributeTypeEnum.SkillDmg) {
        formula.forEach(f => {
          if (f.skill) {
            let oldValue = cal.skillFormulaList.get(f.skill)
            if (!oldValue) {
              oldValue = []
            }
            cal.skillFormulaList.set(f.skill, [...oldValue, f])
          }
        })
      } else if (attributeType === AttributeTypeEnum.SkillBasePercent) {
        formula.forEach(f => {
          if (f.skill) {
            let oldValue = cal.baseSkillFormulaList.get(f.skill)
            if (!oldValue) {
              oldValue = []
            }
            cal.baseSkillFormulaList.set(f.skill, [...oldValue, f])
          }
        })
      } else if (attributeType === AttributeTypeEnum.VctPercent) {
        let allFormula: FormulaString[] = []
        formula.forEach(f => {
          if (f.skill) {
            let oldValue = cal.vctFormulaList.get(f.skill)
            if (!oldValue) {
              oldValue = []
            }
            cal.vctFormulaList.set(f.skill, [...oldValue, f])
          } else {
            allFormula.push(f)
          }
        })
        const number = calString(allFormula, character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
        cal.rawAttributeList.set(attributeType, number)
      } else if (attributeType === AttributeTypeEnum.FctPercent) {
        let max = 0
        formula.forEach(f => {
          const number = calString([f], character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
          max = Math.max(max, number.number)
        })
        const number = calString(formula, character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
        number.number = max
        cal.rawAttributeList.set(attributeType, number)
      } else if (attributeType === AttributeTypeEnum.Cooldown) {
        formula.forEach(f => {
          if (f.skill) {
            let oldValue = cal.cooldownFormulaList.get(f.skill)
            if (!oldValue) {
              oldValue = []
            }
            cal.cooldownFormulaList.set(f.skill, [...oldValue, f])
          }
        })
      } else {
        const number = calString(formula, character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
        cal.rawAttributeList.set(attributeType, number)
      }
    })

    cal.skillAttributeList.clear()
    cal.skillFormulaList.forEach((value, key) => {
      const number = calString(value, character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
      const skill = character.clazz.activeSkillItem.find(item => item.enum === key)
      if (skill) {
        number.name = skill.name
      }
      cal.skillAttributeList.set(key, number)
    })
    cal.baseSkillAttributeList.clear()
    cal.baseSkillFormulaList.forEach((value, key) => {
      const number = calString(value, character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
      const skill = character.clazz.activeSkillItem.find(item => item.enum === key)
      if (skill) {
        number.name = skill.name
      }
      cal.baseSkillAttributeList.set(key, number)
    })
    cal.vctAttributeList.clear()
    cal.vctFormulaList.forEach((value, key) => {
      const number = calString(value, character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
      const skill = character.clazz.activeSkillItem.find(item => item.enum === key)
      if (skill) {
        number.name = skill.name
      }
      cal.vctAttributeList.set(key, number)
    })
    cal.cooldownAttributeList.clear()
    cal.cooldownFormulaList.forEach((value, key) => {
      const number = calString(value, character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
      const skill = character.clazz.activeSkillItem.find(item => item.enum === key)
      if (skill) {
        number.name = skill.name
      }
      cal.cooldownAttributeList.set(key, number)
    })


    const rWeapon = character.equipmentMap.get(EquipmentSlot.rWeapon)
    if (rWeapon) {
      cal.rWeaponAtk = [rWeapon.item!.atk ?? 0]
        .map(value => value + value * getFinal(cal, AttributeTypeEnum.RWeaponAtkP).number / 100)
      [0]
      cal.rWeaponMatk = [rWeapon.item?.matk ?? 0]
        .map(value => value + value * getFinal(cal, AttributeTypeEnum.RWeaponMatkP).number / 100)
      [0]
      cal.rRefineAtk = refineATK(rWeapon, AttributeTypeEnum.Atk)
      cal.rRefineMatk = refineATK(rWeapon, AttributeTypeEnum.Matk)
      cal.rVarianceAtk = varianceATK(cal.rWeaponAtk, rWeapon.item!.equipmentLevel)
      cal.rVarianceMatk = varianceMATK(cal.rWeaponMatk, cal.rRefineMatk, rWeapon.item!.equipmentLevel)
      cal.rOverRefine = overRefineWeapon(rWeapon.item!.equipmentLevel, rWeapon.refineLevel)

      cal.isWeaponRange = (weaponTypeList.get(rWeapon.item!.type) as WeaponType).isRange;
      cal.sizePenalty = (weaponTypeList.get(rWeapon.item!.type) as WeaponType).sizePenalty ?? new SizePenalty();

      cal.weaponPenalty = JobClass.getWeaponPenalty(character.clazz, rWeapon.item!.type);
    }

    const left = character.equipmentMap.get(EquipmentSlot.lWeapon);
    if (left) {
      if (left.item?.type === ItemTypeEnum.Shield) {
        cal.shieldPenalty = character.clazz.shieldPenalty
      } else {
        if (left.id !== rWeapon?.id) {
          cal.lWeaponAtk = left.item!.atk ?? 0
          cal.lWeaponMatk = left.item?.matk ?? 0
          cal.lRefineAtk = refineATK(left, AttributeTypeEnum.Atk)
          cal.lRefineMatk = refineATK(left, AttributeTypeEnum.Matk)
          cal.lVarianceAtk = varianceMATK(cal.lWeaponAtk, cal.lRefineAtk, left.item!.equipmentLevel)
          cal.lVarianceMatk = varianceMATK(cal.lWeaponMatk, cal.lRefineMatk, left.item!.equipmentLevel)
          cal.lOverRefine = overRefineWeapon(left.item!.equipmentLevel, left.refineLevel)

          cal.shieldPenalty = JobClass.getWeaponPenalty(character.clazz, left.item!.type);
        }
      }
    }

    cal.calRawCall = !cal.calRawCall
  }

  function calFinal(character: Character, cal: CalculatedAttribute) {
    // statusBonus
    cal.statusBonus = statusBonus(cal.rWeaponAtk, cal.isWeaponRange, character.status.str, character.status.dex)

    cal.finalAttributeList.clear()
    StatusTypeList.forEach((_value, attributeType) => {
      const raw = cal.rawAttributeList.get(attributeType)
      const number = new DescriptionNumber()
      number.number = raw?.number ?? 0
      number.description = raw?.description ?? "0"
      number.plus(Status.get(cal.bonusStatus, attributeType), "bonus", 0)
      number.plus(Status.get(character.status, attributeType), "status", 0)
      cal.finalAttributeList.set(attributeType, number)
    })


    const str = cal.finalAttributeList.get(AttributeTypeEnum.Str) ?? new DescriptionNumber(1, "1(status)")
    const agi = cal.finalAttributeList.get(AttributeTypeEnum.Agi) ?? new DescriptionNumber(1, "1(status)")
    const vit = cal.finalAttributeList.get(AttributeTypeEnum.Vit) ?? new DescriptionNumber(1, "1(status)")
    const dex = cal.finalAttributeList.get(AttributeTypeEnum.Dex) ?? new DescriptionNumber(1, "1(status)")
    const luk = cal.finalAttributeList.get(AttributeTypeEnum.Luk) ?? new DescriptionNumber(1, "1(status)")
    const int = cal.finalAttributeList.get(AttributeTypeEnum.Int) ?? new DescriptionNumber(1, "1(status)")

    // statusAtk
    cal.statusAtk = statusAtk(character.baseLv, cal.isWeaponRange, str.number, dex.number, luk.number)

    // statusMatk
    cal.statusMatk = statusMATK(character.baseLv, int.number, dex.number, luk.number)

    cal.vct530.number = vct530(int.number, dex.number)
    cal.vct530.description = ""
    cal.vct530.linePlus(int, getAttributeType(AttributeTypeEnum.Int).name, 1)
    cal.vct530.linePlus(dex, getAttributeType(AttributeTypeEnum.Dex).name, 1)

    const physicalAllSize = cal.rawAttributeList.get(AttributeTypeEnum.PhysicalAllSize)
    const physicalAllProperty = cal.rawAttributeList.get(AttributeTypeEnum.PhysicalAllProperty)
    const physicalAllRace = cal.rawAttributeList.get(AttributeTypeEnum.PhysicalAllRace)
    const physicalAllClass = cal.rawAttributeList.get(AttributeTypeEnum.PhysicalAllClass)
    const magicAllSize = cal.rawAttributeList.get(AttributeTypeEnum.MagicAllSize)
    const magicAllProperty = cal.rawAttributeList.get(AttributeTypeEnum.MagicAllProperty)
    const magicAllRace = cal.rawAttributeList.get(AttributeTypeEnum.MagicAllRace)
    const magicAllClass = cal.rawAttributeList.get(AttributeTypeEnum.MagicAllClass)
    const magicAllElement = cal.rawAttributeList.get(AttributeTypeEnum.MagicAllElement)

    attributeList.forEach((value, attributeType) => {
      const raw = cal.rawAttributeList.get(attributeType) ?? new DescriptionNumber()
      const number = new DescriptionNumber(raw?.number, raw?.description)
      if (Array.from(StatusTypeList.keys()).includes(attributeType)) {
        return
      }
      if (attributeType === AttributeTypeEnum.Atk
        || attributeType === AttributeTypeEnum.Matk
      ) {
      } else if (attributeType === AttributeTypeEnum.StatusAtk) {
        number.number = cal.statusAtk
        number.description = ""
        number.line(character.baseLv, "baseLv", 1)
        number.linePlus(str, getAttributeType(AttributeTypeEnum.Str).name, 1)
        number.linePlus(dex, getAttributeType(AttributeTypeEnum.Dex).name, 1)
        number.linePlus(luk, getAttributeType(AttributeTypeEnum.Luk).name, 1)
      } else if (attributeType === AttributeTypeEnum.WeaponAtk) {
        const minMaxVariancetk = getMinMaxVarianceTK(cal.rVarianceAtk)
        const minMaxOverRefine = getMinMaxOverRefine(cal.isWeaponRange, cal.rOverRefine)
        number.number = cal.rWeaponAtk
        number.description = `${cal.rWeaponAtk}(rightWeapon)`
        number.plus(cal.statusBonus, "statusBonus", 1)
        number.plus(cal.rRefineAtk, "refine", 1)
        number.variance(minMaxVariancetk[0], minMaxVariancetk[1], "variance", 1)
        number.variance(minMaxOverRefine[0], minMaxOverRefine[1], "overRefineVariance", 1)
      } else if (attributeType === AttributeTypeEnum.StatusMatk) {
        number.number = cal.statusMatk
        number.description = ""
        number.line(character.baseLv, "baseLv", 1)
        number.linePlus(int, getAttributeType(AttributeTypeEnum.Int).name, 1)
        number.linePlus(dex, getAttributeType(AttributeTypeEnum.Dex).name, 1)
        number.linePlus(luk, getAttributeType(AttributeTypeEnum.Luk).name, 1)
      } else if (attributeType === AttributeTypeEnum.WeaponMatk) {
        const rMinMaxVariancetk = getMinMaxVarianceTK(cal.rVarianceMatk)
        const lMinMaxVariancetk = getMinMaxVarianceTK(cal.lVarianceMatk)
        const rMinMaxOverRefine = getMinMaxOverRefine(cal.isWeaponRange, cal.rOverRefine)
        const lMinMaxOverRefine = getMinMaxOverRefine(cal.isWeaponRange, cal.lOverRefine)
        number.number = cal.rWeaponMatk
        number.description = `${cal.rWeaponMatk}(rightWeapon)`
        number.plus(cal.rRefineAtk, "rightRefine", 1)
        number.variance(rMinMaxVariancetk[0], rMinMaxVariancetk[1], "rightVariance", 1)
        number.variance(rMinMaxOverRefine[0], rMinMaxOverRefine[1], "rightOverRefine", 1)
        number.plus(cal.lWeaponMatk, "leftWeapon", 1)
        number.plus(cal.lRefineMatk, "leftRefine", 1)
        number.variance(lMinMaxVariancetk[0], lMinMaxVariancetk[1], "leftVariance", 1)
        number.variance(lMinMaxOverRefine[0], lMinMaxOverRefine[1], "leftOverRefine", 1)
      } else if (attributeType === AttributeTypeEnum.Hp) {
        const isTrans = character.clazz.isTrans ? 1.25 : 1
        const percent = cal.rawAttributeList.get(AttributeTypeEnum.HpPercent) ?? new DescriptionNumber()
        const final = calHp(
          cal.jobHp,
          vit.number,
          isTrans,
          raw.number,
          percent.number
        )
        number.number = final
        number.description = ""
        number.line(cal.jobHp, "jobHp", 1)
        number.linePlus(vit, getAttributeType(AttributeTypeEnum.Vit).name, 1)
        number.line(isTrans, "TransMod", 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
        number.linePlus(percent, getAttributeType(AttributeTypeEnum.HpPercent).name, 1)
      } else if (attributeType === AttributeTypeEnum.Sp) {
        const isTrans = character.clazz.isTrans ? 1.25 : 1
        const percent = cal.rawAttributeList.get(AttributeTypeEnum.SpPercent) ?? new DescriptionNumber()
        const final = calHp(
          cal.jobSp,
          int.number,
          isTrans,
          raw.number,
          percent.number
        )
        number.number = final
        number.description = ""
        number.line(cal.jobSp, "jobSp", 1)
        number.linePlus(int, getAttributeType(AttributeTypeEnum.Int).name, 1)
        number.line(isTrans, "TransMod", 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
        number.linePlus(percent, getAttributeType(AttributeTypeEnum.SpPercent).name, 1)
      } else if (attributeType === AttributeTypeEnum.Hit) {
        const baseLv = character.baseLv
        const final = calHit(character.baseLv, dex.number, luk.number, raw.number)
        number.number = final
        number.description = ""
        number.line(baseLv, "baseLv", 1)
        number.linePlus(luk, getAttributeType(AttributeTypeEnum.Dex).name, 1)
        number.linePlus(luk, getAttributeType(AttributeTypeEnum.Luk).name, 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
      } else if (attributeType === AttributeTypeEnum.Critical) {
        const final = calCrit(luk.number, raw.number)
        number.number = final
        number.description = ""
        number.linePlus(luk, getAttributeType(AttributeTypeEnum.Luk).name, 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
      } else if (attributeType === AttributeTypeEnum.Flee) {
        const baseLv = character.baseLv
        const final = calFlee(baseLv, agi.number, luk.number, raw.number)
        number.number = final
        number.description = ""
        number.line(baseLv, "baseLv", 1)
        number.linePlus(agi, getAttributeType(AttributeTypeEnum.Agi).name, 1)
        number.linePlus(luk, getAttributeType(AttributeTypeEnum.Luk).name, 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
      } else if (attributeType === AttributeTypeEnum.Aspd) {
        const baseAspd = character.clazz.baseAspd
        const percent = cal.rawAttributeList.get(AttributeTypeEnum.AspdPercent) ?? new DescriptionNumber()
        const haste = cal.rawAttributeList.get(AttributeTypeEnum.Haste) ?? new DescriptionNumber()
        const final = calAspd(
          baseAspd,
          agi.number,
          dex.number,
          percent.number,
          raw.number,
          cal.weaponPenalty,
          cal.shieldPenalty,
          haste.number,
        )
        number.number = Math.min(193, final)
        number.description = ""
        number.line(baseAspd, "baseAspd", 1)
        number.linePlus(agi, getAttributeType(AttributeTypeEnum.Agi).name, 1)
        number.linePlus(dex, getAttributeType(AttributeTypeEnum.Dex).name, 1)
        number.linePlus(percent, getAttributeType(AttributeTypeEnum.AspdPercent).name, 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
        number.line(cal.weaponPenalty, "weaponPenalty", 1)
        number.line(cal.shieldPenalty, "shieldPenalty", 1)
        number.linePlus(haste, getAttributeType(AttributeTypeEnum.Haste).name, 1)
      } else if (attributeType === AttributeTypeEnum.SoftDef) {
        const baseLv = character.baseLv
        const percent = cal.rawAttributeList.get(AttributeTypeEnum.SoftDefPercent) ?? new DescriptionNumber()
        const final = calSoftDef(vit.number, agi.number, character.baseLv, raw.number, percent.number)
        number.number = final
        number.description = ""
        number.linePlus(vit, getAttributeType(AttributeTypeEnum.Vit).name, 1)
        number.linePlus(agi, getAttributeType(AttributeTypeEnum.Agi).name, 1)
        number.line(baseLv, "baseLv", 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
        number.linePlus(percent, getAttributeType(AttributeTypeEnum.SoftDefPercent).name, 1)
      } else if (attributeType === AttributeTypeEnum.SoftMdef) {
        const baseLv = character.baseLv
        const percent = cal.rawAttributeList.get(AttributeTypeEnum.SoftMdefPercent) ?? new DescriptionNumber()
        const final = calSoftMdef(int.number, vit.number, dex.number, baseLv, raw.number, percent.number)
        number.number = final
        number.description = ""
        number.linePlus(int, getAttributeType(AttributeTypeEnum.Int).name, 1)
        number.linePlus(vit, getAttributeType(AttributeTypeEnum.Vit).name, 1)
        number.linePlus(dex, getAttributeType(AttributeTypeEnum.Dex).name, 1)
        number.line(baseLv, "baseLv", 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
        number.linePlus(percent, getAttributeType(AttributeTypeEnum.SoftMdefPercent).name, 1)
      } else if (attributeType === AttributeTypeEnum.PerfectHit) {
        number.plus(5, "base", 0)
      } else if (attributeType === AttributeTypeEnum.PhysicalSmall
        || attributeType === AttributeTypeEnum.PhysicalMed
        || attributeType === AttributeTypeEnum.PhysicalLarge) {
        if (physicalAllSize) {
          number.plusNumber(physicalAllSize, 1)
        }
      } else if (attributeType === AttributeTypeEnum.PhysicalNeutral
        || attributeType === AttributeTypeEnum.PhysicalWater
        || attributeType === AttributeTypeEnum.PhysicalEarth
        || attributeType === AttributeTypeEnum.PhysicalFire
        || attributeType === AttributeTypeEnum.PhysicalWind
        || attributeType === AttributeTypeEnum.PhysicalPoison
        || attributeType === AttributeTypeEnum.PhysicalHoly
        || attributeType === AttributeTypeEnum.PhysicalDark
        || attributeType === AttributeTypeEnum.PhysicalGhost
        || attributeType === AttributeTypeEnum.PhysicalUndead
      ) {
        if (physicalAllProperty) {
          number.plusNumber(physicalAllProperty, 1)
        }
      } else if (attributeType === AttributeTypeEnum.PhysicalFormless
        || attributeType === AttributeTypeEnum.PhysicalRaceUndead
        || attributeType === AttributeTypeEnum.PhysicalBrute
        || attributeType === AttributeTypeEnum.PhysicalPlant
        || attributeType === AttributeTypeEnum.PhysicalInsect
        || attributeType === AttributeTypeEnum.PhysicalAngel
        || attributeType === AttributeTypeEnum.PhysicalDemon
        || attributeType === AttributeTypeEnum.PhysicalDemi
      ) {
        if (physicalAllRace) {
          number.plusNumber(physicalAllRace, 1)
        }
      } else if (attributeType === AttributeTypeEnum.PhysicalBoss
        || attributeType === AttributeTypeEnum.PhysicalMon
      ) {
        if (physicalAllClass) {
          number.plusNumber(physicalAllClass, 1)
        }
      } else if (attributeType === AttributeTypeEnum.MagicSmall
        || attributeType === AttributeTypeEnum.MagicMed
        || attributeType === AttributeTypeEnum.MagicLarge) {
        if (magicAllSize) {
          number.plusNumber(magicAllSize, 1)
        }
      } else if (attributeType === AttributeTypeEnum.MagicNeutral
        || attributeType === AttributeTypeEnum.MagicWater
        || attributeType === AttributeTypeEnum.MagicEarth
        || attributeType === AttributeTypeEnum.MagicFire
        || attributeType === AttributeTypeEnum.MagicWind
        || attributeType === AttributeTypeEnum.MagicPoison
        || attributeType === AttributeTypeEnum.MagicHoly
        || attributeType === AttributeTypeEnum.MagicDark
        || attributeType === AttributeTypeEnum.MagicGhost
        || attributeType === AttributeTypeEnum.MagicUndead
      ) {
        if (magicAllProperty) {
          number.plusNumber(magicAllProperty, 1)
        }
      } else if (attributeType === AttributeTypeEnum.MagicFormless
        || attributeType === AttributeTypeEnum.MagicRaceUndead
        || attributeType === AttributeTypeEnum.MagicBrute
        || attributeType === AttributeTypeEnum.MagicPlant
        || attributeType === AttributeTypeEnum.MagicInsect
        || attributeType === AttributeTypeEnum.MagicAngel
        || attributeType === AttributeTypeEnum.MagicDemon
        || attributeType === AttributeTypeEnum.MagicDemi
      ) {
        if (magicAllRace) {
          number.plusNumber(magicAllRace, 1)
        }
      } else if (attributeType === AttributeTypeEnum.MagicBoss
        || attributeType === AttributeTypeEnum.MagicMon
      ) {
        if (magicAllClass) {
          number.plusNumber(magicAllClass, 1)
        }
      } else if (attributeType === AttributeTypeEnum.MagicSkillNeutral
        || attributeType === AttributeTypeEnum.MagicSkillWater
        || attributeType === AttributeTypeEnum.MagicSkillEarth
        || attributeType === AttributeTypeEnum.MagicSkillFire
        || attributeType === AttributeTypeEnum.MagicSkillWind
        || attributeType === AttributeTypeEnum.MagicSkillPoison
        || attributeType === AttributeTypeEnum.MagicSkillHoly
        || attributeType === AttributeTypeEnum.MagicSkillDark
        || attributeType === AttributeTypeEnum.MagicSkillGhost
        || attributeType === AttributeTypeEnum.MagicSkillUndead
      ) {
        if (magicAllElement) {
          number.plusNumber(magicAllElement, 1)
        }
      } else if (attributeType === AttributeTypeEnum.HpPercent
        || attributeType === AttributeTypeEnum.SpPercent
        || attributeType === AttributeTypeEnum.AspdPercent
        || attributeType === AttributeTypeEnum.SoftDefPercent
        || attributeType === AttributeTypeEnum.SoftMdefPercent
        || attributeType === AttributeTypeEnum.SkillDmg
        || attributeType === AttributeTypeEnum.SkillBasePercent
      ) {
        number.number = -1
      }
      cal.finalAttributeList.set(attributeType, number)
    })
    cal.calFinalCall = !cal.calFinalCall
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    const old = localStorage.getItem("mode")
    if (old !== mode) {
      localStorage.setItem("mode", mode)
      window.location.reload()
    }
  }, [mode])

  useEffect(() => {
    if (!character.clazz.activeSkill.includes(skill.enum)) {
      console.log("not incluede")
      setSkill(character.clazz.activeSkillItem[0])
    }
  }, [character.clazz])

  useEffect(() => {
    console.log("useEffect calClass " + character.clazz)

    calClass(character.baseLv, character.clazz, character.jobLv)
    setAttribute({ ...cal })
  }, [character.baseLv, character.clazz, character.jobLv])

  useEffect(() => {
    console.log("useEffect calRemainStatusPoint")

    calculateRemainStatusPoint(character.baseLv, character.status, character.clazz)
    setAttribute({ ...cal })
  }, [character.baseLv, character.clazz, character.status.str, character.status.agi, character.status.vit, character.status.int, character.status.dex, character.status.luk])

  useEffect(() => {
    console.log("useEffect calEquipment")
    calEquipment(character)
    setAttribute({ ...cal })
  }, [character])

  useEffect(() => {
    if (skill) {
      if (skillLevel > skill.percent.length) {
        setSkillLevel(skill.percent.length);
      }
    }
  }, [skill])

  useEffect(() => {
    console.log("useEffect calFinal")
    calFinal(character, cal)
    setAttribute({ ...cal })
  }, [cal.calRawCall, skill])

  useEffect(() => {
    console.log("useEffect monster" + monsterId?.id)
    if (!monsterId || monsterId.id === "") return
    MonsterSearch(Item.getImgId(monsterId.id, monsterId.monsterId))
      .then((monster) => {
        // if (monsterId.hp) {
        //   monster.hp = monsterId.hp
        // }
        // if (monsterId.hit) {
        //   monster.hit = monsterId.hit
        // }
        setMonster(Object.assign(monster, monsterId))
      })
  }, [monsterId])

  useEffect(() => {
    console.log("useEffect finalDmg")
    if (monster && skill && skillLevel) {
      CombatStatus.finalDmg(combatStatus, cal, monster, skill, skillLevel)
      setCombatStatus({ ...combatStatus })
    }
  }, [cal.calFinalCall, monster, skill, skillLevel])

  useEffect(() => {
    setCookie()
  }, [character, storage, buffStorage, monsterId, skill, skillLevel])

  const api = {
    setViewState: (state: ViewState) => {
      console.log("setViewState")
      if (state !== ViewState.Storage && state !== ViewState.AddItem && state !== ViewState.EditItem && state !== ViewState.ChangeItem) {
        api.setViewItem(undefined)
      }
      setViewState(state)
    },
    setViewItem: (item: Named | undefined) => {
      console.log("setViewItem", item)
      setViewItem(item)
      const oldElement = document.getElementsByClassName("rounded select-ed item1")
      Array.from(oldElement).forEach(element => {
        element.classList.remove("rounded")
        element.classList.remove("select-ed")
        element.classList.remove("item1")
      });
      if (!item) return
      let elements = []
      if (CraftEqiupment.is(item)) {
        elements.push(document.getElementById('storage-' + item.id))
        elements.push(document.getElementById('equipment-' + item.id))
      } else if (Item.is(item) || SkillBuff.is(item)) {
        elements.push(document.getElementById('buffStorage-' + item.id))
        elements.push(document.getElementById('buff-' + item.id))
      }

      elements.forEach(element => {
        if (element !== null) {
          element.classList.add("rounded")
          element.classList.add("select-ed")
          element.classList.add("item1")
        }
      })

      if (CraftEqiupment.is(item)) {
        item.item = itemDatabase.find(itemd => itemd.id === item.itemId)
        if (item.item) {
          const type = itemTypeList.get(item.item.type) ?? weaponTypeList.get(item.item.type)
          if (type && type.equipSlot && type.equipSlot.length > 0) {
            let foundItem: CraftEqiupment | undefined
            type.equipSlot.forEach(slot => {
              const found = character.equipmentMap.get(slot)
              if (found && found.id !== item.id) {
                foundItem = found
                return
              }
            })
            if (foundItem) {
              api.setViewItem2(foundItem)
            } else {
              api.setViewItem2(undefined)
            }
          }
        }
      }
    },
    setViewItem2: (item: Named | undefined) => {
      setViewItem2(item)
      const oldElement = document.getElementsByClassName("rounded select-ed item2")
      Array.from(oldElement).forEach(element => {
        element.classList.remove("rounded")
        element.classList.remove("select-ed")
        element.classList.remove("item2")
      });
      if (!item) return
      let elements = []
      if (CraftEqiupment.is(item)) {
        elements.push(document.getElementById('storage-' + item.id))
        elements.push(document.getElementById('equipment-' + item.id))
      } else if (Item.is(item)) {
        elements.push(document.getElementById('buffStorage-' + item.id))
      }

      elements.forEach(element => {
        if (element !== null) {
          element.classList.add("rounded")
          element.classList.add("select-ed")
          element.classList.add("item2")
        }
      })
    },
    setDragItem,
    setEditItem,
    updateCharacter: (newState: Partial<Character>) => {
      setCharacter({ ...character, ...newState });
    },
    setMonsterId: (newMonsterId: MonsterId) => {
      setMonsterId(newMonsterId)
    },
    setSkill,
    setSkillLevel,
    getRaw: (type: AttributeTypeEnum): DescriptionNumber => getRaw(cal, type),
    getFinal: (type: AttributeTypeEnum): DescriptionNumber => getFinal(cal, type),
    addItem: (item: CraftEqiupment) => {
      storage.items.push(item)
      setStorage({ ...storage })
    },
    addBuff: (item: Item) => {
      console.log("saveClick addBuff", item)
      setBuffStorage([...buffStorage, item])
    },
    equip: (item: CraftEqiupment) => {
      const equiped = Array.from(character.equipmentMap).find(([key, value]) => {
        return item.id === value?.id
      })
      if (equiped) return
      item.item = itemDatabase.find(data => data.id === item.itemId)
      if (item.item?.type !== undefined) {
        const type = itemTypeList.get(item.item?.type) ?? weaponTypeList.get(item.item?.type)
        if (type && type.equipSlot && type.equipSlot.length > 0) {
          if (type.equipSlotType) {
            // eqiup some available
            if (changeSlot) {
              character.equipmentMap.set(changeSlot, item)
            } else {
              // Find empty
              let slot = type.equipSlot.find(slot => {
                const old = character.equipmentMap.get(slot)
                return !old
              })
              if (slot === undefined) {
                slot = type.equipSlot[0]
                const old = character.equipmentMap.get(slot)
                if (old) {
                  api.unequip(old)
                }
              }
              character.equipmentMap.set(slot, item)
            }
          } else {
            // eqiup all
            type.equipSlot.forEach(slot => {
              const old = character.equipmentMap.get(slot)
              if (old) {
                api.unequip(old)
              }
              character.equipmentMap.set(slot, item)
            })
          }

          setCharacter({ ...character });
          const element = document.getElementById("storage-" + item.id)
          if (element) {
            element.classList.add("storage-equiped")
          }
        }
      }
    },
    unequip: (item: CraftEqiupment) => {
      let isChange = false
      Array.from(character.equipmentMap).forEach(([key, value]) => {
        if (item.id === value?.id) {
          character.equipmentMap.set(key, undefined)
          isChange = true
        }
      })
      if (isChange) {
        const element = document.getElementById("storage-" + item.id)
        if (element) {
          element.classList.remove("storage-equiped")
        }
        setCharacter({ ...character });
      }
    },
    deleteItemStorage: (id: string) => {
      const index = storage.items.findIndex(item => item.id === id)
      api.unequip(storage.items[index])
      storage.items.splice(index, 1)
      setStorage({ ...storage })
    },
    deleteBuffStorage: (id: string) => {
      // Delete on storage
      const index = buffStorage.findIndex(item => item.id === id)
      buffStorage.splice(index, 1)
      setStorage({ ...storage })

      // Delete on Character
      const item = character.itemBuff.findIndex(item => item.id === id)
      if (item !== -1) {
        character.itemBuff.splice(item, 1)
      }
      api.updateCharacter({ itemBuff: character.itemBuff });
    },
    deleteDebuffStorage: (id: string) => {
      // Delete on Character
      const item = character.debuff.findIndex(item => item.id === id)
      if (item !== -1) {
        character.debuff.splice(item, 1)
      }
      api.updateCharacter({ debuff: character.debuff });
    },
    setTheme,
    setMode,
    setChangeSlot,
  }

  return (
    <AppContext.Provider value={app} >
      <AppApiContext.Provider value={api}>
        {props.children}
      </AppApiContext.Provider>
    </AppContext.Provider >
  )
}