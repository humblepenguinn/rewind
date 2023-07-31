"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import Videos from "@/app/components/Videos";
import ChannelCard from "@/app/components/ChannelCard";
import { getDataFromAPI } from "@/app/actions/getDataFromAPI";

export default function Page() {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);

  const id = useSearchParams().get("id");

  useEffect(() => {
    getDataFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    getDataFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}
