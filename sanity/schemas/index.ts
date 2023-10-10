import interview from "./schemas/interview-schema";
import project from "./schemas/project-schema";
import page from "./schemas/page-schema";
import projectYouTubeLink from "./schemas/project-youtube-links";
import { blockContent } from "./arrays/blockContent";
import { youtube } from "./objects/youtube";
import { soundcloud } from "./objects/soundcloud";
import { spotify } from "./objects/spotify";
import breaker from "./objects/break";
import siteSettings from "./schemas/siteSettings";
import { figure } from "./objects/figure";

const schemas = [
  interview,
  // project,
  // page,
  // projectYouTubeLink,
  blockContent,
  youtube,
  breaker,
  soundcloud,
  siteSettings,
  spotify,
  figure,
];

export default schemas;
