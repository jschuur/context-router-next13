'use client';

import { ReactNode, createContext, useState } from 'react';

export type DataContext = {
  data: string;
  setData: (data: string) => void;
};

export const LayoutDataContext = createContext<DataContext>({} as DataContext);
export const PageDataContext = createContext<DataContext>({} as DataContext);

export function LayoutDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<string>('(initialised value)');

  const store = {
    data,
    setData,
  };

  return <LayoutDataContext.Provider value={store}>{children}</LayoutDataContext.Provider>;
}
export function PageDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<string>('(initialised value)');

  const store = {
    data,
    setData,
  };

  return <PageDataContext.Provider value={store}>{children}</PageDataContext.Provider>;
}
