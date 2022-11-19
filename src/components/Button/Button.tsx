import React, { ReactNode } from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

const common = [
  "rounded-lg",
  "font-bold"
]

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        ...common,
        "bg-primary",
        "text-white",
        "hover:bg-blue-600",
      ],
      outline: [
        ...common,
        "text-black",
        "border-black",
        "border-2",
        "hover:bg-black/5",
        "hover:scale-105"
      ],
      gradient: [
        ...common,
        "bg-gradient-to-tr from-primary to-cyan-400",
        "text-white",
        "border-cyan-400",
        "border-2",
        "hover:scale-105"
      ]
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});
export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
  return <button className={button({intent, size, className})} {...props} />;
};

export default Button;