import React, { Fragment,useState } from 'react'
import Header from '../Header'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import { imageAssets } from '../../Helpers/images'
function OurStore() {
    let [modal, setModal] = useState(false)
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999] bg-white">
            <Header />
        </div>
        <section className="relative table w-full py-20 lg:py-24 bg-[#f9fafb] ">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 text-center mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Our Store</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange"><Link to="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-slate-950  mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-orange" aria-current="page">Stores</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div>
                        <img src={imageAssets.store.ourstore} className="rounded-md shadow-md " alt=""/>

                        <h5 className="font-semibold text-xl leading-normal my-4">Cartzio, U.S.A.</h5>

                        <p className="text-slate-400">268 St, South New York/NY 98944, <br/> United States</p>

                        <div className="flex items-center mt-4">
                            <FiPhone className="w-6 h-6 me-4"></FiPhone>
                            <div className="">
                                <h5 className="title font-bold mb-0">Phone</h5>
                                <Link to="tel:+152534-468-854" className="tracking-wide text-orange">+152 534-468-854</Link>
                            </div>
                        </div>
                        
                        <div className="flex items-center mt-4">
                            <FiMapPin className="w-6 h-6 me-4"></FiMapPin>
                            <div className="">
                                <h5 className="title font-bold mb-0">Location</h5>
                                <Link to="#" onClick={()=>setModal(true)}>View on Google map</Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={ourstore} className="rounded-md shadow-md " alt=""/>

                        <h5 className="font-semibold text-xl leading-normal my-4">Cartzio, U.S.A.</h5>

                        <p className="text-slate-400">268 St, South New York/NY 98944, <br/> United States</p>

                        <div className="flex items-center mt-4">
                            <FiPhone className="w-6 h-6 me-4"></FiPhone>
                            <div className="">
                                <h5 className="title font-bold mb-0">Phone</h5>
                                <Link to="tel:+152534-468-854" className="tracking-wide text-orange">+152 534-468-854</Link>
                            </div>
                        </div>
                        
                        <div className="flex items-center mt-4">
                            <FiMapPin className="w-6 h-6 me-4"></FiMapPin>
                            <div className="">
                                <h5 className="title font-bold mb-0">Location</h5>
                                <Link to="#" onClick={()=>setModal(true)}>View on Google map</Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={ourstore} className="rounded-md shadow-md " alt=""/>

                        <h5 className="font-semibold text-xl leading-normal my-4">Cartzio, U.S.A.</h5>

                        <p className="text-slate-400">268 St, South New York/NY 98944, <br/> United States</p>

                        <div className="flex items-center mt-4">
                            <FiPhone className="w-6 h-6 me-4"></FiPhone>
                            <div className="">
                                <h5 className="title font-bold mb-0">Phone</h5>
                                <Link to="tel:+152534-468-854" className="tracking-wide text-orange">+152 534-468-854</Link>
                            </div>
                        </div>
                        
                        <div className="flex items-center mt-4">
                            <FiMapPin className="w-6 h-6 me-4"></FiMapPin>
                            <div className="">
                                <h5 className="title font-bold mb-0">Location</h5>
                                <Link to="#" onClick={()=>setModal(true)}>View on Google map</Link>
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

export default OurStore
