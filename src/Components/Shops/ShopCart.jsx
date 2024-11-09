import React from 'react'
import { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { cartData,mobile,app,app1 } from '../../Helpers/images'
import Counter from '../Counter'
import { FiSmartphone } from 'react-icons/fi'
function ShopCart() {
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999] bg-white">
            <Header />
        </div>
        <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-[#f9fafb] dark:bg-slate-800">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Fashion</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange"><Link to="/">Cartzio</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold text-orange" aria-current="page">SHOPCART</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid lg:grid-cols-1">
                    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                        <table className="w-full text-start">
                            <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                <tr>
                                    <th scope="col" className="p-4 w-4"></th>
                                    <th scope="col" className="text-start p-4 min-w-[220px]">Product</th>
                                    <th scope="col" className="p-4 w-24 min-w-[100px]">Price</th>
                                    <th scope="col" className="p-4 w-56 min-w-[220px]">Qty</th>
                                    <th scope="col" className="p-4 w-24 min-w-[100px]">Total($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData.map((item,index) =>{
                                    return(
                                        <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800" key={index}>
                                            <td className="p-4"><Link to=""><i className="mdi mdi-window-close text-red-600"></i></Link></td>
                                            <td className="p-4">
                                                <span className="flex items-center">
                                                    <img src={item.image} className="rounded shadow dark:shadow-gray-800 w-12" alt=""/>
                                                    <span className="ms-3">
                                                        <span className="block font-semibold">{item.name}</span>
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">$ {item.price}</td>
                                            <td className="p-4 text-center">
                                                <Counter qtn={item.qtn} total="" />
                                            </td>
                                            <td className="p-4  text-end">$ {item.price * item.qtn}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                        <div className="lg:col-span-9 md:order-1 order-3">
                            <div className="space-x-1">
                                <Link to="/ShopDetails" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-orange text-white rounded-md mt-2">Shop Now</Link>
                                <Link to="/ShopCart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white mt-2">Add to Cart</Link>
                            </div>
                        </div>

                        <div className="lg:col-span-3 md:order-2 order-1">
                            <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
                                <li className="flex justify-between p-4">
                                    <span className="font-semibold text-lg">Subtotal :</span>
                                    <span className="text-slate-400">$ 1500</span>
                                </li>
                                <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="font-semibold text-lg">Taxes :</span>
                                    <span className="text-slate-400">$ 150</span>
                                </li>
                                <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
                                    <span className="font-semibold text-lg">Total :</span>
                                    <span className="font-semibold">$ 1650</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                <div className="lg:col-span-5 md:col-span-6">
                    <img src={mobile} className="mx-auto d-block" alt=""/>
                </div>

                <div className="lg:col-span-7 md:col-span-6">
                    <span className="bg-orange text-white text-xs font-bold px-2.5 py-0.5 rounded h-5">Mobile Apps</span>
                    <h4 className="font-semibold text-3xl leading-normal my-4">Available for your <br/> Smartphones</h4>
                    <p className="text-slate-400 max-w-xl mb-0">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                    <div className="my-5">
                        <Link to=""><img src={app} className="m-1 inline-block" alt=""/></Link>

                        <Link to=""><img src={app1} className="m-1 inline-block" alt=""/></Link>
                    </div>

                    <div className="inline-block">
                        <div className="pt-4 flex items-center border-t border-gray-100 dark:border-gray-800">
                            <FiSmartphone className="me-2 text-orange h-10 w-10"></FiSmartphone>
                            <div className="content">
                                <h6 className="text-base font-medium">Install app now on your cellphones</h6>
                                <Link to="" className="text-orange">Learn More <i className="mdi mdi-arrow-right"></i></Link> 
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

export default ShopCart
