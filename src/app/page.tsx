// "use client"
// import { useTRPC } from "@/trpc/client";
// import { useQuery } from "@tanstack/react-query";
// import Image from "next/image";

import { caller } from "@/trpc/server";

export default async function Home() {
  // const trpc = useTRPC();

  const data = await caller.hello({ text: "Sarthak"});
  
  // const { data } = useQuery(trpc.hello.queryOptions({ text: "Sarthak"}));
  return (
      <div>
        {JSON.stringify(data)}
      </div>
  );
}
