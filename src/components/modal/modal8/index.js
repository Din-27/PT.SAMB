import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import a8 from '../../../assets/8.png'


function ModalInfo8(props) {

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
          <img src={a8} className='border' style={{width: '410px', height: '810px'}} alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalInfo8