import React from "react";
import { useGetApiByName, useGetApiByNameQuery } from "./services/api";

const App = () => {
  const { data, error, isLoading, isSuccess, isFetching } =
    useGetApiByNameQuery();

  return (
    <div>
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
    </div>
  );
};

export default App;
