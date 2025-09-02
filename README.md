# RTK Query Practice

A comprehensive React application demonstrating Redux Toolkit Query (RTK Query) for efficient API state management with caching, invalidation, and optimistic updates.

## 📚 What You'll Learn

- Setting up RTK Query in a React application
- Creating API endpoints for CRUD operations
- Using auto-generated hooks for data fetching
- Implementing mutations for create, update, delete operations
- Understanding caching and background refetching
- Managing loading states and error handling

## 🚀 Interactive Step-by-Step Guide

Follow this guide to understand and work with RTK Query in an interactive way.

### Step 1: Prerequisites & Setup

**Before we start, make sure you have:**

- Node.js (v14 or higher) installed
- Basic knowledge of React and Redux concepts
- A code editor (VS Code recommended)

**Clone and Setup:**

```bash
# Install dependencies
npm install

# Verify the key packages are installed:
# - @reduxjs/toolkit (RTK Query is part of RTK)
# - react-redux (React bindings for Redux)
```

### Step 2: Set Up Mock API Server

Since this project uses `http://localhost:3004` as the API base URL, you'll need a mock server.

**Option A: Using json-server (Recommended)**

```bash
# Install json-server globally
npm install -g json-server

# Create a db.json file in the project root
echo '{"posts": [{"id": 1, "title": "Hello RTK Query", "content": "Learning RTK Query is awesome!"}]}' > db.json

# Start the mock server
json-server --watch db.json --port 3004
```

**Option B: Using any REST API**
Update the `baseUrl` in `src/services/api.jsx` to point to your preferred API endpoint.

### Step 3: Understanding the Project Structure

Let's explore the key files:

```
src/
├── App.js          # Main component using RTK Query hooks
├── index.js        # App entry point with Redux Provider
├── store.jsx       # Redux store configuration with RTK Query
└── services/
    └── api.jsx     # API endpoints definition
```

### Step 4: Explore the Redux Store Configuration

**File: `src/store.jsx`**

This file shows how to integrate RTK Query with Redux store:

- `configureStore`: Creates the Redux store
- `api.reducer`: Adds the API slice reducer
- `api.middleware`: Enables caching, invalidation, polling
- `setupListeners`: Enables automatic refetching

**Interactive Exercise:**

1. Open `src/store.jsx`
2. Notice how the API reducer is added using `[api.reducerPath]: api.reducer`
3. See how middleware is configured to enable RTK Query features

### Step 5: Understand API Endpoints Definition

**File: `src/services/api.jsx`**

This file demonstrates RTK Query's key concepts:

- `createApi`: Creates the API slice
- `fetchBaseQuery`: Configures the base query function
- `endpoints`: Defines the API endpoints
- Auto-generated hooks for each endpoint

**Interactive Exercise:**

1. Open `src/services/api.jsx`
2. Identify the four operations:
   - `getApiByName` (GET /posts) - Read operation
   - `createPost` (POST /posts) - Create operation
   - `updatePost` (PUT /posts/:id) - Update operation
   - `deletePost` (DELETE /posts/:id) - Delete operation
3. Notice how hooks are exported: `useGetApiByNameQuery`, `useCreatePostMutation`, etc.

### Step 6: Using RTK Query in Components

**File: `src/App.js`**

This shows practical usage of RTK Query hooks:

- `useGetApiByNameQuery()`: Automatically fetches data on component mount
- Loading states: `isLoading`, `isFetching`, `isSuccess`
- Error handling with the `error` property

**Interactive Exercise:**

1. Open `src/App.js`
2. Start both the mock API server (Step 2) and the React app
3. Observe how data loads automatically
4. Open browser DevTools and check the Network tab to see API calls

### Step 7: Run and Interact with the Application

**Start the Development Server:**

```bash
npm start
```

This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**Interactive Testing:**

1. Open browser DevTools (F12)
2. Go to Network tab to observe API calls
3. Watch Redux DevTools extension to see state changes
4. Interact with the app to see RTK Query in action

### Step 8: Experiment with RTK Query Features

**A. Data Fetching & Caching:**

1. Refresh the page - notice the loading state
2. Navigate away and come back - see cached data loads instantly
3. Open multiple browser tabs - observe shared cache

**B. Background Refetching:**

1. Keep the app open for 60 seconds
2. Check network tab for automatic background refetch
3. Modify data on the server and watch automatic updates

