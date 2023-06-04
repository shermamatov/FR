"use client";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { fetchServiceByIdandLoc } from "@/api";
import { PageNavProps } from "@/app/types";

function LocationChecker({ params }: PageNavProps) {
  const service = use(fetchServiceByIdandLoc(params.id, params.locId));

  return service.text_for_location ? (
    <p className="w-full md:w-[50%]">{service.text_for_location.text}</p>
  ) : (
    <p className="w-full md:w-[50%]">{service.description}</p>
  );
}

export default LocationChecker;
