import { useAvatarImageSelector, useWearingImageSelector, useBackgroundImageSelector } from "stores/imageSrc"
import React, { useEffect, useRef } from 'react';

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

    const avatarImage = useAvatarImageSelector();
    const wearingImage = useWearingImageSelector();
    const backgroundImage = useBackgroundImageSelector();

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 900;
        canvas.height = 900;
        const context = canvas.getContext('2d');
        //TODO:それぞれの画像を任意の順番で描画する
        const image = new Image();
        image.src = avatarImage;
        image.onload = () => {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    }, [avatarImage, wearingImage, backgroundImage]);

    return (
        <>
            {/* <img id="previewArea" className="rounded mx-auto d-blockd imageArea" src="http://via.placeholder.com/900x900" style={previewAreaStyle}></img> */}
            <canvas ref={canvasRef} style={cancasStyle} className="bg-img-transparent"></canvas>
        </>
    )
}