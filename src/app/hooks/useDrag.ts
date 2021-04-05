/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragEvent, useRef } from 'react';

export const useDragStartHandler = (
  id: string,
  cb?: (...args: any[]) => any,
  format?: string,
  effect?: 'copy' | 'move' | 'link' | 'none',
) => (ev: DragEvent<HTMLElement>):void => {
  ev.dataTransfer.setData(format ?? 'text/plain', id);
  ev.dataTransfer.dropEffect = effect ?? 'copy';

  if (cb !== undefined) {
    cb();
  }
};

export const useDragEndHandler = (
  cb?: (...args: any[]) => any,
) => (ev: DragEvent<HTMLElement>):void => {
  ev.preventDefault();
  if (cb !== undefined) {
    cb();
  }
};

export const useDragEnterHandler = (
  cb?: (...args: any[]) => any,
) => (ev: DragEvent<HTMLElement>):void => {
  ev.preventDefault();
  if (cb !== undefined) {
    cb();
  }
};

export const useDragOverHandler = (
  cb?: (...args: any[]) => any,
  delay = 100,
) => {
  const timerRef = useRef<number>();
  return (ev: DragEvent<HTMLElement>):void => {
    if (timerRef.current === undefined) {
      timerRef.current = Date.now();
    }
    if (Date.now() - timerRef.current > delay) {
      timerRef.current = Date.now();
      if (cb !== undefined) {
        cb();
      }
    }

    ev.preventDefault();
    ev.stopPropagation();
  };
};

export const useDragDropHandler = (
  cb?: (data: string) => any,
  format?: string,
) => (ev: DragEvent<HTMLElement>):void => {
  const data = ev.dataTransfer.getData(format ?? 'text/plain');

  if (cb !== undefined) {
    cb(data);
  }

  ev.preventDefault();
};
