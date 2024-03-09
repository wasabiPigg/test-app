import { useDispatch } from 'react-redux';


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

    const { src, editImage } = props;
    const handleImageChange = (event) => {

        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const image = reader.result;
                editImage(image);
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