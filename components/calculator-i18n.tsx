"use server";

import React, { FC } from "react";
import { headers } from "next/headers";
import { CardProps } from "@nextui-org/card";

import { Calculator } from "./calculator";

export const CalculatorI18n: FC<CardProps> = ({ ...props }) => {
  const acceptLanguage = headers().get("accept-language");
  const locale = acceptLanguage?.split(",")[0] ?? "en"; // Default to 'en' if no locale found

  return (
    <div className="flex flex-col gap-4">
      <Calculator {...props} locale={locale} />
    </div>
  );
};