**C. Error Handling:**

1. Stop the mock API server
2. Refresh the app to see error state handling
3. Start the server again to see automatic recovery

### Step 9: Hands-on Experiments

**Experiment 1: Add Mutations**
Try adding create, update, and delete functionality:

```jsx
// In your component, use mutations like this:
const [createPost] = useCreatePostMutation();
const [updatePost] = useUpdatePostMutation();
const [deletePost] = useDeletePostMutation();

// Example usage:
const handleCreate = async () => {
  await createPost({ title: "New Post", content: "Content here" });
};
```

**Experiment 2: Customize Queries**
Try modifying the query with parameters:

```jsx
// Add parameters to your query
const { data } = useGetApiByNameQuery(
  {
    page: 1,
    limit: 10,
  },
  {
    pollingInterval: 30000, // Poll every 30 seconds
    skip: false, // Don't skip the query
  }
);
```

**Experiment 3: Cache Management**

```jsx
// Force refetch
const { data, refetch } = useGetApiByNameQuery();

// Trigger manual refetch
const handleRefresh = () => refetch();
```

### Step 10: Advanced RTK Query Concepts

**A. Optimistic Updates:**

- Mutations can include `onQueryStarted` for optimistic updates
- Roll back changes if the mutation fails

**B. Tag-based Invalidation:**

- Use `providesTags` and `invalidatesTags` for smart cache invalidation
- Automatically refetch related data when mutations succeed

**C. Conditional Fetching:**

- Use the `skip` parameter to conditionally fetch data
- Perfect for user-dependent or permission-based data

## 🛠️ Available Scripts

### `npm start`

Runs the app in development mode. The page will reload when you make changes.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder with optimized bundles.

### `npm run eject`

**⚠️ One-way operation!** Removes Create React App build dependency and exposes all configuration files.

## 🎯 RTK Query Key Features Demonstrated

| Feature                   | Description                                             | File Location          |
| ------------------------- | ------------------------------------------------------- | ---------------------- |
| **Auto-generated Hooks**  | Hooks like `useGetApiByNameQuery` automatically created | `src/services/api.jsx` |
| **Caching**               | Automatic caching with configurable TTL                 | Redux DevTools         |
| **Background Refetching** | Automatic data updates when cache expires               | Network Tab            |
| **Loading States**        | `isLoading`, `isFetching`, `isSuccess`, `isError`       | `src/App.js`           |
| **Mutations**             | Create, Update, Delete with optimistic updates          | `src/services/api.jsx` |
| **Error Handling**        | Automatic error state management                        | Component level        |

## 🔧 Troubleshooting

**Common Issues:**

1. **"Cannot read property of undefined" errors**

   - Ensure mock API server is running on port 3004
   - Check network requests in DevTools

2. **Data not loading**

   - Verify `baseQuery` URL in `src/services/api.jsx`
   - Check console for CORS or network errors

3. **Redux DevTools not showing RTK Query data**
   - Install Redux DevTools browser extension
   - Look for the "api" slice in the state tree

## 📚 Learning Challenges

**Beginner Level:**

1. Add a loading spinner component
2. Create a error boundary for API errors
3. Add more endpoints to the API service

**Intermediate Level:**

1. Implement optimistic updates for mutations
2. Add pagination with RTK Query
3. Create a custom hook combining multiple queries

**Advanced Level:**

1. Implement tag-based cache invalidation
2. Add authentication headers to all requests
3. Create a middleware for request/response logging

## 🌟 Best Practices Demonstrated

- ✅ Centralized API configuration
- ✅ Automatic loading and error states
- ✅ Efficient caching strategy
- ✅ Type-safe API calls (when using TypeScript)
- ✅ Predictable state management
- ✅ Optimistic UI updates

## 🔗 Useful Resources

- [RTK Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)
- [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools)
- [JSON Server for Mocking APIs](https://github.com/typicode/json-server)
- [React Redux Hooks](https://react-redux.js.org/api/hooks)

## 🤝 Contributing

Feel free to fork this project and experiment with:

- Adding new endpoints
- Implementing different data fetching patterns
- Adding TypeScript support
- Creating reusable components

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Learning! 🚀**

_This project is designed to be a hands-on learning experience. Don't just read - experiment, break things, and build your understanding through practice!_
