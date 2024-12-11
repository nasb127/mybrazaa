"use client";  // This marks the component as client-side only

import { Games } from "@/utils/Gamedata";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client side
  }, []);

  if (!isClient) {
    // Return null or a loading message while waiting for the client-side rendering
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
        {Games.map((game, index) => {
          return (
            <div key={index} className="w-[10rem] h-[10rem] rounded-lg">
              <Link href={game.src} target="_blank">
                <video autoPlay loop muted className="rounded-lg">
                  <source src={game.cover} />
                </video>
                <h2 className="text-white flex items-center justify-center p-2 text-xl">{game.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
