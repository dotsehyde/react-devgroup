import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import WeDo from '../components/WeDo';
import WorkProcess from '../components/WorkProcess';
import { OurClient } from '../components/OurClient';
import { Footer } from '../components/Footer';

export default function HomeView() {
	return (
		<>
			<Header />
			<div className='px-5 md:px-[120px]'>
				<Hero />
			</div>
			<WeDo />
			<WorkProcess />
			<OurClient />
			<Footer />
		</>
	)
}
