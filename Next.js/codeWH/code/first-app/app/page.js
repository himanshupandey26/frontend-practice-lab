import Image from "next/image";
// import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <Navbar/> */}
      <h3 className="bg-purple-500 p-1">This is my first next.js app</h3>
      <ul className="m-5">
        <li>✨ Super fast websites</li>
        <li>📦 Built-in routing (no React Router)</li>
        <li>🧠 SEO-friendly structure</li>
        <li>🔥 API routes built-in</li>
        <li>🚀 Server + Client code same project</li>
      </ul>

    </div>
  );
}
