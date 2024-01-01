import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import authStore from '../providers/AuthStore';

const Header = observer(() => {
	const logo = '../assets/logo.png';
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			<div className='w-full h-[64px] hidden flex-row justify-around items-center px-10 md:flex'>
				<img src={logo} alt="logo" className='h-[40px]' />
				<ul className='flex gap-11 text-gray-600 font-semibold items-center'>
					<li className='hover:text-gray-400 hover:cursor-pointer'>Services</li>
					<Link to={"/about"} className='hover:text-gray-400 hover:cursor-pointer'>About</Link>
					<li className='hover:text-gray-400 hover:cursor-pointer'>Project</li>
					<li className='hover:text-gray-400 hover:cursor-pointer'>Career</li>
					<li className='hover:cursor-pointer hover:bg-[#A1D7D4] hover:text-black border-[#A1D7D4] border-2 py-2 px-[25px] rounded-[24px]'>Contact us</li>
					{authStore.isAuthenticated ? (
						<li
							onClick={() => {
								authStore.logout();
							}}
						>{authStore.user.name}</li>
					) : (<li
						onClick={() => {
							authStore.login("Test User");

						}}
					>Login</li>)}
				</ul >
			</div >
			<div className='w-full h-[64px] flex flex-row justify-between items-center px-10 md:hidden'>
				<img src={logo} alt="logo" className='h-[40px]' />
				<div onClick={() => {
					setIsMenuOpen(!isMenuOpen)
				}}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</div>
			</div >
			{isMenuOpen ? (
				<div className=' w-full px-5 md:hidden'>
					<ul className='flex flex-col shadow-lg gap-2 py-4 px-5 text-gray-600 rounded-br-2xl rounded-bl-2xl font-semibold items-center divide-y w-[100%]'>
						<li className='hover:text-gray-400 hover:cursor-pointer'>Services</li>

						<Link to={"/about"} className='hover:text-gray-400 hover:cursor-pointer'>About</Link>

						<li className='hover:text-gray-400 hover:cursor-pointer'>Project</li>

						<li className='hover:text-gray-400 hover:cursor-pointer'>Career</li>

						<li className='bg-[#A1D7D4] py-2 px-[25px] rounded-[24px]'>Contact us</li>
					</ul >
				</div>
			) : (
				<div></div>
			)}

		</>
	);
})

export default Header