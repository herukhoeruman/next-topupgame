import Image from "next/image";
import React from "react";
import classNames from "classnames";

interface TableRowProps {
  image: string;
  title: string;
  categories: string;
  item: number;
  price: number;
  status: "Pending" | "Success" | "Failed";
}

export default function TableRow(props: TableRowProps) {
  const { title, categories, item, status, image, price } = props;
  const statusClass = classNames({
    "float-start icon-status": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  });
  return (
    <>
      <tr className="align-middle">
        <th scope="row">
          <Image
            className="float-start me-3 mb-lg-0 mb-3"
            src={`/img/${image}.png`}
            width={80}
            height={60}
            alt=""
          />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">
              {title}
            </p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">
              {categories}
            </p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">{item} Diamond </p>
        </td>
        <td>
          <p className="fw-medium text-start color-palette-1 m-0">{price} </p>
        </td>
        <td>
          <div>
            <span className={statusClass}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              {status}
            </p>
          </div>
        </td>
      </tr>
    </>
  );
}
