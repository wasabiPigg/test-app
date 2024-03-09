import { MenuTitleBar } from "components/parts/menues/MenuTitleBar"
import { FooterMenuSmall } from "components/organisms/FooterMenuSmall"

/* eslint-disable no-dupe-keys */
const menuMediumItem = [
    "アイテムaaaaaa1",
    "アイテムaaaaa2",
    "アイテムaaaaa3",
    "アイテムaaaa4"
]

const wrapper = {
    position: "fixed",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: "1030",
    backgroundColor: "var(--light-gray-color)"
}

const aStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 15px",
    fontSize: "15px",
    color: "var(--black-color)",
    textDecoration: "none",
    borderRadius: "75px",
    margin: "0.5rem 0.2rem",
    backgroundColor: "var(--gray-color)",
    padding: "6px 15px",
    fontSize: "small",
    display: "inline-block"
}

const ulStyle = {
    display: "flex",
    width: "max-content",
    margin: "0 auto",
    padding: 0,
    listStyle: "none"
}
const divStyle = {
    minWidth: "fit-content",
    backgroundColor: "var(--light-gray-color)"
}


export const BackGroundMenu = ({ isShown, onClose }) => {
    if (!isShown) return;
    return (
        <div style={wrapper}>
            <div style={{ overflowX: "auto" }}>
                {/* <FooterMenuSmall type={0} colorList={["#cc00cc", "#ff00ff", "#00ff00", "#ffff00", "#cccccc", "#551100"]} /> */}
                {/* <FooterMenuSmall type={3} selectItems={["menu1", "menu2", "menu3"]}/> */}
                {/* <FooterMenuSmall type={4} sliderLabel={"10"} /> */}
                <FooterMenuSmall type={5} showTextToggle={true} />
                {/* <FooterMenuSmall type={6} /> */}
            </div>
            <div style={{ backgroundColor: "var(--main-color-light-green)", overflowX: "auto" }}>
                <div style={divStyle}>
                    <ul style={ulStyle}>
                        {menuMediumItem.map((menu, index) => (
                            <li key={menu}>
                                <a href={() => false} style={aStyle}>{menu}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <MenuTitleBar onClickClose={onClose} title='背景' />
        </div>
    )
}
