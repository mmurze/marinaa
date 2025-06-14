import { useEffect, useRef } from 'react';

export default function useClickOutside(callback) {
	const ref = useRef(null);
	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) callback();
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);
	return ref;
}
