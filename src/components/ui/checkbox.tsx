"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    checked: CheckboxPrimitive.CheckedState;
    setChecked: (x: CheckboxPrimitive.CheckedState) => void;
    hovering?: boolean;
  }
>(({ className, checked, setChecked, hovering, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={checked}
      onCheckedChange={setChecked}
      className={cn(
        "peer h-[23px] w-[23px] shrink-0 rounded-[6px] border-[1px] border-[#CDCDCD] hover:border-[#BDBDBD] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        {
          "bg-[#2469F6] text-white outline-[3px] outline-[#2469F6] outline-opacity-[10%] border-none":
            checked,
          "bg-[#5087f8]": checked && hovering,
        },
        className
      )}
      {...props}
    >
      <div className={cn("flex items-center justify-center text-current")}>
        {(hovering || checked) && (
          <Check
            className={cn("h-[22px] w-[22px]", {
              "text-[#E3E3E3]": hovering && !checked,
            })}
          />
        )}
      </div>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
