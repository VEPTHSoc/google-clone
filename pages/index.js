import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://lh3.googleusercontent.com/proxy/G7MZxQDUu1iEkzZlXzQrBLEKkqH2ifLHQflve7brdxZfwNpYfMuu5yxhMpgaXZ1Y7ArgkQyfqLIzTIMxTjgaVl9gQuFzuGmuN3YgG6Evbx3RXvQLSU8WzQ1g_rHS09jq_7iIwMLyCS_uPrD-pnUUgS4fqQxsCItLTC1XDKPeNlkfymGRAdYZLajsJtbOgJBwmgGiOj6dUf5AXn5i" />
        </div>
      </header>
    </div>
  );
}
