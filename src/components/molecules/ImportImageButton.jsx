import { useDispatch } from 'react-redux';
import { editFileData } from 'stores/imageSrc';

const style = {
    backgroundColor: "rgb(214,215,218)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    width: "60px",
    height: "60px"
}

export const ImportImageButton = (props) => {
    const dispatch = useDispatch();

    const { src } = props;
    const handleImageChange = (event) => {

        const file = event.target.files[0];
        console.log(file)
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const fileData = reader.result;
                dispatch(editFileData(fileData));
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <label className='importImage'>
            <img id="" className="rounded" alt="" src={src} style={style}></img>
            <input type="file" style={{ display: "none" }} onChange={handleImageChange}></input>
        </label>
    )
}