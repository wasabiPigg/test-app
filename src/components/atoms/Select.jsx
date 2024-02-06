import { Form } from "react-bootstrap";
const style = {
    margin: "auto",
    width: "80vw",
    maxWidth: "450px"
}
export const Select = (props) => {
    const {selectItems=[]} = props;
    return (
        <div style={{marginTop: "0.5rem"}}>
        <Form.Select aria-label="" style={style}>
            { selectItems.map((item, index) => (
                <option key={index} value={index}>{item}</option>
            ))}
        </Form.Select>
        </div>
    )
}