const value = process.env.EXPO_PUBLIC_CONFIG_URL
let config
try { config = new URL(value) } catch {}
if (!config || config.protocol !== 'https:' || config.pathname !== '/runtime-config.json' ||
    config.username || config.password || config.search || config.hash) {
  console.error('Defina EXPO_PUBLIC_CONFIG_URL com https://<site-publicado>/runtime-config.json antes de gerar o APK.')
  process.exitCode = 1
}
