// import React, { useState, useEffect } from "react";
// import Pagination from "./Pagination";
// import axios from "axios";

// const UsersList = () => {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     // Fetch users data and calculate total pages
//     // Set the users and totalPages state variables
//     // Example API call:
//     // fetchUsers(currentPage).then((response) => {
//     //   setUsers(response.users);
//     //   setTotalPages(response.totalPages);
//     // });
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log("res=", res);
//       })
//       .catch((err) => {});
//   }, [currentPage]);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       {/* Render the list of users */}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>

//       {/* Render the pagination component */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default UsersList;
