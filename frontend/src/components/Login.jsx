import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .required('Required')
    // .matches(/[0-9]/, 'Number is required')
    // .matches(/[a-z]/, 'Lowercase is required')
    // .matches(/[A-Z]/, 'uppercase is required')
    // .matches(/[^\w]/, 'special character is required')
});

const Login = () => {


  const LoginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values));
      console.log(values);
      resetForm();   
      toast.success('Form Submitted');
    },
    validationSchema: LoginSchema
  });



  return (
    <div>
        
        <div className="container">
          <div className="col-md-4 mx-auto mt-5 pt-5">
            <div className="card">
              <div className="card-body">
                <h2 className='my-4 pb-2'>Login Form</h2>

                <form onSubmit={LoginForm.handleSubmit} className='fs-5'>

                  <label htmlFor="email">Enter E-mail</label>
                  <span className='text-danger ms-3'>{LoginForm.touched.email && LoginForm.errors.email}</span>
                  <input type="text" id='email' onChange={LoginForm.handleChange} value={LoginForm.values.email}  className='form-control'/>

                  <label htmlFor="password">Enter Password</label>
                  <span className='text-danger ms-3'>{LoginForm.touched.password && LoginForm.errors.password}</span>
                  <input type="password" id='password' onChange={LoginForm.handleChange} value={LoginForm.values.password}  className='form-control'/>

                  <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>

                </form>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login