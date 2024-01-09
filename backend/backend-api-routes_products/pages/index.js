import { SWRConfig } from "swr";

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  return (
    <div>
      <h1>Welcome to Next.js API Routes!</h1>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}
