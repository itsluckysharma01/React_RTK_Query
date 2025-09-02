import React from "react";
import { useGetApiByNameQuery, useCreatePostMutation } from "./services/api";

const App = () => {
  const { data, error, isLoading, isSuccess, isFetching } =
    useGetApiByNameQuery();

  return (
    <div>
      {/* read data */}
      <h1>React TRK Query</h1>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fecthing....</h2>}
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
  const posts = {
    id: 2,
    title: "poster",
    author: "me",
  };
  const handler = async () => {
    await addPost(posts);
  };

  return <button onClick={handler}> Add Post</button>;
};

export default App;
