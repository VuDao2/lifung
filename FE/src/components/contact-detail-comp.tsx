import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Contact from '../data/contact';


interface ModalInfo {
    contact: Contact;
    isModalOpened: any;
    onCloseModal: any;
}

function ContactDetailComp(props: ModalInfo) {

    return (
        <>
            <Modal show={props.isModalOpened} onHide={props.onCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Email: {props.contact.Email}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>Id: {props.contact.Id}</li>
                        <li>FirstName: {props.contact.FirstName}</li>
                        <li>LastName: {props.contact.LastName}</li>
                        <li>Phone: {props.contact.Phone}</li>
                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ContactDetailComp;