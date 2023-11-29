import "./styles.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Link } from "./components/Link";
import { Image } from "./components/Image";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Nav>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Avatar />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
