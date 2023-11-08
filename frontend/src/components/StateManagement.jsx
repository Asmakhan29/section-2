import React, { useState } from 'react'

const StateManagement = () => {

    let count = 0;

    // likes = redaonly , likes = update function
    const [likes, setlikes] = useState(0);

    const [imgLink, setimgLink] = useState("");

  return (
    <div className='container'>
        <h1 className="text-center">
            State Management
        </h1>
        <hr />

        <h1>{count}</h1>
        <button className="btn btn-success" onClick={ () => { count++; console.log(count); } } >Add Count</button>

        <h1>Likes: {likes}</h1>
        <button className="btn btn-danger" onClick={ () => { setlikes(likes+1); } } > Add Likes</button>

        <input type="text" className='form-control mt-5' onChange={ (e) => {setimgLink(e.target.value);} } />
        <label>Insert Image Link Above</label>

        {/* <h3>{imgLink }</h3> */}

        <img className="d-block" src={imgLink} alt="" />


       
    </div>
  )
}

export default StateManagement