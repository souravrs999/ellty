"use client";
import { FC, forwardRef, HTMLAttributes, Ref, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import { CheckedState } from "@radix-ui/react-checkbox";

type ListItemProps = HTMLAttributes<HTMLDivElement> & { title: string };
const ListItem: FC<ListItemProps> = forwardRef(
  (props: ListItemProps, ref: Ref<HTMLDivElement>) => {
    const { className, title, children, ...rest } = props;
    const [checked, setChecked] = useState<CheckedState>(false);
    const [hovering, setHovering] = useState<boolean>(false);

    const handleMouseOver = (): void => {
      setHovering(true);
    };

    const handleMouseLeave = (): void => {
      setHovering(false);
    };

    const handleCheckedToggle = (val: CheckedState) => {
      setChecked(val);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "group flex justify-between items-center p-[8px_15px_8px_22px] cursor-pointer"
        )}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => handleCheckedToggle(!checked)}
        {...rest}
      >
        <p className="font-normal text-[14px] leading-[18.2px] text-[#1F2128]">
          {title}
        </p>
        <div className="grid w-[25px] h-[25px] place-items-center">
          <Checkbox
            checked={checked}
            setChecked={handleCheckedToggle}
            hovering={hovering}
            className={cn({ "border-[#BDBDBD]": hovering })}
          />
        </div>
      </div>
    );
  }
);
ListItem.displayName = "ListItem";
export default ListItem;
