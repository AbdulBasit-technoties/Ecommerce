import React,{useState, useEffect, Fragment} from 'react'
import { confirmation } from '../../Helpers/images';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Maintanance() {
    let [minutes, setMinutes] = useState(0);
    let [remainingSeconds, setRemainingSeconds] = useState(0);
    useEffect(() => {
        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);
        var seconds = 3599;
        function calculateTimeRemaining() {
            let minutes = Math.round((seconds - 30) / 60);
            let remainingSeconds = seconds % 60;
            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);
            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }
        return () => {
            clearInterval(intervalId);
        };
    }, []);
  return (
    <Fragment>
        <section className="relative h-screen flex items-center justify-center text-center bg-[url('./assets/images/aboutbg.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-black/25"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <Link to="/"><img src={confirmation} className="mx-auto" alt=""/></Link>
                    <h1 className="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">We Are Back Soon...</h1>
                    <p className="text-white/70 text-lg max-w-xl mx-auto">Start working with Cartzio that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid grid-cols-1 mt-10">
                    <div className="text-center">
                        <span id="maintenance" className="timer text-white text-[56px] tracking-[1px]">{minutes}:{remainingSeconds}</span>
                        <span className="block text-base font-semibold uppercase text-white">Minutes</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-6">
                    <div className="text-center subcribe-form">
                        <form className="relative mx-auto max-w-xl">
                            <input type="email" id="subemail" name="name" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.."/>
                            <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-orange text-white rounded-full">Subcribe Now</button>
                        </form>
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

export default Maintanance