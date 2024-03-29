"use client";

import Image from "next/image";
import { useGetProductByNameQuery } from "../../api/apiproduct";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const { data, isSuccess, isLoading, error } = useGetProductByNameQuery();

  if (isLoading || error) return null;
  console.log(data);

  return (
    <div className="container flex flex-col-5  flex-wrap gap-4 px-20  ">
      <div className=" container bg-slate-50 p-4 shadow-lg rounded-lg text-blue-500">
        <div className=" container grid grid-cols-4 gap-3">
          <div>
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
          <div>
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
          <div>
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
          <div>
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      {data.products.map((product) => (
        <div
          key={product.id}
          className="card  w-52    justify-center  shadow-2xl  mt-4 p-2 items-center border-orange-500    "
        >
          <Image
            src={product.images[0]}
            alt=""
            height={100}
            width={100}
            className=" w-full mb-4"
          />
          <h3>{product.title}</h3>

          <Link
            href={`/pages/product/${product.id}`}
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-1 -mt-96"
          >
            Read more
          </Link>
        </div>
      ))}
      <hr className=" text-purple-600 text-2xl"></hr>
    </div>
  );
}

// return (

//   <main className=" container">
//     <ul>
//       {isSuccess &&
//         data.products &&
//         data.products.map((todo) => (
//           <Link
//             href={`/pages/product/${todo.id}`}
//             key={todo.id}
//             className=" bg-red-300 flex-row flex  "
//           >
//             <div className=" mb-4  gap-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//               <Image
//                 src={todo.images[0]}
//                 alt=""
//                 height={100}
//                 width={100}
//                 className=" w-full mb-4"
//               />

//               <p className="  text-blue-500 p-2">Title: {todo.title}</p>
//               <p className="  text-blue-500 p-2">Price: {todo.price}</p>
//               <p className="  text-blue-500 p-2">rating: {todo.rating}</p>
//               <p className="  text-blue-500 p-2">stock: {todo.stock}</p>
//               <p className="  text-blue-500 p-2">
//                 description: {todo.description}
//               </p>
//             </div>
//             <div>
//               <h1 className=" bg-green-500"> htis my name </h1>
//             </div>
//           </Link>
//         ))}
//       <hr></hr>
//     </ul>

{
  /* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div> */
}
