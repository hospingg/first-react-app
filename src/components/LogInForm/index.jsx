import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import {subYears, format} from 'date-fns'
import {styles} from './styles.scss'

const initialStates = {
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
        repeatPass: '',
        birthday: format(new Date, 'yyyy-MM-dd'),
        agreement: false,
    }
const FormSCHEMA = yup.object({
    firstName: yup.string()
    .matches(/^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/)
    .required( 'please, type your first name')
    .max(30, 'Max name size in 30 symbols'),
    lastName: yup.string()
    .max(30, 'Max last name size in 30 symbols')
    .matches(/[a-zA-Z `'-]{1,40}/, 'Your last name can have only letters and special symbols'),
    email: yup.string()
    .required('please, type your email')
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Please, type your valid email'),
    pass: yup.string().required('please, type your password').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'password must have at least 8 symbols with big and little letter, number and special symbol'),
    repeatPass: yup.string().required('please, confirm your password').oneOf([yup.ref('pass')], 'Passwords must match'),
    birthday: yup.date().max(subYears(new Date(), 18), 'Your age must be over 18'),
    agreement: yup.bool().oneOf([true], 'You must agree with our rules'),
})

const LogInForm = () => {
    const submitHandler = (values, methods) => {
        methods.resetForm()

        console.log(values);
        console.log(methods);
    }
    return (
        <Formik
        onSubmit={submitHandler}
        initialValues={initialStates}
        validationSchema = {FormSCHEMA}
        >
            {(FormikProps) => (
                <Form 
                className='logInForm'>
                    <Field name = 'firstName' 
                    placeholder='Type your first name'/>
                    <ErrorMessage name = 'firstName'/>

                    <Field name = 'lastName'
                    placeholder='Type your last name'/>
                    <ErrorMessage name = 'lastName'/>

                    <Field name = 'email'
                    placeholder='Type your email'/>
                    <ErrorMessage name = 'email'/>

                    <Field name = 'pass'
                    placeholder='Type your password'/>
                    <ErrorMessage name = 'pass'/>

                    <Field name = 'repeatPass'
                    placeholder='Type repeat your password'/>
                    <ErrorMessage name = 'repeatPass'/>

                    <Field type='date' name = 'birthday' 
                    placeholder='Type your birthday date'/>
                    <ErrorMessage name = 'birthday'/>

                    <label>
                        <p>Please, agree with our rules/</p>
                        <Field type='checkbox' 
                        name = 'agreement'/>
                    </label>

                    <button type='submit'>submit</button>
                </Form>)
            } 
        </Formik>
    );
}

export default LogInForm;
