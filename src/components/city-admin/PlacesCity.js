import { Container,Row,Col } from "react-bootstrap"
import Table from 'react-bootstrap/Table';

export function PlacesCity (){

    return (
        <>  
            <Container>
                <Row>
                    <Col>
                    <Table striped bordered hover>
                                <thead>
                                  <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Head Admin</th>
                        
                                  </tr>
                                </thead>


                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Intramuros</td>
                                    <td>Angel Macatuhay</td>
                           
                                  </tr>
                                  
                                </tbody>
                              </Table>
                    </Col>
                </Row>
       
            </Container>


        </>
    )
   
}

