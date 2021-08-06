# In a Nutshell: a quick summary of how to get it right

Here's the to-do list for perfect color management without trials and errors!

## File formats

### Intermediate, render, master and backup exports

Use ***openEXR*** for all non-final exports!

- It is a lossless format
- It can store any color information from any color space
- It offers very efficient compression formats (including some lossy ones to further reduce size)

Color depth in *EXR* :

- Choose ***16 bpc (float)*** if the following pipeline steps use the same *gamma[\*](ZZ-vocabulaire.md)* (linear or non-linear).
- Choose *32 bpc* in other cases.

The other depth options are only useful in case of resource constraints...

Compression of the *EXR* :

[Read our guide on *EXR* compressions here!](http://docs.rainboxlab.org/)

### Final export and delivery

Refer to the [standard spaces](standards.md) according to the delivered format (if the customer does not specify a color space).

## Importing into applications

It is always important to know in which space the imported file was made/exported. If you follow these recommendations, the file is always an *openEXR* file, and most often interpreted by applications as *RGB Linear* by default.

It may be useful to note the color space used directly in the file name.

Refer to the [standard spaces](standards.md) for other formats if you do not know their color spaces.

## Display

In the vast majority of cases, we display in ***sRGB*** without any other simulation or conversion. Only in the case where a screen uses another display space can another parameter be chosen.

## Workspaces

The spaces provided by *ACES* are extremely practical, and easy to set up using *OCIO*. If *OCIO* is not available on the application, the *ACES* workspaces may still be available natively; as a last resort another wide workspace specific to the application should be chosen.

### Drawing, textures, ...

- Either the space of the 3D renderer or the compositing and animation software if possible.
- Otherwise, *RGB Linear* or another space with a *gamut[\*](ZZ-vocabulaire.md)* very wide and linear.

Exports in ***openEXR*** ***16 bpc***. When importing into other applications, be sure to specify the space used when making the image.

### 3D rendering

- On *Blender* : ***Filmic*** or ***ACEScg*** via an *OCIO* configuration
- In general: ***ACEScg***

Or any other space with *gamut[\*](ZZ-vocabulaire.md)* very wide and linear.

Exports to ***openEXR*** ***16 bpc*** if compositing is done in a linear space.

### Compositing

In 3D, we try as much as possible to use the color space of the 3D render.

In 2D, we prefer a *gamut[\*](ZZ-vocabulaire.md)* wide and linear space, ***ACEScg*** works very well. If not possible, you can stay in *RGB Linear*.

Exports in ***openEXR*** ***16 bpc*** if compositing is not followed by a color correction step in a non-linear space, ***32 bpc*** in other cases.

### Colorimetric correction

We can follow the same reasoning as for compositing, although it may be more convenient to work in a non-linear space. In this case ***ACEScc*** is perfect.

Exports to ***openEXR*** ***16 bpc*** for archiving, and to [standard space](standards.md) file for delivery.

![META](authors:Nicolas "Duduf" Dufresne, Lionel "Viclio" Vicidomini (translation);license:CC-BY-NC-SA;copyright:2021;updated:2021/05/23)