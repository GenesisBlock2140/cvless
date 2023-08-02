import { FileText } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="hidden w-1/2 h-[100vh] lg:flex flex-col justify-center items-center bg-[#4148d3]">
        <FileText size={250} color="white" />
      </div>
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        {children}
      </div>
    </main>
  );
}
