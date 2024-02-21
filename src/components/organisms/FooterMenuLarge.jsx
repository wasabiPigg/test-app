import { memo } from "react";
import { MenuLargeItem } from "../molecules/MenuLargeItem"

const style = {
    position: "fixed",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: "1030"
}

export const FooterMenuLarge = memo((props) => {
    const {show} = props;
    return (
        <>
        {show? (
            <div style={style}>
            <MenuLargeItem />
            </div>
        ) : null}
        </>
    )
})