import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <p>Error loading data</p>;
  }

  if (!data) {
    return;
  }

  return (
    <div>
      <h1>Random Character</h1>
      <p>First Name: {data.firstName}</p>
      <p>Lastname: {data.lastName}</p>
      <p>twitter Name: {data.twitterName}</p>
      <p>Geo hash: {data.geohash}</p>
    </div>
  );
}
