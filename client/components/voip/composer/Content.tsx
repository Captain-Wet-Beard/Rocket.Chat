import { Box, Icon } from '@rocket.chat/fuselage';
import React, { ReactElement } from 'react';

type ContentPropsType = {
	icon: string;
	text: string;
};

const Content = ({ icon, text }: ContentPropsType): ReactElement => (
	<Box
		w='full'
		h='full'
		display='flex'
		flexDirection='row'
		alignItems='center'
		justifyContent='center'
	>
		<Icon color='info' size='24px' name={icon} />
		<Box mis='4px' fontScale='p2' color='info'>
			{text}
		</Box>
	</Box>
);

export default Content;