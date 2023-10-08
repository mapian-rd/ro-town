import { useEffect, useState } from "react";
import { rWeapon, lWeapon } from "../Constraints";
import { attributeList, getAttributeType, StatusTypeList } from "../data/constraint/attributeType";
import { classList, getClass, noviceClass } from "../data/constraint/class";
import { friendly, petFriendlyList } from "../data/constraint/pet";
import { itemDatabase } from "../data/database/item";
import { MonsterList } from "../data/database/monster";
import { petList } from "../data/database/pet";
import { MonsterSearch } from "../data/DividePride";
import { calAspd } from "../data/formula/Aspd";
import { calCrit } from "../data/formula/Critical";
import { calSoftDef, calSoftMdef } from "../data/formula/Def";
import { calFlee } from "../data/formula/Flee";
import { calHit } from "../data/formula/Hit";
import { caljobHp, calHp } from "../data/formula/Hp";
import { caljobSp } from "../data/formula/Sp";
import { calRemainStatusPoint } from "../data/formula/StatusPoint";
import { Attribute } from "../data/model/Attribute";
import { AttributeType, AttributeTypeEnum } from "../data/model/attributeType";
import { CalculatedAttribute } from "../data/model/CalculatedAttribute";
import { Character, CharacterExport } from "../data/model/Characterv2";
import { JobClass, JobClassEnum } from "../data/model/class";
import { CombatStatus } from "../data/model/CombatStatus";
import { CraftEqiupment, checkCraft, sumCraft } from "../data/model/CraftEquipment";
import { EquipmentSlot } from "../data/model/EquipmentSlot";
import { ExportData } from "../data/model/Exportable";
import { FormulaString, calString, DescriptionNumber } from "../data/model/Formula";
import { WeaponType, Shield, ItemTypeEnum, itemTypeList } from "../data/model/itemType";
import { Item, Named } from "../data/model/Itemv2";
import { Monster, MonsterId } from "../data/model/monster";
import { Pet, PetFriendly } from "../data/model/Petv2";
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
  console.log("dataType: ", value)
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
console.log("getCookie", data.character.clazz)

