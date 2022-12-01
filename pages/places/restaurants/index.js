import { faSearch, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../_app";
import InputField from "../../../components/default/input";
import { samplePlaces, sampleModerators } from "../../../components/sample/sample_data";
import AddPlaceModal from "../../../components/default/modals/modal_template";
const Restaurants = () => {

    const context = useContext(GlobalContext);
    const [modalShow, setModalShow] = useState(false);
    const [shuffledPlacesData, setShuffledPlacesData] = useState();
    const [shuffledAdminName, setShuffledAdminName] = useState();

    useEffect(() => {
        context.setNavbarVisibility(true);
        setShuffledAdminName(sampleModerators);
        setShuffledPlacesData(samplePlaces);
    }, []);

    return (
        <>
            <AddPlaceModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="d-flex flex-column w-100 p-4" style={{ overflow: "hidden", height: "100vh" }}>
                <div className="d-flex justify-content-end">
                    <InputField suffixIcon={faSearch} placeholder="Search..." />
                </div>
                <button className="d-flex flex-row align-items-center gap-3 p-2 btn" style={{ width: "15%", color: "#819BF8" }}>
                    <FontAwesomeIcon icon={faThLarge} />
                    <span> Region: All </span>
                </button>

                <section className="d-flex flex-column">
                    <span className="fs-3 fw-bold"> LIST OF RESTAURANTS </span>

                    <div style={{ height: "70vh", overflow: "scroll" }}>
                        {
                            shuffledPlacesData?.map((val, index) => <div key={index} className="position-relative d-flex flex-column justify-content-center w-100 bg-primary" style={{ height: "12vh" }} onClick={() => setModalShow(true)}>
                                <img className="position-absolute w-100 h-100" src={`${val.thumbnail}`} style={{ objectFit: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", objectFit: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} />
                                <div className="w-100 h-100 position-absolute" style={{
                                    backgroundImage: "linear-gradient(to right, black, transparent);",
                                    zIndex: 0
                                }}></div>

                                <div className="position-relative d-flex flex-column justify-content-center px-3" style={{ zIndex: 1, color: "white", fontFamily: "Poppins" }}>
                                    <span className="fs-3 fw-bold">{val.name.toUpperCase()}</span>
                                    <span style={{ fontSize: "12px" }}> Administrator: Novem Lanaban </span>
                                </div>
                            </div>)
                        }
                    </div>


                </section>
            </div>
        </>
    )
}

export default Restaurants;