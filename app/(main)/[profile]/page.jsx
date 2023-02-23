"use client";

import {
  Button,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import PostsList from "../components/PostsList";
import { usePosts } from "@/pages/api/posts";
import { useUser } from "@/pages/api/users";
import Avatar from "../components/Avatar";
import { format } from "date-fns";
import EditProfile from "../components/EditProfile";
import { useAuth } from "@/pages/api/auth";
import { usePathname } from "next/navigation";

export default function Profile() {
  const pathname = usePathname();
  const id = pathname.slice(1);

  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();

  return !userLoading && !authLoading && user ? (
    <Content
      posts={posts}
      postsLoading={postsLoading}
      user={user}
      authUser={authUser}
      authLoading={authLoading}
    />
  ) : (
    <Text fontSize="5xl" p="36" textAlign="center">
      {!userLoading && !authLoading && !user && "404."}
    </Text>
  );
}

function Content({ user, posts, postsLoading, authLoading, authUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack pt={16} spacing="5">
      <Flex p={[4, 6]} pt={[12, 12]} pos="relative" align="center">
        <Avatar size={["xl", "2xl"]} user={user} />

        {!authLoading && authUser.id === user.id && (
          <Button
            pos="absolute"
            mb="2"
            top="6"
            right="6"
            colorScheme="teal"
            onClick={onOpen}
            size={["sm", "md"]}
          >
            Change avatar
          </Button>
        )}

        <Stack ml="10">
          <Text fontSize="2xl">{user.username}</Text>
          <HStack spacing="10">
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Posts: {!postsLoading && posts.length}
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Joined: {format(user.date, "MMMM YYY")}
            </Text>
          </HStack>
        </Stack>

        <EditProfile isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider />

      {!postsLoading && <PostsList posts={posts} />}
    </Stack>
  );
}
