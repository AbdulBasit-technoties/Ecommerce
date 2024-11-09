import React, { Fragment } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { guidenceData } from '../Helpers/images'
import { FiPhone } from 'react-icons/fi'
import Footer from '../Components/Footer'
function HelpCenterGuides() {
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999]">
            <Header />
        </div>
        <section className="relative table w-full py-36 bg-[url('./assets/images/aboutbg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Guides & Support</h3>

                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                   <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Cartzio</Link></li>
                   <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                   <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/OverView">Helpcenter</Link></li>
                   <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                   <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Guides</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {guidenceData.map((item,index)=>{
                        return(
                            <div className="" key={index}>
                                <h5 className="font-semibold text-xl">{item.name}</h5>
                                <ul className="list-none mt-4">
                                    {item.features.map((el, index)=>{
                                        return(
                                            <li className="mt-2 ms-0" key={index}><Link to="" className="text-slate-400"><i className="mdi mdi-arrow-right text-orange me-2"></i>{el}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
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

export default HelpCenterGuides
