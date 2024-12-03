"use client";

import React, { FC, useEffect, useState } from "react";
import { getLocalTimeZone, now } from "@internationalized/date";
import { DatePicker, DateRangePicker } from "@nextui-org/date-picker";
import { Card, CardBody, CardProps } from "@nextui-org/card";

import { title } from "./primitives";

export const Calculator: FC<CardProps> = ({ ...props }) => {
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
    <Card {...props}>
      <CardBody>
        <div className="flex flex-col items-center gap-4">
          <DateRangePicker
            className="hidden sm:block"
            label="Időtartam"
            value={date}
            onChange={setDate}
          />
          <DatePicker
            className="block sm:hidden max-w-xs"
            defaultValue={now(getLocalTimeZone())}
            label="Kezdeti idő"
            labelPlacement="outside"
            value={date.start}
            onChange={(newVal) => setDate({ start: newVal!, end: date.end })}
          />
          <DatePicker
            className="block sm:hidden max-w-xs"
            defaultValue={now(getLocalTimeZone())}
            label="Időtartam vége"
            labelPlacement="outside"
            value={date.end}
            onChange={(newVal) => setDate({ end: newVal!, start: date.start })}
          />
          <div className={title({ size: "lg" })}>{hours}</div>
          <div className="text-sm">
            a megkezdett órák száma a fent megadott időtartományban.
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
