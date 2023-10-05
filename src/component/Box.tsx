import React, { ReactNode } from "react";


interface BoxProps {
    children: ReactNode;
    className?: string | undefined;
    title?: string;
    titleEdiable?: boolean;
    buttonText?: string;
    searchable?: boolean;
    overflow?: boolean;
    onClick?: () => void;
    onChangeTitle?: (event: any) => void;
}

export default function Box(props: BoxProps) {
    return (
        <div className={"mh-0 d-flex flex-column mb-3 " + props.className ?? ""}>
            <div className="box-header d-flex">
                {props.titleEdiable ? (
                    <input className="title-input fw-bold mx-2" type="text" value={props.title} onChange={props.onChangeTitle}/>
                ) : (
                    <span className="fw-bold mx-2 jc-center">{props.title}</span>
                )}
                {props.searchable ? (
                    <div className="fw-normal d-flex flex-grow-1 mx-2">
                        <span className="jc-center">Filter</span>
                        <input className="fw-normal search-input mx-2 flex-grow-1" type="text" placeholder="Search" />
                    </div>
                ) : (
                    <div className="flex-grow-1">

                    </div>
                )}
                {props.buttonText ? (
                    <button className="box-button" onClick={props.onClick}>{props.buttonText}</button>
                ) : (
                    <span>

                    </span>
                )}
            </div>
            <div className={'box-body' + (props.overflow ? ' box-overflow' : '')}>
                {props.children}
            </div>
        </div>
    );

}