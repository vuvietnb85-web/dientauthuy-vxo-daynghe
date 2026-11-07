import { createFileRoute } from "@tanstack/react-router";
import { MeisterApp } from "@/components/eta/shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <MeisterApp />;
}
