import {
  Box,
  Card,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import PostItem from "./dashboard/card";

const Post = () => {
  const LIMIT = 10;
  const { ref, inView } = useInView();

  const delay = (time) => {
    return Promise.resolve((fn) => setTimeout(fn, time));
  };
  const fetchTodos = async (page) => {
    await delay(3000);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${LIMIT}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery("todos", ({ pageParam = 1 }) => fetchTodos(pageParam), {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage.length === LIMIT ? allPages.length + 1 : undefined;
        return nextPage;
      },
    });
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);
  return (
    <Stack>
      {!isSuccess
        ? [...Array(8)].map((_, i) => {
            return (
              <Skeleton
                key={i}
                sx={{ my: 1 }}
                variant="rectangular"
                width={800}
                height={300}
              ></Skeleton>
            );
          })
        : data.pages?.map((page, pi) =>
            page.map((post, i) => {
              return (
                <PostItem
                  // ref={page.length === i + 1 ? ref : null}
                  key={i}
                  data={post}
                  index={i}
                />
              );
            })
          )}
      {isFetchingNextPage && <span>Fetching...</span>}
      {!hasNextPage && <span>You have seen it all....</span>}

      {/* {!data
        ? [...Array(8)].map((_, i) => {
            return (
              <Skeleton
                key={i}
                sx={{ my: 1 }}
                variant="rectangular"
                width={800}
                height={300}
              ></Skeleton>
            );
          })
        : data?.map((post, i) => {
            return (
              <Card key={i} variant="outlined" sx={{ py: 2.5, px: 3, my: 1 }}>
                <Typography fontSize={{ sm: 8, md: 14 }}>
                  {i}:{post?.title}
                </Typography>
              </Card>
            );
          })} */}
    </Stack>
  );
};

export default Post;
