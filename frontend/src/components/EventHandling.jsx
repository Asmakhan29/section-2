import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
      <h1 className="text-center">Event Handling</h1>
      <hr/>

      <button className="btn btn-primary m-4" onClick={ () => { prompt('Error! you are exhausted') } }>My Button</button>
      <button className="btn btn-primary" onClick={ () => { alert('Error! you are exhausted') } }>My Button 2</button>
      <input type="text" className="form-control" onChange ={ (a) => { console.log(a.target.value) } } />

      <input type="color" onChange={ (e) => { document.body.style.backgroundColor = e.target.value; } } />
    </div>
  )
}

export default EventHandling