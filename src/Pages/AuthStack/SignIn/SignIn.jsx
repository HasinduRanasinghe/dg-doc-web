import React from 'react'
import LocalStore from '../../../Store/LocalStore'

export default function SignIn() {
    return (
        <section className="vh-100">
            <div className="container h-100 px-6 p-md-0 d-flex flex-column justify-content-center align-items-center">
                {/* row */}
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-5">
                        <div className="mb-lg-9 mb-5 d-flex flex-column align-items-center">
                            <img className='w-65 mb-5' src="../assets/images/logo/dg-logo.png" alt="eCommerce HTML Template" />
                            <p className='fw-bolder'>Admin Login</p>
                        </div>
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                {/* row */}
                                <div className="col-12">
                                    {/* input */}
                                    <input type="email" className="form-control" id="formSigninEmail" placeholder="Email" required />
                                    <div className="invalid-feedback">Please enter name.</div>
                                </div>
                                <div className="col-12">
                                    {/* input */}
                                    <div className="password-field position-relative">
                                        <div className="password-field position-relative">
                                            <input type="password" className="form-control fakePassword" id="formSigninPassword" placeholder="Password" required />
                                            <div className="invalid-feedback">Please enter name.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4 mt-1">
                                    <div>
                                        <a href="">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                {/* btn */}
                                <div className="col-12 d-grid"><button type="submit" className="btn btn-primary">Sign In</button></div>
                                {/* link */}
                                <p className='text-capitalize'>
                                    With great power comes great
                                    <span className='text-danger'> responsibility!!</span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
