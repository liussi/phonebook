// import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';

// export const store = configureStore({reducer});

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'token',
  storage,
  whiteList: ['token'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    // devTools: process.env.NODE_ENV === 'development',
  }),
});

export const persistor = persistStore(store);
