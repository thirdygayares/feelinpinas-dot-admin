import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Offcanvas, OffcanvasHeader, Dropdown, Button } from "react-bootstrap";
import { faThLarge, faMapLocationDot, faUser, faCaretRight, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Sidebar = (props) => {
    const [placeDropdownVisibility, setPlaceDropdownVisibility] = useState(false);
    const [accountDropdownVisibility, setAccountDropdownVisibility] = useState(false);

    const router = useRouter();
    return (
        <>
            {
                props.showNavbar ? <div style={{width: "33%"}}>
                    <div className="position-absolute w-25 h-100">

                        <div className="sidebar-header d-flex justify-content-center" style={{ backgroundColor: "#819BF8" }}>
                            <div className="p-3">
                                <img src="/images/feelinpinas-logo.png" />
                            </div>
                        </div>

                        <div className="pt-3 h-75">
                            <button className="w-100 text-start d-flex flex-row align-items-center gap-4 border-0 p-3 bg-transparent" style={{ height: "40px" }} >
                                <FontAwesomeIcon icon={faThLarge} style={{ flex: 1 }} />
                                <span className="fw-bold" style={{ flex: 7 }}> Dashboard </span>
                            </button>
                            <button className="w-100 text-start d-flex flex-row align-items-center gap-4 border-0 p-3 bg-transparent" style={{ height: "40px" }} onClick={() => setPlaceDropdownVisibility(val => !val)}>
                                <FontAwesomeIcon icon={faMapLocationDot} style={{ flex: 1 }} />
                                <span className="fw-bold" style={{ flex: 7 }}> Places </span>
                            </button>
                            {/* Submenu */}
                            {
                                placeDropdownVisibility ? <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                                    <button className="w-100 text-start d-flex flex-row align-items-center gap-4 border-0 p-3 bg-transparent" style={{ height: "40px" }} onClick={() => router.replace("/places/restaurants")} >
                                        <FontAwesomeIcon icon={faCaretRight} style={{ flex: 1 }} />
                                        <span className="fw-bold" style={{ flex: 7 }}> Restaurant </span>
                                    </button>
                                    <button className="w-100 text-start d-flex flex-row align-items-center gap-4 border-0 p-3 bg-transparent" style={{ height: "40px" }} onClick={() => router.replace("/places/hotels")} >
                                        <FontAwesomeIcon icon={faCaretRight} style={{ flex: 1 }} />
                                        <span className="fw-bold" style={{ flex: 7 }}> Hotels </span>
                                    </button>
                                    <button className="w-100 text-start d-flex flex-row align-items-center gap-4 border-0 p-3 bg-transparent" style={{ height: "40px" }} onClick={() => router.replace("/places")} >
                                        <FontAwesomeIcon icon={faCaretRight} style={{ flex: 1 }} />
                                        <span className="fw-bold" style={{ flex: 7 }}> Places </span>
                                    </button>
                                </div> : <div />
                            }
                            <button className="w-100 text-start d-flex flex-row align-items-center gap-4 border-0 p-3 bg-transparent" style={{ height: "40px" }} onClick={() => setAccountDropdownVisibility(val => !val)}>
                                <FontAwesomeIcon icon={faUser} style={{ flex: 1 }} />
                                <span className="fw-bold" style={{ flex: 7 }}> Accounts </span>
                            </button>
                            {
                                accountDropdownVisibility ? <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                                    <button className="w-100 text-start d-flex flex-row align-items-center gap-4 border-0 p-3 bg-transparent" style={{ height: "40px" }} >
                                        <FontAwesomeIcon icon={faCaretRight} style={{ flex: 1 }} />
                                        <span className="fw-bold" style={{ flex: 7 }}> Admins </span>
                                    </button>
                                    <button className="w-100 text-start d-flex flex-row align-items-center gap-4 border-0 p-3 bg-transparent" style={{ height: "40px" }} >
                                        <FontAwesomeIcon icon={faCaretRight} style={{ flex: 1 }} />
                                        <span className="fw-bold" style={{ flex: 7 }}> Users </span>
                                    </button>
                                </div> : <div />
                            }

                            <div className="position-absolute d-flex flex-row gap-3 align-items-center bottom-0 w-100 p-3" style={{ backgroundColor: "#819BF8", height: "17%" }}>
                                <img
                                    width="25%"
                                    height="100%"
                                    className="rounded-circle"
                                    src="https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg" />
                                <div className="d-flex flex-column" style={{ width: "40%" }}>
                                    <span> Jam Villarosa </span>
                                    <span> Admin </span>
                                    <span className="bg-danger text-white d-flex flex-row align-items-center p-2 gap-3">
                                        <FontAwesomeIcon icon={faRightFromBracket} />
                                        <span style={{ fontSize: "12px" }}>LOGOUT</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <> </>
            }
        </>
    );
}

export default Sidebar;