"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7e9d4873-d41f-4c1a-821b-98306f2eb011");
  }, []);

  return null;
};