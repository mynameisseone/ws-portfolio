# ws-portfolio

Минималистичный сайт-портфолио на [Astro](https://astro.build). Чистая статика, деплой на GitHub Pages.

## Локальная разработка

    npm install
    npm run dev      # dev-сервер с hot-reload: http://localhost:4321
    npm run build    # прод-сборка в dist/
    npm run preview  # локальный просмотр прод-сборки

Ничего не уходит на GitHub до `git push`.

## Контент

- Кейсы — markdown-файлы в `src/content/projects/*.md`.
  `id` файла = slug и имя папки со скриншотами (например `rzd-portal.md` → `rzd-portal`).
- Скриншоты — `src/assets/screens/<slug>/*.png`.
  Astro автоматически оптимизирует их (WebP + несколько ширин) при сборке.
  Подпись берётся из имени файла (ведущий номер отбрасывается).
- Общие данные (имя, контакты, «Технический подход») — `src/data/site.ts`.

### Добавить проект

1. Создайте `src/content/projects/<slug>.md` (frontmatter по схеме из `src/content.config.ts`).
2. Положите скриншоты в `src/assets/screens/<slug>/`.

## Деплой на GitHub Pages

Репозиторий: `mynameisseone/ws-portfolio` → сайт: https://mynameisseone.github.io/ws-portfolio/

- Push в `main` запускает workflow `.github/workflows/deploy.yml` (сборка + публикация).
- В настройках репозитория: **Settings → Pages → Source = GitHub Actions**.
- `site` и `base` заданы в `astro.config.mjs`.
