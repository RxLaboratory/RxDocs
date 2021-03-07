# Luminance/Chroma images

Encoding flat images with one luminance and two chroma channels, rather than as RGB data, allows a simple but effective form of lossy data compression that is independent of the compression methods listed here. The chroma channels can be stored at lower resolution than the luminance channel. This leads to significantly smallerfiles, with only a small reduction in image quality.

This is the same method as what is called *YUV 422* for video.  
That means you can use this option if you’re exporting to or from a standard *YUV 422* or *420* video without losing quality.

If you’re exporting to or from *YUV 444* or *RGB*, the reduction in quality is still very small.

As luminance is stored in full quality using the *Luminance/Chroma* option, it can store gray-scale image much better than standard *RGB* without losing any data.

Note : this option is not supported by ffmpeg (yet).

![META](authors:Nicolas "Duduf" Dufresne, Dino Muhić;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/07)
