import React from 'react'
import img from '../assets/work_process.svg'
import { Link } from 'react-router-dom';

export default function WorkProcess() {
	return (
		<div className='bg-[#EDF4F4] h-[360px] w-full justify-center lg:justify-start items-center mt-[80px] md:mt-[250px] mb-[50px] flex md:relative'>
			<div className='flex flex-col items-center lg:items-start ml-0 md:ml-[50px] mt-[50px] lg:ml-[100px]'>
				<p className='font-[700] text-[#1A0D7C] text-[30px] lg:text-[44px]'>Work process</p>
				<p className='text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-center text-gray-600 font-[300] mt-[20px] md:mt-[25px]'>We've perfected a simple and time-tested processes for<br /> delivering high-quality products that your users will love.</p>
				<Link to={"/about"}>
					<button className='text-[16px] font-[300] border-[#A1D7D4] mt-[20px] md:mt-[28px] border-2 rounded-[50px] px-[30px] py-2 hover:cursor-pointer hover:bg-[#A1D7D4] hover:text-black'>See how we do it</button>
				</Link>
			</div>
			<div className='hidden lg:block md:absolute right-0 bottom-0'>
				<img src={img} alt="work_process" />
			</div>
		</div>

	)
}
