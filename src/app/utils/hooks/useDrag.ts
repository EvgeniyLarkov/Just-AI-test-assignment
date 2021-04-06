/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragEvent } from 'react';

export const dragStartHandler = (
  data: string,
  cb?: (...args: any[]) => any,
  format?: string,
  effect?: 'copy' | 'move' | 'link' | 'none',
) => (ev: DragEvent<HTMLElement>):void => {
  ev.dataTransfer.setData(format ?? 'text/plain', data);
  ev.dataTransfer.dropEffect = effect ?? 'copy';
  if (cb !== undefined) {
    cb();
  }
};

export const dragEndHandler = (
  cb?: (...args: any[]) => any,
  format?: string,
) => (ev: DragEvent<HTMLElement>):void => {
  const data = ev.dataTransfer.getData(format ?? 'text/plain');
  ev.preventDefault();
  if (cb !== undefined) {
    cb(data);
  }
};

export const dragEnterHandler = (
  cb?: (...args: any[]) => any,
) => (ev: DragEvent<HTMLElement>):void => {
  ev.preventDefault();
  if (cb !== undefined) {
    cb();
  }
};

export const dragOverHandler = (
  cb?: (...args: any[]) => any,
  delay = 100,
) => {
  let timerRef = Date.now();
  return (ev: DragEvent<HTMLElement>):void => {
    if (timerRef === undefined) {
      timerRef = Date.now();
    }
    if (Date.now() - timerRef > delay) {
      timerRef = Date.now();
      if (cb !== undefined) {
        cb();
      }
    }

    ev.preventDefault();
    ev.stopPropagation();
  };
};

export const dragDropHandler = (
  cb?: (data: string) => any,
  format?: string,
) => (ev: DragEvent<HTMLElement>):void => {
  const data = ev.dataTransfer.getData(format ?? 'text/plain');

  if (cb !== undefined) {
    cb(data);
  }

  ev.preventDefault();
  ev.stopPropagation();
};
