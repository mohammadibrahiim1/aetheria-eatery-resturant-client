import { Button, Container, Image, Text } from "@mantine/core";
import React from "react";

const RichandHealthy = () => {
  return (
    <div>
      <Container size={"lg"} py={75}>
        <Text c={"#4C6EF5"} fz={20} align="center" fw={700}>
          Rich & Healthy
        </Text>
        <div className="flex justify-between items-center gap-7">
          <div>
            <Image
              width={361}
              height={500}
              mx="auto"
              radius="md"
              src="https://i.ibb.co/Dz73gJm/image-rich-Healthy-1.png"
              alt="Random image"
            />
          </div>
          <div>
            <Text fw={700} fz={32} mr={200} c={"#C33"}>
              Highest quality artisangrains, proteins & seasonal ingredients
            </Text>
            <Text fz={16} h={100} mr={200} pt={12} c={"#83859C"}>
              Righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the
              moment, so blinded by desires, that they cannot foresee.
            </Text>
            <div>
              <div className="flex justify-between  gap-5 text-lg">
                <Text pt={20} c={"#83859C"}>
                  <ul>
                    <li>
                      <Text className="leading-10">Simple and easy to distinguish</Text>
                    </li>
                    <li>
                      <Text className="leading-10"> Pleasure of the momentblinded desire</Text>
                    </li>
                    <li>
                      <Text className="leading-10"> Able to do what we like best</Text>
                    </li>
                  </ul>

                  <div>
                    <Button
                      pl={75}
                      pr={75}
                      size="lg"
                      radius={"lg"}
                      pos={"relative"}
                      top={"100px"}
                      left={"20%"}
                      variant="outline"
                      m={"auto"}
                    >
                      Reade More
                    </Button>
                  </div>
                </Text>
                <Image
                  width={320}
                  height={290}
                  //   mx="auto"
                  radius="md"
                  src="https://i.ibb.co/3yD3sBy/image-rich-Healthy-2.png"
                  alt="Random image"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RichandHealthy;
