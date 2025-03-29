import React, { HTMLAttributes } from "react";

const Row = ({
  onClick,
  css,
  children,
}: {
  onClick?: () => void;
  css?: HTMLAttributes<HTMLDivElement>["className"];
  children: React.ReactNode;
}) => {
  return (
    <div onClick={onClick} className={`flex flex-row ${css}`}>
      {children}
    </div>
  );
};

export default Row;
