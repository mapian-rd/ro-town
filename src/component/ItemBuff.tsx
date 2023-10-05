import Box from "./Box";

interface Buff {
    id: number;
    name: string;
    imgSrc: string;
    isActive: boolean;
}

interface Props {
    title: string;
    list: Buff[];
    handleBuffChange?: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void
}

export default function ItemBuff(props: Props) {
    const itemList = props.list.map(item => {
        return (
            <div className="row p-1" key={'buff-' + item.id}>
                <div className="col-auto">
                    <img className="w-100 my-2" src={item.imgSrc} alt="Item" />
                </div>
                <div className={'col ps-0 d-flex align-items-center text-break'}>
                    {item.name}
                </div>
                <div className={'col-auto'}>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id={"switch-" + item.id}
                            onChange={(event) => props.handleBuffChange ? props.handleBuffChange(event, item.id) : undefined}
                            defaultChecked={item.isActive}
                        />
                    </div>
                </div>
            </div>
        )
    })
    return (
        <Box className="flex-grow-1" title={props.title} searchable overflow>
            <div className="mh-0">
                {itemList}
            </div>
        </Box>
    )
}