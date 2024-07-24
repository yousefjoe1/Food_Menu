import Link from "next/link";
import React from "react";

import { AiOutlineLogin } from "react-icons/ai";

const Auth = () => {
  return (
    <div>
      <Link href={"/register"}>
        <AiOutlineLogin className="lg:text-2xl" />
      </Link>
    </div>
  );
};

export default Auth;
