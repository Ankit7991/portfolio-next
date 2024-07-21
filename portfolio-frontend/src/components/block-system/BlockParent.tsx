'use client'
import { CommonComponentAttributes } from '@/types/common-attributes.typs'
import React, { useEffect, useState } from 'react'
import { ITheBlockParam } from './TheBlock';

export const BlockParent = (param: CommonComponentAttributes) => {
	const [blockInfo, setBlockInfo] = useState<ITheBlockParam[]>([]);

	useEffect(() => {
		if (param.children) {
			const info = React?.Children?.map(param.children, (child) => {
				if (React.isValidElement(child) && child.props.position && child.props.span) {
					return {
						id: child.props.id,
						position: child.props.position,
						span: child.props.span,
					};
				}
				return null;
			});

			if(info) setBlockInfo(info);
		}
	}, [param.children]);

	return (
		<div>
			{param.children}
			<pre>{JSON.stringify(blockInfo, null, 2)}</pre>
		</div>
	);
}
