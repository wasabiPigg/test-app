import { ImportImageButton } from "../molecules/ImportImageButton"
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
const srcList = [
    "https://raw.githubusercontent.com/wasabiPigg/outfitImgAutomation/master/img/avBtnImg.PNG",
    "https://raw.githubusercontent.com/wasabiPigg/outfitImgAutomation/master/img/clBtnImg.PNG",
    "https://raw.githubusercontent.com/wasabiPigg/outfitImgAutomation/master/img/bgBtnImg.PNG"
]

export const ImportImageForm = () => {

    return (
        <>
            <ul className="text-center items horizontal-list" style={ulStyle}>
                {srcList.map ((importImg, index) => (
                    <li key={importImg} style={liStyle}>
                    <ImportImageButton src = {importImg}/>
                    </li>
                ))}
            </ul>
        </>
    )
}