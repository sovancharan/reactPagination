import axios from "axios";
import React, { useEffect, useState } from "react";

export const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPageData]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((result) => {
      // setData();
      setCurrentPageData(result.data.slice(0 * 10, 0 * 10 + 10));
    });
  }, []);

  //calculate total number of page
  const noOfPage = [];
  console.log(data.length);

  for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
    noOfPage.push(i);
  }
  console.log("numberOfPage=", noOfPage);
  //see which btn user Clicked
  // const currentPage = ;
  // console.log("defaultData=", defaultData);
  // setCurrentPageData(defaultData);
  const handleClick = (pageNO) => {
    console.log("pageNo=", pageNO);
    const newPageData = data.slice(pageNO * 10, pageNO * 10 + 10);
    setCurrentPageData(newPageData);
  };
  console.log("currentPage=", currentPageData);
  return (
    <div className="container">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        {currentPageData
          ? currentPageData.map((data) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                  </tr>
                </tbody>
              );
            })
          : ""}
      </table>
      {noOfPage.map((data, index) => {
        return (
          <span key={index}>
            <button
              className="btn btn-primary m-1"
              onClick={() => handleClick(index)}
            >
              {data}
            </button>
          </span>
        );
      })}
    </div>
  );
};
