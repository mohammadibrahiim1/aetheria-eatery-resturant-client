import { Container, Text } from "@mantine/core";
import { IconArrowAutofitContentFilled, IconChevronDown } from "@tabler/icons-react";
import React from "react";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";

const Filters = () => {
  const { setOrder, category } = useContext(ApiContext);
  return (
    <div>
      <div className="flex justify-between items-center pt-12">
        <div className="dropdown flex justify-end">
          <button tabIndex={"0"} className="btn btn-sm mx-2 my-2 capitalize text-indigo-600">
            {category ? category : "select your choice"}
            <IconArrowAutofitContentFilled />
          </button>{" "}
        </div>
        <div className="dropdown flex justify-end">
          <button tabIndex={"0"} className="btn btn-sm mx-2 my-2 capitalize text-indigo-600">
            Sort
            <IconChevronDown />
          </button>{" "}
          <ul
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 text-indigo-500 shadow bg-base-100 mt-10 rounded-box w-52"
          >
            <li>
              <Text onClick={() => setOrder("asc")} fw={600}>
                price low to hight
              </Text>
            </li>
            <li>
              <Text onClick={() => setOrder("desc")} fw={600}>
                price high to low
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
