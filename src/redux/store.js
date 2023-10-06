import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducer';
// import storage from 'redux-persist/lib/storage'; 
// import {
//   persistStore, persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'contactList',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore(
  {reducer}
  // reducer: persistedReducer,
  // middleware: getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
);

// export const persistor = persistStore(store);

