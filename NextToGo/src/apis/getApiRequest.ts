import {useEffect, useState} from 'react';
import {IError} from '../interfaces/NextRaces';

export interface GetApiRequestProps {
  url: string;
  converter: (json: any) => void;
  interval: number;
}

const useGetApiRequest = (
  props: GetApiRequestProps,
): {
  result: any | null;
  error: IError | null;
} => {
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const interval = setInterval(
      () =>
        fetch(props.url)
          .then(response => response.json())
          .then(json => {
            setResult(props.converter(json));
          })
          .catch(error => {
            console.log('Error:' + error);
            setError(error);
          }),
      props.interval,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return {result, error};
};

export default useGetApiRequest;
