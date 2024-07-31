"use client";
import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteItem } from "@/app/actions/CartActions/DeleteItem";

const DeleteCart = ({productId}:{productId:string}) => {
  const msg = useToast();

  const [isSubmit, setIsSubmit] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const deletePro = async () => {
    setIsSubmit(true);
    let res = await deleteItem(`${productId}`);
    setIsSubmit(false);
    // console.log(res);
    if (res.status == 201) {
      msg({ title: res.msg, status: "success", duration: 3000 });
    } else {
      msg({ title: res.msg, status: "error", duration: 3000 });
    }
  };

  return (
    <>
      <button className="text-red-500 text-xl px-3 bg-gray-700 hover:bg-rose-300" onClick={onOpen}>
        <RiDeleteBin5Fill className="" />
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <br />
          <br />
          <ModalCloseButton />
          <ModalBody>
            {isSubmit ? (
              <Spinner thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="lg"/>
            ) : (
              <button
                className="text-red-600 bg-red-950 p-2 rounded-xl font-bold text-md"
                onClick={deletePro}
              >
                Delete Now
              </button>
            )}
          </ModalBody>

          <ModalFooter>
            <button onClick={onClose}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteCart;
