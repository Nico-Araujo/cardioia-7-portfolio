# Backend e IA

Para executar a API de demonstração, instale Python 3.12 e Ollama. A partir de `Backend/`:

```bash
python3.12 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m pip install -e . --no-deps
python scripts/init_local.py
ollama pull qwen3:0.6b
python -m cardioia_api
```

Deixe o Ollama ativo em `127.0.0.1:11434`. A API inicia em `http://127.0.0.1:8000` e responde em `/health`. O inicializador gera as credenciais de demonstração no arquivo local `.env` na raiz. Use a conta local para o painel e o token próprio do dispositivo para a telemetria.

Para testar:

```bash
python -m pip install -r requirements-dev.txt
python -m pytest -q
```

Os testes automatizados usam um substituto do LLM. Para testar com o Ollama rodando, execute `python scripts/smoke_api.py` com a API local ativa. O script grava respostas da demonstração em `docs/evidencias/`; mantenha esses registros locais.

Veja o [contrato HTTP e de dados](../docs/contrato-api.md). O endpoint experimental de classificação de imagem fica indisponível sem o modelo correspondente.
