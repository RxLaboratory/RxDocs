![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/07/11)

# II.D - Soft-Proofing and simulation

The *proofing*, or *simulation* or *soft-proofing*, consists in simulating the various conversions of colorimetric spaces which can intervene on the image before reaching the final user, in order to check the final conformity of the colors without having to export, print, calculate the project to test, but directly on the screen.

Indeed, if the display space of the screen can not change and must be the one provided by the manufacturer (*sRGB* in most cases), the project delivered will not necessarily be in this space.

Let's take the example of a project delivered in standard HD video which will finally be exported in *Rec. 709* space, the work on the image being done in *RGB linear* space. In this case, when working on the image, the display is done after a conversion from *RGB Linear* (working space) to *sRGB* (screen space).

`Work: RGB Linear → Screen: sRGB`

It can be useful in this case to introduce an intermediate conversion in *Rec. 709*, space of the final output file, to control the result. In this case, a second conversion intervenes then to return to space *sRGB* of the screen This conversion would also take place when reading the exported file, in the same way, soft-proofing thus makes it possible to test the colors in real conditions of viewing.

`Work: Linear RGB → Output simulation: Rec.709 → Display: sRGB`

In the same way, it's possible to use this technique to preview and *simulate* the transformations which the colors will undergo at the time of much more radical changes of spaces of colors, for example when printing, and thus of transition towards a *subtractive* space like the *CMYK*; in this case, when dealing with a simulation, the space of exit is not able to be reproduced exactly by the *sRGB* of the screen.

`Work: Linear RGB → Output simulation: CMYK → Display: sRGB`