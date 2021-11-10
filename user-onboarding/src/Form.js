import React from 'react'

export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props


const onSubmit = evt => {
    evt.preventDefault()
    submit()
}
const onChange = evt => {
    const { name, value, checked, type} = evt.target
    const realValue = type === 'checkbox' ? checked : value;
    change(name, realValue);
} 

return (
    <form className='form container' onSubmit={onSubmit}>

        <div className='form-user Submit'>
            <h2>New User?</h2>
            <button disabled={disabled}>Sign Up</button>
            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.service}</div>
            </div>
        </div>

        <div className='form inputs'>
        <label>First Name
            <input
                value={values.first_name}
                onChange={onChange}
                name='first_name'
                type='text'
            />
        </label>
        <label>Last Name
            <input
                value={values.last_name}
                onChange={onChange}
                name='last_name'
                type='text'
            />
        </label>
        <label>Email
            <input
                value={values.email}
                onChange={onChange}
                name='email'
                type='text'
            />
        </label>
        <label>Password
        <input
                value={values.password}
                onChange={onChange}
                name='password'
                type='password'
            />
        </label>
        <label>Agree to terms of service?
            <input
                type='checkbox'
                name='service'
                onChange={onChange}
                checked={values.service}
            />
        </label>
        </div>
    </form>
)
}