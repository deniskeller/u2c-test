import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import crypto from 'crypto';

export default defineConfig({
  plugins: [react()],
	css: {
		modules: {
			generateScopedName: (className, filename) => {
				const fileName = path.basename(filename, '.module.scss')
				function createHash(hash: crypto.BinaryLike) {
					const _hash = crypto.createHash('sha256').update(hash).digest('base64').substring(0, 5)
					if (_hash.includes('/') || _hash.includes('+')) {
						return createHash(_hash)
					}
					return _hash
				}
				const hash = createHash(className)
				return `${fileName}_${className}__${hash}`
			}
    },
		preprocessorOptions: {
			scss: {
				additionalData: `@use "/src/assets/scss/main.scss" as *;`
			},
		}
	},
	resolve: {
		alias:{
			base: "/src/components/base/",
			content: "/src/components/content",
			modals: "/src/components/modals",
			pages: "/src/components/pages",
			constants: "/src/constants",
			hooks: "/src/hooks",
			layouts: "/src/layouts",
			services: "/src/services",
			store: "/src/store",
			utils: "/src/utils",
			view: "/src/view",
		}
	},
})
