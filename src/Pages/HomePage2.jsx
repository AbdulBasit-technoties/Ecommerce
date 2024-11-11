import React, { Fragment } from 'react';
import FeaturedCollection from '../Components/FeatureCollection';
import Header from '../Components/Header'
import { IoIosStar } from "react-icons/io";

import { newProduct } from '../Helpers/images';
import { bestSaller } from '../Helpers/images';
import { Link } from 'react-router-dom';
import { FiHeart, FiEye, FiBookmark } from "react-icons/fi";
import SaleOutLate from '../Components/SaleOutLate';
import CustomerReview from '../Components/CustomerReview';
import Webbtn from '../Components/Webbtn';

//Webtitle
import {Webtitle} from '../Components/Webtitle'


import { FaArrowRight } from "react-icons/fa";
import Slider from 'react-slick'; // Import Slider
import Footer from '../Components/Footer';
function HomePage2() {
  const settings = {
    dots: true,             // Show navigation dots
    infinite: true,        // Infinite looping
    speed: 500,            // Transition speed
    slidesToShow: 1,       // Show one slide at a time
    slidesToScroll: 1,     // Scroll one slide at a time
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 3000,    // Duration of autoplay in milliseconds
};
  return (
    <Fragment>
      <div className='overflow-hidden'>
      <div className="main-heder absolute top-0 w-full z-[999]">
        <Header />
      </div>
      <Slider {...settings}>
                {/* Each section as a slide */}
                <section className="bg-[url('./assets/images/banner1.png')] bg-no-repeat bg-cover h-screen flex items-center over">
                    <div className='container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4'>
                        <div className="grid grid-cols-2">
                            <div className="pt-64">
                                <h5 className='uppercase font-semibold text-lg'>New Collection</h5>
                                <h2 className='md:text-6xl text-4xl md:leading-normal leading-normal font-bold my-3'>The Gift Suite</h2>
                                <p className='text-lg pb-12'>Our latest collection of essential basics.</p>
                                  <Webbtn text="Shop Now" to="/ShopGrid" styleClass="py-3 px-5 hover:bg-transparent hover:text-blue border-[1px] border-blue transition duration-500 ease-in-out" Icon={FaArrowRight} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[url('./assets/images/banner2.png')] bg-no-repeat bg-cover h-screen flex items-center"> {/* Changed background image for second slide */}
                    <div className='container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4'>
                        <div className="grid grid-cols-2">
                            <div className="pt-64">
                                <h5 className='uppercase font-semibold text-lg'>New Collection</h5>
                                <h2 className='md:text-6xl text-4xl md:leading-normal leading-normal font-bold my-3'>The Gift Suite</h2>
                                <p className='text-lg pb-12'>Our latest collection of essential basics.</p>
                                <Webbtn text="Shop Now" to="/ShopGrid" styleClass="py-3 px-5 hover:bg-transparent hover:text-blue border-[1px] border-blue transition duration-500 ease-in-out" Icon={FaArrowRight} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* You can add more sections here */}
            </Slider>
      <section className="arrival-products md:py-24 py-16">
      <FeaturedCollection />
        <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 pt-20 px-4">
          <div className="grid grid-cols-1 text-center">
            <Webtitle title="New Arrival Products" para="Shop the latest products from the most popular collections" />
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-10 gap-6">
            {newProduct.slice(0, 12).map((item, index) => {
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
                    <Link to="/ShopDetails" className="text-blue hover:text-orange text-lg font-medium duration-500">{item.name}</Link>
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
      </section>
      <SaleOutLate />
      <section className="arrival-products md:py-24 py-16">
        <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4">
          <div className="grid grid-cols-1 text-left">
            <Webtitle title="Best Seller" para="Top sale in this week"  />
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-10 gap-6">
            {bestSaller.slice(0, 4).map((item, index) => {
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
                    <Link to="/ShopDetails" className="text-blue hover:text-orange text-lg font-medium duration-500">{item.name}</Link>
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
      </div>
    </Fragment>
  );
}

export default HomePage2;
