# Proyecto: sitio web de Raquel Gutiérrez

Marca **Raquel Gutiérrez** · Proyectos · Construcción · Decoración · Más de 35 años · Los Cabos, BCS.
(Antes se llamó Luz y Aroma y luego Lucía & María; todo trabajo nuevo usa la identidad de Raquel Gutiérrez.)

Sitio oficial: **https://raqueldecoracion.com** (canónico, sin www; www.raqueldecoracion.com también responde).

## Antes de diseñar o editar
1. Usa `marca-rg/brand.css` (variables `--rg-*`) y lee `marca-rg/README.md`.
2. Logos solo de `marca-rg/logos/` — nunca redibujar ni recolorear el logo.
3. Tipografías: Cormorant Garamond + Jost (archivos en `marca-rg/fuentes/`).
4. Jerarquía de cada sección: etiqueta en mayúsculas → filete fucsia → titular serif → texto → botón fucsia.
5. Enlaces, imágenes, CSS y JS siempre con rutas relativas. Las únicas URLs absolutas permitidas son las de SEO (`canonical`, `og:*`, `twitter:*`, JSON-LD, `sitemap.xml`, `robots.txt`) y siempre con `https://raqueldecoracion.com`.

## Estructura
- `index.html` — portada (dos puertas). `detalles.html` y `espacios.html` son las dos líneas de negocio.
- `img/` — fotos de productos y espacios. Nombres cortos, sin espacios ni acentos. `img/og-raquel-gutierrez.jpg` es la imagen al compartir el enlace.
- `marca-rg/` — identidad vigente (logos SVG y PNG, fuentes, tokens).
- `sitemap.xml` y `robots.txt` — si agregas una página, súmala al sitemap.
- `index-luz-y-aroma.html` y `marca/` — respaldo de marcas anteriores; quedan en el repo pero NO se publican (`.dockerignore`).
- `Dockerfile` — nginx sirve la carpeta tal cual. `.dockerignore` define qué no se sube al servidor.

## Publicación
Repo GitHub `diego18140602-ops/-luz-y-aroma-web` (rama main) → EasyPanel en VPS Hostinger (proyecto `daizen-web`, servicio `web`, puerto 80) → https://raqueldecoracion.com.
Flujo: editar aquí → Commit + Push en GitHub Desktop → en EasyPanel, servicio `web` → Implementar (si el webhook no lo hace solo).
DNS y HTTPS ya están configurados en EasyPanel; no se tocan desde el repo.

## Pendientes
- [ ] Contenido real: testimonios y cifras (hoy dicen "Pendiente" en la portada).
- [ ] Fotos pendientes: `img/lucia-raquel.jpg` (foto de Raquel), fotos "antes" de los departamentos (`img/depaN-*-antes.jpg`, opcionales), `img/hero-velas.mp4` (opcional).
- [ ] Fotos reales de las piezas navideñas (hoy son imágenes de referencia).
- [ ] Renombrar repo y carpeta a `raquel-gutierrez-web` (requiere "Locate…" en GitHub Desktop y actualizar la fuente en EasyPanel).
