import { apiSlice } from "../../app/api/apiproduct";

export const productsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getallproduct: builder.query({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});
export const { useGetallproductQuery } = productsSlice;
