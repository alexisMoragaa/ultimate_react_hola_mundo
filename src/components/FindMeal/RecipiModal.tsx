import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { MealDetail } from "../../types";
import SkeletonCard from "./SkeletonCard";
import MealCardContent from "./MealCardContent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  meal: MealDetail | undefined;
  loading: boolean;
};

function RecipiModal({ isOpen, onClose, meal, loading }: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {loading ? (
            <SkeletonCard />
          ) : (
            meal && (
              <>
                <MealCardContent meal={meal} />
              </>
            )
          )}

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
