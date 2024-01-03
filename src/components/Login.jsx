import React, { useState } from 'react';
import { observer } from 'mobx-react';
import authStore from '../providers/AuthStore';
import { motion } from 'framer-motion';


export const Login = observer(() => {
	const logo = '../assets/logo.png'
	let [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<>

			<motion.div
				className="relative z-[99]"
				animate={{ opacity: authStore.slideOverOpen ? 1 : 0 }}
				transition={{ duration: 0.5 }}
			>
				{authStore.slideOverOpen && (
					<motion.div
						className="fixed inset-0 bg-black bg-opacity-10"
						onClick={() => {
							authStore.slideOverOpen = !authStore.slideOverOpen;
						}}
					></motion.div>)}
				<motion.div
					initial={{ x: '100%' }}
					animate={{ x: authStore.slideOverOpen ? 0 : '100%' }}
					transition={{ duration: 0.5 }}
					className="fixed inset-y-0 right-0 flex max-w-full pl-10"
				>
					<div className="bg-white w-[400px] md:w-[500px]">
						{/* Header */}
						<div className="flex justify-between items-center px-[30px] pt-[20px]">
							<p className="text-[#1A0D7C] font-medium text-2xl">Login</p>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="border-[1px] border-gray-300 p-1 text-lg hover:text-gray-500 text-gray-400 rounded-[10px]"
								onClick={() => {
									authStore.slideOverOpen = !authStore.slideOverOpen;
								}}
							>
								Close
							</motion.button>
						</div>
						{/* Body */}
						<div className='mt-[50px] flex flex-col items-center gap-5'>
							<img src={logo} alt="logo" width={"30%"} />
							<p className='text-center text-lg'>Login into your account...</p>
							<div className="w-full mx-auto px-[50px]">
								<input
									value={email}
									onChange={(e) => {
										setEmail(e.target.value)
									}} type="email" placeholder="Email Address" className="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
							</div>

							<div className="w-full mx-auto px-[50px]">
								<input value={password}
									onChange={(e) => {
										setPassword(e.target.value)
									}} type="password" placeholder="Password" className="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
							</div>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={
									() => {
										//submit login
									}
								}
								className='bg-[#1A0D7C] px-8 rounded text-[17px] font-medium py-2 text-white'>Login</motion.button>
							<p
								className='text-[#1A0D7C] underline text-[18px] font-medium hover:text-[#262253] hover:cursor-pointer'
							>Forgotten Password?</p>

						</div>
					</div>
				</motion.div>
			</motion.div>

		</>
	);
});
