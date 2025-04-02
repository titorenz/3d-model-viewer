"use client";

import { Suspense } from "react";
import ModelViewer from "@/components/model-viewer";
import Instructions from "@/components/instructions";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-screen">
            Loading...
          </div>
        }
      >
        <ModelViewer modelPath="/assets/3d/barn.glb" />
      </Suspense>
      <Instructions />
    </main>
  );
}
