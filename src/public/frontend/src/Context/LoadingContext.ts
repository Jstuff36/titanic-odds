import React from 'react';

export interface LoadingContextType {
    loading: boolean;
    setLoadingState: (newState: boolean) => void;
}

export const defaultLoadingContextValue: LoadingContextType = {
    loading: false,
    setLoadingState: () => null
}

const LoadingContext = React.createContext<LoadingContextType>(defaultLoadingContextValue);

export const LoadingProvider = LoadingContext.Provider;

export default LoadingContext;