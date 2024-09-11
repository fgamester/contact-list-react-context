import React, { useContext, useRef } from 'react';
import { Context } from '../context/ContactContext.jsx';
import { Modal, Button } from 'bootstrap/dist/js/bootstrap.bundle.js';

const DeleteModal = ({ item, show, handleClose }) => {
    const context = useContext(Context);

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleClose()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DeleteModal;