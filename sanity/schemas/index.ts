import project from "./project-schema";
import page from "./page-schema";
import projectYouTubeLink from "./project-youtube-links";
import { blockContent } from "./blockContent";
import {youtube} from './youtube'
import siteSettings from "./siteSettings";
import colors from "./colors";
import navigation from "./navigation";

const schemas = [
  project,
  page,
  // projectYouTubeLink,
  blockContent,
  youtube,
  siteSettings,
  // colors,
  // navigation,
]

export default schemas