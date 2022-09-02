import { api } from '../index';

interface GetUserResponse {
  userName: string;
  role: string;
  userId: string;
}

const getUserEndpoint = api.injectEndpoints({
  endpoints: build => ({
    getUser: build.mutation<GetUserResponse, void>({
      query: () => ({
        url: 'user',
      }),
    }),
  }),
});

export const {
  useGetUserMutation,
  endpoints: { getUser },
} = getUserEndpoint;
