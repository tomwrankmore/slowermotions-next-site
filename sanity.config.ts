import { defineConfig } from "sanity";
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
  ],
  schema: { types: schemas },
});

export default config;
