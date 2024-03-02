"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';


function TechCard({ img, name }: { img: any; name: any }) {
  return (
    <Tilt className="hover:bg-gray-400 hover:bg-opacity-20 p-4 rounded-md flex flex-col items-center gap-2 w-fit hover:text-slate-100 cursor-default" scale={1.15} perspective={500}>
      <div className="md:w-24 md:h-16 relative">
        <Image alt="" src={img} fill className="object-contain"
        />
      </div>
      <span className="text-center">{name}</span>
    </Tilt>
  );
}

export default TechCard;
