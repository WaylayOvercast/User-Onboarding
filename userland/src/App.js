import './App.css';
import Form from './Form';
import Schema from './Schema';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubMissions from './SubMissions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  const formDefault = {
    name:'',
    email:'',
    password:'',
    terms: false
  }
  const [disable, setDisable] = useState(true)
  const [values, setValues] = useState([]);
  const [form, setForm]= useState(formDefault)
  const [dataErr,setErr]= useState({
    name:'',
    email:'',
    password:'',
  })
  const getValues = () => {
    axios.get('https://reqres.in/api/users')
    .then(res =>{
      console.log(res)
    })
    .catch(err =>{
      console.log(err)
    })}
  
  const postValues = (newVal) =>{
    axios.post('https://reqres.in/api/users', [newVal])
    .then(res =>{
      setValues([res.data,...values])
      console.log(res)
    })
    .catch(valueError => console.error(valueError)
    )
    .finally(()=> {
      setForm(formDefault)
      getValues()
    })
  }
  

  
  const submit = () => {

    const newForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password.trim(),
      terms: form.terms
    }
    postValues(newForm)
  }

  const validate = (name,value) => {
    yup.reach(Schema, name)
    .validate(value)
    .then(() => setErr({...dataErr, [name]: ''}))
    .catch(err => setErr({...dataErr, [name]: err.errors[0] }))
  }

  const update = (name, value) => {
    validate(name, value)
    setForm({...form, [name]: value});
  }
  
  useEffect(()=>{
    getValues()
  },[])

  useEffect(()=>{
   Schema.isValid(form).then(valid =>
     setDisable(!valid)) 
  },[form])
  
  return (
    <Router>
    <div className="App">
      <Route path='/'>
      <Form
       values={form} 
       update={update}
       submit={submit}
       errors={dataErr}
       disable={disable}
      />
      
      </Route>
    </div>
    </Router>
  );
}

export default App;
