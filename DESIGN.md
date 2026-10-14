# DESIGN.md — Visual System Specification
**Sanjeev A — Cinematic Creative Technologist Portfolio**

## 1. Aesthetic Concept: Cinematic Systems & Creative Depth
- **Atmosphere**: A dramatic, immersive cinematic experience inspired by high-end science fiction command interfaces, atmospheric film titles, and modern creative technology studios.
- **Lighting & Contrast**: Deep obsidian space backdrops (`#040507`), layered carbon glass panels with luminous 1px borders (`rgba(255, 255, 255, 0.08)`), subtle dynamic pointer spotlights, and controlled accent glows (Phosphor Cyan `#00F2FE`, Swiss Safety Orange `#FF5500`, Emerald Beacon `#10B981`).
- **Filmic Typography**:
  - Oversized display titles with subtle specular gradient masks (`from-white via-zinc-100 to-zinc-400`).
  - Wide-spaced monospaced scene markers and act titles (`ACT 01 // SELECTED PRODUCTIONS`, `ACT 02 // CREATIVE PERSPECTIVE`).
  - High-readability body text (`Geist Sans` / `Inter`) with generous optical line-height.
- **Simple Content, Complex Craft**:
  - Every word remains grounded in Sanjeev's real resume accomplishments.
  - Zero fake telemetry, zero corporate jargon, zero proprietary employer secrets.
  - The cinematic feeling comes from visual lighting, interactive node connections, lens-flare hover effects, and tactile spatial rhythm.

---

## 2. Color System & Semantic Tokens

### Cinematic Dark Theme (Default)
```css
:root[data-theme="dark"] {
  --bg-canvas: #040507;             /* Deep cinematic void */
  --bg-surface: #0b0e14;            /* Carbon glass surface */
  --bg-surface-elevated: #111622;   /* Hover / elevated stage */
  --bg-surface-subtle: #080a0f;     /* Inset panels */

  --border-hairline: rgba(255, 255, 255, 0.08); /* Filmic 1px glass border */
  --border-medium: rgba(255, 255, 255, 0.16);   /* Interactive highlight */
  --border-active: #00f2fe;         /* Active focus & pulse */

  --text-primary: #ffffff;          /* Pure white specular */
  --text-secondary: #94a3b8;        /* Slate narrative */
  --text-muted: #526077;            /* Monospace coordinates, dates */
  --text-accent: #ff5500;           /* Swiss Safety Orange / Flame */
  --text-cyan: #00f2fe;             /* Phosphor Cyan */

  --glow-cyan: rgba(0, 242, 254, 0.15);
  --glow-orange: rgba(255, 85, 0, 0.15);
  --status-active: #10b981;
}
```

### Cinematic Daylight / High-Key Theme (Alternate)
```css
:root[data-theme="light"] {
  --bg-canvas: #f8fafc;             /* High-key studio white */
  --bg-surface: #ffffff;            /* Pure white panels */
  --bg-surface-elevated: #f1f5f9;
  --bg-surface-subtle: #e2e8f0;

  --border-hairline: rgba(0, 0, 0, 0.08);
  --border-medium: rgba(0, 0, 0, 0.16);
  --border-active: #0284c7;

  --text-primary: #090d16;          /* Deep ink */
  --text-secondary: #334155;        /* Slate text */
  --text-muted: #64748b;
  --text-accent: #ea580c;
  --text-cyan: #0284c7;

  --glow-cyan: rgba(2, 132, 199, 0.1);
  --glow-orange: rgba(234, 88, 12, 0.1);
  --status-active: #059669;
}
```

---

## 3. Interaction & Motion Rules
- **Pointer Spotlight Tracker**: Cards and hero track cursor coordinates to render a soft, cinematic specular highlight that illuminates borders and surfaces.
- **Node Graph & Interactive Constellation**: A tactile, interactive node visualizer allowing visitors to interact with the system architecture layers like a high-tech console.
- **Hardware-Accelerated Only**: Transforms and opacities only. All transitions drop to zero with `@media (prefers-reduced-motion: reduce)`.
