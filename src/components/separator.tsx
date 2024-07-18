import { cn } from "@/lib/utils";
import { FC, forwardRef, HTMLAttributes, Ref } from "react";

type SeparatorProps = HTMLAttributes<HTMLDivElement> & {};
const Separator: FC<SeparatorProps> = forwardRef(
  (props: SeparatorProps, ref: Ref<HTMLDivElement>) => {
    const { children, className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={cn("w-full p-[10px_15px_10px_15px]", className)}
        {...rest}
      >
        <span className="block w-full bg-[#CDCDCD] h-[0.7px]" />
      </div>
    );
  }
);
Separator.displayName = "Separator";
export default Separator;
