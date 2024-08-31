"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Spinner, useToast } from "@chakra-ui/react";

import { MdAddchart } from "react-icons/md";

export const Sp = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="lg"
    />
  );
};

const Increase = ({
  n,
  url,
  productsLength,
}: {
  n: string;
  url: string;
  productsLength: number;
}) => {
  const router = useRouter();
  const msg = useToast();

  const [spinn, setSpinn] = useState(false);

  const handleIncreaseLimit = () => {
    let currentNumber = parseInt(n);
    setSpinn((p) => true);
    if (currentNumber > productsLength) {
      msg({ title: `No More`, status: "info", duration: 3000 });
      return;
    }

    
    let nN = parseInt(n) + 1;
    // let v = e.target.value;
    router.replace(`/${url}?l=${nN}`);
  };

  useEffect(() => {
    setSpinn((p) => false);
    // if (spinn == false) {
    // }
  }, [productsLength]);


  return (
    <div className="flex justify-center my-10">
      {/* <Select onChange={handleIncreaseLimit}>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </Select> */}
      <Button
        onClick={handleIncreaseLimit}
        className="flex"
        variant={"outline"}
        bg={"HighlightText"}
        p={5}
        mx={"auto"}
        w={200}
      >
        Load More
        <MdAddchart />
        {spinn && <Sp />}
      </Button>
    </div>
  );
};

export default Increase;
