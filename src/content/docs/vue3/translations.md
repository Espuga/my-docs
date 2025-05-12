---
title: 🌐 Translations
description: Implement multilingual support in Vue3 app with vue-i18n
---

Manage translations in your Vue 3 app using the [`vue-i18n`](https://vue-i18n.intlify.dev/) library.

## 1. 🚀 Getting Started

### 1.1 📦 Install `vue-i18n`

```bash
npm install vue-i18n
```

### 1.2 🛠️ Create `index.js`

Inside `src/i18n/`, create the `index.js` file:

```js
// src/i18n/index.js
import { createI18n } from 'vue-i18n';

// Locales
import en from '@/i18n/locales/en.json';
import ca from '@/i18n/locales/ca.json';

const messages = { en, ca };

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  legacy: false,
  messages,
  missing: (locale, key) => {
    console.warn(`Missing translation key: "${key}" in locale: "${locale}"`);
    return key;
  },
});
```

### 1.3 🌍 Create Locales

Inside `src/i18n/locales/`, create one JSON file per locale.

**English** (`en.json`):

```json
{
  "title": "Title"
}
```

**Catalan** (`ca.json`):

```json
{
  "title": "Títol"
}
```

## 2. 🧩 Using Translations in a Component

### 2.1 🔌 Register `vue-i18n` in `main.js`

```js
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';

const app = createApp(App);

app.use(i18n);
app.mount('#app');
```

### 2.2 🧪 Use Translations in a Vue Component

```vue
<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div>{{ t('title') }}</div>
</template>
```
