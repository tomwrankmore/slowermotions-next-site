import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "49wa66pl",
  dataset: "production",
  title: "Repetition Composition Portfolio",
  apiVersion: "02-10-2023",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
