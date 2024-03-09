import React, { useState } from 'react';
import { FaImage } from "react-icons/fa";
import { IoTextSharp } from "react-icons/io5";
import { BsShadows } from "react-icons/bs";
import { PiSquaresFour } from "react-icons/pi";
import { BackGroundMenu } from "./BackGroundMenu";
import { TextMenu } from "./TextMenu";
import { ShadowsMenu } from "./ShadowsMenu";
import { ItemsMenu } from "./ItemsMenu";
import { useSettingDataSelector } from 'stores/settingData';

export const MainMenu = () => {
    const settingData = useSettingDataSelector();
    const [isBackGroundMenuShown, setBackGroundMenuShown] = useState(false);
    const [isTextMenuShown, setTextMunuShown] = useState(false);
    const [isItemMenuShown, setItemMenuShown] = useState(false);
    const [isShadowMenuShown, setShadowMenuShown] = useState(false);

    const wrapper = {
        position: "fixed",
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: "1030"
    }

    const ulStyle = {
        display: "flex",
        width: "max-content",
        margin: "0 auto",
        padding: 0,
        listStyle: "none"
    }

    const style = {
        alignItems: "center",
        justifyContent: "center",
        display: "inline-block",
        padding: "10px 10px",
        fontSize: "15px",
        color: "var(--black-color)",
        textDecoration: "none"
    }


    return (
        <div style={wrapper}>
            <div className="footerMenuLarge" style={{ backgroundColor: "var(--main-color-light-green)", overflowX: "auto" }}>
                <ul style={ulStyle}>
                    {settingData?.backGround?.editable &&
                        <li className="text-center">
                            <a href={() => false} style={style} onClick={() => { setBackGroundMenuShown(true); }}>
                                <FaImage style={{ fontSize: "20px" }} />
                                <br />
                                <span style={{ fontSize: "small" }}>背景</span>
                            </a>
                        </li>
                    }
                    {settingData?.text?.editable &&
                        <li className="text-center">
                            <a href={() => false} style={style} onClick={() => { setTextMunuShown(true); }}>
                                <IoTextSharp style={{ fontSize: "20px" }} />
                                <br />
                                <span style={{ fontSize: "small" }}>テキスト</span>
                            </a>
                        </li>
                    }

                    {settingData?.shadows?.editable &&
                        <li className="text-center">
                            <a href={() => false} style={style} onClick={() => { setShadowMenuShown(true); }}>
                                <BsShadows style={{ fontSize: "20px" }} />
                                <br />
                                <span style={{ fontSize: "small" }}>影・ふち</span>
                            </a>
                        </li>
                    }

                    {settingData?.items?.editable &&
                        <li className="text-center">
                            <a href={() => false} style={style} onClick={() => { setItemMenuShown(true); }}>
                                <PiSquaresFour style={{ fontSize: "20px" }} />
                                <br />
                                <span style={{ fontSize: "small" }}>アイテム</span>
                            </a>
                        </li>
                    }
                </ul>
            </div>
            <BackGroundMenu isShown={isBackGroundMenuShown} onClose={() => setBackGroundMenuShown(false)} />
            <TextMenu isShown={isTextMenuShown} onClose={() => setTextMunuShown(false)} />
            <ShadowsMenu isShown={isShadowMenuShown} onClose={() => setShadowMenuShown(false)} />
            <ItemsMenu isShown={isItemMenuShown} onClose={() => setItemMenuShown(false)} />
        </div>
    )
}