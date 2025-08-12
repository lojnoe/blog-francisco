import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io process.env.NEXT_PUBLIC_TINA_CLIENT_ID
  clientId: "effc36fd-2d11-4aaf-a9fa-58f070076e5e",
  // Get this from tina.ioprocess.env.TINA_TOKEN,

  token: "6892b1b56574090419bdd6ca509534d08cc403e8",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: { tina: { mediaRoot: "src/assets", publicFolder: "" } },

  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Título",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            label: "Fecha de publicación",
            name: "pubDate",
            ui: {
              dateFormat: "DD MMMM YYYY",
              timeFormat: "HH:mm"
            }
          },
          {
            type: "string",
            label: "Descripción",
            name: "description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            label: "Imagen destacada",
            name: "heroImage",
          },
          {
            type: "string",
            name: "tags",
            label: "Etiquetas",
            list: true,
            ui: { component: "tags" } // pills para añadir/eliminar tags
          },
          {
            type: "rich-text",
            label: "Contenido",
            name: "body",
            isBody: true,
            templates: [
              {
                name: "Callout",
                label: "Callout",
                fields: [
                  { type: "string", name: "text", label: "Texto" },
                  { type: "string", name: "type", label: "Tipo", options: ["info", "success", "warning"] }
                ]
              }
            ]
          }
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: '<Your Search Token>',
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
