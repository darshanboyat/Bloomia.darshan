import React from "react";
import ExerciseGuide from "../Exercise Guide/ExerciseGuide"
import DarkTheme, {createTheme} from "react-dark-theme"
import "../../styles/Accessbar.css";

function AccessBar() {
    const toggleDropdown = React.useRef()
    const toggleBtn = React.useRef()
    const [guideDisplay, setGuideDisplay] = React.useState('none') // further need to assign none

    const toggleShowHide = () => {
        (toggleDropdown.current.style.display == 'none') ? toggleDropdown.current.style.display = 'block' : toggleDropdown.current.style.display = 'none';
    }
    const kegelGuide = () => {
        setGuideDisplay('block')
    }

    const darkTheme = {
        background: '#1b1b3a',
        text: 'white',
        icons: 'black',
        guideBackground: '#29294d',
        cardBackground: '#29294D',
        prevDates: 'gray'
    }
    const lightTheme = {
      background: 'white',
      text: 'black',
      icons: 'black',
      guideBackground: 'white',
      cardBackground: '#EBEBFC',
      prevDates: 'rgb(219, 219, 219)'
    }

  
    const myTheme = createTheme(lightTheme, darkTheme)

    return (
        <>
            <ExerciseGuide display={guideDisplay} />

            <div className="bar-handle d-flex" style={{color: myTheme.text}}>
                <h6 className="handle" style={{color: myTheme.text}}>Kegel Exercise</h6>
                <i className="bi bi-question-circle" onClick={kegelGuide} style={{color: myTheme.icons}}/>
            </div>
            <div _ngcontent-gfb-c50="" className="dropdown mb-2 show accessbar-dropdown">
                <span ref={toggleBtn}
                    _ngcontent-gfb-c50=""
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    className="dropdown-toggle h4 m-1 accessbar-label"
                    onClick={toggleShowHide}
                    style={{ fontSize: '1.1rem', color: myTheme.text}}
                >
                    {" "}
                    Beginner{" "}
                </span>
                <div ref={toggleDropdown}
                    _ngcontent-gfb-c50=""
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-menu hide"
                    x-placement="bottom-start"
                    style={{
                        position: "absolute",
                        transform: "translate3d(0px, 26px, 0px)",
                        top: 20,
                        left: 0,
                        willChange: "transform",
                    }}
                >
                    <a _ngcontent-gfb-c50="" className="dropdown-item font-weight-600">
                        {" "}
                        Beginner
                    </a>
                    <a _ngcontent-gfb-c50="" className="dropdown-item font-weight-600">
                        {" "}
                        Intermediate
                    </a>
                    <a _ngcontent-gfb-c50="" className="dropdown-item font-weight-600">
                        {" "}
                        Advanced
                    </a>
                    <a _ngcontent-gfb-c50="" className="dropdown-item font-weight-600">
                        {" "}
                        Quick
                    </a>
                </div>
            </div>
            <div className="d-flex access-btns">
                <div>W</div>
                <DarkTheme light={lightTheme} dark={darkTheme} style={{ position: 'absolute' }} />

                {/* <i className="bi bi-paint-bucket" onClick={themeToggle}/> */}
                <i className="bi bi-volume-up-fill" />
            </div>
        </>
    );
}

export default AccessBar;
