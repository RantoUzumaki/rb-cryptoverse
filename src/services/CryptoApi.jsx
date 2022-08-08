import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoHeader = {
  "X-RapidAPI-Key": "75358a5ffcmsh7673a203677b35cp111690jsn0fc8ef6586dd",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const CreateRequest = (url) => ({ url, headers: CryptoHeader });

export const CryptoApi = createApi({
  reducerPath: "CryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => CreateRequest(`coins?limit=${count}`),
    }),

    getCryptoDetail: builder.query({
      query: (coinId) => CreateRequest(`coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        CreateRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptoQuery,
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
} = CryptoApi;
