# MoMa-NMP

Anonymous research project website. Static HTML, CSS, and JavaScript, compatible with GitHub Pages.

## Content

- `index.html`: page sections, figure captions, and research summaries.
- `assets/css/style.css`: palette, typography, spacing, and responsive layouts.
- `assets/js/main.js`: active section navigation and gallery playback.
- `assets/figures/`: cropped figures from the anonymous manuscript.
- `assets/videos/simulation/`: twelve simulation demonstration videos.
- `assets/posters/simulation/`: preview thumbnails for the simulation gallery.
- `assets/videos/simulation-evaluation/`: twelve MoMa-NMP simulation evaluation rollouts.
- `assets/posters/simulation-evaluation/`: preview thumbnails for the evaluation rollouts.
- `assets/videos/m2diffuser/`: two MoMa-NMP zero-shot evaluation rollouts.
- `assets/posters/m2diffuser/`: preview thumbnails for these evaluation rollouts.
- `assets/videos/real-world/`: six real-world evaluations grouped by four categories.
- `assets/posters/real-world/`: preview thumbnails for the real-world evaluations.
- `assets/videos/failures/`: two real-world failure cases.
- `assets/posters/failures/`: preview thumbnails for the failure cases.

The simulation gallery contains twelve cuRobo global-trajectory videos before Geometric Fabrics action annotation, in their original sequence, resolution, and playback timing. The MP4 containers are prepared for progressive playback without re-encoding the video. Videos load on demand, use native playback controls, and play one at a time. Playback pauses when a video leaves the viewport or the page is hidden.

The secondary M²Diffuser subsection follows the main simulation results. Its two videos show MoMa-NMP rollouts, and its results table reports the paired evaluation on 891 endpoint-feasible problems from the benchmark. Website copies use the updated recordings with embedded black borders cropped out; all 150 frames and the 7.5-second duration of each recording are preserved.

The main simulation evaluation section contains twelve MoMa-NMP policy rollouts in numeric order, distinct from the cuRobo data-generation gallery and the M²Diffuser benchmark examples. These recordings retain their original resolution and playback timing, with thumbnails and the same on-demand playback controls as the other galleries.

The real-world gallery groups six videos into out-of-distribution scenes, tight spaces, closed-loop replanning, and partial observability. The tight-spaces recording is converted from HDR HEVC to SDR H.264 for browser compatibility. Four recordings have fixed crops to remove embedded black borders, using bounds checked throughout each clip. The first partial-observability video is retained without video re-encoding. All audio streams are preserved; source container metadata and auxiliary camera-data tracks are excluded from website copies. The replanning video includes a tracked gray head mask during the brief human intervention. Original recordings are unchanged.

The limitations section pairs two real-world failure videos with wording from the manuscript about distribution shift and fully occluded obstacles. Website copies are converted from HDR HEVC to SDR H.264, preserving audio and excluding source metadata and auxiliary camera-data tracks. Original recordings are unchanged.

The project overview video is withheld until it is ready for publication.

## Preview

Run `python3 -m http.server 8000` from the repository directory and visit `http://localhost:8000`.

## Future media

Add the project overview video with a poster image when it is ready. Preserve descriptive captions and accessible labels. Keep playback speed labels accurate for each clip. Use lazy loading for the gallery and avoid starting every video at once.

Published files, file metadata, and commit attribution must preserve submission anonymity. Do not add personal names, affiliations, contact details, local absolute paths, or identifying links. Source media have been checked separately.
