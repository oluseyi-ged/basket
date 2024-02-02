import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';

interface CustomErr {
  data: {
    error: string;
    message: any;
    statusCode: number;
  };
  status: number;
}

const baseUrl = 'https://dummyjson.com/auth/';

export const mutationApi = createApi({
  reducerPath: 'onboardingApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomErr, {}>,
  endpoints: builder => ({
    login: builder.mutation({
      query: (body: any) => {
        return {
          url: 'login',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const {useLoginMutation} = mutationApi;
