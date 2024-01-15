import { useEffect, useState } from "react";
import { fetchItems } from "./postSlice";
import { useDispatch } from "react-redux";


const UseFetch = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch ();

  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok", response);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchItems(data.detail));
        setLoading(true);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error)});
    // eslint-disable-next-line
  }, [dispatch]);

  return loading;

}

export default UseFetch
