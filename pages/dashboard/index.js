import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { GlobalContext } from "../_app";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";
export default function Dashboard() {

    const context = useContext(GlobalContext);

    useEffect(() => {
        context.setNavbarVisibility(true);
    }, []);

    return (
        <div className="p-3 position-relative w-100 d-flex flex-column" style={{overflow: "scroll", height: "100vh"}}>
            <div className="row gap-4 p-3">
                <Card body className="col border-0 text-white shadow" style={{ backgroundImage: "linear-gradient(to bottom, rgb(66, 82, 249), rgb(150, 159, 255));" }}>
                    <div className="d-flex flex-column">
                        <span><strong style={{ fontSize: "12px" }}> Most Popular Place </strong></span>
                        <span className="fw-bold" style={{ fontSize: "30px" }}> LAGUNA </span>
                        <div> &nbsp; </div>
                        <span className="fw-bold" style={{ fontSize: "3rem" }}>1.56K</span>
                        <span className="fw-bold ps-2">clicks</span>
                    </div>
                </Card>

                <Card body className="col border-0 text-white shadow"
                    style={{ backgroundImage: "linear-gradient(to bottom, #F94242, #FF9696);" }}
                >
                    <div className="d-flex flex-column">
                        <span><strong style={{ fontSize: "12px" }}> Most Favorite Place </strong></span>
                        <span className="fw-bold" style={{ fontSize: "30px" }}> RIZAL PARK </span>
                        <div> &nbsp; </div>
                        <span className="fw-bold" style={{ fontSize: "3rem" }}>231</span>
                        <span className="fw-bold ps-2">favorites</span>
                    </div>
                </Card>
            </div>

            <div className="row gap-4 p-3">
                <Card body className="col-4 border-0 text-white shadow" style={{ backgroundImage: "linear-gradient(to bottom, #C942F9, #EA96FF);" }}>
                    <div className="d-flex flex-column">
                        <span><strong style={{ fontSize: "12px" }}> Total Number Of </strong></span>
                        <span className="fw-bold" style={{ fontSize: "30px" }}> PLACES </span>
                        <div> &nbsp; </div>
                        <span className="fw-bold" style={{ fontSize: "4rem" }}>256</span>
                        <span className="fw-bold ps-2">places</span>
                    </div>
                </Card>

                <Card body className="d-flex flex-column align-items-end text-end col-7 flex-grow-1 border-0 text-white shadow" style={{ backgroundImage: "linear-gradient(to bottom, #C942F9, #EA96FF);" }}>
                    <div className="d-flex flex-column">
                        <span><strong style={{ fontSize: "12px" }}> Interactions Today </strong></span>
                        <div> &nbsp; </div>
                        <div> &nbsp; </div>
                        <div> &nbsp; </div>
                        <span className="fw-bold" style={{ fontSize: "4rem" }}>300K</span>
                        <span className="fw-bold ps-2">interactions</span>
                    </div>
                </Card>
            </div>

            <div className="d-flex flex-column gap-2">
                <Card body className="border-0 w-100 shadow" style={{ backgroundColor: "lightgrey" }}>
                    <div className="d-flex flex-row">
                        <div className="align-items-center" style={{ flex: 1 }}>
                            <FontAwesomeIcon icon={faUser} className="ps-1 pe-1" />
                            <span className="fw-bold ps-1 pe-1"> Online Users </span>
                        </div>

                        <div className="d-flex flex-row justify-content-end align-items-center" style={{ flex: 1 }}>
                            <span className="fw-bold ps-2 pe-2"> 268264 / 457653 </span>
                            <FontAwesomeIcon icon={faCircle} color="green" className="ps-2 pe-2" />
                        </div>
                    </div>
                </Card>

                <Card body className="border-0 w-100 shadow" style={{ backgroundColor: "lightgrey" }}>
                    <div className="d-flex flex-row">
                        <div className="align-items-center" style={{ flex: 1 }}>
                            <FontAwesomeIcon icon={faUser} className="ps-1 pe-1" />
                            <span className="fw-bold ps-1 pe-1"> Online Admins </span>
                        </div>

                        <div className="d-flex flex-row justify-content-end align-items-center" style={{ flex: 1 }}>
                            <span className="fw-bold ps-2 pe-2"> 143 / 300 </span>
                            <FontAwesomeIcon icon={faCircle} color="green" className="ps-2 pe-2" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}