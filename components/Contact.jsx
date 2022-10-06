import React from 'react';
import Image from 'next/image';
import contactImg from '../public/assets/contact.jpg';
import {
	FaLinkedinIn,
	FaGithub,
	FaMailBulk,
	FaRegComments,
} from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
const Contact = () => {
	return (
		<div id='contact' className='w-full lg:h-screen p-2'>
			<div className='max-w-[1240px] mx-auto px-2 py-20'>
				<p className='text-xl tracking-widest text-[#5753DD] uppercase'>
					Contact
				</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='lg:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 rounded-xl hover:scale-105 ease-in duration-300'>
							<Image className='rounded-xl ' src={contactImg} alt='/' />
						</div>
						<div>
							<h2 className='py-2'>Name Here</h2>
							<p>Front-End Developer</p>
							<p className='py-4'>
								I am available for freelance or full-time positions. Contact me
								and let&apos;s talk.
							</p>
						</div>
						<div>
							<p className='uppercase mt-8'>Contact With Me</p>
							<div className='flex justify-around max-w-[330px] mx-auto'>
								<div className='cursor-pointer shadow-lg rounded-full hover:scale-105 p-6 ease-in duration-300'>
									<FaLinkedinIn />
								</div>
								<div className='cursor-pointer shadow-lg rounded-full hover:scale-105  p-6 ease-in duration-300'>
									<FaGithub />
								</div>
								<div className='cursor-pointer shadow-lg rounded-full hover:scale-105  p-6 ease-in duration-300'>
									<FaMailBulk />
								</div>
								<div className='cursor-pointer shadow-lg rounded-full hover:scale-105  p-6 ease-in duration-300'>
									<FaRegComments />
								</div>
							</div>
						</div>
					</div>
					{/* right */}
					<div className='w-full lg:col-span-3 shadow-xl shadow-gray-400 rounded-xl p-4'>
						<form action=''>
							<div className='grid md:grid-cols-2 gap-4'>
								<div className='flex flex-col'>
									<label className='uppercase text-sm py-2'>Name</label>
									<input
										className='rounded-lg border-2 p-3 border-gray-300'
										type='text'
									/>
								</div>
								<div className='flex flex-col'>
									<label className='uppercase text-sm py-2'>Phone Number</label>
									<input
										className='rounded-lg border-2 p-3 border-gray-300'
										type='text'
									/>
								</div>
							</div>
							<div className='flex flex-col py-2'>
								<label className='uppercase text-sm py-2'>Email</label>
								<input
									className='rounded-lg border-2 p-3 border-gray-300'
									type='email'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='uppercase text-sm py-2'>Subject</label>
								<input
									className='rounded-lg border-2 p-3 border-gray-300'
									type='text'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='uppercase text-sm py-2'>Message</label>
								<textarea
									className='rounded-lg border-2 p-3 border-gray-300'
									rows='10'
								/>
							</div>
							<button className='uppercase w-full p-4 mt-2'>
								send message
							</button>
						</form>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className=' shadow-xl cursor-pointer p-4 shadow-gray-400 rounded-full hover:scale-105  ease-in duration-300'>
							<HiOutlineChevronDoubleUp size={30} className='text-[#5753DD]'/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
