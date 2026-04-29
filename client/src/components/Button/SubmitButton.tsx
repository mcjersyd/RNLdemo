import type { FC } from "react";

interface SubmitButtonProps {
  label: string;
  newClassName?: string;
  className?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  label,
  newClassName,
  className,
}) => {
  return (
    <>
      <button
        type="submit"
        className={`${
          newClassName
            ? newClassName
            : `px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg text-sm font-medium cursor-pointer hover:bg-green-800 ${className}`
        }`}
      >
        {label}
      </button>
    </>
  );
};

export default SubmitButton;
