import React from 'react';
import Image from 'next/image';
import propertyIcon from '../public/assets/projects/property.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
const property = () => {
	return (
		<div className='w-full'>
			{/* backgound */}
			<div className='w-full h-[40vh] lg:h-[50vh] relative'>
				<div className='w-full h-full bg-black/70 z-10 absolute'></div>
				<Image
					className='absolute'
					src={propertyIcon}
					alt='/'
					layout='fill'
					objectFit='cover'
				/>
				<div className='absolute top-[70%] p-2 left-[50%] translate-x-[-50%] z-20 text-white max-w-[1240px] w-full mx-auto '>
					<h2 className='py-2'>Property Finder</h2>
					<h3>ReactJS Tailwind FireBase</h3>
				</div>
			</div>
			{/* description */}
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 p-2'>
				<div className='md:col-span-4'>
					<p>Project</p>
					<h2>OverView</h2>
					<p>
						This app was built using React JS and is hosted on Firebase. Users
						are able to search properties based on an Address, City, or ZIP code
						to retrieve a list of active properties currently for sale. You will
						be able to view property information as well as the specific
						location of the property integrated with the Google Maps API. User
						authentication is available so you can signup and signin to your
						account with an email address in order to save your favorite
						properties. This is made possible with Zillow API.
					</p>
					<button className='text-white py-2 px-8 mt-4 mr-8'>Code</button>
					<button className='text-white py-2 px-8 mt-4 mr-8'>Demo</button>
				</div>
				<div className='md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
					<h4 className='text-center'>Technologies</h4>
					<div className='grid md:grid-cols-1 sm:grid-cols-3 grid-cols-2'>
						<p className='py-2 flex items-center text-gray-600'>
							<RiRadioButtonFill className='pr-1' />
							React
						</p>
						<p className='py-2 flex items-center text-gray-600'>
							<RiRadioButtonFill className='pr-1' />
							Tailwind
						</p>
						<p className='py-2 flex items-center text-gray-600'>
							<RiRadioButtonFill className='pr-1' />
							Javascript
						</p>
						<p className='py-2 flex items-center text-gray-600'>
							<RiRadioButtonFill className='pr-1' />
							Firebase
						</p>
						<p className='py-2 flex items-center text-gray-600'>
							<RiRadioButtonFill className='pr-1' />
							Google API
						</p>
						<p className='py-2 flex items-center text-gray-600'>
							<RiRadioButtonFill className='pr-1' />
							Zillow API
						</p>
					</div>
				</div>
				<Link href='/#projects'>
					<p className='underline p-2 cursor-pointer'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default property;
