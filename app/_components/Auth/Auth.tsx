import React, { Suspense } from "react";
import Link from "next/link";

import { AiOutlineLogin } from "react-icons/ai";

import { verifyUser } from "@/app/actions/verifyUser";
import Logout from "../User/Logout";

import { ChakraWrapper } from "../Cards/HOC/ChakraWrapper";

const Auth = async () => {
  const user = await verifyUser();
  // console.log(user, "user details");

  return (
    <>
    <Suspense fallback={''} >

      {user.data == true ? (
        <ChakraWrapper>
          <Logout />
        </ChakraWrapper>
      ) : (
        <Link href={"/register"}>
          <AiOutlineLogin className="lg:text-2xl" />
        </Link>
      )}
    </Suspense>
    </>
  );
};

export default Auth;