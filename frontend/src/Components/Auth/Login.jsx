import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { URL } from '../../helper'
import axios from 'axios'

const loginSchema = Yup.object().shape({
  email: Yup.string()
   .email('Please enter a valid email')
   .required( 'Please enter an email' ),
  password: Yup.string()
   .required('Please enter a password')
 });

export default class Login extends Component {


  submitHandle = (val)=>{
        axios.post(`${URL}/users/login`, val)
        .then(resp => {
          console.log(resp)
          if(resp.status === 200){
              localStorage.setItem("usertoken", resp.data)
              window.location.href = '/profile'
              
          }
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
              <Container>
                Login Page
                  <Formik 
                    onSubmit={(values) => {
                          // console.log(values)
                           this.submitHandle(values)
                          }}
                      initialValues={{
                                      email : '',
                                      password : ''
                        }}
                      validationSchema={loginSchema}>
                        {(values) => (
                            <Form>
                            <div className="mb-3">
                            <Field
                                name="email"
                                type="text"
                                placeholder="email"
                                className="form-control" 
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                            />
                            </div>
                            
                            <Field
                                name="password"
                                type="password"
                                placeholder="******"
                                className="form-control" 
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                            />
                            <button type="submit">
                                Submit
                            </button>
                            </Form>
                        )}
                        </Formik>
                </Container>
        </div>

        )
    }
}
