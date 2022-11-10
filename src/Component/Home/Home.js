import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import slide1 from '../../Assets/slide1.png';
import slide2 from '../../Assets/slide2.png';
import slide3 from '../../Assets/slide3.png';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import BlogCard from '../Blog/BlogCard';
import rocket from '../../Assets/rocket.png'
import home from '../../Assets/home.png'
import service from '../../Assets/service.png'
import satisfaction from '../../Assets/satisfaction.png'
const Home = () => {

    const [services, setServices] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    useTitle('KidsCamp');

    // Limited service load
    useEffect(() => {
        fetch(`https://kids-camp-server.vercel.app/services?size=3`)
            .then(response => response.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            })
    }, [])

    // blogs for homepage and slicing 
    useEffect(() => {
        setLoading(true);
        fetch('https://kids-camp-server.vercel.app/blog')
            .then(response => response.json())
            .then(data => {
                setBlogs(data.slice(0, 3));
                setLoading(false)
            })
    }, [])

    return (
        <div className='py-10'>
            <div className="carousel container mx-auto bg-sky-900 rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='flex md:flex-row flex-col items-center justify-center md:py-10  bg-sky-900  px-10'>
                        <div className='mt-10'>
                            <h1 className='text-4xl font-semibold text-white text-center'>ACTIVE TEACHING BY KIDS CAMP</h1>
                            <p className='text-white text-xl text-center mt-3'>The Foundation Needs To Be Strong and KIDS CAMP Takes Care Of Your Childrens' Education Foundation</p>
                            <div className="flex justify-center mt-10 mb-5">
                                <Link to='/services' className='btn bg-cyan-500 border-none normal-case text-xl'>SEE SERVICES</Link>
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
                                <Link to='/services' className='btn bg-cyan-500 border-none normal-case text-xl'>SEE SERVICES</Link>
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
                                <Link to='/services' className='btn bg-cyan-500 border-none normal-case text-xl'>SEE SERVICES</Link>
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
            <div className='container mx-auto mt-20 px-3'>
                <h1 className='text-4xl font-bold mb-2'>My Services</h1><hr />
            </div>
            {
                isLoading ?
                    <div className='flex justify-center mt-20'><button className="btn loading">loading</button></div>
                    :
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 container mx-auto mt-10 px-5 '>
                        {
                            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                    </div>

            }
            <div className='mt-10 flex justify-center'>
                <Link to='/services' className='btn bg-cyan-500 border-none text-xl'>VIEW ALL</Link>
            </div>


            <div className='mt-20 container mx-auto px-3'>
                <h1 className='text-4xl font-bold mb-2'>Speciality</h1><hr />
                <div className='mt-10'>
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="grid py-10  lg:w-1/2 card bg-cyan-500 rounded-box place-items-center">
                            <div className='flex'>
                                <img src={rocket} alt="" className='h-16 mr-5' />
                                <img src={service} alt="" className='h-16' />
                            </div>
                            <p className='text-xl font-semibold mt-0 text-center text-white'>Very Fast Service Providing and Carefull To Consumers' Demand. Available For 24/7 </p>
                        </div>
                        <div className="divider lg:divider-horizontal font-semibold">AND</div>
                        <div className="grid py-10 lg:w-1/2 card bg-cyan-500 rounded-box place-items-center">
                            <div className='flex'>
                            <img src={home} alt="" className='h-16 mr-5' />
                            <img src={satisfaction} alt="" className='h-16' />
                            </div>
                            <p className='text-xl font-semibold mt-0 text-center text-white'>Service Providing At Consumers' Home Or Provider's Place. In Both Place Service Satisfaction 100% Guaranteed</p>
                        </div>
                    </div>
                </div>

            </div>



            <div className='mt-20 container mx-auto px-3'>
                <h1 className='text-4xl font-bold mb-2'>Recent Weblogs</h1><hr />
            </div>
            {
                isLoading ?
                    <div className='flex justify-center mt-20'><button className="btn loading">loading</button></div>
                    :
                    <div className='grid md:grid-cols-3  gap-5 container mx-auto mt-10 px-5'>
                        {
                            blogs.map(blog => <BlogCard key={blog._id} blog={blog}><Link to='/weblog' className='btn border-none text-white mr-3 mb-3 bg-cyan-500'>READ MORE</Link></BlogCard>)
                        }
                    </div>

            }
        </div>
    );
};

export default Home;