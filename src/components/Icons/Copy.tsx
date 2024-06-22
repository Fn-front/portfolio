import Icon from '@mui/icons-material/ContentCopy';

type Props = {
  color: string
  marginTop: string
}

export const ContentCopyIcon = (props: Props) => {
  return (
    <Icon
      sx={{
        color: props.color ? props.color : 'inherit',
        marginTop: props.marginTop ? props.marginTop : 0
      }}
    />
  )
}

export default ContentCopyIcon