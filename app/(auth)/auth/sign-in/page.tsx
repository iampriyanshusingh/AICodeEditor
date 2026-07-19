import SignInFormClient from "@/modules/auth/components/sign-in-form-client";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <Image
        src={"/login.svg"}
        alt="Login-Image"
        fill={false}
        height={0}
        width={0}
        sizes="50vw"
        className="w-1/2 h-1/2 object-contain mx-auto"
      />
      <SignInFormClient />
    </>
  );
};

export default Page;
