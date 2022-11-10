import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(Yup) // extend yup


const Signup = () => {
    const [error, setError] = useState(false)

    const [messageSignup, setMessageSignup] = useState()

    const signUpUser = async (input) => {
        console.log(input);
        let path = `${process.env.REACT_APP_WARDROBE_API}/users/`
        try {
            let response = await fetch(path, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(input)
            })
            if (response.status === 201) {
                setMessageSignup(response.statusText)
            } else {
                let error = new Error(`${response.statusText}: ${response.url}`)
                error.status = response.status
                throw error
            }
        } catch (error) {
            console.log("There was an error when updating data", error);
            setError(error.message)
        }
    }
    return (
        <div className="Sign up form">
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    //  Validation for strong password
                    password: Yup.string().password().max(72, 'Must be 15 characters or less')
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    signUpUser(values)
                }}
            >
                <Form className='d-flex flex-column m-5'>
                <button className="btn btn-dark mt-3" type="submit">Register</button>
                    <label htmlFor="username">User name</label>
                    <Field name="username" type="text" />
                    <ErrorMessage name="username" />

                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />

                    <button className="btn btn-primary mt-3 mx-1"type="submit">Submit</button>

    

                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset Password</button>
                </Form>
            </Formik>
            {messageSignup ? (<div>{messageSignup}</div>) : null}
            {error ? (<div>{error.message}</div>) : null}
        </div>

    )
}

export default Signup  

// import React from 'react';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';

// const Signup = () => {
//     const validate = Yup.object({
//         fullName: Yup.string().min(3, 'Must be 15 characters or less').max(15, 'Must be 15 characters or less')
//             .required('Required'),
//         username: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
//         email: Yup.string().email('Email is invalid').required('Email is required'),
//         password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
//         confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),
//     })

//     return (
//         <Formik
//             initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: ''
//             }}
//             validationSchema={validate}
//             onSubmit={values => {
//                 console.log(values)
//             }}
//         >
//             {formik => (
//                 <div>
//                     <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
//                     <Form>

//                         <input
//                             id="full-name"
//                             class="form-field"
//                             type="text"
//                             placeholder="Full Name"
//                             name="fullName"
//                         />
//                         <input
//                             id="user-name"
//                             class="form-field"
//                             type="text"
//                             placeholder="User Name"
//                             name="userName"
//                         />
//                         <input
//                             id="email"
//                             class="form-field"
//                             type="text"
//                             placeholder="Email"
//                             name="email"
//                         />
//                         <input
//                             id="password"
//                             class="form-field"
//                             type="password"
//                             placeholder="Password"
//                             name="password"
//                         />
//                         <input
//                             id="confirm-password"
//                             class="form-field"
//                             type="password"
//                             placeholder="Confirm Password"
//                             name="password"
//                         />
//                         <button className="btn btn-dark mt-3" type="submit">Register</button>

//                         <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>


//                     </Form>
//                 </div>
//             )}
//         </Formik>
//     )
// }
