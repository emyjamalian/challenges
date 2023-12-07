import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { volumes } from "../../lib/data.js";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolumeIndex = volumes.findIndex(
    (volume) => volume.slug === slug
  );

  const currentVolume = volumes[currentVolumeIndex];
  const nextVolume = volumes[currentVolumeIndex + 1];
  const previousVolume = volumes[currentVolumeIndex - 1];

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  console.log(currentVolume, previousVolume, nextVolume);
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
