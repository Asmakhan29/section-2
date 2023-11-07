import React from 'react'

const Contactus = () => {
    return (
        <div>

            <div className="container w-50 mt-5 p-5">
                <div className="card align-items-center justify-content-center">
                    <div className="card-body border border-dark w-75 p-5">
                        <h2 className='m-2 mb-4'>Contact Us</h2>
                        <div className="d-flex mx-2 my-4 border">
                            <div className='me-3'>
                                <label htmlFor="fname">Tell us your name</label>
                                <input type="text" className="form-control w-100 border border-dark h-50 rounded-0" />
                            </div>
                            <div className='ms-3'>
                                <label htmlFor="lname">Enter your Email</label>
                                <input type="email" className="form-control w-100" />
                            </div>

                        </div>
                        <div className='mx-2 my-4'>
                            <label htmlFor="mail">Your Qualification</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className='mx-2 my-4'>
                            <label htmlFor="phone">Message</label>
                            
                            <textarea name="msg" id="" cols="20" rows="5" className='form-control'></textarea>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default Contactus