'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react';
import LoginOptions from './login-options';
import { useRouter } from 'next/navigation';
import CorbadoLogin from './corbado-login';

export default function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();

  function closeModal() {
    router.back();
  }

  return (
    <Modal
      isOpen={true}
      backdrop="blur"
      onOpenChange={onOpenChange}
      onClose={closeModal}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Logg inn</ModalHeader>
            <ModalBody className="p-5 pb-7">
              {/* <LoginOptions /> */}
              <CorbadoLogin />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
