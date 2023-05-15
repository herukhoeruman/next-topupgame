import classNames from "classnames";
import Link from "next/link";

interface ButtonFilterStatusProps {
  title: string;
  active: boolean;
}

export default function ButtonFilterStatus(props: ButtonFilterStatusProps) {
  const { title, active } = props;
  const btnClass = classNames({
    "btn btn-status rounded-pill text-sm  me-3": true,
    "btn-active": active,
  });

  return (
    <Link data-filter="*" href="#" className={btnClass}>
      {title}
    </Link>
  );
}
