import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: () => `products?limit=55`,
    }),
    getProductByid: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductByNameQuery, useGetProductByidQuery } = productsAPI;
