import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import a9 from '../../../assets/9.png'


function ModalInfo9(props) {

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
          <img src={a9} className='border' style={{width: '410px', height: '810px'}} alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalInfo9