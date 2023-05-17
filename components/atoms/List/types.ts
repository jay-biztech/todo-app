import { ReactNode } from 'react';

export type ListProps = {
  children: {
    id: number;
    name: string;
    date: string;
  }[];
};
