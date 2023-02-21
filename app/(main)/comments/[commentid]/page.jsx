"use client";

import { Box, Text } from "@chakra-ui/react";
import Post from "../../components/Post";
import { usePost } from "@/pages/api/posts";
import NewComment from "../../components/NewComment";
import CommentList from "../../components/CommentList";
import { usePathname } from "next/navigation";

export default function Comments() {
  const pathname = usePathname();
  const id = pathname.slice(10);
  const { post, isLoading } = usePost(id);

  if (isLoading) return "Loading...";

  return !isLoading && post ? (
    <Box align="center" pt="20">
      <Post post={post} />
      <NewComment post={post} />
      <CommentList post={post} />
    </Box>
  ) : (
    <Text fontSize="5xl" p="36" textAlign="center">
      404.
    </Text>
  );
}
