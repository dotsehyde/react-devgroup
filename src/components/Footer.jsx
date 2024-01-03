
import React from 'react'
import { motion } from 'framer-motion';

export const Footer = () => {

	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 px-[20px] md:px-[80px] gap-8 lg:px-[150px] py-[80px]" >
				<div className='px-[50px] '>
					<p className="text-[60px] font-[700] text-[#1A0D7C] ">Let Work</p>
					<p className='text-[20px] text-center md:text-left font-[400] text-[#0E101A]'>Let’s make something good together! Just enter your details and we will reply within 24 hours.</p>
				</div>
				<div className='w-full flex flex-col justify-center px-[50px] '>
					<div className="w-full  mx-auto mb-[20px]">
						<input
							type="email" placeholder="Email Address" className="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
					</div>
					<motion.button

						className='w-full  hover:cursor-pointer hover:bg-[#A1D7D4] hover:text-black border-[#A1D7D4] border-2 py-2 px-[25px] rounded-[24px]'>Get Started</motion.button>
				</div>
			</div>
			<div className='px-[120px]'>
				<div className='flex justify-between items-center'>
					<img src="../assets/logo.png" alt="logo" />
					<div className='flex md:gap-10 flex-col md:flex-row gap-5'>
						<div>
							<p className='font-[600] text-[15px]'>Email Us</p>
							<p className='font-[300] text-[15px]'>info@devgroup.com</p>
						</div>
						<div>
							<p className='font-[600] text-[15px]'>Call Us</p>
							<p className='font-[300] text-[15px]'>+1 321 22 45 567</p>
						</div>
					</div>
				</div>
				<div className='h-[1px] w-full bg-[#E6E8F0] my-8'></div>
				<div className='flex justify-between items-center mb-8'>
					<p className='font-[300] text-[15px]'>{new Date().getFullYear()}, DevGroup © Copyright</p>
					<img src="../assets/slogo.png" alt="logo" />
				</div>
			</div>
		</>
	)
}
