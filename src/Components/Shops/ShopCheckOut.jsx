import React, { Fragment } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { FiSmartphone } from 'react-icons/fi'
import {imageAssets} from '../../Helpers/images'
import Footer from '../Footer'
function ShopCheckOut() {
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999] bg-white">
            <Header />
        </div>
        <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-[#f9fafb] ">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Fashion</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange"><Link to="/">Cartzio</Link></li>
                        <li className="inline-block text-base text-slate-950  mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold text-orange" aria-current="page">Checkout</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="lg:col-span-8">
                        <div className="p-6 rounded-md shadow ">
                            <h3 className="text-xl leading-normal font-semibold">Billing address</h3>

                            <form>
                                <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                                    <div className="lg:col-span-6">
                                        <label className="form-label font-semibold">First Name : <span className="text-red-600">*</span></label>
                                        <input type="text" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="First Name:" id="firstname" name="name" required=""/>
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-semibold">Last Name : <span className="text-red-600">*</span></label>
                                        <input type="text" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="Last Name:" id="lastname" name="name" required=""/>
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-semibold">Username</label>
                                        <div className="relative mt-2">
                                            <span className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100  inline-flex justify-center items-center  rounded" id="basic-addon1"><i className="mdi mdi-at"></i></span>
                                            <input type="text" className="ps-12 w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0" placeholder="Username" required/>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-semibold">Your Email : <span className="text-red-600">*</span></label>
                                        <input type="email" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="Email" name="email" required=""/>
                                    </div>

                                    <div className="lg:col-span-12">
                                        <label className="form-label font-semibold">Address : <span className="text-red-600">*</span></label>
                                        <input type="text" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="Address:" id="address" name="name" required=""/>
                                    </div>

                                    <div className="lg:col-span-12">
                                        <label className="form-label font-semibold">Address 2 : </label>
                                        <input type="text" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="Address:" id="address" name="name" required=""/>
                                    </div>

                                    <div className="lg:col-span-4">
                                        <label className="font-semibold">Country:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0">
                                            <option value="USA">USA</option>
                                            <option value="CAD">Canada</option>
                                            <option value="CHINA">China</option>
                                        </select>
                                    </div>

                                    <div className="lg:col-span-4">
                                        <label className="font-semibold">State:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0">
                                            <option value="CAL">California</option>
                                            <option value="TEX">Texas</option>
                                            <option value="FLOR">Florida</option>
                                        </select>
                                    </div>

                                    <div className="lg:col-span-4">
                                        <label className="form-label font-semibold">Zip Code : <span className="text-red-600">*</span></label>
                                        <input type="number" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="Zip:" id="zipcode" name="number" required=""/>
                                    </div>

                                    <div className="lg:col-span-12">
                                        <div className="flex items-center w-full mb-0">
                                            <input className="form-checkbox rounded border-gray-100  text-orange focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="sameaddress"/>
                                            <label className="form-check-label text-slate-400" htmlFor="sameaddress">Shipping address is the same as my billing address</label>
                                        </div>

                                        <div className="flex items-center w-full mb-0">
                                            <input className="form-checkbox rounded border-gray-100  text-orange focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="savenexttime"/>
                                            <label className="form-check-label text-slate-400" htmlFor="savenexttime">Save this information for next time</label>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <h3 className="text-xl leading-normal font-semibold mt-6">Payment</h3>

                            <form>
                                <div>
                                    <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                                        <div className="lg:col-span-12">
                                            <div className="block">
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input type="radio" className="form-radio border-gray-100  text-orange focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1" readOnly defaultChecked/>
                                                        <span className="text-slate-400">Credit card</span>
                                                    </label>
                                                </div>
                                            </div>
    
                                            <div className="block mt-2">
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input type="radio" className="form-radio border-gray-100  text-orange focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1" readOnly/>
                                                        <span className="text-slate-400">Debit Card</span>
                                                    </label>
                                                </div>
                                            </div>
    
                                            <div className="block mt-2">
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input type="radio" className="form-radio border-gray-100  text-orange focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1" readOnly/>
                                                        <span className="text-slate-400">PayPal</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6">
                                            <label className="form-label font-semibold">Account Holder Name : <span className="text-red-600">*</span></label>
                                            <input type="text" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="Name:" id="accountname" name="name" required=""/>
                                        </div>
    
                                        <div className="lg:col-span-6">
                                            <label className="form-label font-semibold">Credit card number : <span className="text-red-600">*</span></label>
                                            <input type="number" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="**** **** **** ****" id="cardnumber" name="number" required=""/>
                                        </div>
    
                                        <div className="lg:col-span-3">
                                            <label className="form-label font-semibold">Expiration : <span className="text-red-600">*</span></label>
                                            <input type="number" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="" id="expiration" name="number" required=""/>
                                        </div>
    
                                        <div className="lg:col-span-3">
                                            <label className="form-label font-semibold">CVV : <span className="text-red-600">*</span></label>
                                            <input type="number" className="w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-100  focus:ring-0 mt-2" placeholder="" id="cvv" name="number" required=""/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-4">
                                <input type="submit" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange text-white rounded-md w-full" value="Continue to checkout"/>
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-4">
                        <div className="p-6 rounded-md shadow ">
                            <div className="flex justify-between items-center">
                                <h5 className="text-lg font-semibold">Your Cart</h5>

                                <Link to="#" className="bg-orange flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5">3</Link>
                            </div>

                            <div className="mt-4 rounded-md shadow ">
                                <div className="p-3 flex justify-between items-center">
                                    <div>
                                        <h5 className="font-semibold">Product Name</h5>
                                        <p className="text-sm text-slate-400">Brief description</p>
                                    </div>

                                    <p className="text-slate-400 font-semibold">$ 12</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 ">
                                    <div>
                                        <h5 className="font-semibold">Second product</h5>
                                        <p className="text-sm text-slate-400">Brief description</p>
                                    </div>

                                    <p className="text-slate-400 font-semibold">$ 18</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 ">
                                    <div>
                                        <h5 className="font-semibold">Third item</h5>
                                        <p className="text-sm text-slate-400">Brief description</p>
                                    </div>

                                    <p className="text-slate-400 font-semibold">$ 20</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100  bg-gray-50  text-green-600">
                                    <div>
                                        <h5 className="font-semibold">Promo code</h5>
                                        <p className="text-sm text-green-600">EXAMPLECODE</p>
                                    </div>

                                    <p className="text-red-600 font-semibold">-$ 10</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 ">
                                    <div>
                                        <h5 className="font-semibold">Total (USD)</h5>
                                    </div>

                                    <p className="font-semibold">$ 30</p>
                                </div>
                            </div>

                            <div className="subcribe-form mt-6">
                                <div className="relative max-w-xl">
                                    <input type="email" id="subcribe" name="email" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black  rounded-full bg-white  shadow " placeholder="Promo code"/>
                                    <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-orange text-white rounded-full">Redeem</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                <div className="lg:col-span-5 md:col-span-6">
                    <img src={imageAssets.contact.mobile} className="mx-auto d-block" alt=""/>
                </div>

                <div className="lg:col-span-7 md:col-span-6">
                    <span className="bg-orange text-white text-xs font-bold px-2.5 py-0.5 rounded h-5">Mobile Apps</span>
                    <h4 className="font-semibold text-3xl leading-normal my-4">Available for your <br/> Smartphones</h4>
                    <p className="text-slate-400 max-w-xl mb-0">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                    <div className="my-5">
                        <Link to=""><img src={imageAssets.contact.app} className="m-1 inline-block" alt=""/></Link>

                        <Link to=""><img src={imageAssets.contact.app1} className="m-1 inline-block" alt=""/></Link>
                    </div>

                    <div className="inline-block">
                        <div className="pt-4 flex items-center border-t border-gray-100">
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

export default ShopCheckOut
