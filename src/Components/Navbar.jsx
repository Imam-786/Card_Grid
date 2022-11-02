import React from "react";
import '../CSS/Navabar.css';
import Main from './Main'
class Navbar extends React.Component {
    // constructor(){

    // }

    render() {
        return (
            <>
                {/* <h1>Welcome to assignment 2</h1> */}
                <header>
                    <nav>
                        {/* <!--  logo --> */}
                        <a className="mainlogo" href="/stories">
                            <div id="logo">
                                <div className="logoedyoda">EDYODA</div>
                                <p className="logostories">Stories</p>
                            </div>
                        </a>

                        {/* <!-- Explore Categories   */}
                        <div className="explorer">
                            <div className="explorer_tag">Explore Categories</div>
                            <span className="dropdown_icon_image">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
                                    alt="Dropdown Icon" />
                            </span>
                        </div>
                        <div className="text">
                            <p>EdYoda is free learning and knowledge
                                sharing platform for techies</p>
                        </div>
                        <div className="btn-div">
                            <button className="main-website-btn">Go to main website</button>
                        </div>
                    </nav>
                </header>
                
                <Main/>
            </>
        )
    }
}
export default Navbar;