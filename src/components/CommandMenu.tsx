import React, { useEffect, useState } from "react";
import { Command } from "cmdk";

const CommandMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();

        console.log("Opening menu");

        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      label="Global Command Menu"
      className="z-50 bg-red-500 w-52 h-52"
    >
      <Command.Input className="bg-red-500 w-52 h-52"/>
      <Command.List className="bg-red-500 w-52 h-52">
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command.Dialog>
  );
};

export default CommandMenu;
