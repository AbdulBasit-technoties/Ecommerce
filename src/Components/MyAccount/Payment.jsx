import React, { Fragment } from 'react'
import Footer from '../Footer.jsx'
import {imageAssets,paymentMethod} from '../../Helpers/images.js'
import { Link } from 'react-router-dom'
import { FiAirplay, FiBell, FiCreditCard, FiEdit, FiFileText, FiLogOut,  FiSettings, FiShare2, FiTrash2} from 'react-icons/fi'
import Header from '../Header.jsx'
function Payment() {
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999] bg-white">
                <Header />
            </div>
            <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
                <div className="md:container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 container-fluid relative">
                    <div className="relative overflow-hidden md:rounded-md shadow  h-52 bg-[url('./assets/images/user_banner_bg.jpg')] bg-center bg-no-repeat bg-cover"></div>
                </div>
    
                <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4  relative md:mt-24 mt-16">
                    <div className="md:flex">
                    <div className="lg:w-1/4 md:w-1/3 md:px-3">
                <div className="relative md:-mt-48 -mt-32">
                    <div className="p-6 rounded-md shadow  bg-white ">
                        <div className="profile-pic text-center mb-5">
                            <input id="pro-img" name="profile-image" type="file" className="hidden" onChange={(e) =>handleChange(e)} />
                            <div>
                                <div className="relative h-28 w-28 mx-auto">
                                    <img src={imageAssets.user.user_img} className="rounded-full shadow  ring-4 ring-slate-50 " id="profile-image" alt=""/>
                                    <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                </div>
    
                                <div className="mt-4">
                                    <h5 className="text-lg font-semibold">Jesus Zamora</h5>
                                    <p className="text-slate-400">jesus@hotmail.com</p>
                                </div>
                            </div>
                        </div>
    
                        <div className="border-t border-gray-100 ">
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
                        <div className="rounded-md shadow  bg-white ">
                            <div className="p-6 md:flex justify-between items-center border-b border-gray-100 ">
                                <div className="mb-4 md:mb-0">
                                    <h5 className="text-xl font-semibold">Current Plan</h5>
                                </div>
                                <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange3
                                
                                
                                
                                
                                
                                
                                text-white rounded-md">Switch to Annual Plan</Link>
                            </div>

                            <div className="p-6">
                                <h5 className="text-2xl font-semibold">$18/Monthly</h5>
                                <p className="text-slate-400 mt-2">Your next monthly charge of $18 will be applied to your primary payment method on July 20, 2022.</p>
                            </div>
                        </div>

                        <div className="rounded-md shadow  bg-white  mt-6">
                            <div className="p-6 border-b border-gray-100 ">
                                <h5 className="text-xl font-semibold">Payment Methods</h5>
                                <p className="text-slate-400 mt-2">Primary payment method is used by default</p>
                            </div>

                            <div className="px-6">
                                <ul>
                                    {paymentMethod.map((item,index) =>{
                                        return(
                                            <li className="flex justify-between items-center py-6 border-t border-gray-100 " key={index}>
                                                <div className="flex items-center">
                                                    <img src={item.image} className="rounded shadow  w-12" alt=""/>

                                                    <div className="ms-3">
                                                        <p className="font-semibold">{item.name}</p>
                                                        <p className="text-slate-400 text-sm">{item.expires}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <Link to="" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-full"><FiTrash2 className="h-4 w-4"></FiTrash2></Link>
                                                </div>
                                            </li>
                                        )
                                    })}

                                    <li className="py-6 border-t border-gray-100 ">
                                        <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange3
                                        
                                        
                                        
                                        
                                        
                                        
                                        text-white rounded-md">Add Payment Method</Link>
                                    </li>
                                </ul>
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

export default Payment
