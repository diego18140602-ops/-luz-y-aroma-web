# Proyecto: sitio web de Lucía & María

La marca **Luz y Aroma** se mudó a **Lucía & María** (Proyectos · Construcción · Decoración, más de 35 años, Los Cabos). Detrás de ambas está Lucía Raquel. Todo trabajo nuevo en esta carpeta usa la identidad de Lucía & María.

## Antes de diseñar o editar
1. Lee `marca/README.md` (manual de marca) y usa `marca/brand.css` (variables `--lm-*`).
2. Logos solo de `marca/logos/` — nunca redibujar ni recolorear el logo.
3. Tipografías: Cormorant Garamond + Jost (archivos en `marca/fuentes/`).
4. Jerarquía de cada sección: etiqueta en mayúsculas → filete fucsia → titular serif → texto → botón fucsia.

## Estructura
- `index.html` — portada nueva de Lucía & María (dos puertas). `detalles.html` y `espacios.html` son las dos líneas de negocio.
- `index-luz-y-aroma.html` — respaldo de la página anterior; no enlazada.
- Vista de diseño: las 3 páginas llevan `noindex` y contenido de ejemplo (testimonios, cifras, proyecto). Quitar `noindex` cuando todo sea real.
- `img/` — fotos actuales (de Luz y Aroma). Fotos nuevas: nombres cortos, sin espacios ni acentos.
- `marca/` — identidad de Lucía & María (logos, fuentes, tokens, manual).
- `Dockerfile` — no tocar (nginx sirve la carpeta tal cual).

## Publicación
Repo GitHub `diego18140602-ops/-luz-y-aroma-web` (rama main) → EasyPanel (VPS Hostinger, proyecto daizen-web, servicio web) publica solo vía webhook. Hoy en daizen.mx (prueba). Flujo: editar aquí → Commit + Push en GitHub Desktop → se publica.

## Pendiente de migración (en este orden)
- [x] Identidad de marca en `marca/`
- [ ] Contenido: textos de servicios Proyectos / Construcción / Decoración, sobre Lucía Raquel, testimonios
- [ ] Fotos de proyectos reales de construcción y decoración en `img/`
- [x] `index.html`, `detalles.html`, `espacios.html` con la nueva marca (vista de diseño)
- [ ] Fotos pendientes: img/lucia-raquel.jpg, fotos "antes" de depa1/depa2 (img/depaN-*-antes.jpg, opcionales), img/hero-velas.mp4 (opcional)
- [ ] Contenido real: testimonios, cifras, proyecto; luego quitar noindex
- [ ] Revisar del index viejo lo que falte migrar: `<title>`, meta description, `og:*`, logo del header y footer, textos "Luz y Aroma", mensajes de WhatsApp, colores y tipografías → `marca/brand.css`, favicon → `marca/logos/svg/lm-icono-fucsia.svg`
- [ ] Dominio propio: actualizar `canonical`, `og:url` y `og:image` (hoy apuntan a github.io)
- [ ] Renombrar repo y carpeta a `lucia-y-maria-web` (ver nota abajo)

Nota: renombrar la carpeta en Finder rompe el enlace de GitHub Desktop hasta que se use "Locate…"; renombrar el repo en GitHub requiere actualizar el webhook/fuente en EasyPanel. Por eso se deja para el final.
