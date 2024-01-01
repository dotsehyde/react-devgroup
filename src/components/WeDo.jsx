
import React from 'react'
import codeIcon from '../assets/icon/code.svg'
import andIcon from '../assets/icon/android.svg'
import iosIcon from '../assets/icon/ios.svg'
import paintIcon from '../assets/icon/paint.svg'
import eyeIcon from '../assets/icon/eye.svg'
import goodIcon from '../assets/icon/good.svg'
import handIcon from '../assets/icon/hands.svg'
import targetIcon from '../assets/icon/target.svg'
import searchIcon from '../assets/icon/search.svg'


export default function WeDo() {

	const cards = [
		{
			title: "Web development",
			color: "#F0F8FD",
			icon: codeIcon
		},
		{
			title: "Android development",
			color: "#FBF6F2",
			icon: andIcon
		},
		{
			title: "iOS development",
			color: "#FCF9FF",
			icon: iosIcon
		},
		{
			title: "UI/UX",
			color: "#FAF9F4",
			icon: paintIcon
		}, {
			title: "Project management",
			color: "#EDF4F4",
			icon: eyeIcon
		}, {
			title: "Quality assurance",
			color: "#FAF5F6",
			icon: goodIcon
		},
	]

	const values = [{
		icon: searchIcon,
		title: "Transparency",
		desc: "We have nothing to hide.\nWe offer quality and knowledge"
	}, {
		icon: handIcon,
		title: "Dedicated teams",
		desc: "Our team members are business-oriented and will understand your goals"
	}, {
		icon: targetIcon,
		title: "Smart processes",
		desc: "Our products offer equally great design and technology"
	}]
	return (
		<>
			<div className='mt-[50px] mb-7'>
				<h3 className='text-center text-[24px] md:text-[34px] font-semibold text-[#1A0D7C]'>We develop and deliver</h3>
				<div className="flex justify-around">
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8'>
						{cards.map((e, index) => (
							<WeCard
								key={index} // Add a unique key for each element when using map
								color={e.color}
								title={e.title}
								icon={e.icon}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='mt-[100px] mb-7'>
				<h3 className='text-center text-[24px] md:text-[34px] font-semibold text-[#1A0D7C]'>Our values</h3>
				<div className="flex justify-around">
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8'>
						{values.map((e, index) => (
							<ValueCard
								key={index} // Add a unique key for each element when using map
								desc={e.desc}
								title={e.title}
								icon={e.icon}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}


function ValueCard(props) {
	return (
		<div
			className='w-[360px] flex flex-col items-center md:items-start gap-5 justify-center'>
			<img src={props.icon} alt="" />
			<p className='text-[1.2rem] text-[#1A0D7C] font-[700]'>
				{props.title}
			</p>
			<p className='text-[1rem] text-center md:text-start text-wrap text-[#0E101A] font-[300]'>
				{props.desc}
			</p>
		</div>
	)
}



function WeCard(props) {
	return (
		<div
			style={{ backgroundColor: props.color }}
			className={`rounded-[16px] w-[360px] h-[280px] flex flex-col items-center gap-9 justify-center`}>
			<img src={props.icon} alt="" />
			<p className='text-[1.2rem] text-[#1A0D7C] font-[700]'>
				{props.title}
			</p>
		</div>
	)
}

