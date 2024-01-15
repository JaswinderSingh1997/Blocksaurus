import { Collection } from "tinacms";
export const PageCollection: Collection = {
  name: "blocks",
  label: "Blocks",
  path: "pages",
  format: "mdx",
  fields: [
    {
      type: "rich-text",
      name: "Document",
      label: "Document",
      isBody: true,
    },
  ],
};
