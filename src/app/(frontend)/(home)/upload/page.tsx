"use client";
import React from "react";
import { countries } from "@/app/config";
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
import { Check, ChevronsUpDown, Files } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/app/config";
import { useRouter } from "next/navigation";
import AuthSubmit from "@/app/(frontend)/(auth)/components/AuthSubmit";
import AuthInput from "@/app/(frontend)/(auth)/components/AuthInput";
import { useToast } from "../../components/ui/use-toast";
import { uploadFormFields, uploadFormSchema } from "@/app/(frontend)/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const showUser = async () => {
  const res = await fetch("/api/customers/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

const UploadPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [countryOpen, countrySetOpen] = React.useState(false);
  const [country, setCountry] = React.useState("");
  const [pictures, setPictures] = React.useState<FileList | null>();
  const router = useRouter();

  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<uploadFormFields>({
    resolver: zodResolver(uploadFormSchema),
  });
  const {
    data: UserData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: showUser,
  });
  if (isLoading)
    return (
      <div className="w-screen h-screen grid place-items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-highlight"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (UserData.error) {
    router.push("/login");
  }

  const handleUpload: SubmitHandler<uploadFormFields> = async (formData) => {
    const picIds = [];
    for (let i = 0; i < pictures!.length; i++) {
      const filesFormdata = new FormData();
      filesFormdata.append("file", pictures![i]);

      const picData = await fetch("/api/housepics", {
        method: "POST",
        credentials: "include",
        body: filesFormdata,
      });
      const pic = await picData.json();
      picIds.push({ pictures: { id: pic.doc.id } });
    }

    const Data = {
      housename: formData.housename,
      owner: UserData.user.id,
      description: formData.description,
      roomnum: formData.roomnum,
      bathnum: formData.bathnum,
      price: formData.price,
      category: value,
      country: country,
      city: formData.city,
      streetAddress: formData.streetAddress,
      housepics: picIds,
    };

    const response = await fetch("/api/houses", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Data.housename,
        owner: Data.owner,
        description: Data.description,
        roomnum: Data.roomnum,
        bathnum: Data.bathnum,
        price: Data.price,
        category: Data.category,
        country: Data.country,
        city: Data.city,
        streetAddress: Data.streetAddress,
        housepics: Data.housepics,
      }),
    });
    const data = await response.json();
    console.log(data);
    toast({
      title: `${Data.housename}`,
      description: "Ház sikeresen felrakva 🎉",
      variant: "signin",
      duration: 3000,
    });
    // router.push("/Myhouses");
  };

  return (
    <main className="min-h-screen grid place-content-center">
      <form onSubmit={handleSubmit(handleUpload)}>
        <div className="flex justify-between w-[700px]">
          <div className="max-w-[300px] w-full">
            <AuthInput
              label="Ház neve"
              id="housename"
              type="text"
              className="mb-1"
              error={errors.housename}
              {...register("housename")}
            />
            <div className="text-xl">Leírás</div>
            <textarea
              id="descpription"
              className="bg-main w-full resize-none h-40 rounded-xl p-1"
              {...register("description")}
            />

            {errors.description && (
              <div className="text-red-400 ml-1 text-xs">
                {errors.description.message}
              </div>
            )}
            <div className="flex gap-3">
              <AuthInput
                label="Szoba szám"
                id="roomnum"
                type="number"
                error={errors.roomnum}
                {...register("roomnum", {
                  valueAsNumber: true,
                })}
              />
              <AuthInput
                label="Fürdőszoba szám"
                id="bathnum"
                type="number"
                error={errors.bathnum}
                {...register("bathnum", {
                  valueAsNumber: true,
                })}
              />
            </div>
            <AuthInput
              label="Ár / éjszaka"
              id="price"
              type="number"
              error={errors.price}
              {...register("price", {
                valueAsNumber: true,
              })}
            />
            <div className="text-xl">Kategória</div>

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full bg-main flex-shrink-0 cursor-pointer justify-between border-0  rounded-xl hover:bg-main/50"
                >
                  {value
                    ? categories.find((category) => category.Route === value)
                        ?.Name
                    : "Válasszon egy kategóriát"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0 z-[999] bg-main">
                <Command>
                  <CommandInput
                    placeholder="Kategória kereső"
                    className="focus:ring-0!"
                  />
                  <CommandList>
                    <CommandEmpty>Az ország nem található</CommandEmpty>
                    <CommandGroup>
                      {categories.map((category) => (
                        <CommandItem
                          key={category.Route}
                          value={category.Route}
                          className="hover:bg-black/5 cursor-pointer transition-all duration-75"
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === category.Route
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {category.Name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <AuthInput
              label="Klíma"
              id="ventilation"
              type="checkbox"
              className="w-[20px] h-[20px] ml-3 mt-3"
              error={errors.ventilation}
              {...register("ventilation")}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="">
              <div className="text-xl">Ország</div>
              <Popover open={countryOpen} onOpenChange={countrySetOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full bg-main flex-shrink-0 cursor-pointer justify-between border-0  rounded-xl hover:bg-main/50"
                  >
                    {country
                      ? countries.find((countryy) => countryy.value === country)
                          ?.label
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
                              setCountry(
                                currentValue === value ? "" : currentValue
                              );
                              countrySetOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === country.value
                                  ? "opacity-100"
                                  : "opacity-0"
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
              <AuthInput
                label="Település"
                id="city"
                type="text"
                error={errors.city}
                {...register("city")}
              />
              <AuthInput
                label="Cím"
                id="address"
                type="text"
                error={errors.streetAddress}
                {...register("streetAddress")}
              />
              <div className="text-xl">Képek</div>
              <input
                type="file"
                className="bg-main file:bg-highlight file:text-white file:p-2 file:rounded-xl w-full"
                onChange={(e) => setPictures(e.currentTarget.files)}
                multiple
                accept="image/*"
              />
            </div>
            <div className="">
              <AuthSubmit className="ml-auto !mb-0" />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default UploadPage;
