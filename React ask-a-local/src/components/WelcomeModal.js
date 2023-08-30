import React from "react";
import { Modal, ModalBody,  } from "reactstrap";


const WelcomeModal = () => {
    return (
            <Modal isOpen={true} className='welcomeModal' >
                <ModalBody className='welcomeModalBody' > {/* Using ModalBody for the content */}
                </ModalBody>
            </Modal>
    );
};

export default WelcomeModal;