import React, { Fragment } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { career,jobData,mobile,app,app1 } from '../Helpers/images'
import { FiSmartphone } from 'react-icons/fi'
function Career() {
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999]">
            <Header />
        </div>
        <section className="relative table w-full py-36 lg:py-44 bg-[url('./assets/images/aboutbg.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-12">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Job Opening</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Job Opening</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <img src={career} className="shadow rounded-md" alt=""/>
                                    <img src={career} className="shadow rounded-md" alt=""/>
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <img src={career} className="shadow rounded-md" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 font-semibold text-3xl leading-normal">We are Largest Job <br/> Site in The World</h3>

                            <p className="text-slate-400 max-w-xl mb-2">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                            <p className="text-slate-400 max-w-xl">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-6">
                                <Link to="" className="text-orange">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    <div className="counter-box relative text-center">
                        <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5">200+K</h3>
                        <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Total User</span>
                    </div>

                    <div className="counter-box relative text-center">
                        <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5">15+</h3>
                        <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Years of Experience</span>
                    </div>

                    <div className="counter-box relative text-center">
                        <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5">4</h3>
                        <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Offices in the World</span>
                    </div>

                    <div className="counter-box relative text-center">
                        <h3 className="font-extrabold lg:text-[72px] text-[50px] opacity-5">12K</h3>
                        <span className="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">No. of Job Positions</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Job Openings</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                </div>

                <div className="lg:flex justify-center mt-2">
                    <div className="lg:w-3/4">
                        {jobData.map((item,index)=>{
                            return(
                                <div className="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 duration-500 mt-6" key={index}>
                                    <div>
                                        <Link to="/" className="text-lg font-semibold hover:text-orange">{item.name}</Link>
                                        <p className="text-slate-400 mt-1">{item.openings}</p>
                                    </div>
        
                                    <Link to="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-orange border-gray-100 dark:border-gray-800 hover:border-orange dark:hover:border-orange text-slate-900 dark:text-white hover:text-white rounded-full md:mt-0 mt-4">Apply now</Link>
                                </div>
                            )
                        })}
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

export default Career
