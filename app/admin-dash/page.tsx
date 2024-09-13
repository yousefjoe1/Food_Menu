"use client";
import React, { useState } from "react";

import FavoriteFruits from "../_components/Cards/FavoriteFruits";

import { ChakraWrapper } from "../_components/Cards/HOC/ChakraWrapper";
import ProductForm from "../_components/Forms/ProductForm";
import FetchWrapper from "../_components/Wrappers/FetchWrapper";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import AllProducts from "../_components/AllProducts/AllProducts";
import AllCategories from "../_components/AllCategories/AllCategories";
import AllVendores from "../_components/AllVendores/AllVendores";

const page = () => {
  const componentsTitles = [
    { name: "Products", id: 1 },
    { name: "Categories", id: 2 },
    { name: "Vendores", id: 3 },
  ];
  const components = [<AllProducts />, <AllCategories />, <AllVendores />];

  return (
    <div className="min-h-screen">
      <ChakraWrapper>
        <FetchWrapper>
          <Tabs position="relative" variant="unstyled">
            <div className="flex justify-center">
              <TabList>
                {componentsTitles.map((el) => (
                  <Tab key={el.id}>{el.name}</Tab>
                ))}
              </TabList>
            </div>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              {components.map((el, i) => (
                <div key={i}>
                  <TabPanel>{el}</TabPanel>
                </div>
              ))}
            </TabPanels>
          </Tabs>
        </FetchWrapper>
      </ChakraWrapper>
    </div>
  );
};

export default page;
