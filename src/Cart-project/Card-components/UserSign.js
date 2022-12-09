
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const UserSignup = () => {
    const [val, setVal] = useState([]);
   
    const [data, setdata] = useState({

        name: "",
        email: "",
        password: "",

    })




    const getdata = (e) => {

        const { value, name } = e.target;



        setdata(() => {
            return {
                ...data, [name]: value
            }
        })
    }

    const Register = (e) => {
        e.preventDefault()
        let { name, email, password } = data


        if (name === "") {
            alert("Please enter your name")
        } else if (email === "") {
            alert("Please enter your email")
        } else if (!email.includes("@")) {
            alert("add  @ full email")
        }
        else if (password === "") {
            alert("Please enter your password")
        } else if (password.length < 5) {
            alert("password length greater five")
        }
        else {
            const usedata = localStorage.getItem('user')
            const signup = JSON.parse(usedata)
            console.log(signup, "kjlg");
            if (signup === null) {
                localStorage.setItem("user", JSON.stringify([data]));
            } else {
                const fildata = signup.filter((cval, i) => cval.email === email)
                if (fildata && fildata.length) {
                    alert('user already exist')
                } 
                else {
                    localStorage.setItem("user", JSON.stringify([...signup, data]));
                }
            }

        }



    }
    return (
        <>

            <section class="vh-100" >
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black"  >
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form class="mx-1 mx-md-4">

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input onChange={getdata} type="text" id="form3Example1c" name='name' class="form-control" />
                                                        <label class="form-label" for="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input onChange={getdata} type="email" id="form3Example3c"
                                                            name='email' class="form-control" />
                                                        <label class="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input onChange={getdata} type="password" id="form3Example4c" name='password' class="form-control" />
                                                        <label class="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className='mb-7'>

                                                    <h5> Already have an account? <NavLink to="/login">Login</NavLink>   </h5>
                                                </div>



                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button onClick={Register} type="button" class="btn btn-primary btn-lg">Register</button>

                                                </div>

                                            </form>

                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                class="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserSignup