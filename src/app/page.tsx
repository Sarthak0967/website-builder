"use client"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
// import Image from "next/image";

export default function Home() {
  const trpc = useTRPC();
  
  const { data } = useQuery(trpc.hello.queryOptions({ text: "Sarthak"}));
  return (
      <div>
        {JSON.stringify(data)}
      </div>
  );
}
