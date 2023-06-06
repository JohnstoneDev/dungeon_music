import {
	useCallback,
	useEffect,
	useState
} from "react";


export const useFetch = (url) => {
	const [ stateItem, setStateItem ] = useState([]);

	const getItems = useCallback(async () => {
		const response = await fetch(url);
		const stateItem = await response.json();
		setStateItem(stateItem);
	},[url]);


	useEffect(() => {
		getItems()
	},[getItems, url])

	return { stateItem };
}