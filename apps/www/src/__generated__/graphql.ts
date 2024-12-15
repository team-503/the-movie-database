/* eslint-disable */
// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthResponseType = {
  __typename?: 'AuthResponseType';
  token: Scalars['String']['output'];
  user: UserOutput;
};

export type MovieBelongsToCollection = {
  __typename?: 'MovieBelongsToCollection';
  backdrop_path?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  poster_path?: Maybe<Scalars['String']['output']>;
};

export type MovieDetailsEntity = {
  __typename?: 'MovieDetailsEntity';
  adult: Scalars['Boolean']['output'];
  backdrop_path?: Maybe<Scalars['String']['output']>;
  belongs_to_collection?: Maybe<MovieBelongsToCollection>;
  budget: Scalars['Float']['output'];
  genres: Array<MovieGenre>;
  homepage: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imdb_id?: Maybe<Scalars['String']['output']>;
  origin_country: Array<Scalars['String']['output']>;
  original_language: Scalars['String']['output'];
  original_title: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  popularity: Scalars['Float']['output'];
  poster_path?: Maybe<Scalars['String']['output']>;
  production_companies: Array<MovieProductionCompany>;
  production_countries: Array<MovieProductionCountry>;
  release_date: Scalars['String']['output'];
  revenue: Scalars['Float']['output'];
  runtime: Scalars['Float']['output'];
  spoken_languages: Array<MovieSpokenLanguage>;
  status: Scalars['String']['output'];
  tagline: Scalars['String']['output'];
  title: Scalars['String']['output'];
  video: Scalars['Boolean']['output'];
  vote_average: Scalars['Float']['output'];
  vote_count: Scalars['Float']['output'];
};

export type MovieEntity = {
  __typename?: 'MovieEntity';
  adult: Scalars['Boolean']['output'];
  backdrop_path?: Maybe<Scalars['String']['output']>;
  genre_ids: Array<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  original_language: Scalars['String']['output'];
  original_title: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  popularity: Scalars['Float']['output'];
  poster_path?: Maybe<Scalars['String']['output']>;
  release_date: Scalars['String']['output'];
  title: Scalars['String']['output'];
  video: Scalars['Boolean']['output'];
  vote_average: Scalars['Float']['output'];
  vote_count: Scalars['Float']['output'];
};

