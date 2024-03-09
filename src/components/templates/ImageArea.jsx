import { PreviewImage } from "../atoms/PreviewImage.jsx"


export const ImageArea = (imageSrc) => {
    return (
        <div className="text-center" style={{ marginTop: "0.3rem", marginBottom: "30vh" }}>
            <PreviewImage imageSrc={imageSrc} />
        </div>
    )
}