import { MenuBar } from "../molecules/MenuBar"
import { MenuMediumItem } from "../molecules/MenuMediumItem"

const style = {
    position: "fixed",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: "1030"
}
export const FooterMenuMedium = () => {
    return (
        <div style={style}>
            <div style={{backgroundColor: "var(--main-color-light-green)", overflowX: "auto"}}>
                <MenuMediumItem />
            </div>
            <MenuBar />
        </div>
    )
}