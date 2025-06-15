# Просмотр `README.md` в vs code
Сочетание клавиш `Ctrl+Shift+V`

# Основное назначение директорий
Папка `public/` служит для хранения 

```bash
src/
├── 📁 public/           # Статических файлы, которые копируются в сборку не изменяясь (index.html)
├── 📁 assets/           # Статические ресурсы: изображения, шрифты, SVG
├── 📁 components/       # Переиспользуемые UI-компоненты
│   ├── 📁 ui/           # UI-примитивы (Button, Input, Card)
│   └── 📁 features/     # Компоненты с бизнес-логикой (SearchBar, UserProfile)
├── 📁 hooks/            # Кастомные хуки (useAuth, useDebounce)
├── 📁 pages/            # Страницы приложения (роуты)
├── 📁 store/            # Глобальное состояние (Redux/Zustand/Context)
├── 📁 services/         # API-клиенты и сервисы (axios, GraphQL)
├── 📁 utils/            # Вспомогательные утилиты (форматеры, валидаторы)
├── 📁 styles/           # Глобальные стили (SCSS/CSS-in-JS)
└── 🚀 App.tsx           # Корневой компонент приложения

