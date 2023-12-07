import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleRandomVolume() {
    const randomVolume = getRandomElement(volumes);
    console.log(randomVolume);
    return router.push(`/volumes/${randomVolume.slug}`);
  }
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{volumes.introduction}</p>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
      <button onClick={handleRandomVolume}>Random Volume</button>
    </>
  );
}
