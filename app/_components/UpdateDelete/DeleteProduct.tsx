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

import { deleteProduct } from "@/app/actions/deleteProducts";

const DeleteProduct = ({ id }: { id: string }) => {
    
  const msg = useToast();

  const [isSubmit, setIsSubmit] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const deletePro = async () => {
    setIsSubmit(true);
    let res = await deleteProduct(`products/${id}`);
    // console.log(res);
    
    setIsSubmit(false);
    if (res.code == 201) {
      msg({ title: res.msg, status: "success", duration: 3000 });
    } else {
      msg({ title: res.msg, status: "error", duration: 3000 });
    }
  };

  return (
    <>
      <button className="text-red-500 text-lg" onClick={onOpen}>
        Delete
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <br />
          <br />
          <ModalCloseButton />
          <ModalBody>
            {isSubmit ? (
              <Spinner size={"2xl"} height={50} width={1} color="blue" />
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

export default DeleteProduct;
