"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // 追加
import { ReactNode, useState } from "react";

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
