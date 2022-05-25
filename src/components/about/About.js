import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/actions/loadData";

const About = () => {
  let data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    dispatch(setData(response.data));
  };
  return (
    <>
      <button onClick={fetchData}>Load Data</button>
      <div>
        <ul>
          {data.map((comment) => (
            <li key={comment.name}>{comment.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default About;
