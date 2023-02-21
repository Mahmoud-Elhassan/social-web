import { Button, Flex, Link, Stack } from "@chakra-ui/react";
import { Link as NextLink } from "next/link";
import { useAuth, useLogout } from "@/pages/api/auth";
import { useRouter } from "next/navigation";
import Avatar from "./Avatar";

export default function Navbar() {
  const { user, isLoading: authLoading } = useAuth();

  const { logout, isLoading } = useLogout();
  const router = useRouter();
  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
    >
      <Flex
        px="4"
        w="full"
        align="center"
        justify="space-between"
        maxW="1200px"
      >
        <Link color="teal" as={NextLink} href="/" fontWeight="bold">
          Home
        </Link>
        <Stack direction="row" spacing={5}>
          {!authLoading && <Avatar user={user} />}
          <Button
            colorScheme="teal"
            size="sm"
            onClick={() => router.push(`/${user.id}`)}
            isLoading={authLoading}
          >
            Profile
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            onClick={logout}
            isLoading={isLoading}
          >
            Logout
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}

// function NavbarChild({ user }) {
//   const { logout, isLoading } = useLogout();
//   const router = useRouter();
//   return (
//     <Flex
//       shadow="sm"
//       pos="fixed"
//       width="full"
//       borderTop="6px solid"
//       borderTopColor="teal.400"
//       height="16"
//       zIndex="3"
//       justify="center"
//       bg="white"
//     >
//       <Flex
//         px="4"
//         w="full"
//         align="center"
//         justify="space-between"
//         maxW="1200px"
//       >
//         <Link color="teal" as={NextLink} href="/" fontWeight="bold">
//           Home
//         </Link>
//         <Stack direction="row" spacing={5}>
//           <Avatar user={user} />
//           <Button
//             colorScheme="teal"
//             size="sm"
//             onClick={() => router.push(`/${user.id}`)}
//             isLoading={isLoading}
//           >
//             Profile
//           </Button>
//           <Button
//             colorScheme="teal"
//             size="sm"
//             onClick={logout}
//             isLoading={isLoading}
//           >
//             Logout
//           </Button>
//         </Stack>
//       </Flex>
//     </Flex>
//   );
// }
