import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const FancyCTAButton: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": "#ffffff",
          "--radius": "100px",
          "--speed": "3s",
          "--cut": "0.05em",
        } as any
      }
      {...rest}
      className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white bg-primary-default hover:bg-primary-hover [border-radius:var(--radius)] transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] shadow-2xl"
    >
      <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
        </div>
      </div>
      <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white lg:text-lg">
        {children}
      </span>
      <div className="insert-0 absolute h-full w-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
      <div className="absolute -z-20 bg-primary-default transition-colors group-hover:bg-primary-hover [border-radius:var(--radius)] [inset:var(--cut)]"></div>
    </button>
  );
};
