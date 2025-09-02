import React from "react";
import {
  useGetApiByNameQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} from "./services/api";

const App = () => {
  const { data, error, isLoading, isSuccess, isFetching } =
    useGetApiByNameQuery();

  return (
    <div>
      {/* read data */}
      <h1>React RTK Query</h1>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching....</h2>}
      {error && <h2>Error....</h2>}
      {isSuccess && (
        <div>
          {data?.map((posts) => {
            return (
              <div key={posts.id}>
                <span>{posts.title}</span>
              </div>
            );
          })}
        </div>
      )}
      <div>
        <AddPost />
      </div>
    </div>
  );
};

export const AddPost = () => {
  const [addPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const posts = {
    id: 2,
    title: "poster",
    author: "me",
  };
  const postsUpdate = {
    id: 2,
    title: "Updated",
    author: "me Updated",
  };
  const postsDelete = {
    id: 2,
    title: "poster",
    author: "me",
  };

  const handler = async () => {
    await addPost(posts);
  };
  const handleDelete = async () => {
    await deletePost(posts.id);
  };
  const handleUpdate = async () => {
    await updatePost(postsUpdate);
  };

  return (
    <>
      <button onClick={handler}> Add Post</button>
      <button onClick={handleDelete}> Delete</button>
      <button onClick={handleUpdate}> Update</button>
    </>
  );
};

export default App;
