import React from 'react'
import netflix from '../assets/netflix.svg'
import fedex from '../assets/fedex.svg'
import nasa from '../assets/nasa.svg'
import coca from '../assets/coca.svg'
import lego from '../assets/lego.svg'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'

export const OurClient = () => {
	const works = [{
		title: "Keyword Tool Redesign",
		img: work1,
		desc: "Keyword Tool"
	}, {
		title: "Web Builder",
		img: work2,
		desc: "Ad.IQ"
	}, {
		title: "BirdieLessons",
		img: work3,
		desc: "BirdieLessons"
	}, {
		title: "Medical Service",
		img: work4,
		desc: "Medical"
	}]
	return (
		<>
			<div className='flex flex-col items-center'>
				<p className='font-[700] text-[#1A0D7C] text-[25px] mt-[80px] lg:text-[40px] text-center'>Our Clients</p>
				<div className='bg-[#E6E8F0] h-[1px] w-[80%] my-8'></div>
				<div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-10 px-4 lg:p-0'>
					<img src={netflix} alt="Netflix" />
					<img src={lego} alt="Lego" />
					<img src={coca} alt="Coca-cola" />
					<img src={nasa} alt="Nasa" />
					<img src={fedex} alt="FedEx" />
				</div>
				<div className='bg-[#E6E8F0] h-[1px] w-[80%] my-8'></div>
			</div>
			<div className='w-full px-0 md:px-[150px]'>
				<p className='font-[700] text-[#1A0D7C] text-[25px] mt-[80px] mb-7 lg:text-[44px] text-center'>Recent Projects</p>
				<div className='grid content-center grid-cols-1 lg:grid-cols-2 gap-10'>
					{works.map((e, i) => {
						return (
							<div key={i} className="flex flex-col items-center justify-center">
								<img src={e.img} alt="" className='h-[300px] lg:h-[400px] w-[350px] lg:w-[490px]' />
								<p className='font-[500] text-[#1A0D7C] text-[18px] text-center md:text-start'>{e.title}</p>
								<p className='font-[400] text-[#AEB0C1] text-[15px] text-center md:text-start'>{e.desc}</p>
							</div>
						);
					})}
				</div>
				<div className='flex justify-center'>
					<button className='font-[500] text-[#1A0D7C] text-[19px] underline my-[30px]'>View All Products</button>
				</div>
			</div>
		</>
	)
}
