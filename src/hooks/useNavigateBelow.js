import { useLocation, useNavigate } from 'react-router-dom';

export default function useNavigateBelow() {
  const navigate = useNavigate();
  const location = useLocation();

  return () => navigate(location.state.from);
}
