import { defineConfig } from "sanity";
import {visionTool} from '@sanity/vision'
import { deskTool, StructureBuilder } from "sanity/desk";
import schemas from "./sanity/schemas";
import { myStructure } from "./sanity/components/deskStructure";

const config = defineConfig({
  projectId: "kpnaxz28",
  dataset: "production",
  title: "Slower Motions Next App",
  apiVersion: "09-10-2023",
  basePath: "/studio",
  plugins: [
    deskTool({
      structure: myStructure
    }),
    visionTool({
      // Note: These are both optional
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),
  ],
  schema: { types: schemas },
});

export default config;
