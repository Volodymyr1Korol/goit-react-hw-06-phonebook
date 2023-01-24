
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
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
import { contactReducer } from './ContactsSlice';
import { filterReducer } from './FilterSlice';


const persistConfig = {
  key: 'contacts',
  storage,
};
const contactPersistReducer = persistReducer(
  persistConfig,
  contactReducer
);
export const store = configureStore({
  reducer: {
    contacts: contactPersistReducer,
    filter: filterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);