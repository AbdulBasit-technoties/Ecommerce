import React, { Fragment } from 'react';
import logoLight from '../assets/images/footer_logo.png';
import {footerSocial,footerShopping1,footerShopping2,footerShopping3,footerServices,} from '../Helpers/images'
import { Link } from 'react-router-dom';
import { FiMail } from "react-icons/fi";
function Footer() {
    return (
        <Fragment>
            <footer className="footer bg-[#161c28] footer relative text-[#c6cad0] dark:text-gray-200">    
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-3 md:col-span-12">
                                    <Link to="/" className="text-[22px] focus:outline-none">
                                        <img src={logoLight} alt=""/>
                                    </Link>
                                    <p className="mt-6 text-gray-300">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                                    <ul className="list-none mt-6">
                                        {footerSocial.map((item,index) =>{
                                            let Icon = item.icon
                                            return(
                                                <li className="inline" key={index}><Link to={item.link} target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"><Icon className="h-4 w-4 align-middle" title="Buy Now"></Icon></Link></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                        
                                <div className="lg:col-span-6 md:col-span-12">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Shopping & Clothes</h5>

                                    <div className="grid md:grid-cols-12 grid-cols-1">
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                {footerShopping1.map((item,index) =>{
                                                    return(
                                                        <li className="ms-0 mt-[10px]" key={index}><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> {item}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                {footerShopping2.map((item,index) =>{
                                                    return(
                                                        <li className="ms-0 mt-[10px]" key={index}><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> {item} </Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                {footerShopping3.map((item,index)=>{
                                                    return(
                                                        <li className="mt-[10px] ms-0" key={index}><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> {item}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                    <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                    <form>
                                        <div className="grid grid-cols-1">
                                            <div className="my-3">
                                                <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMail className="size-4 absolute top-3 start-4"></FiMail>
                                                    <input type="email" className="ps-12 rounded w-full py-2 px-3 h-10 bg-[#1f2937] border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none" placeholder="Email" name="email" required=""/>
                                                </div>
                                            </div>
                                        
                                            <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange text-white rounded-md">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <div className="py-[30px] px-0 border-t border-slate-800">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2">
                            {footerServices.map((item,index) =>{
                                return(
                                    <div className="flex items-center lg:justify-center" key={index}>
                                        <i className={`align-middle text-lg mb-0 me-2 ${item.icon}`}></i>
                                        <h6 className="mb-0 font-medium">{item.name}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-800">
                <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 text-center">
                    <p className='py-4'>© 2024 Ecommerce. Website & Develop with <i className='mdi mdi-heart text-red-600'></i>  by Abdul Basit.</p>
                </div>
            </div>
        </footer>
        </Fragment>
    );
}

export default Footer;
