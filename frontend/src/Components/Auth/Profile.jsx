import React, { Component } from 'react'
import axios from 'axios'
import {  logout } from '../../helper' 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Container } from 'react-bootstrap';

const ideaSchema = Yup.object().shape({
    password: Yup.string()
     .min(6, 'Please enter more than 6 characters')
     .required( 'Please enter password' ),
    confirmPassword : Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
   });

export default class Profile extends Component {
    state={
        data:[],
    }


    passwordChange = (password) =>{
        //make axios call here
        axios.put(`/users/profile/password`, { password }, { 
            "headers": {
                "Authorization" :localStorage.getItem('usertoken')
            }
        })
        .then(res => {
            console.log(res)
            if(res.status === 200){
                logout()
            }
        })
        .catch(err => {
            console.log(err)
        })
        //logout
    }


    componentDidMount(){

        axios.get(`/users/profile/`, { 
            "headers": {
                "Authorization" :localStorage.getItem('usertoken')
            }
        })
        .then(data => {
            console.log(data)
            this.setState({
                data:data.data
            })
            console.log(this.state)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        console.log(this.state.password)
        return (
            <div>
                <div>  First name : {this.state.data.first_name} </div>
                <div>Last name :{this.state.data.last_name}</div>
                <div>Email :{this.state.data.email}</div>
                <br/>
                <Container>
                <Formik
                        onSubmit={(values) => {
                            console.log(values)
                            console.log("submitted..")
                            this.passwordChange(values.password)
                        }}
                        initialValues={{
                            password : '',
                            confirmPassword: ''
                        }}
                        validationSchema={ideaSchema}
                        >
                        {(values) => (
                            <Form>
                          
                            <Field
                                name="password"
                                type="password"
                                placeholder="*****"
                                className="form-control" 
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                            />
                            
                            <Field
                                name="confirmPassword"
                                type="password"
                                placeholder="*****"
                                className="form-control" 
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                            />
                            <button type="submit">
                                Submit
                            </button>
                            </Form>
                        )}
                        </Formik>
                </Container>

                {/* <a href="/password">  Change your password </a> */}
            </div>
        )
    }
}
