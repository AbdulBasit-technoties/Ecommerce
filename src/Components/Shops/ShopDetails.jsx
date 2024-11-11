import React, { Fragment,useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { imageAssets,commentsData,newProduct } from '../../Helpers/images'
import { Link } from 'react-router-dom'
import { FiBookmark, FiEye, FiHeart, FiMail, FiMessageCircle, FiUser } from 'react-icons/fi'
function ShopDetails() {
    let[activeTab, setActiveTab] = useState(1)
    let [activeImage, setActiveImage] = useState(1)
    let image = [
        {
            id:1,
            image:imageAssets.products.tshirt
        },
        {
            id:2,
            image:imageAssets.products.tshirt
        },
        {
            id:3,
            image:imageAssets.products.tshirt
        },
        {
            id:4,
            image:imageAssets.products.tshirt
        },
        {
            id:5,
            image:imageAssets.products.tshirt
        },
    ]

    const imageShow = (index) =>{
        setActiveImage(index)
    }
    const [count, setCount] = useState(1); // Initialize count with a default value

    // Function to increment the count
    const increments = () => setCount(prevCount => prevCount + 1);

    // Function to decrement the count (ensure it doesn’t go below 0)
    const decrements = () => setCount(prevCount => Math.max(prevCount - 1, 0));
  return (
    <Fragment>
        <div className="main-heder absolute top-0 w-full z-[999] bg-white">
            <Header />
        </div>
        <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-[#f9fafb] dark:bg-slate-800">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Mens Brown Jecket</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange"><Link to="/">Cartzio</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange"><Link to="/ShopGrid">Store</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold text-orange" aria-current="page">Mens Brown Jecket</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div className="">
                        <ul className="product-imgs flex list-none">
                            <li className="w-1/6">
                                <ul className="img-select list-none">
                                    {image.map((item,index)=>{
                                        return(
                                            <li className="p-px" key={index}>
                                                <Link to="#">
                                                    <img src={item.image} className="shadow dark:shadow-gray-800 w-full h-auto" alt="" onClick={()=>imageShow(item.id)}/>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>

                            <li className="img-display shadow dark:shadow-gray-800 m-px w-5/6">
                                <div className="img-showcase flex w-full duration-500">
                                    {activeImage === 1 && (
                                        <img src={tshirt} className="min-w-full" alt=""/>
                                    )}
                                    {activeImage === 2 && (
                                        <img src={tshirt} className="min-w-full" alt=""/>
                                    )}
                                    {activeImage === 3 && (
                                        <img src={tshirt} className="min-w-full" alt=""/>
                                    )}
                                    {activeImage === 4 && (
                                        <img src={tshirt} className="min-w-full" alt=""/>
                                    )}
                                    {activeImage === 5 && (
                                        <img src={tshirt} className="min-w-full" alt=""/>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="sticky top-20">
            <h5 className="text-2xl font-semibold">Mens Brown Jecket</h5>
            <div className="mt-2">
                <span className="text-slate-400 font-semibold me-1">$16USD <del className="text-red-600">$21USD</del></span>

                <ul className="list-none inline-block text-orange-400">
                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                    <li className="inline text-slate-400 font-semibold">4.8 (45)</li>
                </ul>
            </div>

            <div className="mt-4">
                <h5 className="text-lg font-semibold">Overview :</h5>
                <p className="text-slate-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>
            
                <ul className="list-none text-slate-400 mt-4">
                    <li className="mb-1 flex ms-0"><i className="mdi mdi-check-circle-outline text-orange text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                    <li className="mb-1 flex ms-0"><i className="mdi mdi-check-circle-outline text-orange text-xl me-2"></i> Our Talented & Experienced Marketing Agency</li>
                    <li className="mb-1 flex ms-0"><i className="mdi mdi-check-circle-outline text-orange text-xl me-2"></i> Create your own skin to match your brand</li>
                </ul>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
                <div className="flex items-center">
                    <h5 className="text-lg font-semibold me-2">Size:</h5>
                    <div className="space-x-1">
                        <Link to="" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white">S</Link>
                        <Link to="" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white">M</Link>
                        <Link to="" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white">L</Link>
                        <Link to="" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white">XL</Link>
                    </div>
                </div>

                <div className="flex items-center">
                    <h5 className="text-lg font-semibold me-2">Quantity:</h5>
                    <div className="qty-icons ms-3 space-x-0.5">
                        <button onClick={()=>decrements()} className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white minus">-</button>
                        <input min="0" name="quantity" value={count} onChange={()=>{}} type="number" className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white pointer-events-none w-16 ps-4 quantity"/>
                        <button onClick={()=>increments()} className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white plus">+</button>
                    </div>
                </div>

                <div className="flex items-center">
                    <h5 className="text-lg font-semibold me-2">Colors:</h5>
                    <div className="space-x-2">
                        <Link to="" className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle" title="Red"></Link>
                        <Link to="" className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-orange-600 inline-flex align-middle" title="Orange"></Link>
                        <Link to="" className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-slate-900 inline-flex align-middle" title="Black"></Link>
                        <Link to="" className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-gray-300 inline-flex align-middle" title="Gray"></Link>
                    </div>
                </div>
            </div>

            <div className="mt-4 space-x-1">
                <Link to="/ShopDetails" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-orange text-white rounded-md mt-2">Shop Now</Link>
                <Link to="/ShopCart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-orange/5 hover:bg-orange text-orange hover:text-white mt-2">Add to Cart</Link>
            </div>
        </div>
                </div>
                
                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
            <div className="lg:col-span-3 md:col-span-5">
                <div className="sticky top-20">
                    <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li className="ms-0">
                            <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full hover:text-orange duration-500 ${activeTab === 1 ? 'text-white bg-orange hover:text-white' :''}`} onClick={()=>setActiveTab(1)}>Description</button>
                        </li>
                        <li className="ms-0">
                            <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full hover:text-orange duration-500 ${activeTab === 2 ? 'text-white bg-orange hover:text-white' :''}`} onClick={()=>setActiveTab(2)}>Additional Information</button>
                        </li>
                        <li className="ms-0">
                            <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full hover:text-orange duration-500 ${activeTab === 3 ? 'text-white bg-orange hover:text-white' :''}`} onClick={()=>setActiveTab(3)}>Review</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="lg:col-span-9 md:col-span-7">
                <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                    {activeTab === 1 && (
                        <div>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div>
                            <table className="w-full text-start">
                                <tbody>
                                    <tr className="bg-white dark:bg-slate-900">
                                        <td className="font-semibold pb-4" style={{width: '100px'}}>Color</td>
                                        <td className="text-slate-400 pb-4">Red, White, Black, Orange</td>
                                    </tr>

                                    <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                        <td className="font-semibold py-4">Material</td>
                                        <td className="text-slate-400 py-4">Cotton</td>
                                    </tr>

                                    <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                        <td className="font-semibold pt-4">Size</td>
                                        <td className="text-slate-400 pt-4">S, M, L, XL, XXL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div>
                            {commentsData.map((item,index)=>{
                                return(
                                    <div className="mt-8 first:mt-0" key={index}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <img src={item.image} className="h-11 w-11 rounded-full shadow" alt=""/>

                                                <div className="ms-3 flex-1">
                                                    <Link to="" className="text-lg font-semibold hover:text-orange duration-500">{item.name}</Link>
                                                    <p className="text-sm text-slate-400">{item.time}</p>
                                                </div>
                                            </div>

                                            <Link to="" className="text-slate-400 hover:text-orange duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                        </div>
                                        <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                            <ul className="list-none inline-block text-orange-400">
                                                <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                <li className="inline text-slate-400 font-semibold">5.0</li>
                                            </ul>

                                            <p className="text-slate-400 italic">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                                <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                                <form className="mt-8">
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                                                    <input name="name" id="name" type="text" className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMail className="w-4 h-4 absolute top-3 start-4"></FiMail>
                                                    <input name="email" id="email" type="email" className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMessageCircle className="w-4 h-4 absolute top-3 start-4"></FiMessageCircle>
                                                    <textarea name="comments" id="comments" className="ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange text-white rounded-md w-full">Send Message</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
            </div>

            <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 lg:mt-24 mt-16">
            <div className="grid grid-cols-1 mb-6 text-center">
                <h3 className="font-semibold text-3xl leading-normal">New Arrival Items</h3>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-6">
                {newProduct.slice(7,11).map((item, index)=>{
                    return(
                        <div className="group" key={index}>
                            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                                <img src={item.image} className="group-hover:scale-110 duration-500" alt=""/>
        
                                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                    <Link to="/ShopCart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                </div>
        
                                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                                    <li><Link to="/" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiHeart className="size-4"></FiHeart></Link></li>
                                    <li className="mt-1 ms-0"><Link to="/ShopDetails" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiEye className="size-4"></FiEye></Link></li>
                                    <li className="mt-1 ms-0"><Link to="/" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiBookmark className="size-4"></FiBookmark></Link></li>
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
                                <Link to={`/ShopDetails`} className="hover:text-orange text-lg font-medium">{item.name}</Link>
                                <div className="flex justify-between items-center mt-1">
                                    <p>{item.desRate} <del className="text-slate-400">{item.amount}</del></p>
                                    <ul className="font-medium text-amber-400 list-none">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>
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

export default ShopDetails
