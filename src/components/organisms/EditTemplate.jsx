import { ImageCardButton } from "../atoms/ImageCard"

const ulStyle = {
    listStyle: "none",
    padding: 0,
    display: "flex",
    // eslint-disable-next-line no-dupe-keys
    listStyle: "none",
    justifyContent: "center"
}
const liStyle = {
    padding: "0 3px",
}

const templateList = [
    {src:"https://raw.githubusercontent.com/wasabiPigg/outfitImgAutomation/master/img/temp0.png", title:"オリジナル"},
    {src:"https://pbs.twimg.com/media/F9xDMGYbkAA2ay5?format=jpg&name=large", title: "黒猫さん(仮)"},
    {src:"https://pbs.twimg.com/media/F-eOlWjbQAA5IBS?format=jpg&name=medium", title:"みやさん(仮)"}
]

export const EditTemplate = ( props ) => {
    const { selected } = props;
    return (
        <>
            <ul className="text-center items horizontal-list" style={ulStyle}>
                {templateList.map ((template, index) => (
                    <li key={template} style={liStyle}>
                    <ImageCardButton src = {template.src} title={template.title} selected={selected}/>
                    </li>
                ))}
            </ul>
        </>
    )
}