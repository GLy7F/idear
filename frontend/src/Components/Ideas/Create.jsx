import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {   decode} from '../../helper'

const ideaSchema = Yup.object().shape({
    title: Yup.string()
     .min(6, 'Please enter more than 6 characters')
     .required( 'Please enter title' ),
    description: Yup.string()
     .max(160, 'Please enter no more than 160 characters')
     .required('Please enter a last name')
   });

export default class Create extends Component {
    state = {
        title : "",
        description : ""
    }
    
    onChange

    disc(){
        const vals = this.refs.disc.value
        this.setState({ 'disc':vals})
    }

    handleSubmit = (val) => {
        
        val.user = decode() 

    
        axios.post(`/allideas/new/${val.user}`, val)
        .then(data => {
            console.log(data)
            if(data.status === 200){
                // console.log("completed")
                this.props.history.push('/Ideas')
            }
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div>
                <h3>Create Task</h3>
                
        <h5>please write good task.</h5> 
                <div>
                    {/* <form>
                        <input name="title" />

                    </form> */}
                    <Container>
                    <Formik
                        onSubmit={(values) => {
                            // console.log(values)
                            this.handleSubmit(values)
                        }}
                        initialValues={{
                            title : '',
                            description: ''
                        }}
                        validationSchema={ideaSchema}
                        >
                        {(values) => (
                            <Form>
                            <Field
                                name="title"
                                type="text"
                                placeholder="Title of task"
                                className="form-control" 
                            />
                            <ErrorMessage
                                name="title"
                                component="div"
                            />
                            
                            <Field
                                name="description"
                                as="textarea"
                                placeholder="description of task"
                                className="form-control" 
                            />
                            <ErrorMessage
                                name="description"
                                component="div"
                            />
                            <button>
                                Submit
                            </button>
                            </Form>
                        )}
                        </Formik>
                    </Container>
                </div>
            </div>
        )
    }
}