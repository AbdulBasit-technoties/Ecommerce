import React, { Fragment,useState, useEffect } from 'react'
import Header from '../Components/Header'
import { bg,collections,newProduct,sale } from '../Helpers/images';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { FiBookmark, FiEye, FiHeart } from 'react-icons/fi';
function HomePage1() {
    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);

    let deadline = "December, 31, 2024";

    let getTime = () => {
        let time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      };
      useEffect(() => {
        let interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
      })
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999]">
            <Header />
        </div>
        <div className="lg:"></div>
        <section className="relative md:flex table w-full items-center md:h-screen py-36 bg-emerald-500/5 md:bg-top bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="text-center">
                        <span className="uppercase font-semibold text-lg">New Collection</span>
                        <h4 className="md:text-6xl text-4xl md:leading-normal leading-normal font-bold my-3">The Gift Suite</h4>
                        <p className="text-lg">Our latest collection of essential basics.</p>

                        <div className="mt-6">
                            <Link to="/ShopGrid" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-slate-900 dark:bg-orange text-white rounded-md">Shop Now <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 justify-center text-center mb-6">
                    <h5 className="font-semibold text-3xl leading-normal mb-4">Shop The Collections</h5>
                    <p className="text-slate-400 max-w-xl mx-auto">Shop the latest products from the most popular collections</p>
                </div>

                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 pt-6 gap-6">
                    {collections.map((item,index)=>{
                        return(
                            <Link to="" className="text-center hover:text-orange" key={index}>
                                <img src={item.image} className="rounded-full shadow dark:shadow-gray-800" alt=""/>
                                <span className="text-xl font-medium mt-3 block">{item.name}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 justify-center text-center mb-6">
                    <h5 className="font-semibold text-3xl leading-normal mb-4">New Arrival Products</h5>
                    <p className="text-slate-400 max-w-xl mx-auto">Shop the latest products from the most popular collections</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
                    {newProduct.slice(0,12).map((item, index)=>{
                        return(
                            <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                                    <img src={item.image} className="group-hover:scale-110 duration-500" alt=""/>
            
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                        <Link to="/ShopCart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
            
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                                        <li><Link to="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiHeart className="size-4"></FiHeart></Link></li>
                                        <li className="mt-1 ms-0"><Link to="/ShopDetails" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiEye className="size-4"></FiEye></Link></li>
                                        <li className="mt-1 ms-0"><Link to="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiBookmark className="size-4"></FiBookmark></Link></li>
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
                                    <Link to={`/product-detail-one/${item.id}`} className="hover:text-orange text-lg font-medium">{item.name}</Link>
                                    <div className="flex justify-between items-center mt-1">
                                        <p>{item.desRate} <del className="text-slate-400">{item.amount}</del></p>
                                        <ul className="font-medium text-amber-400 list-none">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container-fluid relative md:mt-24 mt-16">
                <div className="grid grid-cols-1">
                    <div className="relative overflow-hidden py-24 px-4 md:px-10 bg-orange bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${bg})`}}>
                        <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${sale})`}}></div>
                        <div className="grid grid-cols-1 justify-center text-center relative z-1">
                            <h3 className="text-4xl leading-normal tracking-wide font-bold text-white">End of Season Clearance <br/> Sale upto 30%</h3>
                            <div id="countdown" className="mt-6">
                                <ul className="count-down list-none inline-block">
                                    <li id="days" className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white">{days}<p className='count-head'>Days</p></li>
                                    <li id="hours" className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white">{hours}<p className='count-head'>Hours</p></li>
                                    <li id="mins" className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white">{minutes}<p className='count-head'>Mins</p></li>
                                    <li id="secs" className="mx-1 text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow shadow-gray-100 inline-block text-center text-white">{seconds}<p className='count-head'>Secs</p></li>
                                    <li id="end" className="h1"></li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <Link to="/Sale" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-orange rounded-md"><i className="mdi mdi-cart-outline"></i> Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative md:mt-24 mt-16">
                <div className="grid items-end md:grid-cols-2 mb-6">
                    <div className="md:text-start text-center">
                        <h5 className="font-semibold text-3xl leading-normal mb-4">Popular Items</h5>
                        <p className="text-slate-400 max-w-xl">Popular items in this week</p>
                    </div>

                    <div className="md:text-end md:block">
                        <Link to="/ShopGrid" className="text-slate-400 hover:text-orange">See More Items <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
                    {newProduct.slice(12,16).map((item, index) =>{
                        return(
                            <div className="group" key={index}>
                                <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                                    <img src={item.image} className="group-hover:scale-110 duration-500" alt=""/>
            
                                    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                        <Link to="/ShopCart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                    </div>
            
                                    <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                                        <li><Link to="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiHeart className="size-4"></FiHeart></Link></li>
                                        <li className="mt-1 ms-0"><Link to="/ShopDetails" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiEye className="size-4"></FiEye></Link></li>
                                        <li className="mt-1 ms-0"><Link to="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiBookmark className="size-4"></FiBookmark></Link></li>
                                    </ul>

                                    <ul className="list-none absolute top-[10px] start-4">
                                        {item.tag !== '' && (
                                            <li><Link to="#" className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">New</Link></li>
                                        )}
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <Link to={`/ShopDetails`} className="hover:text-orange text-lg font-medium">{item.name}</Link>
                                    <div className="flex justify-between items-center mt-1">
                                        <p>{item.desRate}<del className="text-slate-400">{item.rate}</del></p>
                                        <ul className="font-medium text-amber-400 list-none">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="grid grid-cols-1 mt-6">
                    <div className="text-center md:hidden block">
                        <Link to="/shop-grid" className="text-slate-400 hover:text-orange">See More Items <i className="mdi mdi-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </Fragment>
  )
}

export default HomePage1
