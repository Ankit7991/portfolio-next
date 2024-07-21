import React from 'react'

export const HeadInterSection = () => {
	return (
		<div className='relative flex justify-between border-np_primary border border-solid p-2 text-np_text mb-10 text-np_microl md:text-np_microxl'>
			<div>{new Date().toDateString()}</div>
			<div>Ahmedabad, India.</div>
			<div className='absolute left-1/2 top-0 text-center bg-np_background pl-2 pr-2 sm:pl-10 sm:pr-10 font-bold text-np_textdim ' style={{ transform: 'translate(-50%, -40%)' }}>
				<p>Development with Boldness</p>
				<span>since 2020</span>
			</div>
			<div className='absolute border border-np_primary w-full left-0' style={{bottom: '-7px'}}></div>
		</div>
	)
}
