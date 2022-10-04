import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsList, BsXCircle } from 'react-icons/bs';
import {
	FaLinkedinIn,
	FaGithub,
	FaMailBulk,
	FaRegComments,
} from 'react-icons/fa';
const NavBar = () => {
	const [nav, setNav] = useState(false);
	return (
		<div className='fixed w-full h-20 z-10 shadow-xl'>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-4'>
				<Image
					src='/../public/assets/navLogo.png'
					alt='navLogo'
					width='125'
					height='50'
				/>
				<div>
					<ul className='hidden md:flex items-center uppercase'>
						<Link href='/'>
							<li className='ml-10 text-sm hover:border-b'>Home</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm hover:border-b'>About</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm hover:border-b'>Skills</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm hover:border-b'>Projects</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm hover:border-b'>Contact</li>
						</Link>
					</ul>
					<div onClick={() => setNav(!nav)} className='md:hidden'>
						<BsList size={25} className='cursor-pointer' />
					</div>

					{nav && (
						<div className='fixed left-0 top-0 w-full h-screen bg-black/40'>
							<div className='w-[75%] sm:w-[50%] md:w-[40%] bg-white h-screen p-10'>
								<nav className='flex justify-between items-center'>
									<Image
										src='/../public/assets/navLogo.png'
										alt='navLogo'
										width='125'
										height='50'
									/>
									<BsXCircle
										onClick={() => setNav(false)}
										className='cursor-pointer'
										size={25}
									/>
								</nav>
								<div className='flex flex-col'>
									<ul className='uppercase'>
										<Link href='/'>
											<li className='mt-10 text-sm'>Home</li>
										</Link>
										<Link href='/'>
											<li className='mt-10 text-sm'>About</li>
										</Link>
										<Link href='/'>
											<li className='mt-10 text-sm'>Skills</li>
										</Link>
										<Link href='/'>
											<li className='mt-10 text-sm'>Projects</li>
										</Link>
										<Link href='/'>
											<li className='mt-10 text-sm'>Contact</li>
										</Link>
									</ul>
									<div className='mt-40'>
										<p className='uppercase text-purple-400'>Lets Contect</p>
										<div className='flex gap-4 items-center justify-around mt-10 w-full sm:w-[80%]'>
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
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
