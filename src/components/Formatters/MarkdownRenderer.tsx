import ReactMarkdown from 'react-markdown';

type Props = {
  content: string;
};

export const MarkdownRenderer = (props: Props) => {
  const { content } = props;

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;