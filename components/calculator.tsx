"use client";

import React, { FC, useEffect, useState } from "react";
import { getLocalTimeZone, now } from "@internationalized/date";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Card, CardBody, CardProps } from "@nextui-org/card";
import { I18nProvider } from "@react-aria/i18n";

import { title } from "./primitives";

export const Calculator: FC<CardProps & { locale?: string }> = ({
  locale,
  ...props
}) => {
  let [date, setDate] = useState({
    start: now(getLocalTimeZone()),
    end: now(getLocalTimeZone()),
  });
  let [hours, setHours] = useState(0);

  useEffect(() => {
    const diff = date.end.toDate().getTime() - date.start.toDate().getTime();

    // Convert milliseconds to hours (round up to count every started hour)
    setHours(Math.ceil(diff / (1000 * 60 * 60)));
  }, [date]);

  return (
    <I18nProvider locale={locale}>
      <Card {...props}>
        <CardBody>
          <div className="flex flex-col items-center gap-4">
            <DateRangePicker
              label="Időtartam"
              value={date}
              onChange={setDate}
            />
            <div className={title({ size: "lg" })}>{hours}</div>
            <div className="text-sm">
              a megkezdett órák száma a fent megadott időtartományban.
            </div>
          </div>
        </CardBody>
      </Card>
    </I18nProvider>
  );
};
