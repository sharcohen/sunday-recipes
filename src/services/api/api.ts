import { QueryClient } from 'react-query';

const BASE_URL =
  'https://hf-android-app.s3-eu-west-1.amazonaws.com/android-test';
export const queryClient = new QueryClient();

export const getRecipesQuery = async () => {
  const res = await fetch(`${BASE_URL}/recipes.json`);
  return res.json();
};
