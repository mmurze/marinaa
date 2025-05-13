import parse from 'html-react-parser';

export default function htmlContent(content){
  return content ? parse(content) : ""
}
