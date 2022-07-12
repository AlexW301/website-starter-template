import Link from "next/link";

export default function PrimaryButton({ text }) {
  return (
    <Link href={"#"} passHref>
      <a className="block w-fit bg-blue-500 py-3 px-6 rounded-lg text-lg capitalize text-white font-bold border-2 border-blue-500 hover:bg-white hover:text-blue-500 duration-300">
        {text}
      </a>
    </Link>
  );
}
