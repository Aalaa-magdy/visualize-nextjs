import { ModeToggle } from "@/components/ui/toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-red-500">
        <h1>Hello World</h1>
        <ModeToggle />
    </div>
  );
}
