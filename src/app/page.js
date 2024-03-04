// import Image from "next/image";
// import Heading from "@/componets/ui/Heading";

import Heading from '@/componets/ui/Heading';
import Link from 'next/link';

const HomePage = () => {
  return (
    <header className="w-2/3 mx-auto">
      <Heading text="Hi my name is Elida" className="text-4xl" />
      <Link href={'./dashboard'}>Dashboard</Link>
    </header>
  );
};

export default HomePage;
