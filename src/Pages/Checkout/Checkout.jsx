import {
  Anchor,
  Button,
  Checkbox,
  Grid,
  Group,
  Input,
  PasswordInput,
  Stack,
  TextInput,
  createStyles,
} from "@mantine/core";
// import { theme } from "antd";
import React, { useContext } from "react";
import PaymentSavedCart from "../../Components/PaymentSavedCart";
import PaymentCard from "../../Components/PaymentCard";
import { IconAt, IconPhone, IconWriting } from "@tabler/icons-react";
import { AuthContext } from "../../Context/UserContext";
import { upperFirst, useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
// import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  section: {
    width: "60%",
    margin: "auto",
    paddingTop: "50px",
    paddingBottom: "50px",
    // border: "1px solid gray",
    // borderRadius: "15px",
  },
  payment_method: {
    border: "1px solid gray",
    borderRadius: "15px",
    padding: "20px",
  },
  paymentCard: {
    border: "1px solid gray",
    borderRadius: "15px",
    // width: '90%'
    padding: "20px",
  },
  heading: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    // marginTop: "20px",
    // marginBottom: "15px",
    fontSize: "18px",
  },
  paymentCard_heading: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    marginTop: "25px",
    fontSize: "18px",
  },
}));

const Checkout = () => {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      city: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) => (val.length <= 6 ? "Password should include at least 6 characters" : null),
    },
  });
  const { user } = useContext(AuthContext);
  const { classes } = useStyles();

  return (
    <div>
      <Grid className={classes.section}>
        <Grid.Col sm={12} xs={12} lg={7}>
          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              <TextInput
                required
                label="Full Name"
                placeholder="Full Name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue("name", event.currentTarget.value)}
                radius="md"
              />

              <div className="flex items-center gap-4">
                <TextInput
                  w={"100%"}
                  required
                  label="Email"
                  placeholder="hello@mantine.dev"
                  value={form.values.email}
                  onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                  error={form.errors.email && "Invalid email"}
                  radius="md"
                />

                <TextInput
                  w={"100%"}
                  required
                  label="your Number"
                  placeholder="your contact number"
                  value={form.values.email}
                  onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                  error={form.errors.email && "Invalid email"}
                  radius="md"
                />
              </div>

              <div className="flex items-center gap-2">
                <TextInput
                  w={"100%"}
                  label="city"
                  placeholder="city"
                  value={form.values.email}
                  onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                  error={form.errors.email && "Invalid email"}
                  radius="md"
                />
                <TextInput
                  w={"100%"}
                  label="state"
                  placeholder="state"
                  value={form.values.email}
                  onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                  error={form.errors.email && "Invalid email"}
                  radius="md"
                />
                <TextInput
                  w={"100%"}
                  label="ZIP/Postal Code"
                  placeholder="postal code"
                  value={form.values.email}
                  onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
                  error={form.errors.email && "Invalid email"}
                  radius="md"
                />
              </div>

              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue("terms", event.currentTarget.checked)}
              />
            </Stack>

            <Group position="apart" mt="xl">
              <Anchor component="button" type="button" color="dimmed" onClick={() => toggle()} size="xs">
                {type === "register" ? "Already have an account? Login" : "Don't have an account? Register"}
              </Anchor>
              <Button type="submit" radius="xl">
                {upperFirst(type)}
              </Button>
            </Group>
          </form>
        </Grid.Col>

        <Grid.Col sm={12} xs={12} lg={5}>
          <div class={classes.paymentCard}>
            <p class={classes.heading}>Payment Details</p>
            <p class="">Complete your order by providing your payment details.</p>
            <div class="mt-5">
              <label for="email">Name</label>
              <div class="relative">
                <Input
                  mt={4}
                  type="text"
                  id="name"
                  name="name"
                  icon={<IconWriting />}
                  placeholder="Your Name"
                  defaultValue={user.displayName}
                />
              </div>
              <label for="email">Email</label>
              <div class="relative">
                <Input
                  mt={4}
                  type="email"
                  id="email"
                  name="email"
                  icon={<IconAt />}
                  placeholder="Your email"
                  defaultValue={user.email}
                />
              </div>
              <label for="email">Phone</label>
              <div class="relative">
                <Input mt={4} type="phone" id="phone" name="phone" icon={<IconPhone />} placeholder="Your phone" />
              </div>

              <div>
                <PaymentCard></PaymentCard>
              </div>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Checkout;
