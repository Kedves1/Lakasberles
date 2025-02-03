"use client";
import React, { InputHTMLAttributes } from "react";
import { Button } from "@/app/(frontend)/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/(frontend)/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/(frontend)/components/ui/Popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { countries } from "@/app/config";

const Combobox = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
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
            className={cn(
              "w-[200px] flex-shrink-0 cursor-pointer justify-between border-0 bg-background rounded-xl hover:bg-background/50",
              className
            )}
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
              className="focus:ring-0!"
            />
            <CommandList>
              <CommandEmpty>Az ország nem található</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.value}
                    className="hover:bg-black/5 cursor-pointer transition-all duration-75"
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
        {...props}
        readOnly
      />
    </>
  );
};

export default Combobox;
