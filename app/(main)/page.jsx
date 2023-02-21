"use client";

import { Box, Button, Heading, HStack, Text, Textarea } from "@chakra-ui/react";
import { useAuth } from "@/pages/api/auth";
import { useAddPost, usePosts } from "@/pages/api/posts";
import { useForm } from "react-hook-form";
import Post from "./components/Post";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <Box maxW="624px" mx="auto" py="20" px={6}>
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            colorScheme="teal"
            type="submit"
            isLoading={authLoading || addingPost}
            loadingText="Loading"
          >
            Post
          </Button>
        </HStack>
        <Textarea
          resize="none"
          mt="5"
          placeholder="Create a new post..."
          {...register("text", { required: true })}
        />
      </form>
    </Box>
  );
}

export default function Main() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";

  return (
    <>
      <NewPost />
      <Box px="4" align="center">
        {posts?.length === 0 ? (
          <Text textAlign="center" fontSize="xl">
            No posts yet... Feeling a little lonely here.
          </Text>
        ) : (
          posts?.map((post) => <Post key={post.id} post={post} />)
        )}
      </Box>
    </>
  );
}
