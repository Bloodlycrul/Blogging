import { useEffect, useState } from "react";
import { fetchItems } from "./postSlice";
import { useDispatch } from "react-redux";


const useFetch = () => {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch ();

  useEffect(() => {
    fetch("http://hemankenterprises.online/backend/post")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok", response);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchItems(data.detail));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error)});
    // eslint-disable-next-line
  }, [dispatch]);

  return loading;

}

export default useFetch
