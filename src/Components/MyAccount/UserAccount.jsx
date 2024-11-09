import React, { Fragment } from 'react'
import Footer from '../Footer.jsx'
import {userFvtItem,userOrder,user_img} from '../../Helpers/images.js'
import { Link } from 'react-router-dom'
import { FiAirplay, FiBell, FiCreditCard, FiEdit, FiFileText, FiLogOut, FiSettings, FiShare2, FiTrash2 } from 'react-icons/fi'
import Header from '../Header.jsx'
function UserAccount() {
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
                        <h5 className="text-lg font-semibold mb-6">My Orders</h5>
                        <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                            <table className="w-full text-start text-slate-500 dark:text-slate-400">
                                <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                    <tr className="text-start">
                                        <th scope="col" className="px-2 py-3 text-start" style={{minWidth:'104px'}}>Order no.</th>
                                        <th scope="col" className="px-2 py-3 text-start" style={{minWidth:'140px'}}>Date</th>
                                        <th scope="col" className="px-2 py-3 text-start" style={{minWidth:'120px'}}>Status</th>
                                        <th scope="col" className="px-2 py-3 text-start" style={{minWidth:'140px'}}>Total</th>
                                        <th scope="col" className="px-2 py-3 text-start" style={{minWidth:'100px'}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userOrder.map((item,index)=>{
                                        return(
                                            <tr className="bg-white dark:bg-slate-900 text-start" key={index}>
                                                <th className="px-2 py-3 text-start" scope="row">{item.no}</th>
                                                <td className="px-2 py-3 text-start">{item.date}</td>
                                                {item.status === 'Delivered' && (
                                                    <td className="px-2 py-3 text-start text-green-600">Delivered</td>
                                                )}
                                                {item.status === 'Processing' && (
                                                    <td className="px-2 py-3 text-start text-slate-400">Processing</td>
                                                )}
                                                {item.status === 'Canceled' && (
                                                    <td className="px-2 py-3 text-start text-red-600">Canceled</td>
                                                )}
                                                <td className="px-2 py-3 text-start">{item.total}<span className="text-slate-400">{item.item}</span></td>
                                                <td className="px-2 py-3 text-start"><Link to="#" className="text-orange">View <i className="mdi mdi-chevron-right"></i></Link></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <h5 className="text-lg font-semibold my-6">My favourite Items</h5>

                        <div className="rounded-md shadow dark:shadow-gray-800 p-6 py-0">
                            <ul>
                                {userFvtItem.map((item,index)=>{
                                    return(
                                        <li className="flex justify-between items-center py-6 border-t first-of-type:border-0 border-gray-100 dark:border-gray-700" key={index}>
                                            <div className="flex items-center">
                                                <img src={item.image} className="rounded shadow dark:shadow-gray-800 w-16" alt=""/>

                                                <div className="ms-4">
                                                    <Link to="" className="font-semibold hover:text-orange">Ladies Top</Link>
                                                    <p className="text-green-600 text-sm mt-1">$16.00 <del className="text-red-600">$21.00</del></p>
                                                </div>
                                            </div>

                                            <div>
                                                <Link to="" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-full"><FiTrash2  className="h-4 w-4"></FiTrash2></Link>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </Fragment>
  )
}

export default UserAccount
