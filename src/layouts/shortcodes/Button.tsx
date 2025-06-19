import React from "react";

const Button = ({
  label,
  link,
  style,
  rel,
  sameWindow,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
  sameWindow?: boolean;
}) => {
  return (
    <a
      href={link}
      target={sameWindow ? "" : "_blank"}
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn mb-4 me-4 hover:text-white dark:hover:text-black hover:no-underline ${
        style === "outline" ? "btn-outline-primary" : "btn-primary"
      }`}
    >
      {label}
    </a>
  );
};

export default Button;
