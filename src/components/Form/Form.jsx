import style from './Form.module.css'
import Button from '../Button/Button'

const Form = ({title, setTitle, description, setDescription, handleSubmit, updated, handleUpdatePost}) => {
    
    const handleTitle = (event) =>{
           
        setTitle(event.target.value);
    }

    const handleDescription = (event) =>{

        setDescription(event.target.value);
    }

    const text = 'SUBMIT';
   

    return ( 
    
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <h2 className={"my-5 p-2 " + style.subtitle}>What do you want to do?</h2>  
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    {
                        updated ?  <h2 className={"mb-5 p-2 " + style.subtitleTrue}>Update post</h2> : null

                    }
                </div>
            </div>
            
            <div className="row">
                <div className="col-12  d-flex justify-content-center">

                <form className={"p-5 rounded-5 " + style.form} onSubmit={updated ? handleUpdatePost : handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="titleInput" className="form-label text-dark">TITLE</label>
                        <input type="text" className="form-control rounded-4" id="titleInput" aria-describedby="emailHelp" onChange={handleTitle} value={title} />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descriptionArea" className="form-label text-dark">DESCRIPTION</label>
                        <textarea className="form-control rounded-4" rows={5} cols={50} id="descriptionArea" onChange={handleDescription} value={description}/>
                    </div>
                    
                    <Button text={text}   />
                </form>
                </div>
            </div>
        </div>
    
        
        
    );
}
 
export default Form;