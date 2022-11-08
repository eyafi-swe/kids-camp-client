import React from 'react';
import useTitle from '../../Hooks/useTitle';
import slide1 from '../../Assets/slide1.png';
import slide2 from '../../Assets/slide2.png';
import slide3 from '../../Assets/slide3.png';
import { Link } from 'react-router-dom';
const Home = () => {
    useTitle('KidsCamp');
    return (
        <div className="carousel container mx-auto bg-sky-900 rounded-b-xl">
            <div id="slide1" className="carousel-item relative w-full">
                {/* <img src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex  transform -translate-y-1/2 right-5 top-3/4">
                    <a href="#slide3" className="btn btn-square bg-sky-900 border-none mr-2">❮</a>
                    <a href="#slide2" className="btn btn-square bg-sky-900 border-none">❯</a>
                </div> */}
                <div className='flex md:flex-row flex-col items-center justify-center md:py-10  bg-sky-900  px-10'>
                    <div className='mt-10'>
                        <h1 className='text-4xl font-semibold text-white text-center'>ACTIVE TEACHING BY KIDS CAMP</h1>
                        <p className='text-white text-xl text-center mt-3'>The Foundation Needs To Be Strong and KIDS CAMP Takes Care Of Your Childrens' Education Foundation</p>
                        <div className="flex justify-center mt-10 mb-5">
                            <Link to='/services' className='btn bg-sky-600 border-none normal-case text-xl'>SEE SERVICES</Link>
                        </div>
                    </div>
                    <div>
                        <img src={slide1} alt="pngwing-com" border="0" className='h-80' />
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-5 top-3/4">
                    <a href="#slide3" className="btn btn-square bg-cyan-500 border-none mr-2">❮</a>
                    <a href="#slide2" className="btn btn-square bg-cyan-500 border-none">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='flex md:flex-row flex-col items-center justify-center md:py-10  bg-sky-900 w-full px-10'>
                    <div className='mt-10'>
                        <h1 className='text-4xl font-semibold text-white text-center'>FUNDAMENTAL COMPUTER TRAINING BY KIDS CAMP</h1>
                        <p className='text-white text-xl text-center mt-3'>Teching The Fundamental, Necessity and Limitations Of Using Computer</p>
                        <div className="flex justify-center mt-10 mb-5">
                            <Link to='/services' className='btn bg-sky-600 border-none normal-case text-xl'>SEE SERVICES</Link>
                        </div>
                    </div>
                    <div>
                        <img src={slide2} alt="pngwing-com" border="0" className='h-80' />
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-5 top-3/4">
                    <a href="#slide1" className="btn btn-square bg-cyan-500 border-none mr-2">❮</a>
                    <a href="#slide3" className="btn btn-square bg-cyan-500 border-none">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='flex md:flex-row flex-col items-center justify-center md:py-10  bg-sky-900 w-full px-10'>
                    <div className='mt-10'>
                        <h1 className='text-4xl font-semibold text-white text-center'>MUSIC TRAINING BY KIDS CAMP</h1>
                        <p className='text-white text-xl text-center mt-3'>Your Children Loves Music And KIDS CAMP Is Here To Make Your Childrens' Childhood Amazing With Music</p>
                        <div className="flex justify-center mt-10 mb-5">
                            <Link to='/services' className='btn bg-sky-600 border-none normal-case text-xl'>SEE SERVICES</Link>
                        </div>
                    </div>
                    <div className=''>
                        <img src={slide3} alt="pngwing-com" border="0" className='h-80 w-96' />
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 right-5 top-3/4">
                    <a href="#slide2" className="btn btn-square bg-cyan-500 border-none mr-2">❮</a>
                    <a href="#slide1" className="btn btn-square bg-cyan-500 border-none">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Home;