import { useState } from "react";

const Form = ({ login }) => {
    const [ userData, setUserData ] = useState({
        email:"",
        password:""
    })

    const [ errors, setErrors ] = useState({
        email:"",
        password:"",
    })

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        validate();
    }

    const validate = () => {

        if(!/\S+@\S+\.\S+/.test(userData.email)){
            setErrors({
                ...errors,
                email: "email invalido, revisalo una vez mas"
            })
        }
        else if(userData.email.length === 0 || userData.email.length > 35){
            setErrors({
                ...errors,
                email: "email invalido, revisalo una vez mas"
            })
        }
        else setErrors({...errors, email:""})

        // if(/\d/.test(userData.password) || userData.password.length > 6 || userData.password.length <10){
        //     setErrors({
        //         ...errors,
        //         password:""
        //     })
        // }
        // else if(){
        //     setErrors({
        //         ...errors,
        //         password:"contraseña invalida"
        //     })
        // }
        // else setErrors({...errors, password:"contraseña invalida"})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}

            <button>Submit</button>
        </form>
    )
}

export default Form;