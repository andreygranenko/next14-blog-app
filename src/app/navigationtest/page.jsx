'use client';
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathName = usePathname()
  const searchParams = useSearchParams();

  const handleClick = () => {
    console.log('clicked')
    router.push('/')
  }

  return (
    <div>
      <Link href={'/'} prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
}

export default NavigationTestPage;