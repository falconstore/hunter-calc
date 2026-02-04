

## Plano: Atualizar Contatos e Remover Card YouTube

### Alteracoes no arquivo `src/components/Contact.tsx`

---

### 1. ATUALIZAR DADOS DE CONTATO

**Email (linha 247):**
- Atual: `atendimentohuntergreen@hotmail.com`
- Novo: `atendimentohuntergreen@hotmail.com` (ja esta correto)

**Instagram (linhas 111-117):**
- URL atual: `https://www.instagram.com/huntergreencerto?igsh=Mmw1N3lkbjF4M2ts` (ja esta correto)
- Handle atual: `@huntergreencerto` (ja esta correto)

**Telegram - Card Grupo FREE (linha 78):**
- Atual: `https://t.me/+M1SY4YU6T-pjYWQx`
- Novo: `https://t.me/suportehunter`

**Telegram - Suportes (linhas 195 e 230):**
- Atual: `https://t.me/suportehunter` (ja esta correto)

---

### 2. REMOVER CARD DO YOUTUBE

**Linhas a remover:** 122-153 (todo o card do YouTube)

**Remover import nao usado:**
- Linha 9: remover `Youtube` do import do lucide-react

---

### 3. CENTRALIZAR OS 2 CARDS RESTANTES

**Alterar grid de 3 colunas para 2 colunas centralizadas:**

```tsx
// DE (linha 51):
<div className="grid md:grid-cols-3 gap-6">

// PARA:
<div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
```

Isso vai:
- Mostrar 2 colunas no desktop (centradas)
- Mostrar 1 coluna no mobile (empilhadas)

---

### Resumo das Alteracoes

| Local | Alteracao |
|-------|-----------|
| Linha 9 | Remover `Youtube` do import |
| Linha 51 | Mudar para `grid md:grid-cols-2 gap-6 max-w-3xl mx-auto` |
| Linha 78 | Atualizar link Telegram para `https://t.me/suportehunter` |
| Linhas 122-153 | Remover card YouTube completo |

---

### Resultado Visual Esperado

**Secao "Canais Principais":**
- 2 cards centralizados: Telegram FREE e Instagram
- Layout responsivo: 2 colunas desktop, 1 coluna mobile

**Dados atualizados:**
- Telegram: `https://t.me/suportehunter` (todos os links)
- Instagram: `@huntergreencerto` (ja correto)
- Email: `atendimentohuntergreen@hotmail.com` (ja correto)

