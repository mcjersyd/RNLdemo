import type { FC } from "react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  label: string;
  path: string;
  newClassName?: string;
  className?: string;
}

const BackButton: FC<BackButtonProps> = ({
  label,
  path,
  newClassName,
  className,
}) => {
  return (
    <>
      <Link
        to={path}
        className={`${
          newClassName
            ? newClassName
            : `px-4 py-2 bg-white text-gray-600 rounded-lg shadow-lg text-sm font-medium cursor-pointer hover:bg-gray-100 hover:text-fray-700 ${className}`
        }`}
      >
        {label}
      </Link>
    </>
  );
};

export default BackButton;
