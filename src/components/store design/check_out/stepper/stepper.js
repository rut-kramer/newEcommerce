import React, { useState } from 'react'
import './stepper.css'
export default function Stepper(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = React.Children.count(props.children);
    function pageComponent(pageIndex) {
        const child = React.Children.toArray(props.children)[pageIndex];
        return React.cloneElement(child);
    }
    return (
        <div className="app">
            <div className="row mt-4 d-flex justify-content-center align-items-center">
                <div className="col-0.25 itemStep d-flex justify-content-center align-items-center" style={{ backgroundColor: currentPage == "0" ? "#F29544" : "" }} ><div className="num" style={{ color: currentPage == "0" ? "white" : "" }}>1</div></div>
                <div className="col-1 line"></div>
                <div className="col-0.25 itemStep d-flex justify-content-center align-items-center" style={{ backgroundColor: currentPage == "1" ? "#F29544" : "" }} ><div className="num" style={{ color: currentPage == "1" ? "white" : "" }}>2</div></div>
                <div className="col-1 line"></div>
                <div className="col-0.25 itemStep d-flex justify-content-center align-items-center" style={{ backgroundColor: currentPage == "2" ? "#F29544" : "" }} ><div className="num" style={{ color: currentPage == "2" ? "white" : "" }}>3</div></div>
            </div>
            <p className="d-flex justify-content-center" style={{ width: "90%", textAlign: "center", marginLeft: "auto", marginRight: "auto", marginTop: "1vh", marginBottom: "2vh" }}>
                <p className="stepWord mx-3" style={{ marginTop: "0", marginBottom: "0", color: currentPage == "0" ? "#F29544" : "" }}>delivery details</p>
                <p className="stepWord mx-3" style={{ marginTop: "0", marginBottom: "0", color: currentPage == "1" ? "#F29544" : "" }}>Payment details</p>
                <p className="stepWord mx-3" style={{ marginTop: "0", marginBottom: "0", color: currentPage == "2" ? "#F29544" : "" }}>Confirmation</p>
            </p>

            {pageComponent(currentPage)}
            <button className="stepper-button d-flex justify-content-center align-item-center"
                disabled={currentPage >= numberOfPages - 1}
                onClick={(e) => setCurrentPage(v => v + 1)}>
                <p className="stepper-button-next">Next</p>
            </button>
        </div>
    )
}