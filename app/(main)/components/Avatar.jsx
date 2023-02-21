import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import Link from "next/link";

export default function Avatar({ user, size = "sm", overrideAvatar = null }) {
  return (
    <ChakraAvatar
      as={Link}
      href={`/${user.id}`}
      name={user.username}
      size={size}
      src={overrideAvatar || user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
}
