import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CryptoNewsHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "75358a5ffcmsh7673a203677b35cp111690jsn0fc8ef6586dd",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const CreateRequest = (url) => ({ url, headers: CryptoNewsHeader });

export const CryptoNewsApi = createApi({
  reducerPath: "CryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        CreateRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = CryptoNewsApi