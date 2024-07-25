"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

import Styles from "./_styles.module.scss";

interface props {
  title: string;
  btnTitle: string;
  formId: string;
  isProcessing?: boolean;
  body: React.ReactNode;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  saveHandler: () => void;
  cancelHandler?: () => void;
}

const ModalDefault = ({
  title,
  btnTitle,
  formId,
  isProcessing = false,
  body,
  showModal,
  setShowModal,
  saveHandler,
  cancelHandler,
}: props) => {
  return (
    <>
      {/* <Button onClick={() => props.setOpenModal('initial-focus')}>Toggle modal</Button> */}
      <Modal
        show={showModal}
        size="md"
        position={"center"}
        popup
        onClose={() => setShowModal(false)}
        className={`${Styles.modal}`}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {title}
            </h3>

            {body}

            <div className="w-full flex justify-center gap-2">
              <Button
                onClick={() =>
                  cancelHandler ? cancelHandler() : setShowModal(false)
                }
                className="bg-red-600 dark:bg-red-600 enabled:hover:bg-red-700 dark:enabled:hover:bg-red-700"
                disabled={isProcessing}
              >
                Cancelar
              </Button>
              <Button
                size="sm"
                form={formId}
                type="submit"
                onClick={() => saveHandler}
                className="bg-primary-600"
                isProcessing={isProcessing}
                disabled={isProcessing}
              >
                {btnTitle}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDefault;
