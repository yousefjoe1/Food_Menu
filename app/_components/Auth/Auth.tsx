import Link from "next/link";
import React from "react";

import { AiOutlineLogin } from "react-icons/ai";

import { verifyUser } from "@/app/actions/verifyUser";

import Logout from "../User/Logout";
import { ChakraWrapper } from "../Cards/HOC/ChakraWrapper";

const Auth = async () => {
  const user = await verifyUser();
  console.log(user, "user details");

  return (
    <>
      {user.data == true ? (
        <ChakraWrapper>
          <Logout />
        </ChakraWrapper>
      ) : (
        <Link href={"/register"}>
          <AiOutlineLogin className="lg:text-2xl" />
        </Link>
      )}
    </>
  );
};

export default Auth;