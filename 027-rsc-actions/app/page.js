import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import fs from "node:fs/promises";
import { Suspense } from "react";
import UsePromiseDemo from "@/components/UsePromisesDemo";

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo />
      </Suspense>
    </main>
  );
}
