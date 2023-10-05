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
    card?: number[];
    enchant?: Item[];
    onClick?: () => void;
}

export default function ItemBox(props: BoxProps) {

    const optionView = (props.option ?? []).map(option => {
        console.log("optionView")
        return (
            <div className="itembox-card mt-1">
                {option}
            </div>
        )
    })

    const cardView: JSX.Element[] = Array(4).fill(0).map((_, index) => {
        console.log("cardView", props.cardSlot)
        if (props.card) {
            if (props.card.length > index) {
                return (
                    <img src={process.env.PUBLIC_URL + "/4140.png"} alt="card" />
                )
            }
        }
        if (props.cardSlot) {
            if (props.cardSlot > index) {
                return (
                    <img src={process.env.PUBLIC_URL + "/nocard.png"} alt="card" />
                )
            }
        }
        if (props.enchant) {
            const enchantIndex = Math.abs(index - 3)
            if (props.enchant.length > enchantIndex) {
                return (
                    <img src={`https://www.divine-pride.net/img/items/item/thROG/${props.enchant[enchantIndex].id}`} alt="enchant" />
                )
            }
        }
        return (
            <img src={process.env.PUBLIC_URL + "/none.png"} alt="card" />
        )
    })

    return (
        <div className={"d-flex flex-column position-relative mb-3 h-100 " + props.className ?? ""}>
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
                <img className="w-100 my-2" src={props.imgSrc} alt="Monster" />
            </div>
        </div>
    );

}