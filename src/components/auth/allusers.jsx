"use client";
import Cookies from "js-cookie";
import {
  useGetUsersQuery,
  useSendLogoutMutation,
} from "../../app/features/auth/authApiSlice";

// import styles from "../styles/Dashboard.module.css";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import Getpro from "./Getpro";

const Allusers = () => {
  //   const navigate = useNavigate();

  const {
    data: users,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetUsersQuery();
  const [sendLogout] = useSendLogoutMutation();

  const formatDate = (dateString) => {
    const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return "Invalid date format";

    const year = match[1];
    const month = match[2];
    const day = match[3];

    return `${year}/${month}/${day}`;
  };
  const handleLogout = () => {
    sendLogout();
    Cookies.remove("token");
    // navigate("/auth/login");
  };

  return (
    <div className="container mx-auto items-center">
      <h1 className=" font-semibold text-blue-500 underline  mt-10 ml-80">
        All Users - DashBoard <p className=" font-semibold text-red-500"></p>
      </h1>
      <div>
        <ul className=" text-blue-500 font-semibold underline m-5">
          <li>
            <Link
              to={"/Adminproducts"}
              className="block py-2 px-3 underline text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Admin-Pizza
            </Link>
          </li>
          <li>
            <Link
              to={"/Addpro"}
              className="block py-2 px-3 underline text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Add_product
            </Link>
          </li>
        </ul>
      </div>
      <button type="button" onClick={handleLogout}>
        <svg
          className="w-[20px] h-[20px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.7"
            d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
          />
        </svg>
      </button>
      {isLoading && !isError && <p>Loading...</p>}
      {!isLoading && isError && <p>Error: {error.data.message}</p>}
      {!isLoading && isSuccess && users && users.length > 0 && (
        <table className="border-separate border-spacing-2 border border-slate-400">
          <p className=" text-red-500 text-3xl font-semibold">
            Total Users {users.length}
          </p>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border border-slate-300">{user.first_name}</td>
                <td className="border border-slate-300">{user.last_name}</td>
                <td className="border border-slate-300 items-center">
                  {user.email}
                </td>
                <td className="border border-slate-300">
                  {formatDate(user.createdAt)}
                </td>
                <td className="border border-slate-300">
                  {formatDate(user.updatedAt)}
                </td>
                <td className="border border-slate-300">
                  <Link to={`/Getpro/1`}>
                    <svg
                      className="w-[20px] h-[20px] text-red-500 dark:text-red"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.7"
                        d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                      />
                    </svg>
                  </Link>
                </td>
                <td className="border border-slate-300">
                  <Link to={`/`}>
                    <svg
                      className="w-6 h-6 text-blue-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                    </svg>
                  </Link>
                </td>
                <td className="border border-slate-300 items-center">
                  <Link to="/auth/login">
                    <svg
                      className="w-6 h-6 text-green-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-width="2"
                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                      />
                      <path
                        stroke="currentColor"
                        stroke-width="2"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Allusers;
