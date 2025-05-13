import ellipsis from "text-ellipsis"
import htmlContent from "helpers/htmlContent";

export default function stringTrim(string, trim = 200) {
	return htmlContent(ellipsis(string.replace(/<(.|\n)*?>/g, ''), trim))
}