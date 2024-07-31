import Form from '../Form/Form'
import Card from '../Card/Card'
import CardDone from '../CardDone/CardDone'
import style from './StateSection.module.css'
import { useState } from 'react'

const StateSection = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posts, setPosts]  = useState([ ]);
    const [updated, setUpdated] = useState(false);
    const [updatedID, setUpdatedID] = useState();


    const handleSubmit = (event)=>{

        event.preventDefault();
        setPosts( (prev)=> {

            
            return [...prev, {

                id: prev.length > 0 ? prev[0].id +1 : 1,
                title,
                description,
                completed: false
            }]
        });

        setTitle('');
        setDescription('');
    }

    //! filtrare array dello stato cosi da escludere il post che voglio rimuovere


    const handleDelete = (id) => {

        let postsFiltered = posts.filter((post)=> post.id != id)
        setPosts(postsFiltered);
        

    };


    const handleComplete = (id) =>{

        let postFilter = posts.filter((post) => {

            if((post.id == id) && post.completed == false){

                post.completed = true
                
            }
            return post;
           
        })

        setPosts(postFilter)
        
    }

    const handleBack = (id) =>{

        let postFilter = posts.filter((post) => {

            if((post.id == id) && post.completed == true){

                post.completed = false
                
            }
            return post;
           
        })

        setPosts(postFilter)
        
    }

    

    //? update
    //? il form deve capire quando siamo in uno stato di modifica o creazione 
    //! Riconosce quale post dev'essere modificato
    
    const updatePost = (id,title,description) => {

        setUpdated(!updated)
        setUpdatedID(id)
        if(!updated){
            
            setTitle(title);
            setDescription(description);
        } else {

            setTitle('');
            setDescription('');
        }
    }

    const handleUpdatePost = (event) => {

        event.preventDefault();

        let postClone = posts.map((post) => post);

        let updatePost = postClone.map((post) => {

            if(post.id == updatedID){

                post.title = title,
                post.description = description
            }
            return post;
        });

        setPosts(updatePost);
        setTitle('');
        setDescription('');
        setUpdated(!updated)
    };

    return (
        <>
        <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* FORM */}
                        <Form title={title} setTitle={setTitle} description={description} setDescription={setDescription} handleSubmit={handleSubmit} updated={updated} handleUpdatePost={handleUpdatePost}/>
                        {/* END FORM */}
                    </div>
                    <div className="col-12 col-md-6 mt-5">
                        <h3 className= {"mt-2 " + style.subtitle}>To Do</h3>
                        <div className="row mt-5">
                        {posts.sort((a,b) => b.id - a.id).map((post)=> {
                        
                        if(post.completed == false){

                            return(

                                <Card key={post.id} post={post} handleDelete={handleDelete} updated={updated} updatePost={updatePost} updatedID={updatedID} handleComplete={handleComplete}/>

                            )
                    

                        }
                    })}</div>  
                    </div>
                </div>
            <div className="row">
                        
            </div>
           

             <div className="row my-5">
                <div className="col-12 d-flex justify-content-end">
                <h3 className= {"mt-5 " + style.subtitleDone}>Done</h3> 
                </div>
             </div>          
            <div className="row">
                        {posts.sort((a,b) => b.id - a.id).map((post)=> {
                        
                        if(post.completed == true){

                            return(

                                <CardDone key={post.id} post={post} handleDelete={handleDelete} updated={updated} updatePost={updatePost} updatedID={updatedID} handleBack={handleBack}/>

                            )
                    

                        }
                    })}
            </div>
        </div>
        
        </>
    );
}
 
export default StateSection;

