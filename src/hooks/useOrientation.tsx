import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';

export const useOrientation = () => {
  const { width, height } = useWindowDimensions();
  const [status, setStatus] = useState({
    isPortrait: false,
    isLandscape: false,
  });

  useEffect(() => {
    const isPortrait = height >= width;
    setStatus({ isPortrait, isLandscape: !isPortrait });
  }, [width, height]);

  return { ...status };
};
