import { useState, useEffect, MutableRefObject } from 'react';

type IUseElementSize = (ref: MutableRefObject<HTMLElement>) => void;

const useElementSize: IUseElementSize = (ref) => {
	const [size, setSize] = useState({});

	useEffect(() => {
		if (ref.current == null) return;
		const observer = new ResizeObserver(([entry]) =>
			setSize(entry.contentRect)
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [ref]);

	return size;
};

export default useElementSize;
