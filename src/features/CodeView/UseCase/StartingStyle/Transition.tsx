'use client';

import { useState } from 'react';

const Transition = () => {
	const [transition, setTransition] = useState<boolean>(false);

	return (
		<>
			<button
				className='c_starting_style_button'
				onClick={() => setTransition((prev) => !prev)}
			>
				onClick!
			</button>
			<div className='c_starting_style'>
				<div
					className={`c_starting_style_item c_starting_style_item_ver_transition ${transition ? 'is_active starting-style' : ''}`}
				></div>
			</div>
		</>
	);
};

export default Transition;
