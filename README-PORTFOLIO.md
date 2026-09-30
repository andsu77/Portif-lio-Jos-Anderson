# Portfólio José Anderson

Landing page profissional criada em React + Vite + TypeScript + TailwindCSS.

## Como abrir no VS Code

1. Extraia o arquivo compactado.
2. Abra a pasta `jose-anderson-portfolio` no VS Code.
3. Abra o terminal dentro da pasta.
4. Execute:

```bash
pnpm install
pnpm dev
```

Se você não tiver pnpm instalado, use `npm install` e depois `npm run dev`.

## Onde colocar sua foto

A área da foto está no arquivo:

```text
client/src/pages/Home.tsx
```

Procure pelo bloco com o texto `sua foto aqui` e substitua o placeholder por uma imagem sua. Para uma imagem local, coloque o arquivo em `client/public/` e use, por exemplo:

```tsx
<img src="/minha-foto.jpg" alt="José Anderson" />
```

Também é possível substituir as cores e detalhes visuais em:

```text
client/src/index.css
```

## WhatsApp

O número configurado nos botões é `71 99246-4096`. Os CTAs já abrem uma conversa com mensagem automática.

## Conteúdo para personalizar depois

- Sua foto profissional.
- Links reais de Instagram e GitHub.
- Eventuais novos projetos publicados.
- Favicon e imagem de compartilhamento social.
