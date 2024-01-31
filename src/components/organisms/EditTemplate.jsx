import { Accordion, Container } from "react-bootstrap"
import { ImageCardButton } from "../atoms/ImageCard"

const thStyle = {
    color: "#333",
    fontSize: "16px",
    width: "25%"
}


const templateList = [
    {src:"https://raw.githubusercontent.com/wasabiPigg/outfitImgAutomation/master/img/temp0.png", title:"シンプル"},
    {src:"https://pbs.twimg.com/media/F9xDMGYbkAA2ay5?format=jpg&name=large", title: "黒猫さん(仮)"},
    {src:"https://pbs.twimg.com/media/F-eOlWjbQAA5IBS?format=jpg&name=medium", title:"みやさん(仮)"}
]

export const EditTemplate = ( props ) => {
    const { selected } = props;
    return (
        <>
        <Accordion defaultActiveKey="0" style={{maxWidth: "80vw", margin: "auto"}}>
            <Accordion.Item eventKey="0">
            <Accordion.Header>テンプレート<span style={{fontSize: "xx-small"}}>(タップで開閉します)</span></Accordion.Header>
            <Accordion.Body>
                <Container>
                <table className="templateTable">
                    <tbody>
                        <tr>
                            {templateList.map((template, index) => (
                                <th key={index} style={thStyle} className="rounded">
                                    <ImageCardButton src = {template.src} title={template.title} selected={selected}/>
                                </th>
                            ))}
                        </tr>
                    </tbody>
                </table>
                </Container>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
    )
}