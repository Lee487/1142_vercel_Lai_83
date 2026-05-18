'use client';

import * as React from 'react';

const Menubar = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center space-x-1 rounded-md border bg-background p-1 ${className}`}>
    {children}
  </div>
);

const MenubarMenu = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group">{children}</div>
);

const MenubarTrigger = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <button className={`flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground group-hover:bg-accent ${className}`}>
    {children}
  </button>
);

const MenubarContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute left-0 top-full z-50 mt-1 hidden min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md group-hover:block ${className}`}>
    {children}
  </div>
);

const MenubarItem = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground ${className}`}>
    {children}
  </div>
);

const MenubarSeparator = () => <div className="-mx-1 my-1 h-px bg-muted" />;

const MenubarShortcut = ({ children }: { children: React.ReactNode }) => (
  <span className="ml-auto text-xs tracking-widest text-muted-foreground">{children}</span>
);

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
};
