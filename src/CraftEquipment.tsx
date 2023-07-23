import React from "react";
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export class CraftEquipment extends React.Component {
    render() {
        return (
            <div>
                <h4>Craft Equipment</h4>
                <div className="row">
                    <div className="col-sm-1">
                        <p className="equipment-slot">Equipment</p>
                    </div>
                    <div className="col-sm-4">
                        <Select
                            options={options}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <p className="equipment-slot">Refine</p>
                    </div>
                    <div className="col-sm-4">
                        <Select
                            options={options}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <p className="equipment-slot">Card</p>
                    </div>
                    <div className="col-sm-4">
                        <Select
                            options={options}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <p className="equipment-slot">Card</p>
                    </div>
                    <div className="col-sm-4">
                        <Select
                            options={options}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <p className="equipment-slot">Option</p>
                    </div>
                    <div className="col-sm-4">
                        <Select
                            options={options}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <p className="equipment-slot">Option</p>
                    </div>
                    <div className="col-sm-4">
                        <Select
                            options={options}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <p className="equipment-slot">Option</p>
                    </div>
                    <div className="col-sm-4">
                        <Select
                            options={options}
                        />
                    </div>
                </div>
                <button type="button" className="btn btn-light">Craft</button>
            </div>
        )
    }
}