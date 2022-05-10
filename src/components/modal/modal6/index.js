import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import a6 from '../../../assets/6.png'


function ModalInfo6(props) {

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
          <img src={a6} className='border' style={{width: '410px', height: '610px'}} alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalInfo6