import style from './Button.module.css'

const Button = ({text, callback}) => {

    return (
        
        <>
            <button type="submit" onClick={callback} className={"btn mt-3 py-2 px-3 " + style.formBtn}>{text}</button>
        
        </>
    )
}

export default Button;
