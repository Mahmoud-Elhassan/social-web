import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function UsernameButton({ user }) {
  return (
    <Button as={Link} href={`/${user.id}`} colorScheme="teal" variant="link">
      {user.username}
    </Button>
  );
}
