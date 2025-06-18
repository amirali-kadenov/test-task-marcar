# Приложение для просмотра автомобилей

## Инструкция по установке и запуску

### Требования
- Node.js 18+ 
- PNPM

### Установка

```bash
# Установка зависимостей
pnpm install
```

### Запуск

```bash
# Запуск в режиме разработки
pnpm dev

# Сборка для продакшена
pnpm build

# Запуск продакшен-версии
pnpm start
```

## Архитектура проекта

Проект следует архитектуре [Feature-Sliced Design](https://feature-sliced.design/):

- **app** - Next.js App Router
- **entities** - бизнес-сущности (автомобили, фильтрация)
- **pages** - страницы приложения
- **shared** - переиспользуемые компоненты и утилиты
- **widgets** - композиционные компоненты

## Основные функции

- Просмотр списка автомобилей с пагинацией
- Сортировка автомобилей
- Адаптивный дизайн

## Технологический стек

- [Next.js 15](https://nextjs.org) - React-фреймворк
- TypeScript - типизация
- [React Query](https://tanstack.com/query/latest) - управление серверным состоянием
- [Zustand](https://github.com/pmndrs/zustand) - управление клиентским состоянием
- [Radix UI](https://www.radix-ui.com/) - компоненты интерфейса
- [Tailwind CSS](https://tailwindcss.com/) - стилизация
- [Axios](https://axios-http.com/) - HTTP-клиент

