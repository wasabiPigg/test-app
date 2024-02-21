import { Form } from "react-bootstrap"

const style = {
    maxWidth: "60vw",
    marginRight: "1rem"
}

export const Slider = (props) => {
    const { label } = props;
    return (
        <div className="d-flex justify-content-center my-2">
        <Form.Range style={style} min={0} max={20} step={0.5} />
        <label style={{width: "2rem"}}>{label}</label>
        </div>
    )
}