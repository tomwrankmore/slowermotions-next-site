import { defineConfig } from "sanity";
import { deskTool, StructureBuilder } from "sanity/desk";
import schemas from "./sanity/schemas";
import { myStructure } from "./sanity/components/deskStructure";

const config = defineConfig({
  projectId: "49wa66pl",
  dataset: "production",
  title: "Repetition Composition Portfolio",
  apiVersion: "02-10-2023",
  basePath: "/studio",
  plugins: [
    deskTool({
      structure: myStructure
    }),
  ],
  schema: { types: schemas },
});

export default config;
