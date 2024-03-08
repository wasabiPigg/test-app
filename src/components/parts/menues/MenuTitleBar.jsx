import { RiCloseLine } from "react-icons/ri";
const spanStyle = {
    width: "100%",
    textAlign: "center"
}
const divStyle = {
    backgroundColor: " var(--main-color-green)",
    color: "white",
    padding: "0.3rem 0.5rem",
    fontWeight: "bold"
}
export const MenuTitleBar = ({ onClickClose, title }) => {
    return (
        <div className="d-flex align-items-center footerMenuMedium" style={divStyle}>
            <button onClick={onClickClose} style={{ border: "none", backgroundColor: "transparent", color: "white", paddingBottom: "0.3rem" }}>
                <RiCloseLine style={{ fontSize: "large" }}></RiCloseLine>
            </button>
            <span style={spanStyle}>{title}</span>
        </div>
    )
}