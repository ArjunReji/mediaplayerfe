import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addCategory, deleteVideoCategory, getAllCategories } from '../services/allApi';

function Category() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([])
  const handleClose = () => {
    setShow(false)
    setCategoryName("")
  };
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("")
  const handleAddCategory = async () => {
    if (!categoryName) {
      toast.warning("Please Fill the Form Completely")
    }
    else {
      const body = {
        categoryName: categoryName,
        allVideos: []
      }
      const response = await addCategory(body)
      if (response.status === 201) {
        toast.success(`${categoryName} successfully saved`)
        getCategories()
      }
      handleClose()
    }
  }

  const getCategories = async () => {
    const response = await getAllCategories()
    const { data } = response;
    setCategories(data);
  }

  useEffect(() => {
    getCategories()
  }, [])

  const deleteCategory = async (id) => {
    const response = await deleteVideoCategory(id)
    if (response.status === 200) {
      getCategories()
      toast.success(`successfully deleted`)
    }

  }

  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'><i class="fa-solid fa-list"></i> Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='textStyle'>PLEASE FILL THE FORM</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Video Title"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory} >Add</Button>
        </Modal.Footer>
      </Modal>

      {
        categories?.map(item => (
          <div className='border border-secondary rounded p-3 mt-5'>
            <div className='d-flex justify-content-between align-items-center'>
              <h6>{item.categoryName}</h6>
              <button className='btn btn-danger' onClick={() => deleteCategory(item.id)}><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        ))



      }




    </>
  )
}

export default Category