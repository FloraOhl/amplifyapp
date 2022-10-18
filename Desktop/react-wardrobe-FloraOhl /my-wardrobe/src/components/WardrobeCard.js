import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import Editor from './Editor';

const WardrobeCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Wardrobecard card m-2 w-25" style={{ border: "solid" }}>
      <img src={props.item.url} className="card-img-top h-50" alt={props.item.descrshort} />
      <div className="card-body">
        <h5 className="card-title">{props.item.descrshort}</h5>
        <p className="card-text"> {props.item.descrlong} </p>

        <button onClick={(event) => {
          console.log('button works')
          props.addToOutfit(event)
        }} className="btn btn-primary" id={props.item.id}  >Add to outfit</button>

        <button onClick={(event) => {
          console.log('button works')
          props.deleteFromWardrobe(event)
        }} className="btn btn-danger mt-2 mx-1 " id={props.item.id}  >Delete </button>


        <button className="btn btn-primary mt-2 mx-1" onClick={handleShow}>
          Edit
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your item!</Modal.Title>
          </Modal.Header>
          <Editor item={props.item} handleClose={handleClose}  updateWardrobe={props.updateWardrobe}/>
        </Modal>

      </div>
    </div>
  )
}
export default WardrobeCard