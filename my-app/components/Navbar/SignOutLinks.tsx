"use client";

import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

const SignOutLinks = () => {
  const { toast } = useToast();
  const handleLogOut = () => {
    toast({
      title: "Log Out",
      description: "Log Out Successfully",
    });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogOut} className="w-full text-left">
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLinks;
