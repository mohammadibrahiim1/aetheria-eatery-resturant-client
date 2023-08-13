import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
import { Text } from "@mantine/core";

const ShopPageMenu = () => {
  const { activeButton, setCategory } = useContext(ApiContext);
  //   {
  //     /* <Grid.Col className={classes.category_container}>
  //             <Grid>
  //               <Grid.Col sm={1} lg={1.5}>
  //                 <span className={classes.category} variant="primary" onClick={() => setCategory("desert")}>
  //                   Desert
  //                 </span>
  //               </Grid.Col>
  //               <Grid.Col sm={1} lg={1.5}>
  //                 <span onClick={() => setCategory("offer")} className={classes.category}>
  //                   Offer
  //                 </span>
  //               </Grid.Col>
  //               <Grid.Col sm={1} lg={1.5}>
  //                 <span onClick={() => setCategory("drinks")} className={classes.category}>
  //                   Drinks
  //                 </span>
  //               </Grid.Col>
  //               <Grid.Col sm={1} lg={1.5}>
  //                 <span onClick={() => setCategory("pizza")} className={classes.category}>
  //                   Pizza
  //                 </span>
  //               </Grid.Col>
  //               <Grid.Col sm={1} lg={1.5}>
  //                 <span onClick={() => setCategory("salad")} className={classes.category}>
  //                   Salads
  //                 </span>
  //               </Grid.Col>
  //               <Grid.Col sm={1} lg={1.5}>
  //                 <span onClick={() => setCategory("thai")} className={classes.category}>
  //                   Thai
  //                 </span>
  //               </Grid.Col>
  //               <Grid.Col sm={1} lg={1.5}>
  //                 <span onClick={() => setCategory("soup")} className={classes.category}>
  //                   Soup
  //                 </span>
  //               </Grid.Col>
  //               <Grid.Col sm={1} lg={1.5}>
  //                 <span onClick={() => setCategory("indian")} className={classes.category}>
  //                   Indian
  //                 </span>
  //               </Grid.Col>
  //             </Grid>
  //           </Grid.Col> */
  //   }

  return (
    <div>
      <div>
        <Text c={"indigo"} py={5} fz={25} fw={700}>
          Explore Our Menu
        </Text>
      </div>
      <div className="flex justify-center gap-5 pt-4">
        <button onClick={() => setCategory("desert")} className="btn btn-sm px-8 capitalize">
          BreakFast
        </button>
        <button onClick={() => setCategory("indian")} className="btn btn-sm px-8 capitalize">
          Lunch
        </button>
        <button onClick={() => setCategory("offer")} className="btn btn-sm px-8 capitalize">
          Dinner
        </button>
        <button onClick={() => setCategory("pizza")} className="btn btn-sm px-8 capitalize">
          Fast Food
        </button>
        <button onClick={() => setCategory("drinks")} className="btn btn-sm px-8 capitalize">
          Juice
        </button>
      </div>
    </div>
  );
};

export default ShopPageMenu;
