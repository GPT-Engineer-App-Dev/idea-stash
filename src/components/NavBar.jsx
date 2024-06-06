import { Box, Flex, Heading } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="brand.700" px={4} py={2} color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="md">Note Taking App</Heading>
      </Flex>
    </Box>
  );
};

export default NavBar;