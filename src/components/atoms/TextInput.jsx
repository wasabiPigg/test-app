
export const TextInput = (props) => {
    const { showText } = props;
    const textAreaStyle = {
        marginRight: showText ? "3rem" : "0"
    }
    return (
        <div className="d-flex justify-content-center my-2 align-items-center " style={{margin: "1rem auto", width: "80vw", maxWidth: "500px"}}>
        <input type="text" className="form-control" style={textAreaStyle}></input>
        {showText ? (<input type="checkbox" id="custom-switch" className="form-check-input"></input>) : null}
        {/* <input type="checkbox" id="custom-switch" className="form-check-input" style={switchStyle}></input> */}
        </div>
    )
}