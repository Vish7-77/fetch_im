import React, { useEffect, useState } from "react";
import ContSm from "./ContSm";
import axios from "axios";

function Cont() {
  const [arr, setarr] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts",
      )
      .then((res) => {
        setarr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {arr.map((ele) => {
        return (
          <div key={ele.id} style={{margin:'4rem' }}>
         <ContSm thumbnail={ele.thumbnail.large} author={ele.author.name} content={ele.content} />
          </div>
        );
      })}
      </>    
  );
}

export default Cont;
