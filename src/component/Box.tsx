import React, { ReactNode } from "react";
import Select from "react-select";
import { optionStyle } from "../App";

interface Dropdown {
    label: string,
    value: any,
}

interface BoxProps {
    children: ReactNode;
    className?: string;
    title?: string;
    titleEdiable?: boolean;
    buttonText?: string;
    searchDropdownList?: Dropdown[]
    searchable?: boolean;
    overflow?: boolean;
    onClick?: () => void;
    onChangeTitle?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearchDropdownChange?: (option: any) => void;
}

export default function Box(props: BoxProps) {
    return (
        <div className={"d-flex flex-column pb-3 w-100 " + props.className ?? ""}>
            <div className="box-header d-flex align-items-center">
                {props.title ? (
                    <div>
                        {props.titleEdiable ? (
                            <input className="title-input fw-bold mx-2" type="text" value={props.title} onChange={props.onChangeTitle} />
                        ) : (

                            <span className="fw-bold mx-2 jc-center">{props.title}</span>
                        )}
                    </div>
                ) : (
                    <span></span>
                )}

                {props.searchDropdownList ? (
                    <div className="fw-normal d-flex flex-grow-1 my-1">
                        <span className="jc-center ms-2 me-1">Filter</span>
                        <Select jc-center
                            options={props.searchDropdownList}
                            classNames={optionStyle}
                            onChange={props.handleSearchDropdownChange}
                            isClearable
                        />
                    </div>

                ) : (
                    <span></span>
                )}

                {props.searchable ? (
                    <input className="fw-normal search-input ms-1 me-2 flex-grow-1 py-1" type="text" placeholder="Search" onChange={props.onSearchChange} />
                ) : (
                    <div className="flex-grow-1"></div>
                )}

                {props.buttonText ? (
                    <button className="box-button" onClick={props.onClick}>{props.buttonText}</button>
                ) : (
                    <span></span>
                )}
            </div>
            <div className={'box-body' + (props.overflow ? ' box-overflow' : '')}>
                {props.children}
            </div>
        </div>
    );

}