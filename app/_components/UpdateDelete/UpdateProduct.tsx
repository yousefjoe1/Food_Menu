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

import { ProductItem } from "@/app/Interfaces/Interface";
import { updateProduct } from "@/app/actions/updateProduct";

const UpdateProduct = ({ fruit }: { fruit: ProductItem }) => {
  const [product, setProduct] = useState({ ...fruit });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
    const { name, value } = e.target; // Destructure event target properties

    setProduct((prevState) => ({
      ...prevState,
      [name]:  value, // Handle image input differently
    }));
  }

  const msg = useToast();

  const [isSubmit, setIsSubmit] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const deletePro = async () => {
    setIsSubmit(true);
    let res = await updateProduct(`products/${fruit._id}`,product);
    setIsSubmit(false);
    if (res.status == 201) {
        msg({ title: res.msg, status: "success", duration: 3000 });
    } else {
      msg({ title: res.msg, status: "error", duration: 3000 });
    }
  };
  return (
    <div>
      <button className="text-orange-500 text-lg" onClick={onOpen}>
        Update
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <br />
          <br />
          <ModalCloseButton />
          <ModalBody>
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input
                onChange={handleChange}
                name="name"

                  value={product.name}
                  required
                  type="text"
                  className="p-2 bg-slate-500 outline-none border-none block w-full rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                name="price"
                onChange={handleChange}
                  value={product.price}
                  required
                  type="number"
                  className="p-2 bg-slate-500 outline-none border-none block w-full rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="details">Details</label>
                <textarea
                name="details"
                onChange={handleChange}
                  value={product.details}
                  required
                  className="p-2 min-h-[100px] bg-slate-500 outline-none border-none block w-full rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="image">Image</label>
                <textarea
                name="image"
                
                onChange={handleChange}
                  value={product.image}
                  required
                  className="p-2 min-h-[100px] bg-slate-500 outline-none border-none block w-full rounded-lg"
                />
              </div>
            </form>
            {isSubmit ? (
              <Spinner size={"2xl"} height={50} width={1} color="blue" />
            ) : (
              <button
                className="text-orange-600 bg-black mt-3 p-2 rounded-xl font-bold text-md"
                onClick={deletePro}
              >
                Update Now
              </button>
            )}
          </ModalBody>

          <ModalFooter>
            <button onClick={onClose}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
