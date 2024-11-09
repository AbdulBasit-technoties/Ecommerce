import React, { Fragment } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { FiBook, FiMail, FiMessageCircle, FiUser } from 'react-icons/fi'
import { faqAbout } from '../Helpers/images'
import Footer from '../Components/Footer'
function HelpCenterSupport() {
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999]">
            <Header />
        </div>
        <section className="relative table w-full py-36 bg-[url('./assets/images/aboutbg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 pt-20 px-4 relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Submit Your Support Request</h3>

                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                   <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Cartzio</Link></li>
                   <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                   <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/OverView">Helpcenter</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Support</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative md:pb-24 pb-16">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6 mx-auto text-center">
                    <div className="lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-10">
                        <div className="bg-white dark:bg-slate-900 rounded-md shadow shadow-gray-800 p-6">
                            <form>
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <FiUser className="size-4 absolute top-3 start-4"></FiUser>
                                                <input name="name" id="name" type="text" className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 border-gray-800 focus:ring-0" placeholder="Name :"/>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <FiMail className="size-4 absolute top-3 start-4"></FiMail>
                                                <input name="email" id="email" type="email" className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 border-gray-800 focus:ring-0" placeholder="Email :"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <div className="form-icon relative mt-2">
                                                <FiBook className="size-4 absolute top-3 start-4"></FiBook>
                                                <input name="subject" id="subject" className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 border-gray-800 focus:ring-0" placeholder="Subject :"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <FiMessageCircle className="size-4 absolute top-3 start-4"></FiMessageCircle>
                                                <textarea name="comments" id="comments" className="ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange hover:bg-orange-600 border-orange hover:border-orange-600 text-white rounded-md justify-center flex items-center">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Find The Help You Need</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                {faqAbout.map((item,index)=>{
                    let Icon = item.icon
                    return(
                        <div className="text-center px-6 mt-6" key={index}>
                            <div className="w-20 h-20 bg-orange/5 text-orange rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <Icon className="size-[30px]"></Icon>
                            </div>

                            <div className="content mt-7">
                                <Link to="/helpcenter-faqs" className="title h5 text-lg font-medium hover:text-orange">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                                
                                <div className="mt-5">
                                    <Link to="/helpcenter-faqs" className="text-orange">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
                </section>
        <Footer/>
    </Fragment>
  )
}

export default HelpCenterSupport
