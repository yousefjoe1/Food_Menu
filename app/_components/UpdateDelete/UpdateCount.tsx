"use client";
import React, { useState } from "react";

import { updateCart } from "@/app/actions/updateCart";
import { useToast } from "@chakra-ui/react";

import { FaRegEdit } from "react-icons/fa";

const UpdateCount = ({ itemId }: { itemId: String }) => {
  const msg = useToast();

  const [pCount, setpCount] = useState(1);

  const [isSubmit, setIsSubmit] = useState(false);

  const handleCount = (type: string) => {
    if (type == "+") {
      setpCount((p) => p + 1);
    }
    if (type == "-") {
      if (pCount > 1) {
        setpCount((p) => p - 1);
      }
    }
  };

  const handleUpdate = async () => {
    setIsSubmit(true);
    let res = await updateCart(`${itemId}`,pCount);
    setIsSubmit(false);
    if (res.code == 201) {
      msg({ title: res.msg, status: "success", duration: 3000 });
    } else {
      msg({ title: res.msg, status: "error", duration: 3000 });
    }
  };

  return (
    <div className="flex items-center gap-5">
      <h2 className="text-lg text-slate-400 font-medium bg-slate-700 px-3 rounded-2xl ">
        {pCount}
      </h2>
      <div className="text-white rounded-sm flex justify-around p-2  gap-5 w-full">
        <button
          className="w-6 h-6 rounded-lg bg-slate-900"
          onClick={() => handleCount("+")}
        >
          +
        </button>
        <button
          className="w-6 h-6 rounded-lg bg-slate-900"
          onClick={() => handleCount("-")}
        >
          -
        </button>
        {isSubmit ? (
          <span className="animate-spin bg-white h-5 w-1 rounded-full"></span>
        ) : (
          <button onClick={() => handleUpdate()}>
            <FaRegEdit size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default UpdateCount;
