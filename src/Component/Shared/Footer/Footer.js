import React from 'react';
import { Link } from 'react-router-dom';
import blackLogo from '../../../asset/logo.png';
import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-base-200'>
            <section className="grid lg:grid-cols-4 p-10 bg-base-200 text-start text-base-content mx-auto max-w-screen-xl">
                <div className='lg:mx-auto'>
                    <img src={blackLogo} className="w-32" alt="" />
                    <p className='my-3'>VroomX Industries Ltd.<br />Providing reliable services since 1992</p>
                    <div className='flex'>
                        <FaLinkedin className='text-3xl mr-2' />
                        <FaFacebookSquare className='text-3xl mx-2' />
                        <FaTwitterSquare className='text-3xl mx-2' />
                        <FaYoutube className='text-4xl -mt-[3px] mx-2' />
                    </div>
                </div>
                <div className='flex flex-col lg:mx-auto lg:my-0 my-2'>
                    <p className="font-bold">Services</p>
                    <Link to="" className="link link-hover text-sm my-1">Branding</Link>
                    <Link to="" className="link link-hover text-sm my-1">Design</Link>
                    <Link to="" className="link link-hover text-sm my-1">Marketing</Link>
                    <Link to="" className="link link-hover text-sm my-1">Advertisement</Link>
                </div>
                <div className='flex flex-col lg:mx-auto lg:my-0 my-2'>
                    <p className="font-bold">Company</p>
                    <Link to="" className="link link-hover text-sm my-1">About us</Link>
                    <Link to="" className="link link-hover text-sm my-1">Contact</Link>
                    <div className='flex items-center'>
                        <Link to="" className="link link-hover text-sm my-1 mr-2">Jobs</Link>
                        <span className="badge border-none bg-[#F02441] animate-pulse">new</span>
                    </div>
                    <Link to="" className="link link-hover text-sm my-1">Press kit</Link>
                </div>
                <div className='flex flex-col lg:mx-auto lg:my-0 my-2'>
                    <p className="font-bold">Legal</p>
                    <Link to="" className="link link-hover text-sm my-1">Terms of use</Link>
                    <Link to="" className="link link-hover text-sm my-1">Privacy policy</Link>
                    <Link to="" className="link link-hover text-sm my-1">Cookie policy</Link>
                </div>
            </section>

        </footer>
    );
};

export default Footer;