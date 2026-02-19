"use client";

import { Box, Spinner, VStack, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box
      minH="100vh"
      bg="gray.900"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={4}>
        <Spinner
          size="xl"
          thickness="4px"
          speed="0.65s"
          color="brand.500"
          emptyColor="gray.700"
        />
        <Text color="whiteAlpha.700" fontSize="sm" fontWeight="medium">
          Loading Judexa...
        </Text>
      </VStack>
    </Box>
  );
}
