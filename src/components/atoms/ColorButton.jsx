import { Form } from "react-bootstrap";

export const ColorButton = (props) => {
    const { isSelected, color } = props;

    const selectedStyle = {
        width: "40px",
        height: "40px",
        background: color,
        color: color,
        margin: "0.2rem",
        outline: "solid 3px var(--main-color-green)"
    }
    
    const notSelectedStyle = {
        width: "40px",
        height: "40px",
        background: color,
        color: color,
        margin: "0 0.1rem",
        outline: "none"
    }
    return (
        <>
            <Form.Control
            type="color"
            defaultValue={color}
            className="btn rounded-circle border-4"
            style={isSelected ? selectedStyle : notSelectedStyle}
            />
        </>
    )    
}