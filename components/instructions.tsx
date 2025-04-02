"use client";

import { Info, X } from "lucide-react";
import { useState } from "react";

export default function Instructions() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(true)}
      >
        <Info className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div className="absolute top-4 right-4 z-10 w-80 p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">How to Use</h2>
        <button onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-2 text-sm">
        <p>This viewer is currently showing a sample duck model.</p>
        <p>
          <strong>To load your own model:</strong>
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Add your 3D model file (GLB or GLTF format) to the{" "}
            <code>/public/assets/3d/</code> directory
          </li>
          <li>
            Update the <code>modelPath</code> prop in <code>app/page.tsx</code>{" "}
            to point to your model
          </li>
          <li>
            Example: <code>modelPath="/assets/3d/your-model.glb"</code>
          </li>
        </ol>
        <p className="mt-2">
          <strong>Controls:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Rotate: Click and drag</li>
          <li>Zoom: Scroll wheel</li>
          <li>Pan: Right-click and drag</li>
        </ul>
      </div>
    </div>
  );
}
