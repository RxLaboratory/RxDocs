# Details

The descriptions are taken from the official technical introduction from https://www.openexr.com

[TOC]

## PIZ

**Lossless**

A wavelet transform is applied to the pixel data, and the result is Huffman-encoded. This scheme tends to provide the best compression ratio for the types of images that are typically processed at Industrial Light & Magic. Files are compressed and decompressed at roughly the same speed. For photographic images with film grain, the files are reduced to between 35 and 55 percent of their uncompressed size. PIZ compression works well for scan-line based files, and also for tiled files with large tiles, but small tiles do not shrink much. (PIZ-compressed data start with a relatively long header; if the input to the compressor is short, adding the header tends to offset any size reduction of the input.)
PIZ compression is only supported for flat images.

- Ratio*: 35~55% (photo with grain)
- Write speed = read speed
- Best for grainy images

Good for**:

- Photo/Video (with grain)
- 3D Animation (with grain)

## ZIP

**Lossless**

Differences between horizontally adjacent pixels are compressed using the open-source zlib library. ZIP decompression is faster than PIZ decompression, but ZIP compression is significantly slower. Photographic images tend to shrink to between 45 and 55 percent of their uncompressed size. Multi-resolution files are often used as texture maps for 3D renderers. For this application, fast read accesses are usually more important than fast writes, or maximum compression. For texture maps, ZIP is probably the best compression method. In scan-line based files,16 rows of pixels are accumulated and compressed together as a single block.

- Ratio*: 45~55% (photo without grain)
- Faster reading, significantly slower writing
- Same as PNG
- Supported for stereo images

Good for** (Only when 32bpc float is needed – otherwise, PXR24 is better):

- Texture maps
- Photo/Video (without grain)
- 3D Animation (without grain)
- 2D Animation, Graphics

## ZIPS

**Lossless**

Uses the open-source zlib library for compression. Like ZIP compression, but operates on one scan line at a time.

- Same as PNG
- Supported for stereo images

## RLE

**Lossless**

Differences between horizontally adjacent pixels are run-length encoded. This method is fast, and works well for images with large flat areas, but for photographic images, the compressed file size is usually between 60 and 75 percent of the uncompressed size.

- Ratio*: 60~75% (photo)
- Fast
- Same as TGA
- Better with large flat areas (alpha and id channels)
- Supported for stereo images

Good for**:

- Solid colors, large flat areas (alpha and id channels)

## PXR24

**Lossless**  
(16bit float, 16/32-bit int)

**Slightly Lossy** (3x10E-5)  
(32-bit float)

After reducing 32-bit floating-point data to 24 bits by rounding(while leaving 16-bit floating-point data unchanged), differences between horizontally adjacent pixels are compressed with zlib, similar to ZIP. PXR24 compression preserves image channels of type HALF and UINT exactly, but the relative error of FLOAT data increases to about 3x10E-5. This compression method works well for depth buffers and similar images, where the possible range of values is very large, but where full 32-bit floating-point accuracy is not necessary. Rounding improves compression significantly by eliminating thepixels’ 8 least significant bits, which tend to be very noisy, and therefore difficult to compress. PXR24 compression is only supported for flat images.

- Ratio*: Better than ZIP for 32bpc, same as ZIP otherwise
- Faster reading, significantly slower writing
- Turns 32-bit float to 24-bit

Good for** (Only for 16bpc float or 16/32bpc int, or when 24bpc float is sufficient instead of 32bpc):

- Photo/Video (without grain)
- 3D Animation (without grain)
- 2D Animation, Graphics
- Texture maps

## B44

**Lossy**

Channels of type HALF are split into blocks of four by four pixels or 32 bytes. Each block is then packed into 14 bytes, reducing the data to 44 percent of their uncompressed size. When B44 compression is applied to RGB images in combination with luminance/chroma encoding (see below), the size of the compressed pixels is about 22 percent of the size of the original RGB data. Channels of type UINT or FLOAT are not compressed. Decoding is fast enough to allow real-time playback of B44-compressed OpenEXR image sequences on commodity hardware. The size of a B44-compressed file depends on the number of pixels in the image, but not on the data in the pixels. All images with the same resolution and the same set of channels have the same size. This can be advantageous for systems that support real-time playback of image sequences; the predictable file size makes it easier to allocate space on storage media efficiently. B44 compression is only supported for flat images.

- Ratio*: 44%
- Fixed file size
- Very fast read speed

Good for**:

- Systems needing real-time playback

## B44A

**Lossy**

Like B44, except for blocks of four by four pixels where all pixels have the same value, which are packed into 3 instead of 14 bytes. For images with large uniform areas, B44A produces smaller files than B44 compression.B44A compression is only supported for flat images.

- Ratio*: < 44%
- Very fast read speed
- Better with large flat areas (alpha and id channels)

Good for**:

- Systems needing real-time playback

## DWAA

**Lossy**

JPEG-like lossy compression format contributed by DreamWorks Animation. Compresses 32 scanlines together.  
From the source code:  
First, we try and figure out what compression strategy to take based in channel name. For RGB channels, we want a lossy method
described below. But, if we have alpha, we should do something different (and probably using RLE). If we have depth, or velocity, or something else, just fall back to ZIP.

- Ratio*: varying depending on chosen compression level
- Same as JPEG

Good for**:

- Proxies
- Final exports when a small compression is acceptable
- 3D Rendering with AOV (with a small compression level)

## DWAB

**Lossy**

Same as DWAA, but compresses blocks of 256 scanlines.

- Ratio*: varying depending on chosen compression level

Good for**:

- Proxies
- Final exports when a small compression is acceptable

_\* Compressed / uncompressed. A lower ratio is better. For example, 45% means the compressed file size is 45% of the uncompressed size._

_** A file is good for a given use when its read or write speeds best fits how it is going to be used, and has the best compression ratio available._

![META](authors:Nicolas "Duduf" Dufresne, Dino Muhić, OpenEXR Contributors;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/07)
