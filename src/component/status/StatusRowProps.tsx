import { JobClass } from "../../data/model/class";

interface StatusRowProps {
    name: string;
    value?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
                className="col-xl-4 col-sm-2 col-md-3 px-0 status-edit"
                type="number"
                value={props.value}
                min={1}
                max={props.clazz.statusMax} 
                onChange={props.onChange}
            />
            <div className="col-sm-auto col-xl-1 px-0 h-100 jc-center">
                +
            </div>
            <div className="col-xl-4 col-sm-2 col-md-3 px-0 text-sm-end text-xl-start h-100 jc-center">
                {props.plus}
            </div>
        </div>
    )
}