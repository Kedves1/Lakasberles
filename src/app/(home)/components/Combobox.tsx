"use client";
import React from "react";
import { Button } from "./ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/Command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { countries } from "@/config";

const Combobox = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] flex-shrink-0 justify-between bg-background rounded-xl hover:bg-background/50"
          >
            {value
              ? countries.find((country) => country.value === value)?.label
              : "Válasszon egy országot"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 z-[999] bg-main">
          <Command>
            <CommandInput
              placeholder="Ország kereső"
              className="focus:ring-0"
            />
            <CommandList>
              <CommandEmpty>Az ország nem található</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.value}
                    className="hover:bg-black/5 transition-all duration-75"
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === country.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {country.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <input
        type="text"
        value={value}
        name="country"
        className="hidden"
        readOnly
      />
    </>
  );
};

export default Combobox;
