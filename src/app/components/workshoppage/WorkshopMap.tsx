"use client";

import { FaDirections, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";

export default function WorkshopMap() {
  return (
    <section className="w-full py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* === Map === */}
        <MapEmbed />

        {/* === Info === */}
        <InfoBlocks />
      </div>
    </section>
  );
}

// === Map Embed ===
function MapEmbed() {
  return (
    <div className="w-full h-64 md:h-[450px] overflow-hidden shadow-xl border-4 border-primary">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5344436970795!2d107.61856827528663!3d-6.946104993054056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e88a86ac3c2f%3A0x12fb2bdb4c9260a!2sSR%20POINT%20CARS!5e0!3m2!1sid!2sid!4v1752831171732!5m2!1sid!2sid"
        width="600"
        height="450"
        className="h-full w-full"
        loading="lazy"
      ></iframe>
    </div>
  );
}

// === Info Blocks ===
function InfoBlocks() {
  return (
    <div className="flex flex-col space-y-8">
      {/* Alamat */}
      <InfoCard
        title="Alamat Workshop Kami"
        icon={<FaMapMarkerAlt className="text-3xl text-primary" />}
        text="JLN. PASIRLUYU SELATAN NO.25D REGOL BANDUNG"
      />

      {/* Koordinat */}
      <InfoCard
        title="Koordinat Workshop Kami"
        icon={<FaDirections className="text-3xl text-primary" />}
        text="-6.946038670144801, 107.62108480630076"
      />

      {/* Kontak */}
      <div className="bg-white p-6 shadow-lg border-l-4 border-primary">
        <h2 className="text-xl md:text-2xl font-inter uppercase font-bold text-primary mb-4">
          Kontak Kami
        </h2>
        <div className="space-y-3">
          <ContactRow
            icon={<IoLogoWhatsapp className="text-3xl text-green-500" />}
            text="+62 82120748682"
            link="https://wa.me/6282120748682"
          />
          <ContactRow
            icon={<RiInstagramFill className="text-3xl text-pink-500" />}
            text="@sr_point_cars"
            link="https://instagram.com/sr_point_cars"
          />
        </div>
      </div>

      {/* Tombol */}
      <a
        href="https://goo.gl/maps/X8w6BbkCQZBcA4Jk7"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white w-fit hover:bg-primary/90 transition-colors inline-flex justify-center items-center gap-4 px-8 py-4 text-lg uppercase font-semibold mt-6 shadow-lg border-2 border-primary hover:border-primary/90"
      >
        Buka Workshop di Map
        <LiaLongArrowAltRightSolid className="w-8 h-8" />
      </a>
    </div>
  );
}

// === Info Card ===
function InfoCard({
  title,
  icon,
  text,
}: {
  title: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="bg-white p-6 shadow-lg border-l-4 border-primary">
      <h2 className="text-xl md:text-2xl font-inter uppercase font-bold text-primary mb-6">
        {title}
      </h2>
      <p className="w-full flex flex-row justify-start items-center gap-4 text-md text-gray-700 leading-relaxed">
        <span className="flex-shrink-0">{icon}</span>
        <span>{text}</span>
      </p>
    </div>
  );
}

// === Contact Row ===
function ContactRow({
  icon,
  text,
  link,
}: {
  icon: React.ReactNode;
  text: string;
  link: string;
}) {
  return (
    <p className="flex flex-row justify-start items-center gap-4 text-lg text-gray-700">
      <span className="flex-shrink-0">{icon}</span>
      <a
        href={link}
        className="hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </p>
  );
}
