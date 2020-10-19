import { Flex, IconButton } from "@chakra-ui/core";
import React from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [, vote] = useVoteMutation();
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr={4}>
      <IconButton
        onClick={async () => {
          if (post.voteStatus === 1) {
            return;
          }
          await vote({
            postId: post.id,
            value: 1,
          });
        }}
        variantColor={post.voteStatus === 1 ? "green" : undefined}
        aria-label="updoot post"
        icon="chevron-up"
      />

      {post.points}
      <IconButton
        onClick={async () => {
          if (post.voteStatus === -1) {
            return;
          }
          await vote({
            postId: post.id,
            value: -1,
          });
        }}
        variantColor={post.voteStatus === -1 ? "red" : undefined}
        aria-label="downdoot post"
        icon="chevron-down"
      />
    </Flex>
  );
};
