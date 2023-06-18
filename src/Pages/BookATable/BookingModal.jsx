import React from "react";

const BookingModal = () => {
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label htmlFor="booking-modal"></label>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
