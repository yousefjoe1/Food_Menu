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
import { FaUserCog } from "react-icons/fa";
import { ChakraWrapper } from "../Cards/HOC/ChakraWrapper";
import { getUserDetails } from "@/app/actions/getUserDetails";
import Image from "next/image";

interface User {
  username: string;
  email: string;
  avatar: string;
}

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [details, setDetails] = useState<User | null>(null);

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
                  <h3 className="lg:text-3xl p-3">{details.username}</h3>
                  <h3 className="lg:text-2xl p-3">{details.email}</h3>
                  {/* <h3 className="lg:text-2xl p-3">
                    <Image src={process.env.NEXT_PUBLIC_DB + details.avatar} alt="avatar" width={50} height={50} />
                  </h3> */}
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
