import { ComponentProps, ReactNode } from "react";

interface BubbleButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button
      className="p-2 text-zinc-200 gap-1.5 text-sm flex items-center font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 data-[active=true]:bg-zinc-600"
      {...props}
    />
  );
}
