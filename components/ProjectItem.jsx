import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const ProjectItem = ({ src, title, href }) => {
	return (
		<>
			<div className='relative flex group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-xl shadow-xl shadow-gray-400 h-auto'>
				<Image
					className='rounded-xl group-hover:opacity-10 '
					src={src}
					alt='/'
				/>
				<div className='hidden group-hover:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
					<h3 className='text-2xl text-white tracking-wider'>{title}</h3>
					<p className='text-2xl text-white tracking-wider py-4'>React JS</p>
					<p className='bg-white text-gray-600 rounded-xl text-center cursor-pointer p-2'>
						<Link href={href}>More Info</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default ProjectItem;
