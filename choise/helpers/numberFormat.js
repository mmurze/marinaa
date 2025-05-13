import {format} from "number-currency-format"

export default function numberFormat(num, thousandSeparator = " ", decimalSeparator = ",", decimalsDigits = "0"){
	return format(num, {thousandSeparator, decimalSeparator, decimalsDigits, showDecimals: "IF_NEEDED"})
}