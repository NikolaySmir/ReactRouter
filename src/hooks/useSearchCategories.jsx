import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const useSearchCategories = (category, query, pageNumber) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [categories, setCategories] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setCategories([]);
	}, [category, query]);

	useEffect(() => {
		setLoading(true);
		setError(false);
		let cancel;
		if (pageNumber === 1) {
			setCategories([]);
		}
		axios({
			method: "GET",
			url: `https://rickandmortyapi.com/api/${category}`,
			params: { q: query, page: pageNumber },
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((res) => {
				setCategories((prevState) => {
					return [...new Set([...prevState, ...res.data.results])];
				});
				setHasMore(pageNumber < res.data.info.pages);
				setLoading(false);
			})
			.catch((e) => {
				if (axios.isCancel(e)) {
					return;
				}
				setError(false);
				console.error(e);
			});

		return () => cancel();
	}, [category, query, pageNumber]);

	return { loading, error, categories, hasMore };
};
