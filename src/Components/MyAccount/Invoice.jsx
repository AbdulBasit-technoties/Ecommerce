import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { FiLink, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { imageAssets } from '../../Helpers/images'
function Invoice() {
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999] bg-white">
                <Header />
            </div>
            <section className="relative lg:py-24 py-16 bg-slate-50 ">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4  relative">
                <div className="md:flex justify-center mt-24">
                    <div className="lg:w-4/5 w-full">
                        <div className="p-6 rounded-md shadow  bg-white ">
                            <div className="border-b border-gray-100  pb-6">
                                <div className="md:flex justify-between">
                                    <div>
                                        <img src={imageAssets.logo.src} className="block " alt=""/>
                                        <div className="flex mt-4">
                                            <FiLink className="h-4 w-4 me-3 mt-1"></FiLink>
                                            <Link to="https://1.envato.market/shreethemes-portfolio" target="_blank" className="text-orange  font-medium">https://1.envato.market/shreethemes-portfolio</Link>
                                        </div>
                                    </div>

                                    <div className="mt-6 md:mt-0 md:w-56">
                                        <h5 className="text-lg font-semibold">Address:</h5>

                                        <ul className="list-none">
                                            <li className="flex mt-3 ms-0">
                                                <FiMapPin className="h-4 w-4 me-3 mt-1"></FiMapPin>
                                                <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="lightbox text-slate-400">1419 Riverwood Drive, <br/> Redding, CA 96001</Link>
                                            </li>
                                            
                                            <li className="flex mt-3 ms-0">
                                                <FiMail className="h-4 w-4 me-3 mt-1"></FiMail>
                                                <Link to="mailto:contact@example.com" className="text-slate-400">info@cartzio.com</Link>
                                            </li>
                                            
                                            <li className="flex mt-3 ms-0">
                                                <FiPhone className="h-4 w-4 me-3 mt-1"></FiPhone>
                                                <Link to="tel:+152534-468-854" className="text-slate-400">(+12) 1546-456-856</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex justify-between">
                                <div className="mt-6">
                                    <h5 className="text-lg font-semibold">Invoice Details :</h5>

                                    <ul className="list-none">
                                        <li className="flex mt-3 ms-0">
                                            <span className="w-24">Invoice No. :</span>
                                            <span className="text-slate-400">land45845621</span>
                                        </li>
                                        
                                        <li className="flex mt-3 ms-0">
                                            <span className="w-24">Name :</span>
                                            <span className="text-slate-400">Calvin Carlo</span>
                                        </li>
                                        
                                        <li className="flex mt-3 ms-0">
                                            <span className="w-24">Address :</span>
                                            <span className="text-slate-400">1962 Pike Street, <br/> Diego, CA 92123</span>
                                        </li>
                                        
                                        <li className="flex mt-3 ms-0">
                                            <span className="w-24">Phone :</span>
                                            <span className="text-slate-400">(+45) 4584-458-695</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3 md:w-56">
                                    <ul className="list-none">
                                        <li className="flex mt-3 ms-0">
                                            <span className="w-24">Date :</span>
                                            <span className="text-slate-400">15th Oct, 2021</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="relative overflow-x-auto shadow  rounded-md mt-6">
                                <table className="w-full text-start text-slate-500 ">
                                    <thead className="text-sm uppercase bg-slate-50 ">
                                        <tr>
                                            <th scope="col" className="text-center px-6 py-3 w-16">
                                                No.
                                            </th>
                                            <th scope="col" className="text-start px-6 py-3">
                                                Items
                                            </th>
                                            <th scope="col" className="text-center px-6 py-3 w-20">
                                                Qty
                                            </th>
                                            <th scope="col" className="text-center px-6 py-3 w-28">
                                                Rate($)
                                            </th>
                                            <th scope="col" className="text-end px-6 py-3 w-20">
                                                Total($)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white ">
                                            <td className="text-center px-6 py-4">
                                                1
                                            </td>
                                            <th scope="row" className="text-start px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                                Apple MacBook Pro 17"
                                            </th>
                                            <td className="text-center px-6 py-4">
                                                1
                                            </td>
                                            <td className="text-center px-6 py-4">
                                                280
                                            </td>
                                            <td className="text-end px-6 py-4">
                                                $ 280
                                            </td>
                                        </tr>
                                        <tr className="bg-white  border-t border-gray-100 ">
                                            <td className="text-center px-6 py-4">
                                                2
                                            </td>
                                            <th scope="row" className="text-start px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                                Microsoft Surface Pro
                                            </th>
                                            <td className="text-center px-6 py-4">
                                                1
                                            </td>
                                            <td className="text-center px-6 py-4">
                                                140
                                            </td>
                                            <td className="text-end px-6 py-4">
                                                $ 140
                                            </td>
                                        </tr>
                                        <tr className="bg-white  border-t border-gray-100 ">
                                            <td className="text-center px-6 py-4">
                                                3
                                            </td>
                                            <th scope="row" className="text-start px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                                Magic Mouse 2
                                            </th>
                                            <td className="text-center px-6 py-4">
                                                2
                                            </td>
                                            <td className="text-center px-6 py-4">
                                                50
                                            </td>
                                            <td className="text-end px-6 py-4">
                                                $ 100
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="w-56 ms-auto p-5">
                                <ul className="list-none">
                                    <li className="text-slate-400 flex justify-between">
                                        <span>Subtotal :</span>
                                        <span>$ 520</span>
                                    </li>
                                    <li className="text-slate-400 flex justify-between mt-2">
                                        <span>Taxes :</span>
                                        <span>$ 20</span>
                                    </li>
                                    <li className="flex justify-between font-semibold mt-2">
                                        <span>Total :</span>
                                        <span>$ 540</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="invoice-footer border-t border-gray-100  pt-6">
                                <div className="md:flex justify-between">
                                    <div>
                                        <div className="text-slate-400 text-center md:text-start">
                                            <h6 className="mb-0">Customer Services : <Link to="tel:+152534-468-854" className="text-amber-500">(+12) 1546-456-856</Link></h6>
                                        </div>
                                    </div>

                                    <div className="mt-4 md:mt-0">
                                        <div className="text-slate-400 text-center md:text-end">
                                            <h6 className="mb-0"><Link to="/TermsOfService" target="_blank" className="text-orange">Terms & Conditions</Link></h6>
                                        </div>
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

export default Invoice
