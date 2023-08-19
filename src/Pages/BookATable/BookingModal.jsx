import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/UserContext";
import { Toaster, toast } from "react-hot-toast";
import { format } from "date-fns";
import { createStyles, rem } from "@mantine/core";

// css style for booking modal

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: "url(https://i.ibb.co/bzvJrdx/img.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.smallerThan("xs")]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(17),
    letterSpacing: rem(-1),
    paddingTop: "12px",
    paddingRight: theme.spacing.md,
    color: "light",
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(15),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  input: {
    border: "1px solid indigo",
    padding: "3px",
    borderRadius: "7px",
    marginTop: "22px",
    width: "100%",
  },

  submit: {
    border: "1px solid indigo",
    padding: "3px",
    borderRadius: "7px",
    marginTop: "22px",
    width: "100%",
    ":hover": {
      backgroundColor: "indigo",
      border: "1px solid indigo",
      transition: "0.5s",
      color: "white",
      cursor: "pointer",
    },
  },
  close: {
    border: "1px solid indigo",
    paddingRight: "13px",
    paddingLeft: "13px",
    borderRadius: "7px",
    marginTop: "22px",
    // width: "10%",
    ":hover": {
      backgroundColor: "indigo",
      border: "1px solid indigo",
      transition: "0.5s",
      color: "white",
      cursor: "pointer",
    },
  },

  form: {
    paddingRight: "60px",
    paddingLeft: "60px",
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    textAlign: "center",
    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(15),
      textAlign: "left",
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

const BookingModal = ({ selectTable, setSelectTable, refetch }) => {
  const { selectDate } = useContext(ApiContext);
  const date = format(selectDate, "PP");
  const { user } = useContext(AuthContext);
  const { classes } = useStyles();

  const { name, slots } = selectTable;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      bookingDate: date,
      name: userName,
      email: email,
      phone: phone,
      slot: slot,
      table: name,
    };
    fetch(" http://localhost:5000  /bookings", {
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
          refetch();
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
          <h3 className="font-bold text-lg ps-16 underline">
            Book A Table With Your info!
          </h3>
          <p className={classes.title}>Table : {name}</p>

          <p className=" text-left ps-16 pt-2 text-primary font-semibold underline">
            Enter Your Info
          </p>
          <form className={classes.form} onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              value={date}
              placeholder="select date"
              className={classes.input}
            />
            <input
              type="text"
              name="name"
              value={user?.displayName}
              placeholder="Your name"
              className={classes.input}
            />
            <input
              name="email"
              type="email"
              placeholder=" email"
              value={user?.email}
              disabled
              className={classes.input}
            />
            <br />
            <select name="slot" className={classes.input}>
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
              className={classes.input}
            />
            <br />
            <input className={classes.submit} type="submit" value="submit" />
          </form>
          <Toaster position="top-center" reverseOrder={false} />
          <div className="modal-action">
            <label htmlFor="booking-modal" className={classes.close}>
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
