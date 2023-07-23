import React, { ReactNode } from "react";


interface BoxProps {
    children: ReactNode;
    title?: string;
    titleEdiable?: boolean;
    buttonText?: string;
}

export default function Box(props: BoxProps) {
    return (
        <div className="mb-3">
            <div className="box-header d-flex">
                {props.titleEdiable ? (
                    <input className="fw-bold mx-2" type="text" value={props.title} />
                ) : (
                    <p className="fw-bold mx-2 flex-grow-1">{props.title}</p>
                )}
                {props.buttonText ? (
                    <button className="box-button">{props.buttonText}</button>
                ) : (
                    <p></p>
                )}
            </div>
            <div className="box-body">
                {props.children}
            </div>
        </div>
    );

}