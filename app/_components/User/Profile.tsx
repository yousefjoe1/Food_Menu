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
} from "@chakra-ui/react";
import { ChakraWrapper } from "../Cards/HOC/ChakraWrapper";
import { getUserDetails } from "@/app/actions/getUserDetails";
import Image from "next/image";

import { FaUserCog } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";

interface User {
  username: string;
  email: string;
  avatar: string;
}

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [details, setDetails] = useState<User | null>(null);

  // console.log(details);
  

  const showDetails = async () => {
    onOpen();
    let resp = await getUserDetails();
    if (resp.data == false) {
      setDetails((p) => null);
    } else {
      setDetails((p) => resp.data);
    }
  };


  return (
    <div>
      <ChakraWrapper>
        <button onClick={showDetails}>
          <FaUserCog className="lg:text-2xl" />
        </button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <br />
            <br />
            <ModalCloseButton />
            <ModalBody>
              {details != null ? (
                <>
                {
                  details.avatar == ''?
                  <FaUserSecret />:
                  <>
                  <h3 className="lg:text-2xl p-3 w-[80px] h-[80px] overflow-hidden rounded-xl">
                    <Image src={`${process.env.NEXT_PUBLIC_DB}uploads/${details.avatar}`} className="rounded-xl w-full h-full object-cover" alt="avatar" width={80} height={80} />
                  </h3>
                  <h3 className="lg:text-3xl p-3">{details.username}</h3>
                  <h3 className="lg:text-2xl p-3">{details.email}</h3>
                  </>
                  }
                </>
              ) : (
                "You are not logged in"
              )}
            </ModalBody>

            <ModalFooter>
              <button className="bg-slate-600 text-white p-1 rounded-xl" onClick={onClose}>Close</button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraWrapper>
    </div>
  );
};

export default Profile;
