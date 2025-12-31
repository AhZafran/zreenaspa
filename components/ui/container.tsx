import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-4xl",
      default: "max-w-7xl",
      lg: "max-w-[1400px]",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full container-padding",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container };
