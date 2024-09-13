"use client";
import React, { FormEvent, useState,ChangeEvent  } from "react";

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
  Select,
} from "@chakra-ui/react";

import { updateProduct } from "@/app/actions/updateProduct";

import { UpdateItem } from "@/app/constants/data";

const UpdateProduct = ({ fruit,isRefetch,refetchFn }: { fruit: UpdateItem,isRefetch:boolean,refetchFn:Function }) => {
  const [product, setProduct] = useState({ ...fruit });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((p) => ({ ...p, [name]: value }));
  };

  const msg = useToast();

  const [isSubmit, setIsSubmit] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateProductFunc = async (e: FormEvent) => {
    e.preventDefault();

    console.log(product);

    // return
    setIsSubmit(true);
    let res = await updateProduct(`products/${fruit._id}`, product);

    setIsSubmit(false);
    if (res.code == 201) {
      if(isRefetch){
        refetchFn()
      }
      msg({ title: res.msg, status: "success", duration: 3000 });
    } else {
      msg({ title: res.msg, status: "error", duration: 3000 });
    }
  };

  const handleType = (e: ChangeEvent<HTMLSelectElement>) => {
    let v = e.target.value;
    setProduct((p) => ({ ...p, type: v }));
  }

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
          <ModalCloseButton bg={"GrayText"} />
          <ModalBody>
            <form onSubmit={updateProductFunc}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleChange}
                  name="name"
                  value={product.name}
                  required
                  type="text"
                  className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full"
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
                  className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full"
                />
              </div>
              <div>
                <label htmlFor="details">Details</label>
                <textarea
                  name="details"
                  onChange={handleChange}
                  value={product.details}
                  required
                  className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full"
                />
              </div>
              <div>
                <label htmlFor="image">Image</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="image"
                  className="p-4 bg-slate-900 text-white outline-none border-none block rounded-3xl w-full"
                />
              </div>
              <Select
                onChange={handleType}
                placeholder="Select Type"
                name="type"
                mt={8}
              >
                <option value="general">General</option>
                <option value="favorite">Favorite</option>
              </Select>
              {isSubmit ? (
                <Spinner size={"2xl"} height={50} width={1} color="blue" />
              ) : (
                <button
                  type="submit"
                  className="text-white bg-green-600 mt-3 p-2 rounded-xl font-bold text-md"
                >
                  Update Now
                </button>
              )}
            </form>
          </ModalBody>

          <ModalFooter className={"bg-slate-900"}>
            <button
              className="text-white p-1 rounded-xl bg-slate-400 "
              onClick={onClose}
            >
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
