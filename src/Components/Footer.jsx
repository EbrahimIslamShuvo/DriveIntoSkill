import React from 'react';
import { TiSocialFacebookCircular } from 'react-icons/ti';

const Footer = () => {
    return (
        <div>
            <div className="bg-[#183114]">
                <footer className="footer sm:footer-horizontal py-10 w-10/12 mx-auto text-[#DCDE9F] flex gap-4">
                    <div className='flex flex-col gap-10'>
                        <h1 className='text-[#FCEE21] text-[48px] font-bold'>Dive Into Skills</h1>
                        <p className='text-lg w-6/12'>
                            The latest articles and courses to help you upgrade your skills and learn the latest trends. Master web Development with these amazing resources that are available for free!
                        </p>
                    </div>
                    <nav className='w-3/12'>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Blogs</a>
                        <a className="link link-hover">Courses</a>
                        <a className="link link-hover">YouTube</a>
                    </nav>
                    <nav className='w-3/12'>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms & Conditions</a>
                    </nav>
                </footer>
                <div className="">
                    <TiSocialFacebookCircular />
                </div>
            </div>
        </div>
    );
};

export default Footer;