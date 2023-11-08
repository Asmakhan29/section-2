import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='text-center'>
        <p className="display-1 fw-bold mt-5">
            404 - Page Not Found 
        </p>

        <Link className="btn btn-success mt-5 " to='/'>Back to Homepage</Link>
    </div>
  )
}

export default Notfound