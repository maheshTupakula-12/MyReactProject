import React from 'react'
function Component1({info}){
    return (
        <div className="c1">
            <img  style={{height:"100%",width:"100%"}} src={info.Poster} alt="poster"></img>
            <div className="sp" style={{width:"100%",height:"50px",backgroundColor:"lightgrey",paddingTop:"15px",paddingBottom:"15px"}}>
                <div style={{padding:"5px"}}>
                    <div style={{display:"inline-block",marginRight:"20px"}}>{info.Title}</div>  
                    <div style={{display:"inline-block"}}>{info.Year}</div>
                </div>
                
               {/*<div style={{marginLeft:"100px"}}>Imdb:{info.rating}</div>*/ }
            </div>
        </div>
    );
}
export default Component1;