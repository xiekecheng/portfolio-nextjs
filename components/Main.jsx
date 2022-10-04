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
					<p className='tracking-widest'>Let's Build Something together</p>
					<h1 className='text-gray-700 py-4'>
						Hi I'm <span className='text-[#5753DD]'>Ken</span>
					</h1>
					<h1 className='text-gray-700 py-2'>A Front-End Web Developer</h1>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto'>
						I'm a front-end web developer specializing in building(and
						occasionally designing) excepional digital experience. Currently,
						I'm focused on building responsive front-end web applications while
						learning back-end techologies
					</p>
					<div className='flex justify-between items-center py-4 max-w-[330px] mx-auto '>
						<div className='cursor-pointer shadow-lg rounded-full hover:scale-110 p-3'>
							<FaLinkedinIn />
						</div>
						<div className='cursor-pointer shadow-lg rounded-full hover:scale-105  p-3'>
							<FaGithub />
						</div>
						<div className='cursor-pointer shadow-lg rounded-full hover:scale-105  p-3'>
							<FaMailBulk />
						</div>
						<div className='cursor-pointer shadow-lg rounded-full hover:scale-105  p-3'>
							<FaRegComments />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
