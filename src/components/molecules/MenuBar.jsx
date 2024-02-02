import { RiCloseLine } from "react-icons/ri";
const spanStyle = {
    width: "100%",
    textAlign: "center"
}
const divStyle = {
    backgroundColor:" var(--main-color-green)",
    color: "white",
    padding: "0.3rem 0.5rem",
    fontWeight: "bold"
}
export const MenuBar = () => {
    return (
        <div className="d-flex align-items-center footerMenuMedium" style={divStyle}>
        <RiCloseLine style={{fontSize: "large"}}></RiCloseLine>
        <span style={spanStyle}>aiueo</span>
        </div>
    )
}