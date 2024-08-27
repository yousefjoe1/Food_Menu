"use client";
import React, { ChangeEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button, Select } from "@chakra-ui/react";
import { MdAddchart } from "react-icons/md";

const Increase = ({ n }: { n: string }) => {
  const router = useRouter();

  const handleIncreaseLimit = () => {
    let nN = parseInt(n) + 1;
    // let v = e.target.value;
    router.push(`/all-favorite?l=${nN}`);
  };

  return (
    <div className="flex justify-center my-10">
      {/* <Select onChange={handleIncreaseLimit}>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </Select> */}
      <Button onClick={handleIncreaseLimit} className="flex" variant={'outline'} bg={'HighlightText'} p={5} mx={'auto'} w={200}>
        Load More
        <MdAddchart />
      </Button>
    </div>
  );
};

export default Increase;
