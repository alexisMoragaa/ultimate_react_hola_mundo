import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function RecipiModal({ isOpen, onClose }: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur nobis veniam, debitis omnis at accusantium harum, nam
            est fuga maxime explicabo suscipit labore eaque ex neque quia, sit
            cumque ab. Quaerat odit non deleniti sed tempora, totam iste
            asperiores error illum culpa quas cupiditate itaque. Commodi debitis
            corrupti tempora enim, consequatur ea facere explicabo ipsum,
            perspiciatis earum, qui temporibus minima!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RecipiModal;
