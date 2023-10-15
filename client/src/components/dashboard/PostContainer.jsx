import { useEffect, useState } from "react";
import { Skeleton, Stack } from "@mui/material";
import { useInfiniteQuery, useQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import PostCard from "./PostCard";

const PostContainer = () => {
  const [news, setNews] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const delay = (time) => {
    return Promise.resolve((fn) => setTimeout(fn, time));
  };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=911a2f67abbf4fbca44b54563ee2d22b`
    );
    const data = await response.json();
    await delay(3000);
    setNews(data?.articles);
    setIsLoading(false);
    console.log({ news });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack pb={10}>
      {IsLoading
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
        : news?.map((post, i) => {
            return <PostCard key={i} data={post} index={i} />;
          })}
    </Stack>
  );
};

export default PostContainer;
