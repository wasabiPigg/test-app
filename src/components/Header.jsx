import { Button } from "react-bootstrap"
import { FaQuestionCircle } from "react-icons/fa"

const headerStyle = {
    width: "100%",
    backgroundColor: "var(--main-color-light-green)",
    marginBottom: "1rem"
}
const headerBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "650px",
    margin: "auto",
    padding: "0.5rem 1rem",
    fontWeight: "bold",
    fontSize: "large",
    height: "47.5px"
}
const createPngBtnStyle = {
    backgroundColor: "var(--main-color-green)",
    color: "white",
    fontWeight: "bold",
    fontSize: "small",
    border: 0
}

export const Header = () => {
    return (
        <header className="App-header" style={headerStyle}>
        <div style={headerBoxStyle}>
              <div>
                  コーデ加工ツール <i data-bs-toggle="modal" data-bs-target="#infoModalCenter" class="fas fa-question-circle"
                  style={{color: "#707070"}}>
                  </i>
                  <FaQuestionCircle style={{color: "#707070"}} />
              </div>
              <div>
                {/* TODO: createPng()を用意 */}
                  <Button type="button" className="btn" id="chgImgBtn" data-bs-toggle="modal"
                  data-bs-target="#completeModalCenter" onclick="createPng()" style={createPngBtnStyle}>
                  編集完了
              </Button>
              </div>
          </div>
        </header>
    )
}