# Summary

[TOC]

## Lossy (final) exports

Especially for final exports, you probably don’t need lossless compression, and with the right settings, the exported file size can be quite small with just a very small reduction of quality, and the Master or backup of your movie can be stored this way.

In this case, *DWA* (with a small compression level) is very efficient in all cases. Be careful, *DWA* is not supported by *ffmpeg* (yet). In this case *PXR24* is a good (lossless) alternative.

Solid colors (e.g. alpha channels) can be compressed very efficiently using *RLE* without losing quality.

If you’re not exporting for complex compositing (e.g. choma keying), and especially from a video source or if the export is to be used as a Master for further *YUV 422* or *421* video exports (like *h.264*/*h.265*), the *Luminance/Chroma* option will divide the file size by two with only a very small reduction of quality. Be careful, *ffmpeg* does not support the *Luminance/chroma* option (yet).

## Lossless (intermediary) exports

If the file is to be used in a compositing software for example, you may want to export without losing quality.

In any case, if your rendering an image with *AOV* (most likely from a 3D software), and you can accept a (very small) quality loss, *DWA* is the best option, as it will compress only the RGB channels (or Y, RY, BY in case of *Luminance/Chroma*) and use *RLE* for alpha and *ZIP* for any other channel.
In this case, be careful that *DWA* uses the channel names (case sensitive):

- Lossy channels: **R, G, B, Y, RY, BY**
- *RLE*: **A**
- *ZIP*: any other name (**Red, red, r, Green, green, g, Blue, blue, b, x, y, z, U, u, V, v**, etc…)

!!! warning
    Be careful with the names of the channel. For example using **XYZ** will result in the **Y** channel being lossy. You can use **xyz** instead.

When the images **don’t have grain**:

- If you don’t need full 32-bit float precision, ***PXR24*** is the best compression you can use.
- If you need full 32-bit float precision, ***ZIP*** is the best option.

When the images have **grain**, ***PIZ*** is always the best option.

For **stereo** images, the best is ZIP.

For **solid colors** such as alpha channels, it’s better to use ***RLE***.

## Special cases

There are more specific uses for OpenEXR:

- On systems for real-time playback, ***B44*** is preferred (or ***B44A*** for alpha channels and solid colors).
- If you need to render small-size lossy proxies, you can use ***DWAA*** with a high compression level.
- Gray-scale images will benefit a lot from the ***Luminance/Chroma*** option, without losing quality.

![META](authors:Nicolas "Duduf" Dufresne, Dino Muhić;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/07)
