"use client";

import { Slide, ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}
import "react-toastify/ReactToastify.css";

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      <ToastContainer transition={Slide} />
      {children}
    </>
  );
}
