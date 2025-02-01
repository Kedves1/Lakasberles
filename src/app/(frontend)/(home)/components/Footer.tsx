import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/(frontend)/components/ui/accordion";
import Link from "next/link";
import { Smartphone, Instagram, Mail, GlobeIcon } from "lucide-react";

const Footer = () => {
  const socials = [
    {
      title: "Telefonszám",
      value: "+36 63 562 280",
      icon: Smartphone,
      color: "black",
    },
    {
      title: "Instagram",
      value: "@infoc.topus",
      icon: Instagram,
      color: "orchid",
    },
    {
      title: "Email",
      value: "techsupport@infoctopus.com",
      icon: Mail,
      color: "firebrick",
    },
  ];
  const pages = [
    { name: "Főoldal", path: "/" },
    { name: "Keresés", path: "/search" },
    { name: "Házfeltöltés", path: "/upload" },
    { name: "Beállítások", path: "/settings" },
  ];

  return (
    <footer className="w-full min-h-[350px] h-fit shadow-md shadow-black  bg-main pt-10 flex flex-col justify-between">
      <div className="flex max-[1600px]:flex-col  max-[1600px]:mb-10 justify-between mx-20">
        <div className="flex max-md:flex-wrap gap-20 max-[1600px]:gap-8 max-[1600px]:mb-20">
          <div className="flex flex-col">
            <div className="mb-2 text-xl">Oldalak</div>
            <div className="flex flex-col gap-3">
              {pages.map((page) => {
                return (
                  <Link href={page.path} key={page.name}>
                    {page.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="mb-2 text-xl">Elérhetőségek</div>
            <div className="flex flex-col gap-3">
              {socials.map((social) => {
                return (
                  <div className="flex gap-2" key={social.value}>
                    <social.icon color={social.color} />
                    {social.value}
                  </div>
                );
              })}
              <a
                href="https://infoctopus.gemes.eu/"
                target="_blank"
                className="flex gap-2 underline"
              >
                <GlobeIcon color={"gray"} />
                infoctopus.gemes.eu
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[800px] w-full">
          <div className="mb-2 text-xl">Gyakori Kérdések</div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Hogyan tölthetek fel egy házat?
              </AccordionTrigger>
              <AccordionContent>
                Igen, Geró tényleg 160cm, és kódoló tudása se nagyobb mint a
                magassága.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Martin tényleg meleg?</AccordionTrigger>
              <AccordionContent>
                Nem. Martin nem meleg akarmit is hiszel.{" "}
                <span className="!text-[#2F2D2D]">
                  (ne hidd el, tényleg meleg)
                </span>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Robi volt Vietnámban?</AccordionTrigger>
              <AccordionContent>
                Igen, a közismert kép is bizonyítja, amin látszodik a trauma a
                háborúból.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="w-full h-10 bg-main flex justify-center items-center">
        <a href="https://infoctopus.gemes.eu/" className="underline">
          Infoctopus Inc.{" "}
        </a>{" "}
        © 2024
      </div>
    </footer>
  );
};

export default Footer;
