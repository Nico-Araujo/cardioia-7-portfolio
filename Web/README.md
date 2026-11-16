# CardioIA Web

Interface React e Vite de Vitória Pereira Bagatin. Consulta medições, histórico, análise e conversa pelo [contrato da API](../docs/contrato-api.md).

Com a API local em execução:

```bash
npm ci
VITE_API_BASE_URL=http://127.0.0.1:8000 npm run dev
```

Inclua a origem do Vite, geralmente `http://localhost:5173`, na configuração de origens permitidas do backend. Faça login com a conta de demonstração criada localmente.
