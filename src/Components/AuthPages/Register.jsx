import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { register,webLogo } from '../../Helpers/images'
import { FiArrowLeft } from 'react-icons/fi'

function Register() {
  return (
    <Fragment>
        <section className="md:h-screen py-36 flex items-center bg-orange/10 dark:bg-orange/20 bg-[url('./assets/images/sale-bg.png')] bg-center bg-no-repeat bg-cover">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1">
                    <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                            <div className="relative md:shrink-0">
                                <img className="h-full w-full object-cover md:h-[44rem]" src={register} alt=""/>
                            </div>

                            <div className="p-8 lg:px-20">
                                <div className="text-center">
                                    <Link to="/">
                                        <img src={webLogo} className="mx-auto block dark:hidden" alt=""/>
                                    </Link>
                                </div>

                                <form className="text-start lg:py-20 py-8">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="RegisterName">Your Name:</label>
                                            <input id="RegisterName" type="text" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Harry"/>
                                        </div>
        
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="name@example.com"/>
                                        </div>
        
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Password:"/>
                                        </div>
        
                                        <div className="mb-4">
                                            <div className="flex items-center w-full mb-0">
                                                <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&C"/>
                                                <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">I Accept <Link to="/TermsOfService" className="text-orange">Terms And Condition</Link></label>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <button type="submit" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange text-white rounded-md w-full"><Link to="/RegisterSuccess">Register</Link></button>
                                        </div>
        
                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Already have an account ? </span> <Link to="/Login" className="text-black dark:text-white font-bold inline-block">Sign in</Link>
                                        </div>
                                    </div>
                                </form>

                                <div className="text-center">
                                    <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Cartzio.  Design & Develop  with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="fixed bottom-3 end-3">
            <Link to="/" className="back-button size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-orange text-white rounded-full"><FiArrowLeft className="h-4 w-4"></FiArrowLeft></Link>
        </div>
    </Fragment>
  )
}

export default Register
