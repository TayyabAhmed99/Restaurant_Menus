import {useEffect, useState} from "react"
import { useParams, Link } from "react-router-dom";
import Menu from "./components/Basics/menuApi.js";



const Order = () =>{
    let {id} = useParams();
    console.log(id)
    const [menuid, setMenuId] = useState(Menu);
     
    
    useEffect(() => {
        
        const updatedId = Menu.filter((curElem) => {
            console.log(curElem.id,id)
            return curElem.id === Number(id);
          });
          setMenuId(updatedId);
      },[])
           console.log(menuid)                 
           

        
        const { name, category, image, description } = menuid[0]
            console.log(image)    

           return (
            <>

              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                  <Link to='/' className="subtle" >Back</Link>
                    <br/>
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src= {`../${image}`} alt="images" className="card-media" />

                  <span className="card-tag  subtle" onClick={()=>console.log(id)}>Add to Card</span>
                </div>
              </div>
            </> 
           )

}

export default Order;