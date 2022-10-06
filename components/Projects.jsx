import React from 'react';
import propertyIcon from '../public/assets/projects/property.jpg';
import cryptoIcon from '../public/assets/projects/crypto.jpg';
import netflixIcon from '../public/assets/projects/netflix.jpg';
import twitchIcon from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';
const Projects = () => {
	const projectItems = [
		{
			title: 'Property Finder',
			src: propertyIcon,
			href:'/property'
		},
		{
			title: 'Crypto App',
			src: cryptoIcon,
			href:'/crypto'
		},
		{
			title: 'Property Finder',
			src: netflixIcon,
			href:'/netflix'
		},
		{
			title: 'Property Finder',
			src: twitchIcon,
			href:'/twitch'
		},
	];
	return (
		<div id='projects' className='w-full p-2'>
			<div className='max-w-[1240px] mx-auto px-2 py-20'>
				<p className='text-xl tracking-widest text-[#5753DD] uppercase'>
					Projects
				</p>
				<h2 className='py-4'>What I&apos;ve built</h2>
				<div>
					<div className='grid md:grid-cols-2 gap-8'>
						{projectItems.map((item, id) => (
							<ProjectItem key={id} src={item.src} title={item.title} href={item.href} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
