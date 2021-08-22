Canvas Wrappers to quickly visualize stuff.

<span id="BADGE_GENERATION_MARKER_0"></span>
[![npmV](https://img.shields.io/npm/v/suf-canvas)](https://www.npmjs.com/package/suf-canvas) [![install](https://badgen.net/packagephobia/install/suf-canvas)](https://packagephobia.now.sh/result?p=suf-canvas) [![githubLastCommit](https://img.shields.io/github/last-commit/TheRealSyler/suf-canvas)](https://github.com/TheRealSyler/suf-canvas)
<span id="BADGE_GENERATION_MARKER_1"></span>

<span id="DOC_GENERATION_MARKER_0"></span>

# Docs

- **[canvasCache](#canvascache)**

  - [CanvasCache](#canvascache)

- **[canvasViewer](#canvasviewer)**

  - [CanvasViewer](#canvasviewer)

- **[canvasViewerRect](#canvasviewerrect)**

  - [CanvasViewerRect](#canvasviewerrect)

### canvasCache

##### CanvasCache

```ts
class CanvasCache {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(size: number, name: string);
}
```

### canvasViewer

##### CanvasViewer

```ts
class CanvasViewer extends CanvasCache {
    size: number;
    scale: number;
    cssScale: number;
    static viewers: number;
    static container: HTMLDivElement;
    constructor(size: number, scale?: number, cssScale?: number);
    drawNumArray(arr: number[], colorMultiplier?: number): void;
    drawRGBNumArray(arr: [number, number, number][], colorMultiplier?: number): void;
    componentToHex(c: number): string;
    rgbToHex(r: number, g: number, b: number): string;
}
```

### canvasViewerRect

##### CanvasViewerRect

```ts
class CanvasViewerRect extends CanvasViewer {
    rect: {
        width: number;
        height: number;
    };
    constructor(rect: {
        width: number;
        height: number;
    }, scale?: number, cssScale?: number);
    drawWaveArray(arr: number[], skip?: number): void;
}
```

_Generated with_ **[suf-cli](https://www.npmjs.com/package/suf-cli)**
<span id="DOC_GENERATION_MARKER_1"></span>

<span id="LICENSE_GENERATION_MARKER_0"></span>
Copyright (c) 2021 Leonard Grosoli Licensed under the MIT license.
<span id="LICENSE_GENERATION_MARKER_1"></span>