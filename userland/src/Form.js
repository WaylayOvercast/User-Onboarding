import React, { useState } from 'react';
import './App.css';



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
        <div className="main-card">
            <div className='sub-card'>
                <form className='f1' onSubmit={onSub}>
                    <label>
                        Enter a name:&nbsp;
                    <input 
                        className='in'
                        onChange={targetAlter} 
                        value={values.name} 
                        name='name' 
                        type='text'/>   
                    </label>
                    <label>
                        Enter an Email adress:&nbsp;
                    <input 
                        className='in'
                        onChange={targetAlter} 
                        value={values.email} 
                        name='email' 
                        type='text'/>   
                    </label> 
                    <label>
                        Enter a Password:&nbsp;
                    <input 
                        className='in'
                        onChange={targetAlter} 
                        value={values.password} 
                        name='password' 
                        type='password'/>   
                    </label> 
                    <label>
                        Dr Pepper is better!
                    <input 
                        className='in'
                        onChange={targetAlter}
                        checked={values.soda === 'pepper'}  
                        value='pepper' 
                        name='soda' 
                        type='radio'/>   
                    </label>
                    <label>
                        Mointain Dew is better!
                    <input
                        className='in'
                        onChange={targetAlter}
                        checked={values.soda === 'dew'} 
                        value='dew' 
                        name='soda' 
                        type='radio'/>
                    </label>
                    <label>
                        Confirm choices and Agree to Terms.
                    <input
                        className='in'
                        onChange={targetAlter}
                        checked={values.terms}
                        name='terms'
                        type='checkbox'/>
                    </label> 
                    <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.service}</div>
                    </div>
                    <button className='in sub' disabled={disable} >submit
                    </button> 
                </form>   
            </div>     
        </div>
    )
}


export default Form