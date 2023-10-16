import { useEffect, useState } from "react";
import axios from "axios";
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
    const options = {
      method: 'GET',
      url: 'https://newsi-api.p.rapidapi.com/api/category',
      params: {
        category: 'business',
        language: 'en',
        country: 'in',
        sort: 'top',
        page: '1',
        limit: '20'
      },
      headers: {
        'X-RapidAPI-Key': '1e48fefbe9msh3e1b7e67a6a575fp1a93cfjsn8da2b2de0eea',
        'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
      }
    };
    setIsLoading(true);
    const data = await axios.request(options);
    // const data = await response.json();
    await delay(3000);
    setNews(data?.data);
    setIsLoading(false);
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
