import React from 'react'

export default function SearchItem() {
  return (
    <div>
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
    </div>
  )
}
