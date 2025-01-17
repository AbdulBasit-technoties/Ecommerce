import React, { Fragment } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { categories } from '../Helpers/images'
import { FiBookmark, FiEye, FiHeart } from 'react-icons/fi'
import { newProduct,bestSaller } from '../Helpers/images';
import {Webtitle} from '../Components/Webtitle'
import { MdStar } from 'react-icons/md'
import SaleOutLate from '../Components/SaleOutLate'
import CustomerReview from '../Components/CustomerReview'
import Footer from '../Components/Footer'
import { IoIosStar } from 'react-icons/io'

function HomePage4() {
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999]">
            <Header />
        </div>
        <section className="relative md:flex table w-full items-center md:h-screen py-36 bg-[url('./assets/images/home4bannerbg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-gradient-to-t to-transparent via-slate-900/50 from-slate-900/90"></div>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 pt-20 px-4 relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="text-center">
                        <span className="uppercase font-semibold text-lg text-white">Top Collection</span>
                        <h4 className="md:text-6xl text-4xl md:leading-normal leading-normal font-bold text-white my-3">Shine Bright</h4>
                        <p className="text-lg text-white/70">Our latest collection of essential basics.</p>

                        <div className="mt-6">
                            <Link to="/ShopGrid" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-orange rounded-md">Shop Now <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container-fluid relative mt-6 lg:mx-6 mx-3">
            <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {categories.map((item,index)=>{
                    return(
                        <div key={index} className="relative overflow-hidden group rounded-md shadow">
                            <Link to="" className="text-center">
                                <img src={item.image} className="group-hover:scale-110 duration-500" alt=""/>
                                <span className="bg-white group-hover:text-orange py-2 px-6 rounded-full shadow  absolute bottom-4 mx-4 text-lg font-medium">{item.title}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid items-end md:grid-cols-2 mb-6">
                    <div className='justify-start flex'>
                        <Webtitle title="Trending Items" para="Shop the latest products from the most popular items"  />  
                    </div>
                    <div className="md:text-end md:block">
                        <Link to="/ShopGrid" className="text-slate-400 hover:text-orange">See More Items <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
                    {newProduct.slice(0,8).map((item, index)=>{
                        return(
                            <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow  group-hover:shadow-lg rounded-md duration-500">
                                    <img src={item.image} className="group-hover:scale-110 duration-500" alt=""/>
            
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                        <Link to="/ShopCart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
            
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                                        <li><Link to="/" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiHeart className="size-4"></FiHeart></Link></li>
                                        <li className="mt-1 ms-0"><Link to="/ShopDetails" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiEye className="size-4"></FiEye></Link></li>
                                        <li className="mt-1 ms-0"><Link to="/" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiBookmark className="size-4"></FiBookmark></Link></li>
                                    </ul>

                                    <ul className="list-none absolute top-[10px] start-4">
                                        {item.offer === true && (

                                            <li><Link to="#" className="bg-orange text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                        )}
                                        {item.tag === 'New' && (
                                            <li><Link to="#" className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                        )}
                                        {item.tag === 'Featured' && (
                                            <li><Link to="#" className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                        )}
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <Link to="ShopGrid" className="hover:text-orange-500 text-lg font-medium">
                                        {item.name}
                                    </Link>
                                    <div className="flex justify-between items-center mt-1">
                                        <p>{item.desRate} <del className="text-slate-400">{item.amount}</del></p>
                                        <ul className="text-amber-400 list-none flex gap-1 flex-wrap items-center">
                                            <li className="inline"><MdStar /></li>
                                            <li className="inline"><MdStar /></li>
                                            <li className="inline"><MdStar /></li>
                                            <li className="inline"><MdStar /></li>
                                            <li className="inline"><MdStar /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}  
                </div>
                <div className="grid grid-cols-1 mt-6">
                    <div className="text-center md:hidden block">
                        <Link to="/shop-grid" className="text-slate-400 hover:text-orange-500">See More Items <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
        <SaleOutLate />
        <section className="arrival-products md:py-24 py-16">
        <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4">
          <div className="grid grid-cols-1 text-center">
            <Webtitle title="Best Seller" para="Top sale in this week"  />
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-10 gap-6">
            {bestSaller.slice(0, 8).map((item, index) => {
              return (
                <div className="group" key={index}>
                  <div className="relative overflow-hidden shadow rounded-md">
                    <img src={item.image} className="group-hover:scale-110 duration-500" alt="" />

                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                      <Link to="/ShopCart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-blue text-white w-full rounded-md hover:bg-transparent hover:text-blue border-[1px] border-blue">Add to Cart</Link>
                    </div>

                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                      <li><Link to="/" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-blue hover:bg-blue hover:text-white shadow"><FiHeart className="size-4"></FiHeart></Link></li>
                      <li className="mt-1 ms-0"><Link to="/ShopDetails" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-blue hover:bg-blue hover:text-white shadow"><FiEye className="size-4"></FiEye></Link></li>
                      <li className="mt-1 ms-0"><Link to="/" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-blue hover:bg-blue hover:text-white shadow"><FiBookmark className="size-4"></FiBookmark></Link></li>
                    </ul>

                    <ul className="list-none absolute top-[10px] start-4">
                      {item.offer === true && (

                        <li><Link to="#" className="bg-orange text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                      )}
                      {item.tag === 'New' && (
                        <li><Link to="#" className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                      )}
                      {item.tag === 'Featured' && (
                        <li><Link to="#" className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                      )}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <Link to="/ShopGrid" className="text-blue hover:text-orange text-lg font-medium duration-500">{item.name}</Link>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-base font-semibold text-blue">{item.desRate} <del className="text-slate-400">{item.amount}</del></p>
                      <ul className="text-amber-400 list-none flex gap-1 flex-wrap items-center">
                        <li><IoIosStar /></li>
                        <li><IoIosStar /></li>
                        <li><IoIosStar /></li>
                        <li><IoIosStar /></li>
                        <li><IoIosStar /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      <CustomerReview />
      </section>
      <Footer />
    </Fragment>
  )
}

export default HomePage4
