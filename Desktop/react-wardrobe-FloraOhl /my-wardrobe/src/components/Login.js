import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import * as Yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(Yup) // extend yup



const Login = (props) => {
    const [error, setError] = useState(false)
    const [message, setMessage] = useState()

    const loginUser = async (input) => {
        console.log(input);
        let path = `${process.env.REACT_APP_WARDROBE_API}/login`
        try {
            let response = await fetch(path, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(input)
            })
            if (response.status === 200) {
                console.log(response);
                let data = await response.json()
                let token = data.token
                // save to localStorage
                localStorage.setItem('token', JSON.stringify(token))
                setMessage('You are logged in!')
                // change state of loggedIn
                props.setLoggedIn(true)
            } else {
                let error = new Error(`${response.statusText}: ${response.url}`)
                error.status = response.status
                throw error
            }
        } catch (error) {
            console.log("There was an error when loging in user", error);
            setError({ message: "There was an error when loging in" })
        }
    }
    return (
        <div className="Login form">
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    password: Yup.string().password().max(72, 'Must be 15 characters or less')
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    console.log('in on sumbit', values);
                    loginUser(values)
                }}
            >
                <Form className='d-flex flex-column m-5'>
                    <label htmlFor="username">user name</label>
                    <Field name="username" type="text" />
                    <ErrorMessage name="username" />
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />


                    <button className="btn btn-primary mt-3 mx-1" type="submit">Submit</button>


                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>

                    <p>
                        <Link to='/'><h5>forgot password?</h5></Link>
                    </p>

                </Form>
            </Formik>
            {message ? (<div>{message}</div>) : null}
            {error ? (<div>{error.message}</div>) : null}
        </div>

    )

}
export default Login
