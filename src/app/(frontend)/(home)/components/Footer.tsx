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
      <div className="flex max-[1600px]:flex-col  max-[1600px]:mb-10 justify-between max-md:items-center md:mx-20">
        <div className="flex max-md:flex-wrap max-md:justify-center gap-20 max-[1600px]:gap-8 max-[1600px]:mb-20">
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
        <div className="max-w-[700px] w-full">
          <div className="mb-2 text-xl">Gyakori Kérdések</div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Hogyan tölthetek fel egy házat?
              </AccordionTrigger>
              <AccordionContent>
                <Link href="/upload" className="text-blue-500 underline">
                  Ezt
                </Link>{" "}
                a linket követve, fiók létrehozása után, elérheted a feltöléshez
                szükséges űrlapot!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Hogyan kaphatok pénz vissza térítést?
              </AccordionTrigger>
              <AccordionContent>
                A cég emailjére egy jól megfogalmazott levél, és megfelelő
                bizonyíték alapján visszakaphatod bérlésed 50%-át.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Kik csináltálk ezt a weboldalt?
              </AccordionTrigger>
              <AccordionContent>
                A weboldalt az Infoctopus Inc. készítette, ha többet szeretnél
                megtudni rólunk, látogasd meg a weboldalunk! :3
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
