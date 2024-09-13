import Icon from '@mui/icons-material/Error';

type Props = {
  color: string;
  marginTop: string;
};

export const ErrorIcon = (props: Props) => {
  return (
    <Icon
      sx={{
        color: props.color ? props.color : 'inherit',
        marginTop: props.marginTop ? props.marginTop : 0,
      }}
    />
  );
};

export default ErrorIcon;
