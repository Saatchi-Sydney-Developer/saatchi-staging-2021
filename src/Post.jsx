import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState([]);

  const getPostData = () => {
    fetch("../data/postData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        setPostData(myJson);
        setIsLoading(false);
        console.log(myJson);
      });
  };

  useEffect(() => {
    getPostData();
  }, [id]);

  console.log(id);
  // console.log(props);

  return <>{!isLoading && <div>Post {id}</div>}</>;
};

export default Post;
