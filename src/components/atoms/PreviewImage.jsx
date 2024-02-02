const previewAreaStyle = {
    margin: "auto",
    width: "50%",
    maxWidth: "450px",
    maxHeight: "450px",
    minWidth: "300px",
    minHeight: "300px",
}

const cancasStyle = {
    width: "900px",
    height: "900px"
}

export const PreviewImage = () => {
    return (
        <>
        {/* <img id="previewArea" className="rounded mx-auto d-blockd imageArea" src="http://via.placeholder.com/900x900" style={previewAreaStyle}></img> */}
            <canvas style={cancasStyle} className="bg-img-transparent"></canvas>
        </>
    )
}