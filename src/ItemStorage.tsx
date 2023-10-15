import React from "react";
import { cardDatabase } from "./data/database/card";
import { Equipment } from "./data/model/Itemv1";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const storage: Equipment[] = [

]

const itemNameStyle = {
    display: 'inline-block'
}

export class ItemStorage extends React.Component {
    renderTooltip = (props: any) => (
        <Popover id="popover-basic" {...props}>
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </Popover.Body>
        </Popover>
    );

    storageDisplys = cardDatabase.map((equipment) =>
        <li>
            <OverlayTrigger
                placement="right"
                overlay={this.renderTooltip}>
                <p style={itemNameStyle}>{equipment.name}</p>
            </OverlayTrigger>
        </li>


    )
    render() {
        return (
            <div>
                <h4>Item Storage</h4>
                <ul>
                    {this.storageDisplys}
                </ul>
            </div>
        )
    }
}