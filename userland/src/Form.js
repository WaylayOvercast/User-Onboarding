import React, { useState } from 'react';
import './App.css';
import SubMissions from './SubMissions';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



const Form=(props)=>{

    const { values, update, submit, errors, disable } = props

    const targetAlter = event =>{
        const {name, value, checked, type} = event.target
        const valueToUse = type === 'checkbox'? checked : value
        update(name, valueToUse);
    }
    const onSub = evt =>{
        evt.preventDefault();
        submit();
    }


    return(
        <Router>
            <div className="main-card">
                <div className='sub-card'>
                    <form className='f1' onSubmit={onSub}>
                        <label className='l'>
                            Enter a name:&nbsp;
                        <input 
                            className='in'
                            onChange={targetAlter} 
                            value={values.name} 
                            name='name' 
                            type='text'/>   
                        </label>
                        <label className='l'>
                            Enter an Email adress:&nbsp;
                        <input 
                            className='in'
                            onChange={targetAlter} 
                            value={values.email} 
                            name='email' 
                            type='text'/>   
                        </label> 
                        <label className='l'>
                            Enter a Password:&nbsp;
                        <input 
                            className='in'
                            onChange={targetAlter} 
                            value={values.password} 
                            name='password' 
                            type='password'/>   
                        </label> 
                        <label className='l'>
                            Dr Pepper is better!
                        <input 
                            id='pep' 
                            className='in'
                            onChange={targetAlter}
                            checked={values.soda === 'pepper'}  
                            value='pepper' 
                            name='soda' 
                            type='radio'/>   
                        </label>
                        <label className='l'>
                            Mountain Dew is better!
                        <input
                            id='dew'
                            className='in'
                            onChange={targetAlter}
                            checked={values.soda === 'dew'} 
                            value='dew' 
                            name='soda' 
                            type='radio'/>
                        </label>
                        <label className='l'>
                            Confirm choices and Agree to Terms.
                        <input
                            className='in'
                            onChange={targetAlter}
                            checked={values.terms}
                            name='terms'
                            type='checkbox'/>
                        </label> 
                        <div className='errors'>
                        <div className='e'>{errors.name}</div>
                        <div className='e'>{errors.email}</div>
                        <div className='e'>{errors.password}</div>
                        <div className='e'>{errors.service}</div>
                        </div>
                        <button className='in sub' disabled={disable} >submit
                        </button> 
                    </form>   
                </div>     
            </div>
            <Route path='/submissions'>
                <div className='sub-main'>
                </div>
            </Route>
        </Router>
    )
}


export default Form