import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { URL } from '../../helper'
import axios from 'axios'

const registerSchema = Yup.object().shape({
  first_name: Yup.string()
  .required('must enter a first name'),
  last_name: Yup.string()
  .required('must enter a last name'),
  email: Yup.string()
   .email('Please enter a valid email')
   .required( 'Please enter an email' ),
  password: Yup.string()
   .required('Please enter a password')
 });

export default class Register extends Component {

  register = newUser => {
    return axios
      .post(`${URL}/users/register`, newUser)
      .then(res =>{ 
        console.log(res)
        this.props.history.push("/login");
      })
      .catch(err => console.log(err));
  }

    render() {
        return (
            <div>
              <Container>
                Register Page
                <Formik 
                    onSubmit={(values) => {
                          // console.log(values)
                           this.register(values)
                          }}
                      initialValues={{
                        first_name:'',  
                        last_name:'',
                        email : '',
                        password : ''
                        }}
                      validationSchema={registerSchema}>
                        {(values) => (
                            <Form>
                            <div className="mb-3">
                            <Field
                                name="first_name"
                                type="text"
                                placeholder="First Name"
                                className="form-control" 
                            />
                            <ErrorMessage
                                name="first_name"
                                component="div"
                            />
                            </div>

                            <div className="mb-3">
                            <Field
                                name="last_name"
                                type="text"
                                placeholder="Last Name"
                                className="form-control" 
                            />
                            <ErrorMessage
                                name="last_name"
                                component="div"
                            />
                            </div>

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
                            
                            <div className="mb-3">
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
                            </div>

                           
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
