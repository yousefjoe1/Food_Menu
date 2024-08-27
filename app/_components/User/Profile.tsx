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
                  <FaUserSecret size={40} />
                  <h3 className="lg:text-3xl p-3">{details.username}</h3>
                  <h3 className="lg:text-2xl p-3">{details.email}</h3>
                </>
              ) : (
                "You are not logged in"
              )}
            </ModalBody>

            <ModalFooter>
              <button
                className="bg-slate-600 text-white p-1 rounded-xl"
                onClick={onClose}
              >
                Close
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraWrapper>
    </div>
  );
};

export default Profile;
