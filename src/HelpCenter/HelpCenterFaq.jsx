import React, { Fragment,useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { FiChevronUp, FiPhone } from 'react-icons/fi'
import Footer from '../Components/Footer'
import { faqData } from '../Helpers/images'
function HelpCenterFaq() {
    let [activeIndex, setActiveIndex] = useState(1)
    let [activeIndex2, setActiveIndex2] = useState(1)
    let [activeIndex3, setActiveIndex3] = useState(1)
    let [activeIndex4, setActiveIndex4] = useState(1)
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999]">
            <Header />
        </div>
        <section className="relative table w-full py-36 bg-[url('./assets/images/aboutbg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Frequently Asked Questions</h3>

                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/helpcenter">Helpcenter</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">FAQs</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="rounded-md shadow  p-6 sticky top-20">
                            <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                                <li className="navbar-item p-0"><Link to="tech" spy={true} activeclassname="active" smooth={true}
                                    duration={500} className="text-base font-medium navbar-link">Buying Questions</Link></li>
                                <li className="navbar-item mt-3 p-0 ms-0"><Link spy={true} activeclassname="active" smooth={true} duration={500} to="general" className="text-base font-medium navbar-link">General Questions</Link></li>
                                <li className="navbar-item mt-3 p-0 ms-0"><Link spy={true} activeclassname="active" smooth={true} duration={500} to="payment" className="text-base font-medium navbar-link">Payments Questions</Link></li>
                                <li className="navbar-item mt-3 p-0 ms-0"><Link spy={true} activeclassname="active" smooth={true} duration={500} to="support" className="text-base font-medium navbar-link">Support Questions</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="tech">
                            <h5 className="text-2xl font-semibold">Buying Product</h5>

                            <div className="mt-6">
                                {faqData.map((item,index)=>{
                                    return(
                                        <div className="relative shadow  rounded-md overflow-hidden mt-4" key={index}>
                                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${item.id === activeIndex ? 'bg-gray-50  text-orange' : '' }`} onClick={()=>setActiveIndex(item.id)}>
                                                    <span>{item.title}</span>
                                                    <FiChevronUp className={`size-4 shrink-0 ${activeIndex === item.id ? '' :'rotate-180'}`}/>
                                                </button>
                                            </h2>
                                            <div className={ item.id === activeIndex ? '' : 'hidden' }>
                                                <div className="p-5">
                                                    <p className="text-slate-400 ">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div id="general" className="mt-8">
                            <h5 className="text-2xl font-semibold">General Questions</h5>

                            <div className="mt-6">
                                {faqData.map((item,index)=>{
                                    return(
                                        <div className="relative shadow  rounded-md overflow-hidden mt-4" key={index}>
                                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${item.id === activeIndex2 ? 'bg-gray-50  text-orange' : '' }`} onClick={()=>setActiveIndex2(item.id)}>
                                                    <span>{item.title}</span>
                                                    <FiChevronUp className={`size-4 shrink-0 ${activeIndex2 === item.id ? '' :'rotate-180'}`}/>
                                                </button>
                                            </h2>
                                            <div className={ item.id === activeIndex2 ? '' : 'hidden' }>
                                                <div className="p-5">
                                                    <p className="text-slate-400 ">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div id="payment" className="mt-8">
                            <h5 className="text-2xl font-semibold">Payments Questions</h5>

                            <div className="mt-6">
                                {faqData.map((item,index)=>{
                                    return(
                                        <div className="relative shadow  rounded-md overflow-hidden mt-4" key={index}>
                                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${item.id === activeIndex4 ? 'bg-gray-50  text-orange' : '' }`} onClick={()=>setActiveIndex4(item.id)}>
                                                    <span>{item.title}</span>
                                                    <FiChevronUp className={`size-4 shrink-0 ${activeIndex4 === item.id ? '' :'rotate-180'}`}/>
                                                </button>
                                            </h2>
                                            <div className={ item.id === activeIndex4 ? '' : 'hidden' }>
                                                <div className="p-5">
                                                    <p className="text-slate-400 ">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div id="support" className="mt-8">
                            <h5 className="text-2xl font-semibold">Support Questions</h5>

                            <div className="mt-6">
                                {faqData.map((item,index)=>{
                                    return(
                                        <div className="relative shadow  rounded-md overflow-hidden mt-4" key={index}>
                                            <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                                <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${item.id === activeIndex3 ? 'bg-gray-50  text-orange' : '' }`} onClick={()=>setActiveIndex3(item.id)}>
                                                    <span>{item.title}</span>
                                                    <FiChevronUp className={`size-4 shrink-0 ${activeIndex3 === item.id ? '' :'rotate-180'}`}/>
                                                </button>
                                            </h2>
                                            <div className={ item.id === activeIndex3 ? '' : 'hidden' }>
                                                <div className="p-5">
                                                    <p className="text-slate-400 ">{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Have Question ? Get in touch!</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
            
                <div className="mt-6">
                    <Link to="/HelpCenterSupport" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange text-white rounded-md me-2 mt-2"><FiPhone className="size-4 me-1"></FiPhone> Contact us</Link>
                </div>
            </div>
        </div>
        </section>
        <Footer/>
    </Fragment>
  )
}

export default HelpCenterFaq
