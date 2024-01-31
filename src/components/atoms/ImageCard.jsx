import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const selectedStyle = {
    padding: 0,
    color: "var(--black-color)",
    borderColor: "var(--gray-color)",
    backgroundColor: "var(--main-color-light-green)",
    fontWeight: "bold"
}
const notSelectedStyle = {
    padding: 0,
    color: "var(--black-color)",
    borderColor: "var(--gray-color)",
    backgroundColor: "white",
    fontWeight: "normal"
}
export const ImageCardButton = (props) => {
    const { src, title, selected } = props;
    return (
        <Card style={{width: "112px", border: "none"}}>
            <Button style={selected ? selectedStyle : notSelectedStyle}>
                <Card.Body style={{padding: "0.3rem"}}>
                    <img className='rounded mx-auto d-blockd' alt={title} src={src} style={{width: "88px", height: "88px"}}></img>
                </Card.Body>
                <Card.Header style={{padding: 0, border: "none"}}>
                    <p style={{height: "3rem", marginBottom: 0}} className='text-center'><small>{title}</small></p>
                </Card.Header>
            </Button>
            
        </Card>
    )
}