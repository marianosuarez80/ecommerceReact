import React from 'react';
import pili from "../Footer/pili.jpg";
import nike from "../Footer/Nike.png";
<<<<<<< HEAD
import carlos from "../Footer/carlos.jpg";
=======
import daniel from "../Footer/daniel.jpeg";
import mariano from "../Footer/mariano.jpeg"
>>>>>>> 1041a8b15f2b16a3136433b3e08602c3b709f85a


const Nosotros = () => {
  return (
    <>
    <div id='hover' style={{display: 'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap: '1rem'}}>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
<<<<<<< HEAD
            <h2>Carlos E. Martinez</h2>
            <img className="abaut" src={carlos}></img>
            <h6>Perito Informático</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/carlos-ezequiel-martinez-1097696' target="_blank">Linkedin</a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/Talapozo' target="_blank">GitHub</a></p>
=======
            <h2>Carlos Martinez</h2>
            <img className="abaut" src={nike}></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/login/es' target="_blank"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/pili74' target="_blank"><i className="bi bi-github" id='git'></i></a></p>
>>>>>>> 1041a8b15f2b16a3136433b3e08602c3b709f85a
          
        </div>


        <div style={{width: '200px', borderRadius: '10px',textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Daniel Romero</h2>
            <img className="abaut" src={daniel}></img>
            <h6>Dev. Full Stack</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/daniek-romero-95440b195/'target="_blank"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/danieltapy89' target="_blank"><i className="bi bi-github" id='git'></i></a></p>
           
        </div>


        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Eduardo Encinas</h2>
            <img className="abaut" src={pili}></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/eduardo-encinas' target="_blank"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/pili74' target="_blank"><i className="bi bi-github" id='git'></i></a></p>

        </div>


        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Gaston Talavera</h2>
            <img className="abaut" src={nike}></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/login/es'target="_blank"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/pili74'target="_blank"><i className="bi bi-github" id='git'></i></a></p>
           
        </div>


        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Mariano Suarez</h2>
            <img className="abaut" src={mariano}></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='http://www.linkedin.com/in/carlos-mariano-a-suarez-928875119'target="_blank"><i className="bi bi-linkedin" id='lin'></i></a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/marianosuarez80'target="_blank"><i className="bi bi-github" id='git'></i></a></p>
           
        </div>
    </div>
    </>
  )
}

export default Nosotros