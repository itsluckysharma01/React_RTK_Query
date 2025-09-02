import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'

import { api } from './services/api'

export const store = configureStore({
    reducer: {

        [api.reducerPath]: api.reducer,
        // Adding the api middleware
    },
     // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)
