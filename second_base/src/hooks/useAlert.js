import { useState } from 'react';

export default function useAlert() {
  const [alert, setAlert] = useState(null);

  const updateAlert = update => {
    setAlert(update);
    setTimeout(() => setAlert(null), 2500);
  };
  return { alert, updateAlert };
}
