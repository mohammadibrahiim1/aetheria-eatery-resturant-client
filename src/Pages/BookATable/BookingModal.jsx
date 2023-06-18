import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/UserContext";
import { Toaster, toast } from "react-hot-toast";

const BookingModal = ({ selectTable, setSelectTable }) => {
  const { selectDate } = useContext(ApiContext);
  const { user } = useContext(AuthContext);
  //   console.log(selectTable);
  const { name, slots } = selectTable;
  //   console.log(slots);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      bookingDate: selectDate,
      customerName: userName,
      customerEmail: email,
      customerPhone: phone,
      selectedSlot: slot,
      tableCategory: name,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setSelectTable(null);
          toast.success("Booking confirmed");
          //   window.location.reload();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label htmlFor="booking-modal"></label>
          <h3 className="font-bold text-lg">Book A Table With Your info!</h3>
          <p className="py-4">{name}</p>
          <form className="mt-10" onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              value={selectDate}
              placeholder="select date"
              className="input"
            />
            <input
              type="text"
              name="name"
              value={user.displayName}
              placeholder="Your name"
              className="input"
            />
            <input
              name="email"
              type="email"
              placeholder=" email"
              value={user.email}
              disabled
              className="input"
            />
            <br />
            <select
              name="slot"
              className="select select-success w-full max-w-xs"
            >
              {/* <option selected>Pick your favorite anime</option> */}
              {slots?.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="phone"
              type="phone"
              required
              placeholder="Your phone"
              className="input"
            />
            <br />
            <input type="submit" value="submit" className="btn" />
          </form>
          <Toaster position="top-center" reverseOrder={false} />
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn cursor-pointer">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
