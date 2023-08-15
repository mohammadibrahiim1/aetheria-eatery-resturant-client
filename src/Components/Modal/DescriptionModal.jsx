import { IconX } from "@tabler/icons-react";
import React from "react";

const DescriptionModal = ({ modalItem }) => {

  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-orange-500">{modalItem.name}</h3>
          <p className="py-4 text-sm">{modalItem.description}</p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn btn-sm hover:bg-[#FF922B] border-[#FF922B] hover:border-[#FF922B] duration-300 text-[#FF922B] btn-circle btn-outline"
            >
              <IconX />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionModal;
