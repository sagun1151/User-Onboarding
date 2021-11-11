import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema'
import User from './User';


const initialFormValues = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  service:''
}
const initialFormErrors = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  service:''
}


function App() {

  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users]);
    })
    .catch(err => console.error(err))
    .finally(() => {
      setFormValues(initialFormValues);
    })
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name,value) => {
    validate(name, value);
    setFormValues({...formValues, [name]:value})
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      service: formValues.service
    }
    postNewUser(newUser)
  }
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <div className="App">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
