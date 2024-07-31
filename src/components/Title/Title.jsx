import { FaPenAlt } from "react-icons/fa";
import style from './Title.module.css'

const Title = () => {
  return (
    <>
      <div className="container-fluid">
      <div className="row">
                <div className="col-12 text-center p-0 ">
                    <h1 className="pt-5 titleHeader"> THINKS TO DO TODAY</h1>
                   <h3 className={"pb-5 " + style.penAnimation}> <FaPenAlt /></h3>
                </div>
            </div>
      </div>
    </>
  )
}

export default Title