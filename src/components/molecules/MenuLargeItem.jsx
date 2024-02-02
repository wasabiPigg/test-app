import { IconMenuItem } from "../atoms/IconMenuItem";

const menuItem = [
    "背景",
    "テキスト",
    "アイテム",
    "影・ふち"
]

const ulStyle = {
    display: "flex",
    width: "max-content",
    margin: "0 auto",
    padding: 0,
    listStyle: "none"
}

export const MenuLargeItem = (props) => {
    // const {menuItem} = props;
    return (
        <div className="footerMenuLarge" style={{backgroundColor: "var(--main-color-light-green)", overflowX: "auto"}}>
            <ul style={ulStyle}>
                { menuItem.map((menu, index) => (
                    <li key={index} className="text-center">
                        <IconMenuItem icon="<div>" text={menu}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}