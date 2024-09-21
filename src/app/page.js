import Content from "@/components/main/Content";
import Sidebar from "@/components/main/Sidebar";

export default function Home() {
  return (
    <>
    <main className="grid grid-cols-[250px_1fr] h-screen">
        <div>
          <Sidebar/>
        </div>
        <div className="p-4">
          <div className="bg-white w-full h-full rounded-3xl overflow-hidden">
            <Content/>
          </div>
        </div>
      </main>
    </>
  );
}