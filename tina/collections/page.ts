import { Collection } from "tinacms";
export const PageCollection: Collection = {
  name: "blocks",
  label: "Blocks",
  path: "pages",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "header",
      label: "Header",
    },
    {
      type: "image",
      label: "Source",
      name: "src",
    },
    {
      type: "object",
      name: "logo",
      label: "Logo",
      fields: [
        { type: "image", name: "url", label: "URL" },
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
    {
      type: "object",
      list: true,
      name: "links",
      label: "Links",
      ui: {
        itemProps: (item) => {
          console.log("item:", item);
          
          return {
            label: item?.header,
          };
        },
      },
      fields: [
        { type: "string", name: "header" },
        { type: "string", name: "description" },
        { type: "string", name: "url" }
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      // templates: [...MDXTemplates],
    },
  ],
};
