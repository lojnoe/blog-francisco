// src/lib/tags.ts
export function toTagSlug(input: string): string {
  return input
    .normalize("NFD")                       // separa diacríticos
    .replace(/\p{Diacritic}/gu, "")        // quita tildes
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")                  // espacios -> guiones
    .replace(/[^a-z0-9-]/g, "");           // limpia raros
}

export function prettyTag(input: string): string {
  // título simple: "mi-etiqueta" -> "Mi etiqueta"
  const s = input.trim().replace(/[-_]+/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}
