import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="p-3 font-sans sm:p-6 bg-background text-foreground min-h-screen">
      <Header />
      <Nav className="mt-3 sm:mt-5" />
    </main>
  );
}
