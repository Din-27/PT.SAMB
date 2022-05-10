import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import a7 from '../../../assets/7.png'


function ModalInfo7(props) {

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header> 
        <Modal.Body className='d-flex justify-content-center'>
          <img src={a7} className='border' style={{width: '410px', height: '710px'}} alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalInfo7