import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

function RecentlyViewedProduct() {
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999] bg-white">
            <Header />
        </div>
        <section className="relative table w-full py-20 lg:py-24 bg-[#f9fafb]">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 text-center mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Recently Viewed Products</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange"><Link to="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-slate-950  mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-orange" aria-current="page">Recently Viewed Products</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1">
                    <div className="rounded p-6 shadow">
                        <p className="text-slate-400">No products were added to the compare page. <Link to="/ShopGrid" className="font-medium text-orange">Back to shopping</Link></p>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </Fragment>
  )
}

export default RecentlyViewedProduct
