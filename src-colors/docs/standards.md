# II.B - A few standards for files

Here is a list of some standards associated with common files.

Not all the technical possibilities for each type of file are listed here, only the most common (and standard) are indicated.

While these lists are not necessarily official standards, these correspondences are standardized by usage.

[TOC]

## Image formats (Jpeg, PNG, TGA, TIFF...)

- Space : ***sRGB***
- Pixel format : ***RGB***, ***Full Range***
- Depth :
    - *Jpeg* : ***8 bpc***
    - *PNG* : ***8 bpc***, ***16 bpc***
    - *TGA* : ***8 bpc***
    - *TIFF* : ***8 bpc***, ***16 bpc***[^1]

!!! hint
    It's possible to see *PNG HDR* which use the color space *Rec.2020*.

## OpenEXR

- Space: ***RGB linear***, but it is also the official format for ***ACES***, or ***Filmic*** from *Blender*. It is the only format that actually allows to store any existing color independently of the color space used to represent it, and therefore the preferred format to work with.
- Pixel format :
    - ***RGB***, ***Full Range***
    - ***YUV 4:4:4*** or equivalent to ***YUV 4:2:0*** with *Luma/Chroma* option, ***Full Range***
- Depth :
    - ***8 bpc***
    - ***16 bpc*** (integer or float)
    - ***32 bpc*** (integer or float)

!!! hint
    The beauty of the *EXR* is that it can store colors in a *floating* format instead of the usual *integer* format, so there is no need to use *integer* versions of the depth. It is because of this "float" format that the *EXR* can store any color data without loss: it also stores colors *outside* the workspace (whose values are greater than `1`).

!!! note
    It should actually be understood that the color space in an *EXR* file doesn't matter: the file stores raw data, which *isn't* "clamped" (values above `1`, the theoretical maximum of a color space, are possible); an *EXR* file can therefore store colors *outside* the *gamut[\*](ZZ-vocabulaire.md)* and of the *luminosity[\*](ZZ-vocabulaire.md)* of its color space.

## MP4 h.264 / h.265 / AVCHD / HEVC and other HD videos (2K) or UHD (4K)

- Space : ***Rec.709***, ***Rec.2020*** possible in *UHD* and more (*4K*).
- Pixel format : ***YUV 4:2:0*** ; although *4:2:2* and *4:4:4*, even *RGB*, are possible, they are not very standard and many players will not be able to read them. ***Limited Range***
- Depth :
    - ***8 bits*** in *Rec.709*
    - ***10 bits*** in *Rec.2020* *UHD/4K*
    - ***12 bits*** in *Rec.2020* *4K HDR*

## SWF (and others web formats)

- Space : ***sRGB***
- Pixel formats : ***RGB***, ***Full Range***
- Depth : ***8 bpc***

Be careful, *Adobe After Effects* (at least some versions), imports it in *Rec.709* instead of *sRGB*. It is then necessary to change the interpretation manually.

## QuickTime Animation / RLE

- Dpace: ***Rec.709***
- Pixel format : ***YUV 4:4:4***, ***Full Range***
- Depth : ***8 bpc***

----
Sources & References

[^1]:
    The *TIFF* allows many different color spaces, including *CMYK* and *CIE Lab* for example, and also the *YUV* format in a less standard way.

![META](authors:Nicolas "Duduf" Dufresne, Lionel "Viclio" Vicidomini for the translation;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/30)