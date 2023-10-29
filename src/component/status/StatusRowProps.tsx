import { JobClass } from "../../data/model/class";

interface StatusRowProps {
    name: string;
    value?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => number;
    plus?: number;
    clazz: JobClass
}

export default function StatusRow(props: StatusRowProps) {
    return (
        <div className="row mx-0">
            <div className="col h-100 px-0 status-name">
                {props.name}
            </div>
            <input
                className="col-auto col-sm-4 px-0 status-edit"
                type="number"
                defaultValue={props.value}
                min={1}
                max={props.clazz.statusMax}
                onChange={props.onChange}
                onBlur={(event) => {
                    const result = props.onChange(event)
                    event.target.value = result.toString()
                }}
            />
            <div className="col-1 px-0 h-100 jc-center">
                +
            </div>
            <div className="col-1 col-md-4 px-0 text-end h-100 jc-center">
                {props.plus}
            </div>
        </div>
    )
}