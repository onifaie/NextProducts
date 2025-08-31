"use client";

import { ReduxProvider } from "@/app/api/ReduxProvider";

export default function ClientWrapper({ children }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}