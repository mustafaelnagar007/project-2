import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
interface Iprops {
  closeModal: () => void;
  isOpen: boolean;
  className?: string;
  tittle?: string;
  children: React.ReactNode;
}
const MyModal = ({ isOpen, className, tittle, children }: Iprops) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {}}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {tittle && (
                <DialogTitle
                  as="h3"
                  className=" font-medium text-3xl text-[#444]"
                >
                  {tittle}
                </DialogTitle>
              )}

              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default MyModal;
