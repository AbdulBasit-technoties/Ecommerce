import React, { Fragment } from 'react';
import { clientData } from '../Helpers/images';
import { MdStar } from 'react-icons/md';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function CustomerReview() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1,
        autoplay: true,          
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <Fragment>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 pt-20 px-4 relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 justify-center text-center mb-6">
                    <h5 className="font-semibold text-3xl leading-normal mb-4">Customer Reviews</h5>
                    <p className="text-slate-400 max-w-xl mx-auto">Customers love our products and we always strive to please them all.</p>
                </div>

                <div className="flex justify-center relative mt-20">
                    <div className="relative lg:w-1/3 md:w-1/2 w-full"> {/* Adjust width as necessary */}
                        <div className="absolute -top-20 md:-start-24 -start-0">
                            <FaQuoteLeft className="text-7xl opacity-5" />
                        </div>

                        <div className="absolute bottom-28 md:-end-24 -end-0">
                            <FaQuoteRight className="text-7xl opacity-5" />
                        </div>

                        <div className="tiny-single-item">
                            <Slider {...settings}>
                                {clientData.map((item, index) => (
                                    <div className="tiny-slide" key={index}>
                                        <div className="text-center">
                                            <p className="text-lg text-slate-400 italic">{item.desc}</p>

                                            <div className="text-center mt-5">
                                                <ul className="text-xl font-medium text-amber-400 list-none mb-2 flex justify-center">
                                                    <li className="inline"><MdStar className="text-amber-400" /></li>
                                                    <li className="inline"><MdStar className="text-amber-400" /></li>
                                                    <li className="inline"><MdStar className="text-amber-400" /></li>
                                                    <li className="inline"><MdStar className="text-amber-400" /></li>
                                                    <li className="inline"><MdStar className="text-amber-400" /></li>
                                                </ul>

                                                <img src={item.image} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt={item.name} />
                                                <h6 className="mt-2 font-medium">{item.name}</h6>
                                                <span className="text-slate-400 text-sm">{item.possition}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CustomerReview;
