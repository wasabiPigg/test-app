import { useFileDataSelector } from "stores/imageSrc"
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
    const fileData = useFileDataSelector();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 900;
        canvas.height = 900;
        const context = canvas.getContext('2d');
        const image = new Image();
        image.src = fileData;
        image.onload = () => {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            context.font = '120px Roboto medium';
            context.fillText('文字テスト', 0, 150);
        };
    }, [fileData]);

    return (
        <>
            {/* <img id="previewArea" className="rounded mx-auto d-blockd imageArea" src="http://via.placeholder.com/900x900" style={previewAreaStyle}></img> */}
            <canvas ref={canvasRef} style={cancasStyle} className="bg-img-transparent"></canvas>
        </>
    )
}