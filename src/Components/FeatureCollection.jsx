import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Feature1,Feature2,Feature3,Feature4 } from "../Helpers/images";

function FeatureCollection() {
  return (
    <Fragment>
        <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 pt-20 px-4 relative px-52">
            <div className="grid grid-cols-1 justify-center text-center mb-6">
                <h5 className="font-semibold text-3xl leading-normal mb-4">Featured Collections</h5>
                <p className="text-slate-400 max-w-xl mx-auto">Shop the latest products from the most popular collections</p>
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 pt-6 gap-6">
                <div className="lg:col-span-4 md:col-span-6 md:order-1 order-2">
                    <div className="relative overflow-hidden group rounded-md shadow dark:shadow-gray-800">
                        <Link to="" className="">
                            <img src={Feature1} className="h-full w-full object-cover xl:h-[738.66px] lg:h-[614.66px] rounded-md group-hover:scale-110 duration-500" alt=""/>
                            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-4 rounded-md shadow dark:shadow-gray-800 absolute mx-4 bottom-4 text-lg font-medium">Ladies Wear</span>
                        </Link>
                    </div>
                </div>
                
                <div className="lg:col-span-4 md:col-span-12 lg:order-2 order-3">
                    <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">
                        <div className="relative overflow-hidden group rounded-md shadow dark:shadow-gray-800">
                            <Link to="" className="">
                                <img src={Feature2} className="group-hover:scale-110 duration-500 h-[360.33px] w-full" alt=""/>
                                <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-4 rounded-md shadow dark:shadow-gray-800 absolute mx-4 bottom-4 text-lg font-medium">Chappal & Shoes</span>
                            </Link>
                        </div>

                        <div className="relative overflow-hidden group rounded-md shadow dark:shadow-gray-800">
                            <Link to="" className="">
                                <img src={Feature3} className="group-hover:scale-110 duration-500 h-[360.33px] w-full" alt=""/>
                                <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-4 rounded-md shadow dark:shadow-gray-800 absolute mx-4 bottom-4 text-lg font-medium">Sunglasses</span>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="lg:col-span-4 md:col-span-6 lg:order-3 order-2">
                    <div className="relative overflow-hidden group rounded-md shadow dark:shadow-gray-800">
                        <Link to="" className="">
                            <img src={Feature4} className="h-full w-full object-cover xl:h-[738.66px] lg:h-[614.66px] rounded-md group-hover:scale-110 duration-500" alt=""/>
                            <span className="bg-white dark:bg-slate-900 group-hover:text-orange-500 py-2 px-4 rounded-md shadow dark:shadow-gray-800 absolute mx-4 bottom-4 text-lg font-medium">Mens Wear</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default FeatureCollection
