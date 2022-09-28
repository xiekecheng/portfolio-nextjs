import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsList, BsXCircle } from 'react-icons/bs';

const NavBar = () => {
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
					<ul className='hidden md:flex items-center'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>About</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Projects
							</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Contact
							</li>
						</Link>
					</ul>
					<div className='md:hidden'>
						<BsList size={25} className='cursor-pointer' />
					</div>

					<div className='fixed left-0 top-0 w-full h-screen bg-black/40'>
						<div className='w-[75%] sm:w-[50%] md:w-[40%] bg-white h-screen p-3'>
							<nav className='flex justify-between items-center'>
								<Image
									src='/../public/assets/navLogo.png'
									alt='navLogo'
									width='125'
									height='50'
								/>
								<BsXCircle size={25} />
							</nav>
							<ul className='hidden md:flex flex-col'>
								<Link href='/'>
									<li className='mt-10 text-sm uppercase hover:border-b'>
										Home
									</li>
								</Link>
								<Link href='/'>
									<li className='mt-10 text-sm uppercase hover:border-b'>
										About
									</li>
								</Link>
								<Link href='/'>
									<li className='mt-10 text-sm uppercase hover:border-b'>
										Skills
									</li>
								</Link>
								<Link href='/'>
									<li className='mt-10 text-sm uppercase hover:border-b'>
										Projects
									</li>
								</Link>
								<Link href='/'>
									<li className='mt-10 text-sm uppercase hover:border-b'>
										Contact
									</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
