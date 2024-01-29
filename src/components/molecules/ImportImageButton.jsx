const style = {
    backgroundColor: "rgb(214,215,218)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    width: "80px",
    height: "80px"
}

export const ImportImageButton = (props) => {
    const { src } = props;
    return (
        <label className='importImage'>
            <img id="" class="rounded" alt="" src={ src } style={style}></img>
            <input type="file" style={{display: "none"}}></input>
        </label>
    )
}