"use client";
import { AppProgressBar } from "next-nprogress-bar";

export default function NProgressProvider() {
  return (
    <AppProgressBar
      height="4px"
      color="#00b90f"
      options={{ showSpinner: true}}
      delay={500}
      shallowRouting

    />
  );
}
