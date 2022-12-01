import Modal from 'react-bootstrap/Modal';
import InputField from '../input';
import { Button } from 'react-bootstrap';
import TextArea from '../textarea';

const AddPlaceModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Place
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputField width="100%" placeholder="Enter City Name..." className="border-dark" />
                <TextArea width="100%" height="150px" placeholder="Enter City Description..." className="border-dark " />

                <div className="rounded" style={{ display: "grid", placeItems: "center", borderStyle: "dashed", height: "150px", }}>
                    <span >Click me to add image</span>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddPlaceModal;