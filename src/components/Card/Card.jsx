import style from './Card.module.css'
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { MdCancel } from "react-icons/md";



const Card = ({post, handleDelete, updated, updatePost, updatedID, handleComplete}) => {

  return (
    <>
    
    <div className="col-12 col-md-4 d-flex justify-content-center">
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
    </div>
    
    </>
    
  )
}

export default Card;