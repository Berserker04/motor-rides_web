"use client";

import { Button, Label, Modal, Rating, Textarea } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

import defaultProfile from "@/assets/images/defaultProfile.png";

interface props {
  openModal: string | undefined;
  comment?: ICommentDto;
  toggleModal: any;
}

const ReplyCommentModal = ({ openModal, comment, toggleModal }: props) => {
  //   const [openModal, setOpenModal] = useState<string | undefined>();

  //   const props = { openModal, setOpenModal };

  return (
    <>
      {/* <div className="flex flex-wrap gap-4">
        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      </div> */}
      <Modal
        show={openModal === "size"}
        size={"2xl"}
        onClose={() => toggleModal()}
      >
        <Modal.Header>Comentario</Modal.Header>
        <Modal.Body>
          <div className="flex gap-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <figure className="col-span-1 bg-red-300 w-14 h-14 rounded-full grid place-items-center overflow-hidden">
              <Image
                width={100}
                height={100}
                src={defaultProfile}
                alt={"photo"}
              />
            </figure>
            <div className="col-span-6">
              <h5 className="text-base line-clamp-1">
                Carlos Andrés Hernández Copete
              </h5>
              <Rating size="sm">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star color="gray" />
                <Rating.Star />
              </Rating>
              <span className="text-xs text-gray-500">02/12/2023</span>
            </div>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Here are the biggest
              enterprise technology acquisitions of 2021 so far, in reverse
              chronological order. Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order. Here
              are the biggest enterprise technology acquisitions of 2021 so far,
              in reverse chronological order. Here are the biggest enterprise
              technology acquisitions of 2021 so far, in reverse chronological
              order. Here are the biggest enterprise technology acquisitions of
              2021 so far, in reverse chronological order. Here are the biggest
              enterprise technology acquisitions of 2021 so far, in reverse
              chronological order. Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-full">
            <div className="w-full mb-4" id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Comentar" />
              </div>
              <Textarea
                id="comment"
                placeholder="Deja un comentario..."
                required
                rows={3}
              />
            </div>
            <div className="flex gap-4 justify-end w-full">
              <Button onClick={() => toggleModal()}>Comentar</Button>
              <Button color="gray" onClick={() => toggleModal()}>
                Cerrar
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReplyCommentModal;
