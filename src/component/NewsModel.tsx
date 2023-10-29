import { useContext, useEffect, useRef, useState } from "react";
import Markdown from 'react-markdown'
import { AppApiContext } from "../context/AppApiContext";
import { AppContext } from "../context/AppContext";
import Box from "./Box";
const folder = process.env.PUBLIC_URL + '/patchnote/';

const lastestVersion = 2

export function NewsModel() {
    const context = useContext(AppContext);
    const api = useContext(AppApiContext);
    const backDrop = useRef<HTMLDivElement | null>(null)
    const [version, setVersion] = useState<number>(Number.parseInt(localStorage.getItem("version") ?? "0"))
    const [newModel, setNewModel] = useState<JSX.Element>()
    const [patchModel, setPatchModel] = useState<Map<number, string>>(new Map())

    const patchModelCom = Array.from(patchModel).map(([key, value]) => {
        return (
            <Box className={"m-0 new-box" + (version < key ? '' : ' d-none')} buttonText="Close" onClick={() => setVersion(key)}>
                <Markdown className="mt-3">{value}</Markdown>
            </Box>
        )
    })

    function onBackDropClick(event: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) {
        console.log("onBackDropClick", event.target, backDrop.current)
        event.preventDefault()
        if (backDrop.current && event.target && backDrop.current === event.target) {
            setVersion(lastestVersion)
            return
        }
    }

    useEffect(() => {
        async function read() {
            for (let i = Math.max(2, lastestVersion - 2); i <= lastestVersion; i++) {
                const text = await fetch(folder + i + ".md")
                    .then(text => text.text())
                patchModel.set(i, text)
            }
            setPatchModel(patchModel)
        }
        read()
    }, [])

    useEffect(() => {
        setNewModel(
            <Box className={"m-0 new-box" + (version < 1 ? '' : ' d-none')} buttonText="Close" onClick={() => setVersion(1)}>
                <h3 className="text-center mt-3">Welcome to Ro town</h3>
                <div className='row py-3'>
                    <h5>Please Select Equipment Mode</h5>
                    <div className='col-10 d-flex'>
                        <div className="form-check flex-grow-1">
                            <input className="form-check-input" type="radio" name="equipmentStyleNew" id="singleStyleNew" value={"single"} checked={context.mode === "single"} onChange={e => api.setMode(e.target.value)} />
                            <div className="form-check-label d-flex flex-column" >
                                Single
                                <p>เลือกสร้างของเป็นชิ้นต่อชิ้น การเปลี่ยนจะถูกสวมใส่และแก้ทันที ไม่มีการเก็บใน Storage (แนะนำสำหรับผู้เริ่มต้น)</p>
                                <img className='w-100' src={process.env.PUBLIC_URL + "/singleStyle.jpg"} alt="Single style" />
                            </div>
                        </div>
                    </div>
                    <div className='col-10 d-flex'>
                        <div className="form-check flex-grow-1">
                            <input className="form-check-input" type="radio" name="equipmentStyleNew" id="storageStyleNew" value={"storage"} checked={context.mode === "storage"} onChange={e => api.setMode(e.target.value)} />
                            <div className="form-check-label d-flex flex-column" >
                                Storage
                                <p>สร้างของแล้ว ของสวมใส่ทั้งหมดจะถูกเก็บไว้ใน Storage สามารถเลือกถอดหรือใส่ และแก้ไข ได้ในภายหลัง</p>
                                <img className='w-100' src={process.env.PUBLIC_URL + "/storageStyle.jpg"} alt="Storage style" />
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        )
    }, [context.mode, version])

    useEffect(() => {
        localStorage.setItem("version", version.toString())
    }, [version])

    if (version >= lastestVersion) {
        return (<div></div>)
    }

    return (
        <div className={"new-backdrop"} onClick={onBackDropClick} ref={backDrop}>
            <div className="new-model" onClick={(e) => e.preventDefault()}>
                <div className="pt-4"></div>
                {newModel}
                {patchModelCom}
            </div>
        </div>
    )
}