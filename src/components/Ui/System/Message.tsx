type Props = {
	visible: boolean;
	message: string;
	type: string;
};

export const SystemMessage = (props: Props) => {
	return (
		<div className={`c_system_message ${props.visible ? 'is_active' : ''}`}>
			<p className={`c_system_message_item c_${props.type}_message`}>
				{props.message}
			</p>
		</div>
	);
};
