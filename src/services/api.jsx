import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),

  endpoints: (builder) => ({
    getApiByName: builder.query({
  query: () => "/posts",
    }),

    createPost : builder.mutation({
      query: (newPost) => ({
  url: "/posts",
        method: "POST",
        body: newPost
      })
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      })
    }),

    updatePost: builder.mutation({
      // expect the full updated post object: { id, ...fields }
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
    })

  })
});

export const { 
  useGetApiByNameQuery, 
  useCreatePostMutation, 
  useDeletePostMutation,
  useUpdatePostMutation,
} = api;
