import { Image } from "./Image";
import { Link } from "./Link";

import avatar from "./img/avatar.jpg";

export function Avatar() {
  return (
    <>
      <Link href="#">
        <Image src={avatar} alt="avatar" />
      </Link>
    </>
  );
}
