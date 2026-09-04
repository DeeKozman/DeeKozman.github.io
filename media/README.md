# media/

Self-hosted video, image, and audio files for the [Kozalak](https://blue-flower-0ebf9a70f-1.eastus2.7.azurestaticapps.net) site — used instead of Vimeo because Vimeo's free tier is a 1 GB lifetime storage cap, not viable for this much content.

Each file here is referenced by full URL from the Kozalak repo, e.g.:

```
https://deekozman.github.io/media/work/meeka-wild-energy/hero.mp4
```

## Layout

- `work/<project-slug>/` — one folder per project, slug matches `src/content/work/<slug>.mdx` in the Kozalak repo exactly. Each has its own `README.md` listing exactly what goes where.
- `reel/` — the showreel video + ambient track for `/reel`.
- `lab/` — optional images for `/lab` entries.

## Ground rules

- Compress before uploading — git (and GitHub Pages) blocks any single file over 100 MB, and the whole published site has a 1 GB cap.
- Keep an eye on total size as this fills up: `du -sh media` from the repo root.
- Filenames don't have to match exactly what's below — Claude Code wires the actual `<Hero src="…">` / `<Gallery items={[{src: "…"}]}>` etc. to whatever's really here. The names below are just a sane default so nothing's ambiguous.
