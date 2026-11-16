# Exemplos de payload

Estes arquivos são **fixtures de formato**, com dados sintéticos e identificadores/horários ilustrativos. Não representam execução ou validação da plataforma Fase 7.

- `telemetria.json`: leitura simulada do dispositivo, sem relógio sincronizado.
- `contexto.json`: oito variáveis sintéticas que completam a entrada do modelo.
- `entrada-modelo.json`: vetor completo do caso de referência da Fase 6.
- `previsao.json`: formato de uma previsão calculada, com score ilustrativo do experimento da Fase 6.
- `previsao-fora-dominio.json`: resultado sem score quando o sinal não é compatível com o modelo.
- `painel.json`: resposta do painel com uma análise na fila.

Para desenhar o estado sem dados, usar `measurement`, `prediction` e `analysis` como `null`; para erro de conexão, manter a última leitura com seu horário e mostrar que a atualização falhou. Não criar risco “baixo” como valor padrão.
