import "./styles.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Link } from "./components/Link";
import { Image } from "./components/Image";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

export default function App() {
  return (
    <>
      <Header>
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
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
          <Image src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
