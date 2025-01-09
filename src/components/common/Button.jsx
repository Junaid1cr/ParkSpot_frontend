/* eslint-disable react/prop-types */

const Button = ({
  children,
  variant = "primary",
  disabled,
  onClick,
  className = "",
  type = "button",
}) => {
  const baseStyles =
    "px-4 py-2 rounded font-medium transition-all duration-200 ease-in-out";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-black " +
      "shadow-lg hover:shadow-xl active:shadow-inner disabled:bg-gray-800 disabled:text-gray-400",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:bg-gray-100",
    danger: "bg-red-600 hover:bg-red-700 text-white disabled:bg-red-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
