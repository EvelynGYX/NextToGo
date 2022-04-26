import {useEffect, useState} from 'react';
import {IError} from './ApiInterfaces';

export interface GetApiRequestProps {
  url: string;
  converter: (json: any) => void;
  intervalInMS: number;
}

export const useGetApiRequest = (
  props: GetApiRequestProps,
): {
  result: any;
  error: IError | null;
  loading: boolean;
} => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isRunning) {
      setLoading(true);
      interval = setInterval(
        () =>
          fetch(props.url)
            .then(response => response.json())
            .then(json => {
              setResult(props.converter(json));
              setError(null);
              setLoading(false);
              setIsRunning(true);
            })
            .catch(err => {
              console.log('Error:' + err);
              setError(err);
              setResult(null);
              setLoading(false);
              setIsRunning(false);
            }),
        props.intervalInMS,
      );
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return {result, error, loading};
};
