import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>404 - Not Found!</h2>
      <Link href={'/'}>Return home</Link>
    </div>
  );
}

export default NotFound;