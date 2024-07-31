import style from './Header.module.css';
import header2 from '../../assets/header2-1.png'
const Header = () => {
    
    
    return (
       
       <>
        <header className="container-fluid mx-0">
       
                <div className="row">
                    <div className={"col-12 px-0 mx-0 d-flex justify-content-center align-items-center " + style.imgHeader }>
                       <img src={header2} alt="" className={"mt-5 " + style.img2} />
                    </div>
                </div>

        </header>
       
       
       </>
    )
}

export default Header
