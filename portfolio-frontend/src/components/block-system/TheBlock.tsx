import { CommonComponentAttributes } from '@/types/common-attributes.typs'
import React from 'react'

export interface ITheBlockParam {
	position: [number, number],
	span: [number, number],
	id: string
}

export const TheBlock = (param: ITheBlockParam & CommonComponentAttributes) => {
	return (
		<div>
			TheBlock
			{param.children}
		</div>
	)
}
