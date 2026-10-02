import { YoutubeVideo } from "./youtube-video";

export interface CreatorHighlightDto {
  channelId: string;
  name: string;
  avatarUrl: string;
  channelUrl: string;
  videos: YoutubeVideo[];
}
