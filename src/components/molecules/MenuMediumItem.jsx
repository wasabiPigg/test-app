const menuMediumItem = [
    "アイテムaaaaaa1",
    "アイテムaaaaa2",
    "アイテムaaaaa3",
    "アイテムaaaa4"
]

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

export const MenuMediumItem = (props) => {
    // const { menuMediumItem } = props
    return (
        <div style={divStyle}>
            <ul style={ulStyle}>
                { menuMediumItem.map((menu, index) => (
                    <li key={menu}>
                        <a href="#" style={aStyle}>{menu}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}