import react from '@vitejs/plugin-react'
import { createServer, defineConfig } from 'vite'
import type { Plugin, ViteDevServer } from 'vite'

function staticContent(): Plugin {
  let devServer: ViteDevServer | undefined

  return {
    name: 'portfolio-static-content',
    configureServer(server) {
      devServer = server
    },
    transformIndexHtml: {
      order: 'pre',
      async handler(html) {
        // Render the same components for the initial HTML, without a runtime server.
        const server = devServer ?? await createServer({
          configFile: false,
          // A build prerender must not replace a running dev server's dep cache.
          cacheDir: 'node_modules/.vite-prerender',
          optimizeDeps: { noDiscovery: true, include: [] },
          plugins: [react()],
          appType: 'custom',
          server: { middlewareMode: true, hmr: false, watch: null },
        })
        try {
          const { render } = await server.ssrLoadModule('/src/entry-server.tsx')
          return html.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`)
        } finally {
          if (!devServer) await server.close()
        }
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), staticContent()],
})
