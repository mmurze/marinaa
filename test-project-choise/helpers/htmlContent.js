import ReactHtmlParser from 'react-html-parser';

/**
 * Парсер строки в html
 * @constructor
 */
export default function htmlContent(content){
	return ReactHtmlParser(content)
}
