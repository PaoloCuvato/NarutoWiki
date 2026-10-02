import { YoutubePlaylist } from "./youtube-playlist";
import { YoutubeVideo } from "./youtube-video";

export interface CommunityHighlights {
    randomVideos: YoutubeVideo[];
    pinnedPlaylists: YoutubePlaylist[];
}
