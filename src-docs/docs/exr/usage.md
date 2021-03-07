# Summary by usage and type of image

[TOC]

## Final render/export

### Animation, Graphics or Video

- ***DWA***, (a bit) lossy. (use a small compression level) – not supported by ffmpeg (yet).
- ***PXR24***, lossless\*
- If exporting to *YUV 422 *or *420* video (e.g. *h.264*/*h.265*) or gray-scale, use the ***Luminance/Chroma*** option – not supported by ffmpeg (yet).

_\* In the specific case of a final export, PXR24 is considered lossless, as there should not be any need for 32-bit float data._

### Grainy video or animation

- ***DWA***, (a bit) lossy – not supported by ffmpeg (yet).
- ***PIZ***, lossless
- If exporting to *YUV 422 *or *420* video (e.g. *h.264*/*h.265*) or gray-scale , use the ***Luminance/Chroma option***. – not supported by ffmpeg (yet).

### Solid colors, large flat areas (alpha and id channels)

- ***RLE***

## Intermediary 32-bit float

### Texture maps, Animation, Graphics or Video

- ***ZIP***
- ***DWA*** if you can afford a small quality loss  
Note that DWA will only compress R,G,B channels (or Y,RY,BY in case of Luminance/Chorma) and automatically select either *RLE* for alpha or *ZIP* for AOV (Z, U, V, Normal…). – not supported by ffmpeg (yet).

### Grainy video or animation

- ***PIZ***

### Solid colors, large flat areas (alpha and id channels)

- ***RLE***

## Intermediary 16/24-bit float, 16/32-bit int

### Texture maps, Animation, Graphics or Video

- ***PXR24***, if unavailable: ***ZIP***
- ***DWA*** if you can afford a small quality loss  
Note that DWA will only compress R,G,B channels (or Y,RY,BY in case of Luminance/Chorma) and automatically select either RLE for alpha or ZIP for AOV (Z, U, V, Normal…) – not supported by ffmpeg (yet).

### Grainy video or animation

- ***PIZ***

### Solid colors, large flat areas (alpha and id channels)

- ***RLE***

## Stereo images

### Texture maps, Animation, Graphics or Video

- ***ZIP***

### Solid colors, large flat areas (alpha and id channels)

- ***RLE***

## Real-time playback

- ***B44A*** or ***B44***
- If unavailable: ***PXR24***

## Proxies

- ***DWAA*** (use a high compression level)
- If unavailable: ***PXR24***, ***ZIP***, **PIZ**

![META](authors:Nicolas "Duduf" Dufresne, Dino Muhić;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/07)
