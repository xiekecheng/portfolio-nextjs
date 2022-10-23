import React from 'react';
import {
	FaLinkedinIn,
	FaGithub,
	FaMailBulk,
	FaRegComments,
} from 'react-icons/fa';
const Main = () => {
	return (
		<div className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
				<div>
					<p className='tracking-widest'>Let&apos;s Build Something together</p>
					<h1 className='text-gray-700 py-4'>
						Hi I&apos;m <span className='text-[#5753DD]'>Ken</span>
					</h1>
					<h1 className='text-gray-700 py-2'>A Front-End Web Developer</h1>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto lg:text-xl'>
						I&apos;m a front-end web developer specializing in building(and
						occasionally designing) excepional digital experience. Currently,
						I&apos;m focused on building responsive front-end web applications while
						learning back-end techologies
					</p>
					<div className='flex justify-between items-center py-4 max-w-[330px] mx-auto '>
						<div className='cursor-pointer shadow-lg rounded-full hover:scale-125 p-3 ease-in duration-300'>
							<FaLinkedinIn/>
						</div>
						<div className='cursor-pointer shadow-lg rounded-full hover:scale-125  p-3 ease-in duration-300'>
							<FaGithub />
						</div>
						<div className='cursor-pointer shadow-lg rounded-full hover:scale-125  p-3 ease-in duration-300'>
							<FaMailBulk />
						</div>
						<div className='cursor-pointer shadow-lg rounded-full hover:scale-125  p-3 ease-in duration-300'>
							<FaRegComments />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
