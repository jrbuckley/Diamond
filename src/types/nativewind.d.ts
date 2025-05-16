/// <reference types="nativewind/types" /> 

declare module 'nativewind/react' {
  import { ComponentType } from 'react';
  export function styled<T>(Component: ComponentType<T>): ComponentType<T>;
} 