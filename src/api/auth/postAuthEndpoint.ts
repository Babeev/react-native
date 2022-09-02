import { api } from '../index';

interface PostAuthRequest {
  email: string;
  password: string;
}

interface PostAuthResponse {
  jwt: string;
}

const postAuthEndpoint = api.injectEndpoints({
  endpoints: build => ({
    postAuth: build.mutation<PostAuthResponse, PostAuthRequest>({
      query: data => ({
        url: 'auth',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  usePostAuthMutation,
  endpoints: { postAuth },
} = postAuthEndpoint;
