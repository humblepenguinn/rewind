import Link from "next/link";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "@/app/utils/constants";

interface VideoCardProps {
  video: any;
}

export default function VideoCard({ video }: VideoCardProps) {
  const {
    id: { videoId },
    snippet,
  } = video;

  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link href={videoId ? `/video?id=${videoId}` : `${demoVideoUrl}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{ alt: `${snippet?.title}`, width: 358, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link href={videoId ? `/video?id=${videoId}` : `${demoVideoUrl}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          href={
            snippet?.channelId
              ? `/channel?id=${snippet.channelId}`
              : `${demoChannelUrl}`
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle
              sx={{ fontSize: "small", color: "#03A9F4", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
