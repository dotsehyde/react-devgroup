import React from 'react'
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

const Hero = observer(() => {
	const heroImg = '../assets/hero.svg'
	return (
		<div className='md:flex-row mt-4 md:mt-0 items-center justify-between flex-col-reserve flex flex-col gap-1'>
			<div>
				<p className='text-[15px] md:text-[20px] font-[300] md:mt-[50px] text-gray-600'>Oh, Hello</p>
				<p className='font-[700] text-[#1A0D7C] text-[30px] md:text-[42px] mt-[20px] md:mt-[25px] lg:text-[64px] leading-none'>
					We are a software <br /> development and <br />design company
				</p>
				<p className='text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-gray-600 font-[300] mt-[20px] md:mt-[48px]'>High-quality digital resources which make<br />
					your design workflow faster and easier!</p>
				<Link to={"/about"}>
					<button className='text-[20px] font-[300] border-[#A1D7D4] mt-[20px] md:mt-[48px] border-2 rounded-[50px] px-[30px] py-2 hover:cursor-pointer hover:bg-[#A1D7D4] hover:text-black'> About us</button>
				</Link>
			</div>
			<img src={heroImg} alt="heroImg" className='lg:h-full h-[50vh]' />
		</div>
	)
})


export default Hero;
