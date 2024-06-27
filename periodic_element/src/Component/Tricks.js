import React from 'react';
// import group1Image from '../Img/group1.jpg';

const Tricks = () => {
  return (
    <>
      <center><h4>Tricks to learn Periodic Element</h4></center>
      
      <div className='tricks-content'>
        <h5>1st column (Group 1)</h5>
        <p>HaLiNa (हलीना) K (की) Rb (रब) Csey (से) Fryad (फिरयाद)</p>
        <p>Hydrogen  (H), Lithium (Li), Sodium(Na), Potassium(K), Rubidium(Ru),Cesium (Cs),Francium (Fr)</p>
        {/* <img src={group1Image} alt="Group 1 Elements" className="group-image" /> */}
      </div>
      
      <div className='tricks'>
        <h5>2nd column (Group 2)</h5>
        <p>Beta Mange Car Scoter Bap Razi</p>
        <p>Be, Mg, Ca, Sr, Br, Ra</p>
      </div>
    </>
  );
}

export default Tricks;
