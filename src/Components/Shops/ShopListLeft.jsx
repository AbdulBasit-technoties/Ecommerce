import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Filter from '../Filter'
import { Link } from 'react-router-dom'
import { FiBookmark, FiChevronLeft, FiChevronRight, FiEye, FiHeart } from 'react-icons/fi'
import { newProduct } from '../../Helpers/images'
function ShopListLeft() {
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
                        <li className="inline-block uppercase text-[13px] font-bold text-orange" aria-current="page">Shop List</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid md:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-6">
                    <Filter/>

                    <div className="lg:col-span-9 md:col-span-8">
                        <div className="md:flex justify-between items-center mb-6">
                            <span className="font-semibold">Showing 1-10 of 40 items</span>
        
                            <div className="md:flex items-center">
                                <label className="font-semibold md:me-2">Sort by:</label>
                                <select className="form-select form-input md:w-36 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                    <option defaultValue="">Featured</option>
                                    <option defaultValue="">Sale</option>
                                    <option defaultValue="">Alfa A-Z</option>
                                    <option defaultValue="">Alfa Z-A</option>
                                    <option defaultValue="">Price Low-High</option>
                                    <option defaultValue="">Price High-Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {newProduct.map((item,index) =>{
                                return(
                                    <div className="group relative duration-500 w-full mx-auto" key={index}>
                                    <div className="md:flex items-center">
                                            <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                                                <img className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500" src={item.image} alt=""/>
                                                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                                                    <li><Link to="/" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiHeart className="size-4"></FiHeart></Link></li>
                                                    <li className="mt-1 ms-0"><Link to="/ShopDetails" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiEye className="size-4"></FiEye></Link></li>
                                                    <li className="mt-1 ms-0"><Link to="/" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiBookmark className="size-4"></FiBookmark></Link></li>
                                                </ul>
                    
                                                <ul className="list-none absolute top-[10px] start-4">
                                                    {item.offer === true && (

                                                        <li><Link to="#" className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                                    )}
                                                    {item.tag === 'New' && (
                                                        <li><Link to="#" className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                                    )}
                                                    {item.tag === 'Featured' && (
                                                        <li><Link to="#" className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="md:ms-6 md:mt-0 mt-4">
                                                <Link to={`/ShopDetails`} className="hover:text-orange text-lg font-medium">{item.name}</Link>
                                                <p className="text-slate-400 md:block hidden mt-2">{item.desc}</p>
                                                <p className="mt-2">{item.desRate}</p>

                                                <ul className="list-none mt-2">
                                                    <li className="inline"><Link to="" className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle" title="Red"></Link></li>
                                                    <li className="inline"><Link to="" className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle" title="Blue"></Link></li>
                                                    <li className="inline"><Link to="" className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle" title="Green"></Link></li>
                                                </ul>

                                                <div className="mt-4">
                                                    <Link to="/ShopCart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 dark:bg-slate-800 text-white rounded-md shadow dark:shadow-gray-700">Add to Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
        
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                        <div className="md:col-span-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange dark:hover:border-orange hover:bg-orange dark:hover:bg-orange">
                                            <FiChevronLeft className="size-5 rtl:rotate-180 rtl:-mt-1"></FiChevronLeft>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange dark:hover:border-orange hover:bg-orange dark:hover:bg-orange">1</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange dark:hover:border-orange hover:bg-orange dark:hover:bg-orange">2</Link>
                                    </li>
                                    <li>
                                        <Link to="#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-orange border border-orange">3</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange dark:hover:border-orange hover:bg-orange dark:hover:bg-orange">4</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange dark:hover:border-orange hover:bg-orange dark:hover:bg-orange">5</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange dark:hover:border-orange hover:bg-orange dark:hover:bg-orange">
                                            <FiChevronRight className="size-5 rtl:rotate-180 rtl:-mt-1"></FiChevronRight>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
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

export default ShopListLeft
