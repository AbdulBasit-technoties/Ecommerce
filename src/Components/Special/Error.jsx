import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { imageAssets } from '../../Helpers/images'
import { FiArrowLeft } from 'react-icons/fi'

function Error() {
  return (
    <Fragment>
        <section className="relative bg-orange/5">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Link to="/">
                                <img src={imageAssets.logo.src} className="mx-auto dark:block" alt=""/>
                            </Link>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <img src={imageAssets.auth.error} className="mx-auto w-72" alt=""/>
                            <h1 className="mt-8 mb-6 md:text-5xl text-3xl font-bold">Page Not Found?</h1>
                            <p className="text-slate-400">Whoops, this is embarassing. <br/> Looks like the page you were looking for wasn't found.</p>
                            
                            <div className="mt-4">
                                <Link to="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange hover:bg-orange-600 border-orange hover:border-orange-600 text-white rounded-md">Back to Home</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Cartzio. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="fixed bottom-3 end-3">
            <Link to="/" className="back-button size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-orange text-white rounded-full"><FiArrowLeft className="h-4 w-4"></FiArrowLeft></Link>
        </div>
    </Fragment>
  )
}

export default Error
