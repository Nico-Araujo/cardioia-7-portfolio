# CardioIA Android

Cliente React Native e Expo de Vitória Pereira Bagatin. Usa o mesmo [contrato da API](../docs/contrato-api.md) da interface Web.

```bash
npm ci
npx expo start
```

Antes de abrir o aplicativo, defina `EXPO_PUBLIC_CONFIG_URL` em uma configuração local. A URL HTTPS deve apontar para um `runtime-config.json` que indique a origem da sua instância de demonstração. Veja o [arquivo de exemplo](.env.example).
