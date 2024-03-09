import { Accordion, Container } from "react-bootstrap"
import { ImageCardButton } from "../atoms/ImageCard"

const thStyle = {
    color: "#333",
    fontSize: "16px"
}


const templateList = [
    { src: "https://raw.githubusercontent.com/wasabiPigg/outfitImgAutomation/master/img/temp0.png", title: "シンプル", settingData: { backGround: { editable: true }, items: { editable: true }, shadows: { editable: true }, text: { editable: true } } },
    { src: "https://pbs.twimg.com/media/F9xDMGYbkAA2ay5?format=jpg&name=large", title: "黒猫さん(仮)", settingData: { backGround: { editable: true }, items: { editable: false }, shadows: { editable: false }, text: { editable: true } } },
    { src: "https://pbs.twimg.com/media/F-eOlWjbQAA5IBS?format=jpg&name=medium", title: "みやさん(仮)", settingData: { backGround: { editable: true }, items: { editable: false }, shadows: { editable: false }, text: { editable: true } } }
]

export const EditTemplate = (props) => {
    const { selected } = props;
    return (
        <>
            <Accordion defaultActiveKey="0" style={{ margin: "auto" }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>テンプレート<span style={{ fontSize: "xx-small" }}>(タップで開閉します)</span></Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <table className="templateTable">
                                <tbody>
                                    <tr>
                                        {templateList.map((template, index) => (
                                            <th key={index} style={thStyle} className="rounded">
                                                <ImageCardButton src={template.src} title={template.title} selected={selected} settingData={template.settingData} />
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