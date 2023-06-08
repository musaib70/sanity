"use client"

import { useState } from "react";
import { Input, Button, Container, Flex } from "@mantine/core";

const MantineSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event:any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    console.log(`Searching for "${searchQuery}"...`);
  };

  return (
    <>
      <Container  >
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap="sm"
          align="center"
        >
          <Input
            placeholder="What you looking for"
            value={searchQuery}
            onChange={handleSearchInputChange}
            radius="xl"
          />
          <Button onClick={handleSearchClick}  size="sm" radius="xl">
            Search
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export default MantineSearchBar;