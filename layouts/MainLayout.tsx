import { Box, Center, Flex, Image, Text, Button } from '@chakra-ui/core';
import { Logo } from '../components/Logo';
import { Nav } from '../components/Nav';

export function MainLayout({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      <>
        <Flex p={4}>
          <Logo />

          <Nav />

          <Button ml={16} display={{ base: 'none', lg: 'inline-flex' }}>
            Login
          </Button>
        </Flex>
      </>

      <Box flex="1 1 auto" mt={8}>
        {children}
      </Box>

      <Center as="footer" mt="auto" py={4}>
        <Flex flexDirection="column" alignItems="center">
          <Logo />
          <Text as="i" textAlign="center">
            Copyright Ⓒ 2020{' '}
            <a href="https://echobind.com" target="_blank" rel="noopener noreferrer">
              Echobind LLC.
            </a>{' '}
            All rights reserved.
          </Text>
        </Flex>
      </Center>
    </Flex>
  );
}
