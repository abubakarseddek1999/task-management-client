import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/";
    // console.log('state in the location login page', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate('/dashboard');
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                // navigate(from, { replace: true });

            })
            .catch(error => console.log(error))



    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/dashboard');


            })
            .catch(error => console.log(error.message))
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) == true) {
            // alert('Captcha Matched');
            setDisabled(false);
        }

        else {
            setDisabled(true)
            alert('Captcha Does Not Match');
        }

    }
    return (

        <>
            <Helmet>
                <title> Task Management || Sign In</title>
            </Helmet>
            <div className="hero md:min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="text-center w-1/2 mr-14 lg:text-left">
                        {/* <img src={img} alt="" /> */}
                        <img src="https://i.postimg.cc/fW0WLNn4/Mobile-login-pana-1.png" alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className='text-2xl font-bold text-center'> Sign in</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                                </label>
                            </div>

                            {/* captcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder=" type the text above" className="input input-bordered" required />


                            </div>

                            {/* sign in button */}
                            <div className="form-control mt-2">
                                {/* TODO: apply disable for re captcha*/}
                                <input disabled={false} className="btn bg-[#4bcc92] text-white" type="submit" value="Log in" />
                            </div>

                        </form>
                        <div className='text-center p-2'>
                            <div className='mt-3'>
                                <p >New here? <br /> <Link to="/signup" className='text-lime-600 font-bold '>Create a New Account</Link></p>
                                <p>Or Sign In with</p>
                                <div className='flex justify-center gap-4 mt-2'>
                                    <Link><AiFillFacebook /> </Link>
                                    <button onClick={handleGoogleSignIn}><FcGoogle /> </button>
                                    <Link><AiFillInstagram /> </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;