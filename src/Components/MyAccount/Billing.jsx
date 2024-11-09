import React, { Fragment } from 'react'
import Footer from '../Footer.jsx'
import {user_img} from '../../Helpers/images.js'
import { Link } from 'react-router-dom'
import { FiAirplay, FiBell, FiCreditCard, FiEdit, FiFileText, FiLogOut, FiMapPin, FiPhone, FiSettings, FiShare2} from 'react-icons/fi'
import Header from '../Header.jsx'
function Billing() {
    return (
        <Fragment>
            <div className="main-heder absolute top-0 w-full z-[999] bg-white">
                <Header />
            </div>
            <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
                <div className="md:container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 container-fluid relative">
                    <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-[url('./assets/images/user_banner_bg.jpg')] bg-center bg-no-repeat bg-cover"></div>
                </div>
    
                <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4  relative md:mt-24 mt-16">
                    <div className="md:flex">
                    <div className="lg:w-1/4 md:w-1/3 md:px-3">
                <div className="relative md:-mt-48 -mt-32">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <div className="profile-pic text-center mb-5">
                            <input id="pro-img" name="profile-image" type="file" className="hidden" onChange={(e) =>handleChange(e)} />
                            <div>
                                <div className="relative h-28 w-28 mx-auto">
                                    <img src={user_img} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt=""/>
                                    <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                </div>
    
                                <div className="mt-4">
                                    <h5 className="text-lg font-semibold">Jesus Zamora</h5>
                                    <p className="text-slate-400">jesus@hotmail.com</p>
                                </div>
                            </div>
                        </div>
    
                        <div className="border-t border-gray-100 dark:border-gray-700">
                            <ul className="list-none sidebar-nav mb-0 pb-0" id="navmenu-nav">
                                <li className={`navbar-item account-menu ms-0`}>
                                    <Link to="/User-Account" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                        <span className="me-2 mb-0"><FiAirplay className="size-4"></FiAirplay></span>
                                        <h6 className="mb-0 font-medium">Account</h6>
                                    </Link>
                                </li>
    
                                <li className={`navbar-item account-menu ms-0`}>
                                    <Link to="/Billing" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                        <span className="me-2 mb-0"><FiEdit className="size-4"></FiEdit></span>
                                        <h6 className="mb-0 font-medium">Billing Info</h6>
                                    </Link>
                                </li>
    
                                <li className={`navbar-item account-menu ms-0`}>
                                    <Link to="/Payment" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                        <span className="me-2 mb-0"><FiCreditCard className="size-4"></FiCreditCard></span>
                                        <h6 className="mb-0 font-medium">Payment</h6>
                                    </Link>
                                </li>
    
                                <li className={`navbar-item account-menu ms-0`}>
                                    <Link to="/Invoice" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                        <span className="me-2 mb-0"><FiFileText className="size-4"></FiFileText></span>
                                        <h6 className="mb-0 font-medium">Invoice</h6>
                                    </Link>
                                </li>
    
                                <li className={`navbar-item account-menu ms-0`}>
                                    <Link to="/Social" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                        <span className="me-2 mb-0"><FiShare2 className="size-4"></FiShare2></span>
                                        <h6 className="mb-0 font-medium">Social Profile</h6>
                                    </Link>
                                </li>
    
                                <li className={`navbar-item account-menu ms-0`}>
                                    <Link to="/Notification" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                        <span className="me-2 mb-0"><FiBell className="size-4"></FiBell></span>
                                        <h6 className="mb-0 font-medium">Notifications</h6>
                                    </Link>
                                </li>
    
                                <li className={`navbar-item account-menu ms-0`}>
                                    <Link to="/Setting" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                        <span className="me-2 mb-0"><FiSettings className="size-4"></FiSettings></span>
                                        <h6 className="mb-0 font-medium">Settings</h6>
                                    </Link>
                                </li>
    
                                <li className={`navbar-item account-menu ms-0`}>
                                    <Link to="/LockScreen" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                        <span className="me-2 mb-0"><FiLogOut className="size-4"></FiLogOut></span>
                                        <h6 className="mb-0 font-medium">Sign Out</h6>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <h6 className="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                                <div className="">
                                    <div className="flex items-center mb-4 justify-between">
                                        <h5 className="text-xl font-medium">Billing Address:</h5>
                                        <Link to="#" className="text-orange text-lg"><FiEdit className="size-4"></FiEdit></Link>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-lg font-medium mb-2">Jesus Zamora</p>

                                        <ul className="list-none">
                                            <li className="flex ms-0">
                                                <FiMapPin className="size-4 me-2 mt-1"></FiMapPin>
                                                <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                                            </li>

                                            <li className="flex ms-0 mt-1">
                                                <FiPhone className="size-4 me-2 mt-1"></FiPhone>
                                                <p className="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="">
                                    <div className="flex items-center mb-4 justify-between">
                                        <h5 className="text-xl font-medium">Shipping Address:</h5>
                                        <Link to="#" className="text-orange text-lg"><FiEdit className="size-4"></FiEdit></Link>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-lg font-medium mb-2">Jesus Zamora</p>

                                        <ul className="list-none">
                                            <li className="flex ms-0">
                                                <FiMapPin className="size-4 me-2 mt-1"></FiMapPin>
                                                <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                                            </li>

                                            <li className="flex ms-0 mt-1">
                                                <FiPhone className="size-4 me-2 mt-1"></FiPhone>
                                                <p className="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Fragment>
      )
}

export default Billing
