import React from 'react';
import Image from 'next/image';
import htmlIcon from '../public/assets/skills/html.png';
import cssIcon from '../public/assets/skills/css.png';
import javascriptIcon from '../public/assets/skills/javascript.png';
import tailwindIcon from '../public/assets/skills/tailwind.png';
import reactIcon from '../public/assets/skills/react.png';
import VueIcon from '../public/assets/skills/Vue.png';
import githubIcon from '../public/assets/skills/github1.png';
import firebaseIcon from '../public/assets/skills/firebase.png';
const Skills = () => {
	return (
		<div id='skills' className='w-full lg:h-screen p-2'>
			<div className='flex flex-col max-w-[1240px] h-full mx-auto justify-center'>
				<p className='text-xl tracking-widest text-[#5753DD] uppercase'>
					Skills
				</p>
				<h2 className='py-4'>What I Can Do</h2>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='grid grid-cols-2 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div>
							<Image src={htmlIcon} alt='/' width='64' height='64'></Image>
						</div>
						<div className='flex justify-center items-center'>HTML</div>
					</div>

					<div className='grid grid-cols-2 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div>
							<Image src={cssIcon} alt='/' width='64' height='64'></Image>
						</div>
						<div className='flex justify-center items-center'>CSS</div>
					</div>

					<div className='grid grid-cols-2 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div>
							<Image src={javascriptIcon} alt='/' width='64' height='64'></Image>
						</div>
						<div className='flex justify-center items-center'>JavaScript</div>
					</div>

					<div className='grid grid-cols-2 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div>
							<Image src={tailwindIcon} alt='/' width='64' height='64'></Image>
						</div>
						<div className='flex justify-center items-center'>TailWindCSS</div>
					</div>

					<div className='grid grid-cols-2 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div>
							<Image src={reactIcon} alt='/' width='64' height='64'></Image>
						</div>
						<div className='flex justify-center items-center'>React</div>
					</div>

					<div className='grid grid-cols-2 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div>
							<Image src={VueIcon} alt='/' width='64' height='64'></Image>
						</div>
						<div className='flex justify-center items-center'>Vue</div>
					</div>

					<div className='grid grid-cols-2 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div>
							<Image src={githubIcon} alt='/' width='64' height='64'></Image>
						</div>
						<div className='flex justify-center items-center'>GitHub</div>
					</div>

					<div className='grid grid-cols-2 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div>
							<Image src={firebaseIcon} alt='/' width='64' height='64'></Image>
						</div>
						<div className='flex justify-center items-center'>FireBase</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
