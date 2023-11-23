import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values));
      console.log(values);
      // resetForm();   
      toast.success('Form Submitted');
    },
    validationSchema: SignupSchema
  });

  


  return (
    <div>
      <h1>

        <div className="col-md-4 mx-auto py-5">
          <div className="card">
            <div className="card-body">
              <h3 className="my-3 text-center">Brand Logo</h3>
              <h5 className="text-center text-muted">Signup Form</h5>

              <form onSubmit={signupForm.handleSubmit}>

                <label htmlFor="name">Name</label>
                <span className='text-danger ms-3'>{signupForm.touched.name && signupForm.errors.name}</span>
                <input type="text" id='name' onChange={signupForm.handleChange} value={signupForm.values.name} className='form-control mb-4' />

                <label htmlFor="email">Email Address</label>
                <span className='text-danger ms-3'>{signupForm.touched.email && signupForm.errors.email}</span>
                <input type="text" id='email' onChange={signupForm.handleChange} value={signupForm.values.email} className='form-control mb-4' />

                <label htmlFor="password">Password</label>
                <span className='text-danger ms-3'>{signupForm.touched.password && signupForm.errors.password}</span>
                <input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} className='form-control mb-4' />

                <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>


              </form>
            </div>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default Signup