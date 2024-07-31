import style from './Card.module.css'
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { useState } from "react";



const Card = ({post, handleDelete, updated, updatePost, updatedID, handleComplete, }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };



  return (
    <>
    
    {/* <div className="col-12 col-md-10 col-lg-6 d-flex justify-content-center">
        <div className={"card mt-4 " + style.card}>
            <div className="card-body">
                <h5 className="card-title">{post.id}. {post.title}</h5>
                <p className="card-text">{post.description}</p>
                <div className="row">
                    <div className="col-4">
                        <button className='btn btn-outline-danger rounded-5 px-3 py-2' onClick={()=>handleDelete(post.id)}><FaTrashAlt /></button>
                    </div>
                    <div className="col-4">
                        <button className='btn btn-outline-secondary rounded-5 px-3 py-2' onClick={()=> updatePost(post.id, post.title, post.description)}> {(updated && updatedID == post.id) ? <MdCancel /> : <MdOutlineCreate />}</button>
                    </div>
                    <div className="col-4">
                        <button className='btn btn-outline-success rounded-5 px-3 py-2' onClick={()=>handleComplete(post.id)}><MdDoneOutline /></button>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

    <div className="col-12 col-md-10 col-lg-12  d-flex justify-content-center">
        <div className="accordion-item my-2">
            <div className="accordion-title" onClick={toggle}>
            <h5 className="card-title">{post.id}. {post.title}</h5>
                <div className='fs-3'>{isOpen ? '-' : '+'}</div>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <p className="card-text">{post.description}</p>
                    <div className="row">
                    <div className="col-4">
                        <button className='btn btn-outline-danger rounded-5 px-2 py-1' onClick={()=>handleDelete(post.id)}><FaTrashAlt /></button>
                    </div>
                    <div className="col-4">
                        <button className='btn btn-outline-secondary rounded-5 px-2 py-1 '  onClick={()=> updatePost(post.id, post.title, post.description)}> {(updated && updatedID == post.id) ? <MdCancel /> : <MdOutlineCreate />}</button>
                    </div>
                    <div className="col-4">
                        <button className='btn btn-outline-success rounded-5 px-2 py-1' onClick={()=>handleComplete(post.id)}><MdDoneOutline /></button>
                    </div>
                </div>
                </div>
            )}
        </div>
    </div>
    </>
    
  )
}

export default Card;