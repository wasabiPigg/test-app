/* 
    typeの種類
    0: カラーボタン（背景なし） colorList: 設定色のリスト
    1: カラーボタン（背景あり） colorList: 設定色のリスト bgBtnIndex: 背景ボタンが何個めか
    2: グラデボタン
    3: 選択UI selectItems: 選択肢
    4: スライダー
    5: テキスト入力ボックス
    6: カレンダー
*/

import { ColorButton } from "../atoms/ColorButton";
import { Select } from "../atoms/Select";

const colorBtnStyle = {
    marginTop: "0.5rem",
}

export const FooterMenuSmall = (props) => {
    const { type, colorList=[], bgBtnIndex=-1, selectItems=[]} = props;
    const menu = () => {
        switch (type) {
            case 0:
                return(
                <div style={colorBtnStyle}>
                { colorList.map((color, index) => (
                    // <li key={index}></li>
                    <ColorButton key={index} color={color} isSelected={index==0}/>
                ))}
                </div>
                );
            case 1:
                return(<></>);
            case 3:
                return(
                <>
                    <Select selectItems={selectItems} />
                </>
                );
            default:
                return(<></>);
        }
    }
    return (
        <>{menu()}</>
    )
}