
import { FaImage } from "react-icons/fa";
import { IoText, IoTextSharp } from "react-icons/io5";
import { BsShadows } from "react-icons/bs";
import { PiSquaresFour } from "react-icons/pi";

const style = {
    alignItems: "center",
    justifyContent: "center",
    display: "inline-block",
    padding: "10px 10px",
    fontSize: "15px",
    color: "var(--black-color)",
    textDecoration: "none"
}

export const IconMenuItem = (props) => {
    const { text } = props;
    const items = () => {
        switch (text) {
            case "背景":
                return (
                    <a style={style}>
                        <FaImage style={{fontSize: "20px"}} />
                        <br />
                        <span style={{fontSize: "small"}}>{text}</span>
                    </a>
                )
            case "テキスト":
                return (
                    <a style={style}>
                        <IoTextSharp style={{fontSize: "20px"}} />
                        <br />
                        <span style={{fontSize: "small"}}>{text}</span>
                    </a>
                )
            case "影・ふち":
                return (
                    <a style={style}>
                        <BsShadows style={{fontSize: "20px"}} />
                        <br />
                        <span style={{fontSize: "small"}}>{text}</span>
                    </a>
                )
            case "アイテム":
                return (
                    <a style={style}>
                        <PiSquaresFour style={{fontSize: "20px"}} />
                        <br />
                        <span style={{fontSize: "small"}}>{text}</span>
                    </a>
                )
            case "default":
                return (<></>)
        }
    } 
    return (
        <>
        {items()}
        </>
    )
}