import { memo } from "react"
import { MenuBar } from "../molecules/MenuBar"
import { MenuMediumItem } from "../molecules/MenuMediumItem"
import { FooterMenuSmall } from "./FooterMenuSmall"

const style = {
    position: "fixed",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: "1030",
    backgroundColor: "var(--light-gray-color)"
}
export const FooterMenuMedium = memo((props) => {
    const {show, onClickClose} = props;
    return (
        <>
        { show ? (
            <div style={style}>
                <div style={{overflowX: "auto"}}>
                    {/* <FooterMenuSmall type={0} colorList={["#cc00cc", "#ff00ff", "#00ff00", "#ffff00", "#cccccc", "#551100"]} /> */}
                    {/* <FooterMenuSmall type={3} selectItems={["menu1", "menu2", "menu3"]}/> */}
                    {/* <FooterMenuSmall type={4} sliderLabel={"10"} /> */}
                    <FooterMenuSmall type={5} showTextToggle={true} />
                    {/* <FooterMenuSmall type={6} /> */}
                </div>
                <div style={{backgroundColor: "var(--main-color-light-green)", overflowX: "auto"}}>
                    <MenuMediumItem />
                </div>
                <MenuBar onClickClose={onClickClose}/>
            </div>
        ) : null }
        </>
    )
})