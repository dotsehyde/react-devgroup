import React from 'react'

export const OurClient = () => {
	const netflix = '../assets/netflix.svg'
	const fedex = '../assets/fedex.svg'
	const nasa = '../assets/nasa.svg'
	const coca = '../assets/coca.svg'
	const lego = '../assets/lego.svg'
	const work1 = '../assets/work1.png'
	const work2 = '../assets/work2.png'
	const work3 = '../assets/work3.png'
	const work4 = '../assets/work4.png'
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
			{/* Works */}
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
			{/* Testimonies */}
			<div className='bg-[#F6FCFC] px-[50px] md:px-[150px]'>
				<p className='font-[700] text-[#1A0D7C] text-[25px] py-[25px] md:py-[50px] lg:text-[44px] text-center'>We trusted by</p>

				<p className='text-[#0E101A] text-[15px] text-center'>The in-house team is impressed with the quality of the designs and the quick turnaround times. DevGroup’s ability<br />
					to meet tight deadlines and make themselves available when needed made them a reliable partner. They did web design<br /> in an ongoing partnership. They collaborated on design ideas and delivered mockups, UI kits, images, and icons.</p>
			</div>
		</>
	)
}
