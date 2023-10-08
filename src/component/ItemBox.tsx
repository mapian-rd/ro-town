import React, { ReactNode } from "react";
import { Item } from "../data/model/Itemv2";


interface BoxProps {
    children: ReactNode;
    className?: string | undefined;
    title?: string;
    buttonText?: string;
    description?: any[];
    imgSrc?: string;
    option?: string[];
    cardSlot?: number;
    card?: string[];
    enchant?: Item[];
    onClick?: () => void;
}

export default function ItemBox(props: BoxProps) {

    const optionView = (props.option ?? []).map((option, index) => {
        console.log("optionView")
        return (
            <div className="itembox-card mt-1" key={index}>
                {option}
            </div>
        )
    })

    const cardView: JSX.Element[] = Array(4).fill(0).map((_, index) => {
        console.log("cardView", props.cardSlot)
        if (props.card) {
            if (props.card.length > index) {
                return (
                    <img src={process.env.PUBLIC_URL + "/4140.png"} alt="card" key={index} />
                )
            }
        }
        if (props.cardSlot) {
            if (props.cardSlot > index) {
                return (
                    <img src={process.env.PUBLIC_URL + "/nocard.png"} alt="card" key={index} />
                )
            }
        }
        if (props.enchant) {
            const enchantIndex = Math.abs(index - 3)
            if (props.enchant.length > enchantIndex) {
                return (
                    <img src={`https://static.divine-pride.net/images/items/item/${props.enchant[enchantIndex].id}.png`} alt="enchant" key={index} />
                )
            }
        }
        return (
            <img src={process.env.PUBLIC_URL + "/none.png"} alt="card" key={index} />
        )
    })

    return (
        <div className={"d-flex flex-column position-relative pb-3 h-100 " + props.className ?? ""}>
            <div className="itembox-header d-flex">
                <span className="offset-4 jc-center text-break">{props.title}</span>
                {props.buttonText ? (
                    <button className="box-button" onClick={props.onClick}>{props.buttonText}</button>
                ) : (
                    <span>

                    </span>
                )}
            </div>
            <div className="itembox-body">
                <div className="offset-4">
                    {props.children}
                    <p>{props.description}</p>
                </div>
            </div>
            {optionView}
            <div className="itembox-card mt-1 px-1">
                {cardView}
            </div>
            <div className="itembox-image col-3 position-absolute w-30 m-3 top-0 start-0">
                <img className="w-100 my-2" src={props.imgSrc} alt="Item" onError={({ currentTarget }) => {
                    currentTarget.onerror = null
                    currentTarget.src = process.env.PUBLIC_URL + "/noitem.png"
                }} />
            </div>
        </div>
    );

}