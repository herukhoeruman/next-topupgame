import Image from "next/image";
import Link from "next/link";

interface AuthProps {
  isLogin?: boolean;
}
export default function Auth(props: Partial<AuthProps>) {
  const { isLogin } = props;
  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <Link
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src="/img/avatar-1.png"
              className="rounded-circle"
              width={60}
              height={60}
              alt=""
            />
          </Link>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-lg color-palette-2" href="#">
                Wallet
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="member/edit-profile"
              >
                Account Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-lg color-palette-2" href="#">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link
        href={"/sign-in"}
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        role="button"
      >
        Sign In
      </Link>
    </li>
  );
}
