import { readFile, writeFile } from 'node:fs/promises'

const path = new URL('../dist/runtime-config.json', import.meta.url)
const current = JSON.parse(await readFile(path, 'utf8'))
const configured = process.env.CARDIOIA_API_BASE_URL?.trim() || current.api_base_url
if (configured) {
  const url = new URL(configured)
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash ||
      !['', '/api/v1'].includes(url.pathname.replace(/\/+$/, ''))) {
    throw new Error('CARDIOIA_API_BASE_URL deve ser a origem HTTPS pública da API.')
  }
  current.api_base_url = url.origin
}
await writeFile(path, JSON.stringify({ config_version: 1, api_base_url: current.api_base_url }, null, 2) + '\n')
