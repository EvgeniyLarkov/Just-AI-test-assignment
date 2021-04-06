import { useRef, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useDebounce<T extends (...args: any[]) => ReturnType<T>>(
  func: T,
  delay: number,
  cleanUp = false): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<number>();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

  return (...args) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => func(...args), delay) as unknown as number;
  };
}
