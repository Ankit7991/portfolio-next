'use client'

import TextChange from "./animations/TextChange"

export default function PaperPortfolio() {
	return (
		<div>
			<h1>Hi</h1>
			<TextChange words={['Ankit', 'Software Engineer']} type='okay' auto={true}/>
		</div>
	)
}
