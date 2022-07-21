import { FC, useEffect, useRef } from 'react'
import { start } from './babylon';

export const Babylon: FC = () => {
  const refCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (refCanvas.current == null) return;
    start(refCanvas.current);
  }, [])

  return <canvas ref={refCanvas}/>;
};

