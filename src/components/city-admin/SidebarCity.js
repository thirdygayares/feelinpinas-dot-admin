import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Logo from '../images/umaklibrary.png'
import { Link, Outlet } from "react-router-dom"

const styles = {

    containerMain: {
        height: "100vh",
    },
    menu: {
        height: "100vh",


    },
    body: {
        height: "100vh",
    },
    logo: {
        height: "50px",
    },

    menuText: {
        fontSize: "30px",
        color: "black",
        fontWeight: 1.5,
        lineHeight: 1.5,
    },

    ulli: {
        ListStyleType: "none",
    },

    backgroundColor: {
        backgroundColor: "#F5F1FC",
    }
}

export function SidebarCity() {
    return (
        <>
            <Container fluid style={styles.containerMain} >

                <Row>
                    <Col md="3" lg="2" className="bg-white" style={styles.menu}>

                        <Container fluid>

                            {/* Iamge */}
                            <Row className="mb-5 mt-2 p-1">
                                <Col sm="3">
                                    {/* <img src={Logo} alt="Umak Library Logo" style={styles.logo} /> */}
                                </Col>
                                <Col>
                                    <h3 className='mt-2'>Feelinpinas</h3>
                                </Col>
                            </Row>

                            <Row style={styles.menuText}>
                                <div class="wrapper">
                                    {/* <!-- Sidebar --> */}
                                    <nav id="sidebar">
                                        <ul className="list-unstyled components text-dark"  >

                                            <li style={styles.ulli}>
                                                <Link to="/dashboardcity" className='text-dark'>Dashboard</Link>
                                            </li>

                                            <li>
                                                <Link to="/dashboardcity/places" className='text-dark'>Places</Link>
                                            </li>

                                            <li>
                                                <Link to="/dashboardcity/restaurant" className='text-dark'>Restaurant</Link>
                                            </li>

                                            <li>
                                                <Link to="/dashboardcity/addplaces" className='text-dark'>Add Places</Link>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </Row>

                        </Container>

                    </Col>

                    <Col md="9" lg="10" style={styles.backgroundColor}>
                        <Outlet />
                        {/* <h1>Test</h1>   */}
                    </Col>
                </Row>
            </Container>

        </>

    )
}