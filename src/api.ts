import { QueryHash } from './types';

const getQueryString = (params: QueryHash) => Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&');
const handleResponse = (response: Response) => response.json();

export const getLaunches = (params: QueryHash) => {
  const queryString = getQueryString(params);
  return fetch(`https://api.spacexdata.com/v3/launches?${queryString}`)
    .then(handleResponse);
}
