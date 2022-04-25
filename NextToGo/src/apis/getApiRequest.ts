import {useEffect, useState} from 'react';
import {IError} from './ApiInterfaces';

export interface GetApiRequestProps {
  url: string;
  converter: (json: any) => void;
  interval: number;
}

export const useGetApiRequest = (
  props: GetApiRequestProps,
): {
  result: any;
  error: IError | null;
} => {
  let interval: NodeJS.Timer;
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(
        () =>
          fetch(props.url)
            .then(response => response.json())
            .then(json => {
              setResult(props.converter(json));
              setError(null);
              setIsRunning(true);
            })
            .catch(error => {
              console.log('Error:' + error);
              setError(error);
              setResult(null);
              setIsRunning(false);
            }),
        props.interval,
      );
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return {result, error};
};

export default useGetApiRequest;
