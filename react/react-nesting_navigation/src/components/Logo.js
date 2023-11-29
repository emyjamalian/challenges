import { Image } from "./Image";
import { Link } from "./Link";

import logo from "./img/logo.jpg";

export function Logo() {
  return (
    <Link href="#">
      <Image src={logo} alt="logo"></Image>
    </Link>
  );
}
