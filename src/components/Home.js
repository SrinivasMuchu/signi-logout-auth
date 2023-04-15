import React, { useContext, useState } from 'react'

import { StateContext } from '../Context/AuthProvider'

const Home = () => {

    const {
        name, 
        setName, 
        email, 
        setEmail, 
        password, 
        setPassword, 
        confirmPassword, 
        setConfirmPassword,
    } = useContext(StateContext);

    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);

    const [redAlert, setRedAlert] = useState(false);
    const [greenAlert, setGreenAlert] = useState(false);


    const checkName =(e)=>{
        setName(e.target.value);
        if(name.length<=5){
            setValidName(false);
        }
        else if(!name.includes(" ")){
            setValidName(false);
        }else if(!name.split(" ")[1]){
            setValidName(false);
        }
        else{
            setValidName(true);
        }
    }

    const checkEmail =(e)=>{
        setEmail(e.target.value);
        if(email.length<=12){
            setValidEmail(false);
        }else if(!email.includes("@")){
            setValidEmail(false);
        }else if(!email.split("@")[1]===("gmail.com" || "outlook.com" || "yahoo.com")){
            setValidEmail(false);
        }else{
            setValidEmail(true);
        }
    }

    const checkPassword =(e)=>{
        setPassword(e.target.value);
        if(password.length<5){
            setValidPassword(false);
        }else{
            setValidPassword(true);
        }
    }

    const checkConfirmPassword =(e)=>{
        setConfirmPassword(e.target.value);
        if(confirmPassword.length < 5 ){
            setValidConfirmPassword(false);
        }else{
            setValidConfirmPassword(true);
        }
    }


    const onSubmit=()=>{
        if(!validName || !validEmail || (password !== confirmPassword) || !validPassword ||!validConfirmPassword){
            console.log("Invalid")
            setRedAlert(true);
            setGreenAlert(false);
            if(!validName){
                alert("Enter valid name");
            }else if(!validEmail){
                alert("Enter valid email");
            }else if(password !== confirmPassword){
                alert("Password did not matched");
            }else if(password.length < 5){
                alert("Password is too short");
            }
        }else{
            setRedAlert(false);
            setGreenAlert(true);
            
            
        }
    }


    

  return (
    <div className='h-full w-[70%] m-auto'>
        <div className='mt-10'>
            <h2 className='text-3xl'>Signup</h2>
            <div className='mt-5'>
                <div className=' border border-transparent border-b-white mt-1'>
                    <input 
                        placeholder='Full Name' 
                        className='bg-transparent h-10 w-full outline-none' 
                        value={name} 
                        onChange={checkName} />
                </div>

                <div className=' border border-transparent border-b-white mt-1'>
                    <input 
                        placeholder='Email' 
                        className='bg-transparent h-10 w-full outline-none' 
                        value={email} 
                        onChange={checkEmail}  />
                </div>

                <div className=' border border-transparent border-b-white mt-1'>
                    <input 
                        placeholder='Enter your Password' 
                        type='password'
                        className='bg-transparent h-10 w-full outline-none' 
                        value={password} 
                        onChange={checkPassword} />
                </div>

                <div className=' border border-transparent border-b-white mt-1'>
                    <input 
                    type='password'
                        placeholder='Confirm your Password' 
                        className='bg-transparent h-10 w-full outline-none'  
                        value={confirmPassword} 
                        onChange={checkConfirmPassword} />
                </div>

                <div className='py-5'>
                    <h2 className={`text-red-800 ${!redAlert?"hidden":"flex"}`}>Error: All the fields are mandatory</h2>
                    <h2 className={`text-green-700  ${!greenAlert?"hidden":"flex"}`}>Successfully Signed Up!</h2>
                </div>

                <button onClick={onSubmit} className='bg-white text-black w-28 rounded-sm p-2'>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default Home