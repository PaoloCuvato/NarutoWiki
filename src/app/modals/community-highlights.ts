import { CreatorHighlightDto } from "./creator-highlight-dto";
import { YoutubePlaylist } from "./youtube-playlist";
import { YoutubeVideo } from "./youtube-video";

export interface CommunityHighlights {
    featuredCreators: CreatorHighlightDto[];
    recentHighlights: YoutubeVideo[];
    guidesAndPlaylists: YoutubePlaylist[];
}
