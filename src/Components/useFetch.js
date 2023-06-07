import {
	useCallback,
	useEffect,
	useState
} from "react";


export const useFetch = (url) => {
	const [ stateItem, setStateItem ] = useState({});
	const [ loading, setLoading ] = useState(true);

	const getItems = useCallback(async () => {
		const response = await fetch(url);
		const stateItem = await response.json();

		setTimeout(() => {
			setStateItem(stateItem);
			setLoading(false);
		},2000)

	},[url]);


	useEffect(() => {
		getItems()
	},[getItems, url])

	return { stateItem, loading };
}