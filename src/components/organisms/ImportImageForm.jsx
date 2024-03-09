import { ImportImageButton } from "../molecules/ImportImageButton"
import { editAvatarImage, editWearingImage, editBackgroundImage } from 'stores/imageSrc';
import { useDispatch } from 'react-redux';

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

export const ImportImageForm = () => {
    const dispatch = useDispatch();
    return (
        <>
            <ul className="text-center items horizontal-list" style={ulStyle}>
                <li style={liStyle}>
                    <ImportImageButton src="https://raw.githubusercontent.com/wasabiPigg/outfitImgAutomation/master/img/avBtnImg.PNG" editImage={(image) => dispatch(editAvatarImage(image))} />
                </li>
                <li style={liStyle}>
                    <ImportImageButton src="https://raw.githubusercontent.com/wasabiPigg/outfitImgAutomation/master/img/clBtnImg.PNG" editImage={(image) => dispatch(editWearingImage(image))} />
                </li>
                <li style={liStyle}>
                    <ImportImageButton src="https://raw.githubusercontent.com/wasabiPigg/outfitImgAutomation/master/img/bgBtnImg.PNG" editImage={(image) => dispatch(editBackgroundImage(image))} />
                </li>

            </ul>
        </>
    )
}