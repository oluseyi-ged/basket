import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query/react';
import {mutationApi} from '@services/mutationApi';
import {queryApi} from '@services/queryApi';
import profileReducer from '@slices/profile';
import tokenReducer from '@slices/token';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  profile: profileReducer,
  token: tokenReducer,
  [mutationApi.reducerPath]: mutationApi.reducer,
  [queryApi.reducerPath]: queryApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunkMiddleware, mutationApi.middleware, queryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
setupListeners(store.dispatch);

export default store;
