import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import createPost from '../actions/action_createPost'
import { connect } from 'react-redux'


const required = value => value ? '': 'required'
const minLength = min => value => value && value.length < min ? `Content should be at least ${min} characters` : ''
const minLength10 = minLength(10)

const NewPost = (props) => {
    let navigate = useNavigate()
    
    const renderFieldInput = ({ input,label, meta : {touched,error}}) => {
     const result = touched && error ? 'is-invalid': ''
        const classname = `form-control ${result}`
        return(
            <div className='form-group'>
                <label>{label}</label>
                <input type='text'
                className={classname}
                {...input}
                />
                <div id="validationFeedback" className="invalid-feedback">
                { touched && (error && <span>{error}</span>)}
                </div>
            </div>
        )
    }

    const submitForm = (values) => {
        
         props.createPost(values, () => {
             navigate('/')
         })
    }
    
    const { handleSubmit} = props

        return (

            <div className='m-2'>
                <h4 className='m-2'>new Post </h4>
                <form onSubmit={handleSubmit(submitForm) } >
                    <Field 
                        label='Title'
                        name='title'
                        component={renderFieldInput}
                        validate={required}
                    />
                    <Field 
                        label='Categories'
                        name='categories'
                        component={renderFieldInput}
                        validate={required}
                    />
                     <Field 
                        label='Content'
                        name='content'
                        component={renderFieldInput}
                        validate={[required,minLength10]}
                    />
                    <button className='btn btn-primary' type='submit'>Submit</button>
                    <Link to='/'className='btn btn-danger  m-2' type='submit'>Cancel</Link>
                </form>
            </div>
        )
    
}



export default reduxForm({
    form: 'NewPostForm'
})(
    connect(null, {createPost})(NewPost)
    )