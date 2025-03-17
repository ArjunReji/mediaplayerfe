import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';



function VideoCard({ displayVideo, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    
    setShow(true);
    const {caption, embededLink}= displayVideo;
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth()+1).padStart(2,'0');
    const day = String(today.getDate()).padStart(2,'0');
    const hour = String(today.getHours()).padStart(2,'0');
    const minutes = String(today.getMinutes()).padStart(2,'0');
    const timeValue = day+'-'+month+"-"+year+" "+hour+":"+minutes;
    console.log(timeValue);
    const history ={
        caption: caption,
        embededLink: embededLink,
        timeStamp:timeValue

    }
    await addToHistory(history)
    

  }; 

  const removeVideo = async (id) => {
    const response = await deleteVideo(id)
    console.log(response);
    if(response.status===200){
      setDeleteVideoStatus(response)
      toast.success(`${displayVideo.caption} successfully deleted`)
    }
  }

  return (
    <>

      <Card style={{ width: '15rem', height: '300px' }}>
        <Card.Img variant="top" onClick={handleShow} height={'200px'} src={displayVideo.thumbnailUrl} />

        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>{displayVideo.caption}</Card.Title>
            <Button variant="danger" onClick={() => removeVideo(displayVideo.id)}><i class="fa-solid fa-trash"></i></Button>
          </div>

        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="400" src={displayVideo.embededLink} title="Hanumankind - Run It Up ( Prod. By Kalmi ) | (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default VideoCard