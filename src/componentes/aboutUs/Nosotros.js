import React from 'react';
import pili from "../Footer/pili.jpg";
import nike from "../Footer/Nike.png";

const Nosotros = () => {
  return (
    <>
    <div style={{display: 'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap: '1rem'}}>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Carlos</h2>
            <img src={nike}></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/eduardo-encinas?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVdVeTcawS0igyGvrImMh%2BA%3D%3D' target="_blank">Linkedin</a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/pili74' target="_blank">GitHub</a></p>
          
        </div>
        <div style={{width: '200px', borderRadius: '10px',textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Daniel</h2>
            <img src={nike}></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/eduardo-encinas?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVdVeTcawS0igyGvrImMh%2BA%3D%3D'target="_blank">Linkedin</a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/pili74' target="_blank">GitHub</a></p>
           
        </div>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Eduardo Encinas</h2>
            <img className="abaut" src={pili}></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/eduardo-encinas?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVdVeTcawS0igyGvrImMh%2BA%3D%3D' target="_blank">Linkedin</a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/pili74' target="_blank">GitHub</a></p>
        </div>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Gaston</h2>
            <img src={nike}></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/eduardo-encinas?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVdVeTcawS0igyGvrImMh%2BA%3D%3D'target="_blank">Linkedin</a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/pili74'target="_blank">GitHub</a></p>
           
        </div>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Mariano</h2>
            <img src={nike}></img>
            <h6>Lic. en Sistemas</h6>
            <p><a style={{color: 'yellow'}} href='https://www.linkedin.com/in/eduardo-encinas?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVdVeTcawS0igyGvrImMh%2BA%3D%3D'target="_blank">Linkedin</a></p>
            <p><a style={{color: 'yellow'}} href='https://github.com/pili74'target="_blank">GitHub</a></p>
           
        </div>
    </div>
    </>
  )
}

export default Nosotros