import React from "react";
import { Modal, Button, ModalContent,ModalHeader,ModalOverlay,ModalCloseButton,ModalBody,ModalFooter } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Moviecard from "./Moviecard";
function BigCard({title}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="gray" onClick={onOpen}>More Details</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"full"}>
          <ModalCloseButton />
          <ModalBody w={"auto"}>
            <Moviecard title={title}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BigCard;
