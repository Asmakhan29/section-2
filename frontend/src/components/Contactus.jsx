import React from 'react'

const Contactus = () => {
    return (
        <div>

            <div className="container w-50">
                <div className="card align-items-center">
                    <div className="card-body border border-dark w-75 p-5">
                        <h2 className='m-2 mb-4'>Contact Us</h2>
                        <div className="d-flex mx-2 border">
                            <div className='me-3'>
                                <label htmlFor="fname"></label>
                                <input type="text" className="form-control w-100" />
                            </div>
                            <div className='ms-3'>
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" className="form-control w-100" />
                            </div>

                        </div>
                        <div className='mx-2'>
                            <label htmlFor="mail">Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className='mx-2'>
                            <label htmlFor="phone">Phone No.</label>
                            <input type="phone" className='form-control' />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default Contactus