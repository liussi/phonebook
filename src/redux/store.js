
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import { reducerContact } from './contacts/contactSlise';
import { reducerFilter } from './filter/filterSlise';
import { authReduser } from './auth/authSlise';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReduser),
    contacts: reducerContact,
    filter: reducerFilter,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },

    devTools: process.env.NODE_ENV === 'development',
  }),
});

export const persistor = persistStore(store);
