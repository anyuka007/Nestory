
//-----------------------------------------
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchItem from '../../components/SearchItem/SearchItem';
//import {fa-sharp fa-light fa-clock} from "@awesome.me/kit-KIT_CODE/icons"
//import searchItem from "./searchItem.css"
//import Image from "https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic19-960x750.webp"
const products = [{img:"",name:"Ali",price:1000},
{img:"",name:"",price:""},
{img:"",name:"",price:""}]
const SearchResults = ({product})=> {

  return (
    <><div>
        <div>{products.map((product)=>{return <div>{product.price}</div>})}</div>
       
        {/* <Image 
        src={`${product.image}`}
        alt="logo"
        width={560}
        width={560}
        height={560}
        />
        <h3>{product.name}</h3>
        <p>{product.price}</p> */}
        <h1 style={{gap:"80px", color:"rgb(42, 3, 159)",textAlign:"center",fontSize:"50px",backgroundColor:" rgb(232, 229, 229)",padding:"18px"}}><b> 3 result found for: sofa</b></h1>
       <main style={{display:"flex",paddingInline:"400px",}}>
       <div style={{display:"flex",paddingTop:"60px"}}>
        <div><a href=""> <img style={{width:"400px",}} 
        src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic19-960x750.webp" alt="sofa" /></a></div>
        <div className="sofa-info" style={{backgroundColor:"",paddingTop:"50px",paddingLeft:"20px"}}>
        <p style={{color:"grey"}}>Published by  Muffin Group on  <FontAwesomeIcon icon="fa-sharp fa-light fa-clock" />February 1, 2023</p>
        <a href=""> <h1 style={{fontSize:"28px",color:"rgb(42, 3, 159)",}}> <b> Sleeper sofa Cubic</b></h1></a>
        <p style={{color:"red"}}>$1,299.00</p>
        <p style={{color:"rgb(42, 3, 159)"}}>A magnis dui tincidunt erat egestas platea scelerisque dignissim luctus. Potenti quam proin ultrices elementum odio.</p>
        <a href="" style={{color:"red",textAlign:"end"}}>View product</a></div>
       </div></main>
  <SearchItem />
       <main style={{display:"flex",paddingInline:"400px",}}>
       <div style={{display:"flex",paddingTop:"60px"}}>
        <div><a href=""> <img style={{width:"420px",}} 
        src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic20-960x750.webp" alt="sofa" /></a></div>
        <div className="sofa-info" style={{backgroundColor:"",paddingTop:"50px",paddingLeft:"20px"}}>
        <p style={{color:"grey"}}>Published by  Muffin Group on  <FontAwesomeIcon icon="fa-sharp fa-light fa-clock" />February 1, 2023</p>
        <a href=""> <h1 style={{fontSize:"28px",color:"rgb(42, 3, 159)",}}> <b> Cosy RTV sofa</b></h1></a>
        <p style={{color:"red"}}> <span style={{textDecoration:"line-through"}}>$1,600.00</span>  $1,300.00</p>
        <p style={{color:"rgb(42, 3, 159)"}}>Nunc aliquet ipsum eu dictumst quis natoque. Etiam scelerisque ipsum consequat lectus est ad aliquet diam fusce fermentum curabitur.</p>
        <a href="" style={{color:"red",textAlign:"end",alignItems:"end",display:"flex",justifyItems:"end"}}>View product</a></div>
       </div></main>
       <main style={{display:"flex",paddingInline:"400px",}}>
       <div style={{display:"flex",paddingTop:"60px"}}>
        <div><a href=""> <img style={{width:"430px",}} 
        src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic21-960x750.webp" alt="sofa" /></a></div>
        <div className="sofa-info" style={{backgroundColor:"",paddingTop:"50px",paddingLeft:"22px"}}>
        <p style={{color:"grey"}}>Published by  Muffin Group on  <FontAwesomeIcon icon="fa-sharp fa-light fa-clock" />February 1, 2023</p>
        <a href=""> <h1 style={{fontSize:"28px",color:"rgb(42, 3, 159)",}}> <b> Puffy sofa Orlando</b></h1></a>
        <p style={{color:"red"}}> <span style={{textDecoration:"line-through"}}>$1,670.00</span>  $1,599.00</p>
        <p style={{color:"rgb(42, 3, 159)"}}>Malesuada consectetuer eros nulla euismod maecenas metus purus dignissim. Id magnis cras mauris tempor nisi nibh semper parturient erat fermentum.</p>
        <a href="" style={{color:"red",textAlign:"end"}}>View product</a></div>
       </div></main>
    </div>
    </>
  )
}
export default SearchResults;
