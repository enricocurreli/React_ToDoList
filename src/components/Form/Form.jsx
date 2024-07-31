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
    
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className={"my-5 p-2 " + style.subtitle}>What do you want to do?</h2>  
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    
                </div>
            </div>
            
            <div className="row">
                <div className="col-12 d-flex justify-content-center d-md-block ">

                <form className={"p-4 mt-2 w-75 rounded-5 " + style.form} onSubmit={updated ? handleUpdatePost : handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="titleInput" className="form-label text-dark">TITLE</label>
                        <input type="text" className="form-control rounded-4" id="titleInput" required aria-describedby="emailHelp" onChange={handleTitle} value={title} />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descriptionArea" className="form-label text-dark">DESCRIPTION</label>
                        <textarea className="form-control rounded-4" required rows={5} cols={50} id="descriptionArea" onChange={handleDescription} value={description}/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex align-content-center justify-content-center">                    {
                        updated ?  <h6 className={"p-2 mt-3 " + style.subtitleTrue}>Submit to save changes</h6> : null

                         }
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center"><Button text={text}/></div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    
        
        
    );
}
 
export default Form;