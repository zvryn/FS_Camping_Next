import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size="default" asChild>
      <Link href={"/"} className="text-2xl font-extrabold">
        CAMPING SITE
      </Link>
    </Button>
  );
};

export default Logo;
