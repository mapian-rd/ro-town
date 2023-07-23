interface StatusRowProps {
    name: string;
    value?: number;
    onValueChange: (value: number) => void;
    plus?: number;
}

export default function StatusRow(props: StatusRowProps) {
    return (
        <div className="row mx-0">
            <div className="col-xl-3 h-100 px-0 status-name">
                {props.name}
            </div>
            <input
                className="col-xl-4 px-0 status-edit"
                type="number"
                value={props.value}
                onChange={(e) => props.onValueChange(Number(e.currentTarget.value))}
            />
            <div className="col-xl-1 px-0 h-100 jc-center">
                +
            </div>
            <div className="col-xl-4 px-0 text-start h-100 jc-center">
                {props.plus}
            </div>
        </div>
    )
}