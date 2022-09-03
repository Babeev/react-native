import React, { useCallback } from 'react';
import { usePostAuthMutation } from '../../api/auth/postAuthEndpoint';
import { useGetUserMutation } from '../../api/user/getUserEndpoint';

interface AuthControllerProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

export const useAuthController = ({ navigation }: AuthControllerProps) => {
  // const [authMutation] = usePostAuthMutation();
  const [getUserMutation] = useGetUserMutation();

  const authorize = useCallback(async (email: string, password: string) => {
    try {
      // const jwt = await authMutation({ email, password }).unwrap();
      // const user = await getUserMutation().unwrap();
      // if (user) {
      //   navigation.navigate('Main');
      // }
    } catch (e) {
      throw new Error(e as string);
    }
  }, []);

  return { authorize };
};
