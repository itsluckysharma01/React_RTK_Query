import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),

  endpoints: (builder) => ({
    getApiByName: builder.query({
      query: () => "./posts",
    }),
    
    createPost : builder.mutation({
      query: (newPost) => ({
        url: "./posts",
        method: "POST",
        body: newPost
      })
    })
  }),
});

export const { useGetApiByNameQuery, useCreatePostMutation } = api;
