import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const useGetCategoryCard = (category, id) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(false);
		let cancel;
		axios({
			method: "GET",
			url: `https://rickandmortyapi.com/api/${category}/${id}`,
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((res) => {
				setLoading(false);
				setData(res.data);
			})
			.catch((e) => {
				if (axios.isCancel(e)) {
					return;
				}
				setError(false);
				console.error(e);
			});

		return () => cancel();
	}, [category, id]);

	return { data, loading, error };
};
