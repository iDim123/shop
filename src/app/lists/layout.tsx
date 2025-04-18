import Sidebar from "@/components/Sidebar";

export default function DataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full overflow-auto h-screen">
      <Sidebar />
      <div className="w-full flex relative overflow-auto">
        {children}
      </div>
    </div>
  );
}
