/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragEvent } from 'react';

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

export const useDragOverHandler = (
  cb?: (...args: any[]) => any,
  delay?: number,
) => (ev: DragEvent<HTMLElement>):void => {
  console.log(delay);
  ev.preventDefault();
  if (cb !== undefined) {
    cb();
  }
};

export const useDragDropHandler = (
  cb?: (data: string) => any,
  format?: string,
) => (ev: DragEvent<HTMLElement>):void => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData(format ?? 'text/plain');

  if (cb !== undefined) {
    cb(data);
  }
};
