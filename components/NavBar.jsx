import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsList, BsXCircle } from 'react-icons/bs';
import logoIcon from '../public/assets/navLogo.png';
import {
	FaLinkedinIn,
	FaGithub,
	FaMailBulk,
	FaRegComments,
} from 'react-icons/fa';
const NavBar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkCorlor,setLinkCorlor] = useState('#1F2937')
	const router = useRouter();
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 80) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		});
	});

	useEffect(() => {
		const routes = ['/property','/crypto','/netflix','/twitch',]
		if(routes.includes(router.asPath)){
			setNavBg('transparent')
			setLinkCorlor('white')
		}else{
			setNavBg('#ecf0f3')
			setLinkCorlor('#1F2937')
		}
	}, [router]);
	const handleScroll = (content) => {
		const dom = document.getElementById(content);
		window.scrollTo({
			top: dom.offsetTop - 80,
			behavior: 'smooth',
		});
	};
	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 z-[100] shadow-xl'
					: 'fixed w-full h-20 z-[100]'
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-4'>
				<Link href='/'>
					<a>
						<Image
							className='cursor-pointer'
							src={logoIcon}
							alt='navLogo'
							width='125'
							height='50'
						/>
					</a>
				</Link>
				<div className='flex gap-4 items-center'>
					<ul style={{color:linkCorlor}} className='hidden md:flex items-center uppercase'>
						<Link href='/'>
							<li className='ml-10 text-sm hover:border-b border-[#5753DD]'>Home</li>
						</Link>
						<Link href='/#about' scroll={false}>
							<li className='ml-10 text-sm hover:border-b border-[#5753DD]'>About</li>
						</Link>
						<Link href='/#skills' scroll={false}>
							<li className='ml-10 text-sm hover:border-b border-[#5753DD]'>Skills</li>
						</Link>
						<Link href='/#projects' scroll={false}>
							<li className='ml-10 text-sm hover:border-b border-[#5753DD]'>Projects</li>
						</Link>
						<Link href='/#contact' scroll={false}>
							<li className='ml-10 text-sm hover:border-b border-[#5753DD]'>Contact</li>
						</Link>
					</ul>
					<div style={{color:linkCorlor}} onClick={() => setNav(!nav)} className='md:hidden'>
						<BsList size={25} className='cursor-pointer' />
					</div>

					{/* ????????? */}
					{nav && (
						<div className='fixed left-0 top-0 w-full h-screen bg-black/40' />
					)}
					<div className={`w-[75%] sm:w-[50%] md:w-[40%] bg-white h-screen p-10 fixed top-0 ease-in duration-300 ${nav?'left-0':'-left-full'}`}>
								<nav className='flex justify-between items-center'>
									<Image
										src={logoIcon}
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
											<li
												onClick={() => setNav(false)}
												className='mt-10 text-sm'
											>
												Home
											</li>
										</Link>
										<Link href='/#about'>
											<li
												onClick={() => setNav(false)}
												className='mt-10 text-sm'
											>
												About
											</li>
										</Link>
										<Link href='/#skills'>
											<li
												onClick={() => setNav(false)}
												className='mt-10 text-sm'
											>
												Skills
											</li>
										</Link>
										<Link href='/#projects'>
											<li
												onClick={() => setNav(false)}
												className='mt-10 text-sm'
											>
												Projects
											</li>
										</Link>
										<Link href='/#contact'>
											<li
												onClick={() => setNav(false)}
												className='mt-10 text-sm'
											>
												Contact
											</li>
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
			</div>
		</div>
	);
};

export default NavBar;
