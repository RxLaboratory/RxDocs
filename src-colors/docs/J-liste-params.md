# I.J - List of color space parameters

Here is the list of the various *primaries*, *white points* and *transfer curves* shared by the different color spaces, as well as their comparisons.

[TOC]

## J.1 - Primaries

![](img/comparison.png)

### RGB / sRGB / Rec. 709

| | R | G | B |
| --- | --- | --- | --- |
| **X** | 0,64 | 0,30 | 0,15 |
| **Y** | 0,33 | 0,60 | 0,06 |
| **Z** | 0,03 | 0,1 | 0,79 |

### Rec. 601

| | R | G | B |
| --- | --- | --- | --- |
| **X** (NTSC) | 0,63 | 0,31 | 0,155 |
| **Y** (NTSC) | 0,34 | 0,595 | 0,007 |
| **Z** (NTSC) | 0,03 | 0,095 | 0,775 |
| **X** (PAL) | 0,64 | 0,29 | 0,15 |
| **Y** (PAL) | 0,33 | 0,60 | 0,06 |
| **Z** (PAL) | 0,03 | 0,11 | 0,79 |

### Rec. 2020

| | R | G | B |
| --- | --- | --- | --- |
| **X** | 0,708 | 0,17 | 0,131 |
| **Y** | 0,292 | 0,797 | 0,046 |
| **Z** | 0,0 | 0,033 | 0,823 |

### P3

| | R | G | B |
| --- | --- | --- | --- |
| **X** | 0,68 | 0,265 | 0,15 |
| **Y** | 0,32 | 0,69 | 0,06 |
| **Z** | 0,00 | 0,045 | 0,79 |

### AP0 / ACES2065-1

| | R | G | B |
| --- | --- | --- | --- |
| **X** | 0,7347 | 0,0 | 0,001 |
| **Y** | 0,2653 | 1,0 | -0,77 |

### AP1 / ACEScg / ACEScc

| | R | G | B |
| --- | --- | --- | --- |
| **X** | 0,713 | 0,165 | 0,128 |
| **Y** | 0,293 | 1,830 | 0,044 |

### Adobe RGB

| | R | G | B |
| --- | --- | --- | --- |
| **X** | 0,64 | 0,21 | 0,15 |
| **Y** | 0,33 | 0,71 | 0,06 |

## J.2 - Whites

### D65 / RGB / sRGB / Rec. 601 / Rec. 709 / Display P3 / Adobe RGB

| | White |
| --- | --- |
| **x** | 0,3127 |
| **y** | 0,3290 |
| **CIE** | *D65* |

### DCI-P3

| | White |
| --- | --- |
| **x** | 0,3140 |
| **y** | 0,3510 |

### ACES / ACES2065-1 / ACEScg / ACEScc

| | White |
| --- | --- |
| **x** | 0,32168 |
| **y** | 0,33767 |
| **CIE** | proche de *D60* |

## J.3 - Transfer curves

### Linéaire / RGB / ACES2065-1 / ACEScg

Linear transfer

### sRGB / Display P3

Close on average to a *Gamma 2.2*, with in reality a linear transfer for linear luminances below *0.0031308* and then a shifted *Gamma 2.4*.

### 2.4 / Rec. 601 / Rec. 709 / Rec. 2020

*Gamma 2,4*

### 2.2 / Adobe RGB

*Gamma 563/256* i.e *2,199 218 75*.

### ACEScc

.

![META](authors:Nicolas "Duduf" Dufresne, Lionel "Viclio" Vicidomini for the translation;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/30)