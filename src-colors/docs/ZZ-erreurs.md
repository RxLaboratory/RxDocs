# Common mistakes and misunderstandings, problem solving

## Common mistakes

### The workspace must be the same as the file to be delivered.

This is not true: when working and calculating colors, it is necessary to work in a space "larger" than the delivery; indeed, the precision during calculations must be greater than that of the data to obtain. To be able to work in a larger space, as well in *gamut[\*](ZZ-vocabulaire.md)* as in *depth[\*](ZZ-vocabulaire.md)* guarantees a better respect of the colors at the time of export.

If the workspace is not larger than the output workspace, flaws may appear, such as *banding*, the appearance of visible bands in fine gradients.

If the workspace is linear, its depth must also be greater than that of the output workspace, and this is in any case recommended even for a non-linear workspace. Thus, for an *8 bpc* output, it is preferable to work at least in *16 bpc*, or in *32 bpc* for an *8 bpc* output.

It is equally false to believe that working in a larger space will make us select and use colors "outside" the output format. *Cf*. next question.

### Working in a color space larger than the output color space is dangerous because we might choose colors that cannot be reproduced.

This is not true: even if the workspace is very large (such as *ACEScg* for example), the colors displayed by the screen are the result of a "live" conversion to the screen space, which is necessarily smaller (*sRGB* in most cases). It's impossible to have variation at the time of the export, which will undergo exactly the same transformation.

It should be noted that the majority of the screens (except *HDR* and other screens in *P3*) cannot display the colors used in *HDR* and *cinema*; the problem is thus rather opposite: how to work on colors apart from the display space of the screen...

However, what is true is that one must be careful in the selection of colors in the rendering engines (3D): the colors chosen on the screen are colors displayed in *sRGB*, and it's easy to select colors that are too intense or too saturated without realizing it, because they are actually outside the *sRGB* space in values. One way to overcome this problem is to make sure that the color pickers of the application are limited to *sRGB* for example (the application taking care of the conversion from *sRGB* to the workspace); in this case, the selection of an intense green for example will still be far from the extremes of the larger workspace, and the color will not risk to brighten and saturate the scene too much.

### You must choose a *Rec.709* display space because the video output will be *Rec.709*.

The display color space must be that of the connected screen (*sRGB* in most cases in computing).

This display area is used for conversion from the workspace to the screen display.

When the video file is output, a conversion is made from the workspace to the video space, *Rec.709* in this example. And it is when the video is played that a new conversion takes place again from the *Rec.709* to the probable *sRGB* of the screen.

!!! note
    However, some applications, especially compositing applications, allow *simulation* (*soft-proofing* or *proofing[*](ZZ-vocabulaire.md)*) of the conversions that the images undergo once exported; in this case, several conversions take place between the workspace and the display:  
    • conversion from the workspace to the (simulated) export space (*Rec.709* in the example)  
    • conversion from export to screen display (*sRGB* in the example)  
    But in no case is there a conversion to a *Rec.709* display to be made. The activation/deactivation of this simulation should not, in theory, change the display of the image; the changes are only due to the loss of precision of the successive conversions that are simulated.

## Problem solving

### When playing a video, the colors are not the same as in the software that was used to create it.

Here are the parameters to check:

1. Display problem in the software: the display color space in the software must match that of the screen (*sRGB* most often).
2. Problem of output : the color space of output of the video is not standard ; check the space used in output of the application.
3. Playback problem : the video playback is badly configured on the graphics card (see below *When a video is played on the computer (...) the colors appear "dull".*)

If a (very slight) variation persists, it may be due to the conversion from *RGB* to *YUV*, or the compression of the video format in particular. In this case, there is nothing to do...

### "Banding" : colored "bands" appear in the fine gradations

Most often, this problem comes from the fact that the application workspace is too small and the *depth[\*](ZZ-vocabulaire.md)* is too small compared to the output format.

Here is what to check and what can correct the problem:

- The *depth* in the application should be higher than the output (*16 bpc* minimum to output in *8 bpc*, etc.), especially if the workspace is linear.
- If it's not possible to increase the *depth* of the workspace, when possible a space with the same *gamma[\*](ZZ-vocabulaire.md)* as the output one can help reduce the problem.
- Choose a workspace at *gamut[\*](ZZ-vocabulaire.md)* that is larger than the output one.
- If the gradient is part of an imported file, check the above points in the application that created the file.
- Banding problems may occur due to compression; check if they are still visible in lossless formats (*openEXR*, *PNG*, *Quicktime Animation*, etc.)
- Adding a very slight, imperceptible noise or grain to the image often "fixes" this problem.

### A fringe, a line that appears blurred, appears in colored or high contrast areas, especially on vertical or horizontal lines

This problem is usually a consequence of [chrominance subsampling](K-pix-format.md), when switching from *RGB* to *YUV*. If possible, increase the subsampling (*4:4:4* or *4:2:2* instead of *4:2:0* for example). If this is not possible, and the image is a still image, it is sometimes possible to move the image a pixel or two in the video to correct the problem.

### When you play a video on your computer, in most players and on videos on websites, the colors look "dull". Whites are light gray, blacks are dark gray.

There is probably a conversion error from *[Full](K-pix-format.md)* to *[Limited](K-pix-format.md)* or vice versa.

In the parameters of the graphics card, a "video" option often allows to change this setting; you have to choose *Full* if it is a computer screen that is connected, or *Limited* if it is a TV.

----
Sources and references

![META](authors:Nicolas "Duduf" Dufresne, Lionel "Viclio" Vicidomini (translation);license:CC-BY-NC-SA;copyright:2021;updated:2021/05/30)