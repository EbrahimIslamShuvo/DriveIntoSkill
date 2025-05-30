import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#183114] to-[#446129]">
                <div className="flex justify-between items-center w-10/12 mx-auto py-2">
                    <div className="">
                        <h1 className='text-[#FCEE21] text-[48px] font-bold'>Dive Into Skills</h1>
                    </div>
                    <div className="">
                        <ul className='flex gap-10 text-[24px]'>
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Courses</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;