export const ContextProvider = (props: Props): JSX.Element => {
  console.log("ContextProvider")

  const [viewState, setViewState] = useState<ViewState>(ViewState.Normal);
  const [viewItem, setViewItem] = useState<Named>();
  const [dragItem, setDragItem] = useState<CraftEqiupment>();

  const [storage, setStorage] = useState<Storage>(data.storage);
  const [buffStorage, setBuffStorage] = useState<Item[]>(data.buffStorage);
  const [character, setCharacter] = useState<Character>(CharacterExport.getCharacter(data.character, storage));
  const [cal, setAttribute] = useState<CalculatedAttribute>(new CalculatedAttribute())
  const [monsterId, setMonsterId] = useState<MonsterId>(MonsterList.find(monster => monster.id === data.monsterId) ?? MonsterList[0]);
  const [monster, setMonster] = useState<Monster>()
  const [skill, setSkill] = useState<ActiveSkill>(character.clazz.activeSkill.find(skill => skill.enum === data.skill) ?? character.clazz.activeSkill[0]);
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

  const app = {
    viewState,
    viewItem,
    dragItem,
    character,
    storage,
    buffStorage,
    calculatedAttribute: cal,
    monsterId,
    monster,
    skill,
    skillLevel,
    combatStatus,
  }

  function setCookie() {
    console.log("setCookie")
    data.storage = storage
    data.buffStorage = buffStorage
    console.log("setCookie", character.clazz)
    data.character = CharacterExport.getExport(character)
    console.log("setCookie", data.character.clazz.toString())
    data.monsterId = monsterId.id
    data.skill = skill.enum
    data.skillLevel = skillLevel
    localStorage.setItem("data", JSON.stringify(data, replacer))
  }

  function getRaw(cal: CalculatedAttribute, type: AttributeTypeEnum): DescriptionNumber {
    const number = cal.rawAttributeList.get(type) ?? new DescriptionNumber()
    console.log("getraw", type, number)
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

    const rWeapon = character.equipmentMap.get(EquipmentSlot.rWeapon)
    cal.rWeaponAtk = 0
    cal.rWeaponMatk = 0
    cal.rRefineAtk = 0
    cal.rRefineMatk = 0
    cal.rVarianceAtk = 0
    cal.rVarianceMatk = 0
    cal.rOverRefine = 0
    cal.isWeaponRange = false
    cal.weaponPenalty = 0

    cal.lWeaponAtk = 0
    cal.lWeaponMatk = 0
    cal.lRefineAtk = 0
    cal.lRefineMatk = 0
    cal.lVarianceAtk = 0
    cal.lVarianceMatk = 0
    cal.lOverRefine = 0
    cal.shieldPenalty = 0
    if (rWeapon) {
      cal.rWeaponAtk = rWeapon.item!.atk ?? 0
      cal.rWeaponMatk = rWeapon.item?.matk ?? 0
      cal.rRefineAtk = refineATK(rWeapon, AttributeTypeEnum.Atk)
      cal.rRefineMatk = refineATK(rWeapon, AttributeTypeEnum.Matk)
      cal.rVarianceAtk = varianceATK(cal.rWeaponAtk, rWeapon.item!.equipmentLevel)
      cal.rVarianceMatk = varianceMATK(cal.rWeaponMatk, cal.rRefineMatk, rWeapon.item!.equipmentLevel)
      cal.rOverRefine = overRefineWeapon(rWeapon.item!.equipmentLevel, rWeapon.refineLevel)

      cal.isWeaponRange = (itemTypeList.get(rWeapon.item!.type) as WeaponType).isRange;

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

    cal.checkedAttributeList.clear()
    cal.formulaList.clear()
    equipmentList.forEach(equipment => {
      console.log("calEquipment equipment", equipment)
      if (equipment) {
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
    })
    console.log("calEquipment checkedAttributeList", cal.checkedAttributeList)
    console.log("calEquipment formulaList", cal.formulaList)

    console.log("ispet", character.pet)
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

    const skillBuffAttributes = character.skillBuff
      .filter(item => item.isActive)
      .flatMap(item => {
        return item.attributeList.map(attribute => {
          return { ...attribute, name: item.name }
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

    cal.rawAttributeList.clear()
    cal.skillFormulaList.clear()
    console.log("formulaList size", cal.formulaList.size)
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
      } else {
        const number = calString(formula, character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
        console.log("raw", attributeType, number)
        cal.rawAttributeList.set(attributeType, number)
      }
    })

    cal.skillAttributeList.clear()
    cal.skillFormulaList.forEach((value, key) => {
      const number = calString(value, character.equipmentMap, character.status, character.clazz.getSkill(), character.baseLv)
      const skill = character.clazz.activeSkill.find(item => item.enum === key)
      if (skill) {
        number.name = skill.name
      }
      cal.skillAttributeList.set(key, number)
    })

    cal.calRawCall = !cal.calRawCall
  }

  function calFinal(character: Character, cal: CalculatedAttribute) {
    console.log("calFinal")

    // statusBonus
    cal.statusBonus = statusBonus(cal.rWeaponAtk, cal.isWeaponRange, character.status.str, character.status.dex)
    console.log("statusBonus", cal.statusBonus)

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

    attributeList.forEach((value, attributeType) => {
      console.log("attributeList.forEach", attributeType)
      const raw = cal.rawAttributeList.get(attributeType)
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
        number.description = `${cal.rWeaponAtk}(baseWeaponAtk)`
        number.plus(cal.statusBonus, "statusBonus", 1)
        number.plus(cal.rRefineAtk, "refineAtk", 1)
        number.variance(minMaxVariancetk[0], minMaxVariancetk[1], "varianceAtk", 1)
        number.variance(minMaxOverRefine[0], minMaxOverRefine[1], "overRefineVariance", 1)
        // } else if (attributeType === AttributeTypeEnum.Matk) {
        // const int = cal.finalAttributeList.get(AttributeTypeEnum.Int) ?? new DescriptionNumber(1, "1(status)")
        // const dex = cal.finalAttributeList.get(AttributeTypeEnum.Dex) ?? new DescriptionNumber(1, "1(status)")
        // const luk = cal.finalAttributeList.get(AttributeTypeEnum.Luk) ?? new DescriptionNumber(1, "1(status)")
        // cal.statusMatk = statusMATK(character.baseLv, int.number, dex.number, luk.number)

        // number.plus(cal.refineMatk, "refineMatk", 0)
        // number.plus(cal.weaponMatk, "weaponMatk", 0)
        // number.plus(cal.statusMatk, "statusMatk", 0)
      } else if (attributeType === AttributeTypeEnum.Hp) {
        const isTrans = character.clazz.isTrans ? 1.25 : 1
        const raw = cal.rawAttributeList.get(attributeType) ?? new DescriptionNumber()
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
        const raw = cal.rawAttributeList.get(attributeType) ?? new DescriptionNumber()
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
        const raw = cal.rawAttributeList.get(attributeType) ?? new DescriptionNumber()
        const final = calHit(character.baseLv, dex.number, luk.number, raw.number)
        console.log(final)
        number.number = final
        number.description = ""
        number.line(baseLv, "baseLv", 1)
        number.linePlus(luk, getAttributeType(AttributeTypeEnum.Dex).name, 1)
        number.linePlus(luk, getAttributeType(AttributeTypeEnum.Luk).name, 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
      } else if (attributeType === AttributeTypeEnum.Critical) {
        const raw = cal.rawAttributeList.get(attributeType) ?? new DescriptionNumber()
        const final = calCrit(luk.number, raw.number)
        number.number = final
        number.description = ""
        number.linePlus(luk, getAttributeType(AttributeTypeEnum.Luk).name, 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
      } else if (attributeType === AttributeTypeEnum.Flee) {
        const baseLv = character.baseLv
        const raw = cal.rawAttributeList.get(attributeType) ?? new DescriptionNumber()
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
        const raw = cal.rawAttributeList.get(attributeType) ?? new DescriptionNumber()
        const final = calAspd(
          baseAspd,
          agi.number,
          dex.number,
          percent.number,
          raw.number,
          cal.weaponPenalty,
          cal.shieldPenalty
        )
        number.number = final
        number.description = ""
        number.line(baseAspd, "baseAspd", 1)
        number.linePlus(agi, getAttributeType(AttributeTypeEnum.Agi).name, 1)
        number.linePlus(dex, getAttributeType(AttributeTypeEnum.Dex).name, 1)
        number.linePlus(percent, getAttributeType(AttributeTypeEnum.AspdPercent).name, 1)
        number.linePlus(raw, getAttributeType(attributeType).name, 1)
        number.line(cal.weaponPenalty, "weaponPenalty", 1)
        number.line(cal.shieldPenalty, "shieldPenalty", 1)
      } else if (attributeType === AttributeTypeEnum.SoftDef) {
        const baseLv = character.baseLv
        const raw = cal.rawAttributeList.get(attributeType) ?? new DescriptionNumber()
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
        const raw = cal.rawAttributeList.get(attributeType) ?? new DescriptionNumber()
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
      } else if (attributeType === AttributeTypeEnum.HpPercent
        || attributeType === AttributeTypeEnum.SpPercent
        || attributeType === AttributeTypeEnum.AspdPercent
        || attributeType === AttributeTypeEnum.SoftDefPercent
        || attributeType === AttributeTypeEnum.SoftMdefPercent
        || attributeType === AttributeTypeEnum.SkillDmg
      ) {
        number.number = -1
      }
      console.log("final", attributeType, number)
      cal.finalAttributeList.set(attributeType, number)
    })
    cal.calFinalCall = !cal.calFinalCall
  }

  useEffect(() => {
    if (!character.clazz.activeSkill.includes(skill)) {
      console.log("not incluede")
      setSkill(character.clazz.activeSkill[0])
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
    console.log("useEffect calEquipment setAttribute", cal.finalAttributeList)
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
    console.log("useEffect calFinal setAttribute", cal.finalAttributeList)
    setAttribute({ ...cal })
  }, [cal.calRawCall, skill])

  useEffect(() => {
    console.log("useEffect monster" + monsterId?.id)
    if (!monsterId || monsterId.id === -1) return
    MonsterSearch(monsterId.id)
      .then((monster) => {
        console.log("MonsterSearch " + monster.id)
        setMonster(monster)
      })
  }, [monsterId])

  useEffect(() => {
    console.log("useEffect finalDmg")
    if (monster && skill && skillLevel) {
      console.log("useEffect finalDmg 2")
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
      if (state !== ViewState.Storage && state !== ViewState.AddItem) {
        api.setViewItem(undefined)
      }
      setViewState(state)
    },
    setViewItem: (item: Named | undefined) => {
      console.log("setViewItem", item)
      setViewItem(item)
      const oldElement = document.getElementsByClassName("rounded select-ed")
      Array.from(oldElement).forEach(element => {
        element.classList.remove("rounded")
        element.classList.remove("select-ed")
      });
      if (!item) return
      let element
      let equipment
      if (CraftEqiupment.is(item)) {
        console.log("CraftEqiupment")
        element = document.getElementById('storage-' + item.id)
        equipment = document.getElementById('equipment-' + item.id)
      } else if (Item.is(item)) {
        element = document.getElementById('buffStorage-' + item.id)
      }

      if (element) {
        element.classList.add("rounded")
        element.classList.add("select-ed")
      }

      if (equipment) {
        equipment.classList.add("rounded")
        equipment.classList.add("select-ed")
      }
      setViewItem(item)
    },
    setDragItem,
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
      console.log("equip")
      const equiped = Array.from(character.equipmentMap).find(([key, value]) => {
        return item.id === value?.id
      })
      console.log("equip", equiped)
      if (equiped) return
      item.item = itemDatabase.find(data => data.id === item.itemId)
      console.log("equip", item.item?.type)
      if (item.item?.type !== undefined) {
        const type = itemTypeList.get(item.item?.type)
        console.log("equip type", type)
        if (type && type.equipSlot && type.equipSlot.length > 0) {
          if (type.equipSlotType) {
            const slot = type.equipSlot[0]
            console.log("equip slot", slot)
            const old = character.equipmentMap.get(slot)
            if (old) {
              const oldElement = document.getElementById("storage-" + old.id)
              oldElement?.classList.remove("storage-equiped")
            }
            character.equipmentMap.set(slot, item)
          } else {
            type.equipSlot.forEach(slot => {
              console.log("equip slot", slot)
              const old = character.equipmentMap.get(slot)
              if (old) {
                const oldElement = document.getElementById("storage-" + old.id)
                oldElement?.classList.remove("storage-equiped")
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
    }
  }

  return (
    <AppContext.Provider value={app}>
      <AppApiContext.Provider value={api}>
        {props.children}
      </AppApiContext.Provider>
    </AppContext.Provider>
  )
}