# Plantilla de los apuntes

- `apunte001.html` (carrusel de 4), `apunte002.html` (imagen única con ficha de datos), `apunte003.html` (carrusel de 3): ejemplos del estilo. Copia el más parecido, cambia el texto y renderiza.
- Cada `<section class="s">` es una imagen de 1080×1350.
- Instalar: `cd plantilla && npm install` (Fraunces, IBM Plex Mono y Playwright).
- Renderizar: `node shot2.js apunteNNN.html apunte-NNN` → `apunte-NNN.png` o `apunte-NNN-1.png`, `-2`...
- Si Playwright no encuentra Chromium, `shot2.js` prueba `/opt/pw-browsers/chromium` y luego el de Playwright.
