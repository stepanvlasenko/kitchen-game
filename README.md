## setup

1. Init venv and activate it
```bash
py -m venv venv
```

2. Install requirements into venv
```bash
py -m pip install -r requirements.txt
```

3. Install node dependencies
```bash
npm install
```

4. Run seed script. 
```bash
py backend/seed.py
```

5. Make sure about right server url in [api.ts](frontend/assets/ts/api.ts)

6. Run project
```bash
npm run dev
```

If you install any python package, you should add it to requirements, by using:
```bash
py -m pip freeze > requirements.txt
```
