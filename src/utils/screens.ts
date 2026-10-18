import type { ImageMetadata } from 'astro';

/**
 * Все скриншоты проектов, собранные из `src/assets/screens/<project-id>/`.
 * Astro оптимизирует их (WebP + несколько ширин) на этапе сборки.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/screens/**/*.png',
  { eager: true },
);

export interface Shot {
  image: ImageMetadata;
  /** Имя файла внутри папки проекта. */
  file: string;
  /** Подпись, полученная из имени файла (без ведущего номера). */
  caption: string;
  alt: string;
}

function captionFromFile(file: string): string {
  return file
    .replace(/\.[^.]+$/, '') // расширение
    .replace(/^\d+\s*[.)-]?\s*/, '') // ведущий номер ("1 ", "2. " ...)
    .trim();
}

/** Скриншоты проекта в порядке, заданном номером в имени файла. */
export function shotsFor(id: string): Shot[] {
  const prefix = `/src/assets/screens/${id}/`;
  return Object.entries(modules)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b, 'ru', { numeric: true }))
    .map(([path, mod]) => {
      const file = path.split('/').pop() as string;
      const caption = captionFromFile(file);
      return { image: mod.default, file, caption, alt: caption };
    });
}

/** Обложка проекта: указанный файл или первый скриншот. */
export function coverFor(id: string, preferred?: string): Shot | null {
  const shots = shotsFor(id);
  if (shots.length === 0) return null;
  if (preferred) {
    const found = shots.find((s) => s.file === preferred);
    if (found) return found;
  }
  return shots[0]!;
}
