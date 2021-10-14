import * as yup from 'yup'

const Schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name must be filled out!'),
    email: yup
    .string()
    .email('Must be a valid email address!')
    .required('email is required'),
    password:yup
    .string()
    .min(8, 'password must be 8 chars')
    .required('must have a password'),
    soda: yup
    .string()
    .oneOf(['dew','pepper'], 'you must choose a soda'),
    terms: yup.boolean()
    
});

export default Schema