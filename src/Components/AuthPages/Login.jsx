import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { login,webLogo } from '../../Helpers/images'
import { FiArrowLeft } from 'react-icons/fi'

function Login() {
  return (
    <Fragment>
        <section className="md:h-screen py-36 flex items-center bg-orange/10 dark:bg-orange/20 bg-[url('./assets/images/sale-bg.png')] bg-center bg-no-repeat bg-cover">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1">
                    <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                            <div className="relative md:shrink-0">
                                <img className="lg:h-full h-full w-full object-cover md:h-[34rem]" src={login} alt=""/>
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
                                            <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="name@example.com"/>
                                        </div>
        
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Password:"/>
                                        </div>
        
                                        <div className="flex justify-between mb-4">
                                            <div className="flex items-center mb-0">
                                                <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe"/>
                                                <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                            </div>
                                            <p className="text-slate-400 mb-0"><Link to="/ForgotPassword" className="text-slate-400">Forgot password ?</Link></p>
                                        </div>
        
                                        <div className="mb-4">
                                            <input type="submit" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange text-white rounded-md w-full" value="Login / Sign in"/>
                                        </div>
        
                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Don't have an account ?</span> <Link to="/Register" className="text-black dark:text-white font-bold inline-block">Sign Up</Link>
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

export default Login
