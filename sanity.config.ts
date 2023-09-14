import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'portfolio-nextjs',
  title: 'Sanity Next.js',

  projectId: 'r8wcbv5x',
  dataset: 'production',
  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
