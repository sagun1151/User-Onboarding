import * as yup from 'yup'

const formSchema =yup.object().shape({
    first_name:yup
        .string()
        .trim()
        .required('I need your first name'),
    last_name:yup
        .string()
        .trim()
        .required('I need your last name'),
    email:yup
        .string()
        .email('Must be a valid email address')
        .required('email required'),
    password:yup
        .string()
        .min(5, 'Password must be longer than 5 characters')
        .required('Password required')
    ,
    service:yup.boolean()
})

export default formSchema;