export type MovieGenre = {
  __typename?: 'MovieGenre';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type MovieGenresResponse = {
  __typename?: 'MovieGenresResponse';
  genres: Array<MovieGenre>;
};

export type MovieImage = {
  __typename?: 'MovieImage';
  aspect_ratio: Scalars['Float']['output'];
  file_path: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  iso_639_1?: Maybe<Scalars['String']['output']>;
  vote_average: Scalars['Float']['output'];
  vote_count: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type MovieImagesResponse = {
  __typename?: 'MovieImagesResponse';
  backdrops: Array<MovieImage>;
  logos: Array<MovieImage>;
  posters: Array<MovieImage>;
};

export type MovieProductionCompany = {
  __typename?: 'MovieProductionCompany';
  id: Scalars['Int']['output'];
  logo_path?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  origin_country: Scalars['String']['output'];
};

export type MovieProductionCountry = {
  __typename?: 'MovieProductionCountry';
  iso_3166_1: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MovieSpokenLanguage = {
  __typename?: 'MovieSpokenLanguage';
  english_name: Scalars['String']['output'];
  iso_639_1: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthResponseType;
  register: AuthResponseType;
};


export type MutationLoginArgs = {
  user: UserInput;
};


export type MutationRegisterArgs = {
  user: UserInput;
};

export type PaginatedMovieResponse = {
  __typename?: 'PaginatedMovieResponse';
  page: Scalars['Int']['output'];
  results: Array<MovieEntity>;
  total_pages: Scalars['Int']['output'];
  total_results: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  discoverMovies: PaginatedMovieResponse;
  getMovieDetails: MovieDetailsEntity;
  getMovieGenresList: MovieGenresResponse;
  getMovieImages: MovieImagesResponse;
  getMovieRecommendations: PaginatedMovieResponse;
  getPopularMovies: PaginatedMovieResponse;
  getSimilarMovies: PaginatedMovieResponse;
  getTopRatedMovies: PaginatedMovieResponse;
  getTrengindMovies: PaginatedMovieResponse;
  getUpcomingMovies: PaginatedMovieResponse;
  me: UserEntity;
};


export type QueryDiscoverMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMovieDetailsArgs = {
  movieId: Scalars['Int']['input'];
};


export type QueryGetMovieImagesArgs = {
  movieId: Scalars['Int']['input'];
};


export type QueryGetMovieRecommendationsArgs = {
  movieId: Scalars['Int']['input'];
};


export type QueryGetPopularMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSimilarMoviesArgs = {
  movieId: Scalars['Int']['input'];
};


export type QueryGetTopRatedMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUpcomingMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['String']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type DiscoverMoviesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DiscoverMoviesQuery = { __typename?: 'Query', discoverMovies: { __typename?: 'PaginatedMovieResponse', page: number, total_pages: number, total_results: number, results: Array<{ __typename?: 'MovieEntity', id: number, adult: boolean, backdrop_path?: string | null, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, genre_ids: Array<number> }> } };

export type GetMovieDetailsQueryVariables = Exact<{
  movieId: Scalars['Int']['input'];
}>;


export type GetMovieDetailsQuery = { __typename?: 'Query', getMovieDetails: { __typename?: 'MovieDetailsEntity', id: number, adult: boolean, backdrop_path?: string | null, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, budget: number, homepage: string, imdb_id?: string | null, origin_country: Array<string>, revenue: number, runtime: number, status: string, tagline: string, genres: Array<{ __typename?: 'MovieGenre', id: number, name: string }>, belongs_to_collection?: { __typename?: 'MovieBelongsToCollection', id: number, name: string, poster_path?: string | null, backdrop_path?: string | null } | null, production_companies: Array<{ __typename?: 'MovieProductionCompany', id: number, logo_path?: string | null, name: string, origin_country: string }>, production_countries: Array<{ __typename?: 'MovieProductionCountry', iso_3166_1: string, name: string }>, spoken_languages: Array<{ __typename?: 'MovieSpokenLanguage', english_name: string, iso_639_1: string, name: string }> } };

export type GetMovieGenresListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMovieGenresListQuery = { __typename?: 'Query', getMovieGenresList: { __typename?: 'MovieGenresResponse', genres: Array<{ __typename?: 'MovieGenre', id: number, name: string }> } };

export type GetMovieImagesQueryVariables = Exact<{
  movieId: Scalars['Int']['input'];
}>;


export type GetMovieImagesQuery = { __typename?: 'Query', getMovieImages: { __typename?: 'MovieImagesResponse', backdrops: Array<{ __typename?: 'MovieImage', aspect_ratio: number, height: number, iso_639_1?: string | null, file_path: string, vote_average: number, vote_count: number, width: number }>, posters: Array<{ __typename?: 'MovieImage', aspect_ratio: number, height: number, iso_639_1?: string | null, file_path: string, vote_average: number, vote_count: number, width: number }>, logos: Array<{ __typename?: 'MovieImage', aspect_ratio: number, height: number, iso_639_1?: string | null, file_path: string, vote_average: number, vote_count: number, width: number }> } };

export type GetMovieRecommendationsQueryVariables = Exact<{
  movieId: Scalars['Int']['input'];
}>;


export type GetMovieRecommendationsQuery = { __typename?: 'Query', getMovieRecommendations: { __typename?: 'PaginatedMovieResponse', page: number, total_pages: number, total_results: number, results: Array<{ __typename?: 'MovieEntity', id: number, adult: boolean, backdrop_path?: string | null, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, genre_ids: Array<number> }> } };

export type GetPopularMoviesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPopularMoviesQuery = { __typename?: 'Query', getPopularMovies: { __typename?: 'PaginatedMovieResponse', page: number, total_pages: number, total_results: number, results: Array<{ __typename?: 'MovieEntity', id: number, adult: boolean, backdrop_path?: string | null, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, genre_ids: Array<number> }> } };

export type GetSimilarMoviesQueryVariables = Exact<{
  movieId: Scalars['Int']['input'];
}>;


export type GetSimilarMoviesQuery = { __typename?: 'Query', getSimilarMovies: { __typename?: 'PaginatedMovieResponse', page: number, total_pages: number, total_results: number, results: Array<{ __typename?: 'MovieEntity', id: number, adult: boolean, backdrop_path?: string | null, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, genre_ids: Array<number> }> } };

export type GetTopRatedMoviesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTopRatedMoviesQuery = { __typename?: 'Query', getTopRatedMovies: { __typename?: 'PaginatedMovieResponse', page: number, total_pages: number, total_results: number, results: Array<{ __typename?: 'MovieEntity', id: number, adult: boolean, backdrop_path?: string | null, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, genre_ids: Array<number> }> } };

export type GetTrengindMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrengindMoviesQuery = { __typename?: 'Query', getTrengindMovies: { __typename?: 'PaginatedMovieResponse', page: number, total_pages: number, total_results: number, results: Array<{ __typename?: 'MovieEntity', id: number, adult: boolean, backdrop_path?: string | null, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, genre_ids: Array<number> }> } };

export type GetUpcomingMoviesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUpcomingMoviesQuery = { __typename?: 'Query', getUpcomingMovies: { __typename?: 'PaginatedMovieResponse', page: number, total_pages: number, total_results: number, results: Array<{ __typename?: 'MovieEntity', id: number, adult: boolean, backdrop_path?: string | null, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, genre_ids: Array<number> }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UserEntity', id: number, email: string, password: string } };


export const DiscoverMoviesDocument = gql`
    query discoverMovies($page: Int) {
  discoverMovies(page: $page) {
    page
    results {
      id
      adult
      backdrop_path
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
      genre_ids
    }
    total_pages
    total_results
  }
}
    `;

/**
 * __useDiscoverMoviesQuery__
 *
 * To run a query within a React component, call `useDiscoverMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscoverMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscoverMoviesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useDiscoverMoviesQuery(baseOptions?: Apollo.QueryHookOptions<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>(DiscoverMoviesDocument, options);
      }
export function useDiscoverMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>(DiscoverMoviesDocument, options);
        }
export function useDiscoverMoviesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>(DiscoverMoviesDocument, options);
        }
export type DiscoverMoviesQueryHookResult = ReturnType<typeof useDiscoverMoviesQuery>;
export type DiscoverMoviesLazyQueryHookResult = ReturnType<typeof useDiscoverMoviesLazyQuery>;
export type DiscoverMoviesSuspenseQueryHookResult = ReturnType<typeof useDiscoverMoviesSuspenseQuery>;
export type DiscoverMoviesQueryResult = Apollo.QueryResult<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>;
export const GetMovieDetailsDocument = gql`
    query getMovieDetails($movieId: Int!) {
  getMovieDetails(movieId: $movieId) {
    id
    adult
    backdrop_path
    original_language
    original_title
    overview
    popularity
    poster_path
    release_date
    title
    video
    vote_average
    vote_count
    genres {
      id
      name
    }
    belongs_to_collection {
      id
      name
      poster_path
      backdrop_path
    }
    budget
    homepage
    imdb_id
    origin_country
    production_companies {
      id
      logo_path
      name
      origin_country
    }
    production_countries {
      iso_3166_1
      name
    }
    revenue
    runtime
    spoken_languages {
      english_name
      iso_639_1
      name
    }
    status
    tagline
  }
}
    `;

/**
 * __useGetMovieDetailsQuery__
 *
 * To run a query within a React component, call `useGetMovieDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieDetailsQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetMovieDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetMovieDetailsQuery, GetMovieDetailsQueryVariables> & ({ variables: GetMovieDetailsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>(GetMovieDetailsDocument, options);
      }
export function useGetMovieDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>(GetMovieDetailsDocument, options);
        }
export function useGetMovieDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>(GetMovieDetailsDocument, options);
        }
export type GetMovieDetailsQueryHookResult = ReturnType<typeof useGetMovieDetailsQuery>;
export type GetMovieDetailsLazyQueryHookResult = ReturnType<typeof useGetMovieDetailsLazyQuery>;
export type GetMovieDetailsSuspenseQueryHookResult = ReturnType<typeof useGetMovieDetailsSuspenseQuery>;
export type GetMovieDetailsQueryResult = Apollo.QueryResult<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>;
export const GetMovieGenresListDocument = gql`
    query getMovieGenresList {
  getMovieGenresList {
    genres {
      id
      name
    }
  }
}
    `;

/**
 * __useGetMovieGenresListQuery__
 *
 * To run a query within a React component, call `useGetMovieGenresListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieGenresListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieGenresListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMovieGenresListQuery(baseOptions?: Apollo.QueryHookOptions<GetMovieGenresListQuery, GetMovieGenresListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieGenresListQuery, GetMovieGenresListQueryVariables>(GetMovieGenresListDocument, options);
      }
export function useGetMovieGenresListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieGenresListQuery, GetMovieGenresListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieGenresListQuery, GetMovieGenresListQueryVariables>(GetMovieGenresListDocument, options);
        }
export function useGetMovieGenresListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMovieGenresListQuery, GetMovieGenresListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieGenresListQuery, GetMovieGenresListQueryVariables>(GetMovieGenresListDocument, options);
        }
export type GetMovieGenresListQueryHookResult = ReturnType<typeof useGetMovieGenresListQuery>;
export type GetMovieGenresListLazyQueryHookResult = ReturnType<typeof useGetMovieGenresListLazyQuery>;
export type GetMovieGenresListSuspenseQueryHookResult = ReturnType<typeof useGetMovieGenresListSuspenseQuery>;
export type GetMovieGenresListQueryResult = Apollo.QueryResult<GetMovieGenresListQuery, GetMovieGenresListQueryVariables>;
export const GetMovieImagesDocument = gql`
    query getMovieImages($movieId: Int!) {
  getMovieImages(movieId: $movieId) {
    backdrops {
      aspect_ratio
      height
      iso_639_1
      file_path
      vote_average
      vote_count
      width
    }
    posters {
      aspect_ratio
      height
      iso_639_1
      file_path
      vote_average
      vote_count
      width
    }
    logos {
      aspect_ratio
      height
      iso_639_1
      file_path
      vote_average
      vote_count
      width
    }
  }
}
    `;

/**
 * __useGetMovieImagesQuery__
 *
 * To run a query within a React component, call `useGetMovieImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieImagesQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetMovieImagesQuery(baseOptions: Apollo.QueryHookOptions<GetMovieImagesQuery, GetMovieImagesQueryVariables> & ({ variables: GetMovieImagesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieImagesQuery, GetMovieImagesQueryVariables>(GetMovieImagesDocument, options);
      }
export function useGetMovieImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieImagesQuery, GetMovieImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieImagesQuery, GetMovieImagesQueryVariables>(GetMovieImagesDocument, options);
        }
export function useGetMovieImagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMovieImagesQuery, GetMovieImagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieImagesQuery, GetMovieImagesQueryVariables>(GetMovieImagesDocument, options);
        }
export type GetMovieImagesQueryHookResult = ReturnType<typeof useGetMovieImagesQuery>;
export type GetMovieImagesLazyQueryHookResult = ReturnType<typeof useGetMovieImagesLazyQuery>;
export type GetMovieImagesSuspenseQueryHookResult = ReturnType<typeof useGetMovieImagesSuspenseQuery>;
export type GetMovieImagesQueryResult = Apollo.QueryResult<GetMovieImagesQuery, GetMovieImagesQueryVariables>;
export const GetMovieRecommendationsDocument = gql`
    query getMovieRecommendations($movieId: Int!) {
  getMovieRecommendations(movieId: $movieId) {
    page
    results {
      id
      adult
      backdrop_path
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
      genre_ids
    }
    total_pages
    total_results
  }
}
    `;

/**
 * __useGetMovieRecommendationsQuery__
 *
 * To run a query within a React component, call `useGetMovieRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieRecommendationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieRecommendationsQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetMovieRecommendationsQuery(baseOptions: Apollo.QueryHookOptions<GetMovieRecommendationsQuery, GetMovieRecommendationsQueryVariables> & ({ variables: GetMovieRecommendationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieRecommendationsQuery, GetMovieRecommendationsQueryVariables>(GetMovieRecommendationsDocument, options);
      }
export function useGetMovieRecommendationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieRecommendationsQuery, GetMovieRecommendationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieRecommendationsQuery, GetMovieRecommendationsQueryVariables>(GetMovieRecommendationsDocument, options);
        }
export function useGetMovieRecommendationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMovieRecommendationsQuery, GetMovieRecommendationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieRecommendationsQuery, GetMovieRecommendationsQueryVariables>(GetMovieRecommendationsDocument, options);
        }
export type GetMovieRecommendationsQueryHookResult = ReturnType<typeof useGetMovieRecommendationsQuery>;
export type GetMovieRecommendationsLazyQueryHookResult = ReturnType<typeof useGetMovieRecommendationsLazyQuery>;
export type GetMovieRecommendationsSuspenseQueryHookResult = ReturnType<typeof useGetMovieRecommendationsSuspenseQuery>;
export type GetMovieRecommendationsQueryResult = Apollo.QueryResult<GetMovieRecommendationsQuery, GetMovieRecommendationsQueryVariables>;
export const GetPopularMoviesDocument = gql`
    query getPopularMovies($page: Int) {
  getPopularMovies(page: $page) {
    page
    results {
      id
      adult
      backdrop_path
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
      genre_ids
    }
    total_pages
    total_results
  }
}
    `;

/**
 * __useGetPopularMoviesQuery__
 *
 * To run a query within a React component, call `useGetPopularMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularMoviesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetPopularMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>(GetPopularMoviesDocument, options);
      }
export function useGetPopularMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>(GetPopularMoviesDocument, options);
        }
export function useGetPopularMoviesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>(GetPopularMoviesDocument, options);
        }
export type GetPopularMoviesQueryHookResult = ReturnType<typeof useGetPopularMoviesQuery>;
export type GetPopularMoviesLazyQueryHookResult = ReturnType<typeof useGetPopularMoviesLazyQuery>;
export type GetPopularMoviesSuspenseQueryHookResult = ReturnType<typeof useGetPopularMoviesSuspenseQuery>;
export type GetPopularMoviesQueryResult = Apollo.QueryResult<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>;
export const GetSimilarMoviesDocument = gql`
    query getSimilarMovies($movieId: Int!) {
  getSimilarMovies(movieId: $movieId) {
    page
    results {
      id
      adult
      backdrop_path
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
      genre_ids
    }
    total_pages
    total_results
  }
}
    `;

/**
 * __useGetSimilarMoviesQuery__
 *
 * To run a query within a React component, call `useGetSimilarMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSimilarMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSimilarMoviesQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetSimilarMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables> & ({ variables: GetSimilarMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, options);
      }
export function useGetSimilarMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, options);
        }
export function useGetSimilarMoviesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, options);
        }
export type GetSimilarMoviesQueryHookResult = ReturnType<typeof useGetSimilarMoviesQuery>;
export type GetSimilarMoviesLazyQueryHookResult = ReturnType<typeof useGetSimilarMoviesLazyQuery>;
export type GetSimilarMoviesSuspenseQueryHookResult = ReturnType<typeof useGetSimilarMoviesSuspenseQuery>;
export type GetSimilarMoviesQueryResult = Apollo.QueryResult<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>;
export const GetTopRatedMoviesDocument = gql`
    query getTopRatedMovies($page: Int) {
  getTopRatedMovies(page: $page) {
    page
    results {
      id
      adult
      backdrop_path
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
      genre_ids
    }
    total_pages
    total_results
  }
}
    `;

/**
 * __useGetTopRatedMoviesQuery__
 *
 * To run a query within a React component, call `useGetTopRatedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopRatedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopRatedMoviesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetTopRatedMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetTopRatedMoviesQuery, GetTopRatedMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopRatedMoviesQuery, GetTopRatedMoviesQueryVariables>(GetTopRatedMoviesDocument, options);
      }
export function useGetTopRatedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopRatedMoviesQuery, GetTopRatedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopRatedMoviesQuery, GetTopRatedMoviesQueryVariables>(GetTopRatedMoviesDocument, options);
        }
export function useGetTopRatedMoviesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTopRatedMoviesQuery, GetTopRatedMoviesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTopRatedMoviesQuery, GetTopRatedMoviesQueryVariables>(GetTopRatedMoviesDocument, options);
        }
export type GetTopRatedMoviesQueryHookResult = ReturnType<typeof useGetTopRatedMoviesQuery>;
export type GetTopRatedMoviesLazyQueryHookResult = ReturnType<typeof useGetTopRatedMoviesLazyQuery>;
export type GetTopRatedMoviesSuspenseQueryHookResult = ReturnType<typeof useGetTopRatedMoviesSuspenseQuery>;
export type GetTopRatedMoviesQueryResult = Apollo.QueryResult<GetTopRatedMoviesQuery, GetTopRatedMoviesQueryVariables>;
export const GetTrengindMoviesDocument = gql`
    query getTrengindMovies {
  getTrengindMovies {
    page
    results {
      id
      adult
      backdrop_path
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
      genre_ids
    }
    total_pages
    total_results
  }
}
    `;

/**
 * __useGetTrengindMoviesQuery__
 *
 * To run a query within a React component, call `useGetTrengindMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrengindMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrengindMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrengindMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetTrengindMoviesQuery, GetTrengindMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrengindMoviesQuery, GetTrengindMoviesQueryVariables>(GetTrengindMoviesDocument, options);
      }
export function useGetTrengindMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrengindMoviesQuery, GetTrengindMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrengindMoviesQuery, GetTrengindMoviesQueryVariables>(GetTrengindMoviesDocument, options);
        }
export function useGetTrengindMoviesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTrengindMoviesQuery, GetTrengindMoviesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTrengindMoviesQuery, GetTrengindMoviesQueryVariables>(GetTrengindMoviesDocument, options);
        }
export type GetTrengindMoviesQueryHookResult = ReturnType<typeof useGetTrengindMoviesQuery>;
export type GetTrengindMoviesLazyQueryHookResult = ReturnType<typeof useGetTrengindMoviesLazyQuery>;
export type GetTrengindMoviesSuspenseQueryHookResult = ReturnType<typeof useGetTrengindMoviesSuspenseQuery>;
export type GetTrengindMoviesQueryResult = Apollo.QueryResult<GetTrengindMoviesQuery, GetTrengindMoviesQueryVariables>;
export const GetUpcomingMoviesDocument = gql`
    query getUpcomingMovies($page: Int) {
  getUpcomingMovies(page: $page) {
    page
    results {
      id
      adult
      backdrop_path
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
      genre_ids
    }
    total_pages
    total_results
  }
}
    `;

/**
 * __useGetUpcomingMoviesQuery__
 *
 * To run a query within a React component, call `useGetUpcomingMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingMoviesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetUpcomingMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetUpcomingMoviesQuery, GetUpcomingMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingMoviesQuery, GetUpcomingMoviesQueryVariables>(GetUpcomingMoviesDocument, options);
      }
export function useGetUpcomingMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingMoviesQuery, GetUpcomingMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingMoviesQuery, GetUpcomingMoviesQueryVariables>(GetUpcomingMoviesDocument, options);
        }
export function useGetUpcomingMoviesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUpcomingMoviesQuery, GetUpcomingMoviesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUpcomingMoviesQuery, GetUpcomingMoviesQueryVariables>(GetUpcomingMoviesDocument, options);
        }
export type GetUpcomingMoviesQueryHookResult = ReturnType<typeof useGetUpcomingMoviesQuery>;
export type GetUpcomingMoviesLazyQueryHookResult = ReturnType<typeof useGetUpcomingMoviesLazyQuery>;
export type GetUpcomingMoviesSuspenseQueryHookResult = ReturnType<typeof useGetUpcomingMoviesSuspenseQuery>;
export type GetUpcomingMoviesQueryResult = Apollo.QueryResult<GetUpcomingMoviesQuery, GetUpcomingMoviesQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    email
    password
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
/**
 * @typedef {Object} AuthResponseType
 * @property {string} token
 * @property {UserOutput} user
 */

/**
 * @typedef {Object} MovieBelongsToCollection
 * @property {string} [backdrop_path]
 * @property {number} id
 * @property {string} name
 * @property {string} [poster_path]
 */

/**
 * @typedef {Object} MovieDetailsEntity
 * @property {boolean} adult
 * @property {string} [backdrop_path]
 * @property {MovieBelongsToCollection} [belongs_to_collection]
 * @property {number} budget
 * @property {Array<MovieGenre>} genres
 * @property {string} homepage
 * @property {number} id
 * @property {string} [imdb_id]
 * @property {Array<string>} origin_country
 * @property {string} original_language
 * @property {string} original_title
 * @property {string} overview
 * @property {number} popularity
 * @property {string} [poster_path]
 * @property {Array<MovieProductionCompany>} production_companies
 * @property {Array<MovieProductionCountry>} production_countries
 * @property {string} release_date
 * @property {number} revenue
 * @property {number} runtime
 * @property {Array<MovieSpokenLanguage>} spoken_languages
 * @property {string} status
 * @property {string} tagline
 * @property {string} title
 * @property {boolean} video
 * @property {number} vote_average
 * @property {number} vote_count
 */

/**
 * @typedef {Object} MovieEntity
 * @property {boolean} adult
 * @property {string} [backdrop_path]
 * @property {Array<number>} genre_ids
 * @property {number} id
 * @property {string} original_language
 * @property {string} original_title
 * @property {string} overview
 * @property {number} popularity
 * @property {string} [poster_path]
 * @property {string} release_date
 * @property {string} title
 * @property {boolean} video
 * @property {number} vote_average
 * @property {number} vote_count
 */

/**
 * @typedef {Object} MovieGenre
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {Object} MovieGenresResponse
 * @property {Array<MovieGenre>} genres
 */

/**
 * @typedef {Object} MovieImage
 * @property {number} aspect_ratio
 * @property {string} file_path
 * @property {number} height
 * @property {string} [iso_639_1]
 * @property {number} vote_average
 * @property {number} vote_count
 * @property {number} width
 */

/**
 * @typedef {Object} MovieImagesResponse
 * @property {Array<MovieImage>} backdrops
 * @property {Array<MovieImage>} logos
 * @property {Array<MovieImage>} posters
 */

/**
 * @typedef {Object} MovieProductionCompany
 * @property {number} id
 * @property {string} [logo_path]
 * @property {string} name
 * @property {string} origin_country
 */

/**
 * @typedef {Object} MovieProductionCountry
 * @property {string} iso_3166_1
 * @property {string} name
 */

/**
 * @typedef {Object} MovieSpokenLanguage
 * @property {string} english_name
 * @property {string} iso_639_1
 * @property {string} name
 */

/**
 * @typedef {Object} Mutation
 * @property {AuthResponseType} login
 * @property {AuthResponseType} register
 */

/**
 * @typedef {Object} PaginatedMovieResponse
 * @property {number} page
 * @property {Array<MovieEntity>} results
 * @property {number} total_pages
 * @property {number} total_results
 */

/**
 * @typedef {Object} Query
 * @property {PaginatedMovieResponse} discoverMovies
 * @property {MovieDetailsEntity} getMovieDetails
 * @property {MovieGenresResponse} getMovieGenresList
 * @property {MovieImagesResponse} getMovieImages
 * @property {PaginatedMovieResponse} getMovieRecommendations
 * @property {PaginatedMovieResponse} getPopularMovies
 * @property {PaginatedMovieResponse} getSimilarMovies
 * @property {PaginatedMovieResponse} getTopRatedMovies
 * @property {PaginatedMovieResponse} getTrengindMovies
 * @property {PaginatedMovieResponse} getUpcomingMovies
 * @property {UserEntity} me
 */

/**
 * @typedef {Object} UserEntity
 * @property {string} email
 * @property {number} id
 * @property {string} password
 */

/**
 * @typedef {Object} UserInput
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} UserOutput
 * @property {string} email
 * @property {number} id
 */