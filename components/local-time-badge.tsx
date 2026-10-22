"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content/profile";

function getTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: profile.timezone,
  }).format(new Date());
}

export function LocalTimeBadge() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(getTime());
    const id = setInterval(() => setTime(getTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  const city = profile.location.split(",")[0];

  return (
    <p className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
      <span
        className="size-1.5 rounded-full bg-emerald-500/80"
        aria-hidden="true"
      />
      <span>{profile.availability}</span>
      {time && (
        <>
          <span aria-hidden="true">·</span>
          <span suppressHydrationWarning>
            {time} in {city}
          </span>
        </>
      )}
    </p>
  );
}