interface AttributeProps {
    name: string;
    value?: number | string;
}

export default function Attribute(props: AttributeProps) {
    return (
        <div className="row mx-0">
            <div className="col-6 px-0 status-attr">
                {props.name}
            </div>
            <div className="col-6 px-0 status-attr-value">
                {props.value}
            </div>

        </div>
    )
}