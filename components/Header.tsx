import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 sticky top-0 bg-white z-50 shadow-md">
      {/* left */}
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          width="30"
          height="30"
        />
        <div>
          <h1 className="font-bold">
            <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL-E 2, Chat GPT & Microsoft Azure!
          </h2>
        </div>
      </div>
      {/* right */}
      <div className="flex text-xs md:text-base text-gray-500">
        <Link href="https://github.com/" className="px-2 font-light">
          Github Repo
        </Link>
      </div>
    </header>
  );
};
export default Header;
