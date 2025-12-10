import { useEffect, useState } from 'react';
import { Category } from '@/common/components';

type Props = {
  titleName: string;
  useGetQuery: () => any;
  path: string;
};

export const MovieCategory = ({ titleName, useGetQuery, path }: Props) => {
  const { data, isLoading } = useGetQuery();

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsInitialized(true);
    }
  }, [isLoading]);

  if (!isInitialized) {
    return <h1>Loading...</h1>;
  }

  return <Category titleName={titleName} data={data} path={path} />;
};
