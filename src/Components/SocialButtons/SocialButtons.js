import React from "react";
import { Button } from "@mantine/core";
import GoogleIcon from "./GoogleIcon";
// import { GithubIcon, DiscordIcon, TwitterIcon } from "@mantine/ds";
// import { GoogleIcon } from "./GoogleIcon";
// import { FacebookIcon } from "./FacebookIcon";

const GoogleButton = (props) => {
  return (
    <div>
      <Button
        leftIcon={<GoogleIcon />}
        variant="default"
        color="gray"
        {...props}
      />
      ;
    </div>
  );
};

export default GoogleButton;
