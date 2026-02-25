"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import GlobalLoader from '@/components/Loader';

const LoaderContext = createContext({ setIsLoading: (state: boolean) => {} });

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoaderContext.Provider value={{ setIsLoading }}>
      <GlobalLoader isLoading={isLoading} />
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);