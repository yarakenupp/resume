# Yara Kenupp — Portfólio Profissional

> Data Analytics | Business Intelligence | Machine Learning

Site estático, responsivo e moderno, pronto para hospedar gratuitamente no **GitHub Pages**.

---

## Estrutura dos arquivos

```
portfolio-yara/
├── index.html    ← estrutura e conteúdo do site
├── style.css     ← todo o visual, cores e responsividade
├── script.js     ← animações, menu mobile, partículas
└── README.md     ← este arquivo
```

---

## Como subir no GitHub Pages

### Passo 1 — Criar o repositório

1. Acesse [github.com](https://github.com) e faça login.
2. Clique em **"New"** (botão verde no canto superior esquerdo).
3. Dê um nome ao repositório. Sugestões:
   - `portfolio` (URL será `seunome.github.io/portfolio`)
   - `seunome.github.io` (URL será `seunome.github.io` diretamente)
4. Deixe o repositório **Public** (necessário para GitHub Pages gratuito).
5. Clique em **"Create repository"**.

---

### Passo 2 — Subir os arquivos

**Opção A — Pelo site do GitHub (mais simples):**

1. Dentro do repositório criado, clique em **"uploading an existing file"** ou em **"Add file > Upload files"**.
2. Arraste os 4 arquivos (`index.html`, `style.css`, `script.js`, `README.md`) para a área indicada.
3. Role até o final da página, adicione uma mensagem de commit (ex: `"Adicionar portfólio"`) e clique em **"Commit changes"**.

**Opção B — Via Git no terminal:**

```bash
# Clone o repositório que você acabou de criar
git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git

# Entre na pasta
cd NOME_DO_REPO

# Copie os arquivos para dentro da pasta
# (cole index.html, style.css, script.js, README.md aqui)

# Adicione tudo
git add .

# Commit
git commit -m "Adicionar portfólio"

# Envie para o GitHub
git push origin main
```

---

### Passo 3 — Ativar o GitHub Pages

1. No repositório, clique em **"Settings"** (engrenagem no menu superior).
2. No menu lateral esquerdo, clique em **"Pages"**.
3. Em **"Branch"**, selecione `main` e pasta `/ (root)`.
4. Clique em **"Save"**.
5. Aguarde de 1 a 3 minutos. A URL do seu site aparecerá no topo da página em verde.

O endereço será:
```
https://SEU_USUARIO.github.io/NOME_DO_REPO/
```

---

## Como editar o conteúdo

### Editar e-mail, LinkedIn e GitHub

Abra o arquivo `index.html` e procure a seção `<!-- CONTATO -->`.

Substitua os valores abaixo pelos seus dados reais:

| Placeholder              | O que colocar                              |
|--------------------------|--------------------------------------------|
| `colocar_email_aqui`     | Seu e-mail (ex: `yarakenupp@gmail.com`)    |
| `colocar_linkedin_aqui`  | URL completa do LinkedIn                   |
| `colocar_github_aqui`    | URL completa do GitHub                     |

> Dica: use Ctrl+F (ou Cmd+F no Mac) no VS Code ou bloco de notas para encontrar os placeholders rapidamente.

---

### Editar a formação acadêmica

Procure a seção `<!-- FORMAÇÃO -->` no `index.html`.

Edite os campos:
- `Nome do Curso` → nome do seu curso
- `Nome da Instituição` → nome da universidade ou escola
- `Ano de início - Ano de conclusão` → os anos reais
- A descrição abaixo de cada card

---

### Editar os períodos de experiência

Procure a seção `<!-- EXPERIÊNCIA -->` e edite o texto `Adicione o período` dentro de cada `<span class="timeline-period">` com os anos reais (ex: `2022 - 2024`).

---

### Adicionar ou editar projetos

Cada projeto está dentro de um `<div class="project-card">`. Para editar:

- `<h3>` → título do projeto
- `<p>` → descrição
- `.project-tags span` → ferramentas usadas
- `.project-deliverables` → principais entregas

Para adicionar um novo projeto, copie um bloco `.project-card` completo e cole antes do fechamento da `.projects-grid`.

---

### Editar cores e visual

Todas as cores e fontes estão no topo do arquivo `style.css`, dentro de `:root { }`.

```css
:root {
  --accent-teal:  #5de6d5;  /* cor de destaque principal (verde-água) */
  --accent-lilac: #b8a4f8;  /* cor de destaque secundária (lilás)     */
  --bg-deep:      #07091a;  /* fundo principal (azul muito escuro)     */
  --bg-surface:   #0d1227;  /* fundo das seções alternadas            */
  /* ... */
}
```

Basta trocar os valores de cor para personalizar o visual completo.

---

## Dependências externas (CDN)

O site usa apenas:

| Recurso       | Fonte                                   | Para que serve                   |
|---------------|-----------------------------------------|----------------------------------|
| Fontes        | Google Fonts                            | Cormorant Garamond + Manrope     |
| Ícones        | Font Awesome 6.5 (cdnjs)                | Ícones de habilidades e contato  |

Nenhum framework JavaScript. Funciona offline (exceto fontes e ícones).

---

## Testando localmente

Basta abrir o arquivo `index.html` diretamente no navegador. Não é necessário servidor local.

Se preferir usar um servidor local (recomendado para desenvolvimento):

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (npx)
npx serve .
```

Depois acesse `http://localhost:8000` no navegador.

---

## Checklist antes de publicar

- [ ] Substituí `colocar_email_aqui` pelo meu e-mail real
- [ ] Adicionei o link do LinkedIn
- [ ] Adicionei o link do GitHub
- [ ] Preenchi os dados de formação acadêmica (curso, instituição, período)
- [ ] Adicionei os períodos de experiência (Grupo Soma, Prudential, Allianz)
- [ ] Testei o site no celular (modo responsivo)
- [ ] Ativei o GitHub Pages nas configurações do repositório

---

*Desenvolvido em HTML, CSS e JavaScript puro. Sem frameworks. Sem backend. Pronto para GitHub Pages.*
