import { useNavigate } from 'react-router';

export const Back = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>Go back</button>;
};
