import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  CircularProgress,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import PostCard from "./PostCard";

const PostContainer = () => {
  const { ref, inView } = useInView();
  const [IsLoading, setIsLoading] = useState(false);
  const LIMIT = 10;

  const fetchData = async (page) => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://newsi-api.p.rapidapi.com/api/category",
      params: {
        category: "business",
        language: "en",
        country: "in",
        sort: "top",
        page: page,
        limit: LIMIT,
      },
      headers: {
        "X-RapidAPI-Key": "1e48fefbe9msh3e1b7e67a6a575fp1a93cfjsn8da2b2de0eea",
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    };
    const data = await axios.request(options);
    setIsLoading(false);
    return data?.data;
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery("news", ({ pageParam = 1 }) => fetchData(pageParam), {
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
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <Stack width={"100%"} pb={10} px={2}>
      {IsLoading
        ? [...Array(8)].map((_, i) => {
            return (
              <Skeleton
                key={i}
                sx={{
                  my: 1,
                  height: 400,
                }}
                variant="rounded"
              ></Skeleton>
            );
          })
        : data?.pages?.map((page) =>
            page?.map((post, i) => {
              if (page.length === i + 1) {
                return <PostCard ref={ref} key={post._id} data={post} />;
              }
              return <PostCard ref={null} key={post._id} data={post} />;
            })
          )}
      {isFetchingNextPage && (
        <Box
          mt={2}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {" "}
          <CircularProgress />
        </Box>
      )}
      {!hasNextPage && (
        <Box
          mt={2}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {" "}
          <Typography variant="body1">You have seen it all</Typography>
        </Box>
      )}
    </Stack>
  );
};

export default PostContainer;
