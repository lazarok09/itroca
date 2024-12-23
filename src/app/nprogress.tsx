"use client";
import { AppProgressBar } from "next-nprogress-bar";

export default function NProgressProvider() {
  return (
    <AppProgressBar
      height="4px"
      color="#00b90f"
      options={{ showSpinner: false}}
      delay={500}
      shallowRouting

    />
  );
}
