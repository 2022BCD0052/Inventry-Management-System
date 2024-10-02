import HomeNavbar from "@/components/dashboard/HomeNavbar";

export default function Layout({ children }) {
  return (
       <main className="w-full bg-slate-100 min-h-screen">
        <HomeNavbar/>
         {children}
         
       </main>
  );
}
