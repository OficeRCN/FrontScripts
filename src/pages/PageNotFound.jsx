import React from 'react';
import '/src/assets/css/index.css'

export function PageNotFound(){
    return(

        <div style={{display: 'flex', alignItems: 'center', height:'100vh', width:'100%', background:'#E9FDFF'}}>
            <img style={{height:'100vh', width:'100%'}} src="/src/assets/img/404.svg" loading='lazy' alt="charging..." />
        </div>
        
    )
}