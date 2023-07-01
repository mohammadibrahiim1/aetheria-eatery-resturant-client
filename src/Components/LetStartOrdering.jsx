import { createStyles, Text, rem, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    height: "275px",
    backgroundImage: "url(https://i.ibb.co/h7Wvft2/online-ordering-bg-img.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "50px",
    // backgroundImage: `linear-gradient(-60deg, ${
    //   theme.colors[theme.primaryColor][4]
    // } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  title: {
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.white,
    fontSize: rem(32),
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: rem(5),
  },

  stat: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: " 12px",
    width: " 90%",
    margin: "auto",
  },

  button: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: ".8125em",
    background: "#e4002b",
    border: "1px solid transparent",
    borderRadius: "0.25rem",
    textTransform: "uppercase",
    paddingTop: "0.7rem",
    paddingRight: "4.5rem",
    paddingLeft: "4.5rem",
    paddingBottom: "0.7rem",
    backgroundSize: "100% 100%",

    "&:hover": [
      {
        color: "#212529",
        transition: ".3s",
      },
    ],
  },
}));

// interface StatsGroupProps {

// }

export const LetStartOrdering = () => {
  const data = [{ title: "string", stats: "string", description: "string" }];
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <>
      <div key={stat.title} className={classes.stat}>
        <div>
          <button className={classes.button}>Delivery</button>
        </div>
        <div>
          <button className={classes.button}>TakeAway</button>
        </div>
        <div>
          <button className={classes.button}>Dine-in</button>
        </div>
      </div>
    </>
  ));
  return (
    <div>
      <div className={classes.root}>{stats}</div>
    </div>
  );
};
