import React, { ReactNode } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Item } from "../data/model/Itemv2";


interface BoxProps {
    children: ReactNode;
    className?: string | undefined;
    id?: string;
    title?: string;
    buttonText?: string;
    description?: any[];
    imgSrc?: string;
    option?: Item[];
    cardSlot?: number;
    card?: Item[];
    enchant?: Item[];
    onClick?: (craftId?: string) => void;
    onClickCard?: (item: Item, craftId?: string) => void;
}

export default function ItemBox(props: BoxProps) {

    const optionView = (props.option ?? []).map((option, index) => {
        return (
            <div className="itembox-card mt-1" key={`option-${props.id}-${index}`}>
                {option.name}
            </div>
        )
    })

    const cardView: JSX.Element[] = Array(4).fill(0).map((_, index) => {
        if (props.card) {
            if (props.card.length > index) {
                const card = props.card[index]
                let imgSrc: string
                if (card.imgId !== undefined) {
                    imgSrc = `https://static.divine-pride.net/images/items/item/${card.imgId}.png`
                } else {
                    imgSrc = process.env.PUBLIC_URL + "/4140.png"
                }
                return (
                    <OverlayTrigger
                        placement="top"
                        key={`card-${props.id}-${index}`}
                        overlay={<Tooltip>{card.name}</Tooltip>}
                    >
                        {({ ref, ...triggerHandler }) => (
                            <img
                                src={imgSrc}
                                alt="card"
                                key={"cardView-" + card.id}
                                id={"card-" + card.id}
                                ref={ref} {...triggerHandler}
                                onClick={() => props.onClickCard ? props.onClickCard(card, props.id) : undefined}
                            />
                        )}
                    </OverlayTrigger>
                )
            }
        }
        if (props.cardSlot) {
            if (props.cardSlot > index) {
                return (
                    <img src={process.env.PUBLIC_URL + "/nocard.png"} alt="card" key={`card-${props.id}-${index}`} />
                )
            }
        }
        if (props.enchant) {
            const enchantIndex = Math.abs(index - 3)
            if (props.enchant.length > enchantIndex) {
                const enchant = props.enchant[enchantIndex]
                return (
                    <OverlayTrigger
                        placement="top"
                        key={`card-${props.id}-${index}`}
                        overlay={<Tooltip>{enchant.name}</Tooltip>}
                    >
                        {({ ref, ...triggerHandler }) => (
                            <img
                                src={`https://static.divine-pride.net/images/items/item/${enchant.id}.png`}
                                alt="enchant"
                                key={"card-" + enchant.id}
                                id={"card-" + enchant.id}
                                ref={ref} {...triggerHandler}
                                onClick={() => props.onClickCard ? props.onClickCard(enchant, props.id) : undefined}
                            />
                        )}
                    </OverlayTrigger>

                )
            }
        }
        return (
            <img src={process.env.PUBLIC_URL + "/none.png"} alt="card" key={`card-${props.id}-${index}`} />
        )
    })

    return (
        <div className={"d-flex flex-column position-relative pb-3 h-100 " + props.className ?? ""}>
            <div className="itembox-header d-flex justify-content-between">
                <span className="offset-4 jc-center text-break">{props.title}</span>
                {props.buttonText ? (
                    <button className="box-button" onClick={() => props.onClick ? props.onClick(props.id) : undefined}>{props.buttonText}</button>
                ) : (
                    <span>

                    </span>
                )}
            </div>
            <div className="itembox-body">
                <div className="offset-4">
                    {props.children}
                    <p key={`description-${props.id}`}>{props.description}</p>
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