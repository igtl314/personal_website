"use client";
import Image from "next/image";
import marcus from "../public/marcus.jpg";
import Link from "next/link";
import Card from "./_compoments/card";
import Navbar from "./_compoments/navbar";
import { useEffect, useState } from "react";

export default function Home() {
  var arr = [
    { name: "Home", link: "/#home" },
    { name: "About Me", link: "/#about" },
    { name: "Education", link: "/#education" },
    { name: "Projects", link: "/#projects" },
    { name: "Publications", link: "/#publications" },
    { name: "Contact", link: "/#contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = arr.map((item) =>
        document.getElementById(item.link.replace("/#", ""))
      );

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - screen.height / 3 && // Adjust the offset as needed
          scrollPosition < sectionTop + sectionHeight - screen.height / 3 // Adjust the offset as needed
        ) {
          console.log(section.id);
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Navbar arr={arr} pathname={activeSection} className="bg-red-500" />
      <intro
        className="grid grid-cols-2 items-center justify-items-center p-10"
        id="home"
      >
        <Image
          src={marcus}
          alt="Marcus"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>
          <a className="text-4xl">Hello, Im Marcus Döberl</a>
          <p className="text-2xl">
            Im a Information Technology student at the University of the
            Linköping with a passion for programming and building smart home
            solutions.
          </p>
        </div>
      </intro>
      <about className="p-10" id="about">
        <p className="text-4xl text-center p-10">About me</p>
        <p className="text-2xl text-center p-10">
          Ända sen jag byggde min första dator vid 11 år ålder har mitt intresse
          för datorer blivit större och störra. Jag har idag ett stort intresse
          för att bygga smarta hem lösningar och att programming. Jag har även
          ett flertal aktiva projekt som du kan läsa mer om här{" "}
          <Link href="/#projects" className="underline decoration-solid">
            projects
          </Link>
        </p>
      </about>
      <school className="p-10" id="education">
        <p className="text-2xl text-center p-10">Education </p>
        <p>
          {" "}
          Im now persuing a M.Sc in Information Technology at the University of
          Linköping with a specialisation in secure systems.
        </p>
      </school>
      <programming className="p-10">
        <p>programming lanuges im good at</p>
      </programming>
      <project className=" p-10 grid grid-cols-2 gap-10" id="projects">
        <a className="text-2xl text-center col-span-2">Projects</a>
        <Card>{"Own proxmox server"}</Card>
        <Card>{"Soil moisutrize level with notifications"}</Card>
        <Card>{"Personal website"}</Card>
        <Card>{"Home built smart home alarm system on our contry-house"}</Card>
      </project>
      <publications className="p-10" id="publications">
        <p className="text-2xl text-center">Publications</p>
        <p> Chain-sawing: A Longitudinal Analysis of Certificate Chains</p>
      </publications>
      <contact className="p-10">
        <p>Placeholder for contact information</p>
      </contact>
      <work className="p-10">
        <p>
          Placeholder for work experience, i want a line stright down and
          injection with work experience
        </p>
      </work>
      <footer id="contact">
        Should contain linkedIn, and github at least. Maybe a (C), cv igen?{" "}
        <Link href="/#navbar">Back to top</Link>
      </footer>
    </main>
  );
}
