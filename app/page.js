import Link from "next/link";

export default function Home() {
  return (
<div className="flex items-center justify-center pb-6 min-h-screen">
  <h1>
    Welcome to <span className="text-blue-500">Create Next App</span>!
    
  </h1>
  <Link className="text-2xl items-center pt-5" href={'/inventory-dashboard/home/dashboard'}>view dashboard</Link>

</div>
    
  );
}
