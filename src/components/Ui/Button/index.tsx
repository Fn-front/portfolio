import { Margin } from '@/functions/types/margin';

type Color = 'blue' | 'green';

type Type = 'button' | 'submit';

type Size = 'small' | 'medium' | 'large';

type Position = 'center' | 'right';

type Props = {
	type?: Type;
	label: string;
	color?: Color;
	size?: Size;
	mt?: Margin;
	position?: Position;
};

export const Button = (props: Props) => {
	const { type, label, color, size, mt, position } = props;

	return (
		<>
			<button
				type={type ?? 'button'}
				className={`c_button c_button_${color ? color : 'normal'} c_button_${size ? size : 'medium'} ${mt ? 'u_mt' + mt : ''} ${position ? 'c_button_' + position : ''}`}
			>
				{label}
			</button>
		</>
	);
};

export default Button;
