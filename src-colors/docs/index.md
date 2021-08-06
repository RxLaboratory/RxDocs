# A Practical Guide to Color Management in Audiovisual Production

## About us

This guide is part of a collection of documents managed by [*RxLaboratory*](http://rainboxlab.org) : [***RxDocs***](http://docs.rainboxlab.org).  

[*RxLaboratory*](http://rainboxlab.org) is an organization whose mission is to develop, distribute and promote free software and innovation in audiovisual production, as well as to facilitate mutual aid, sharing and cooperation between all actors in this field.

[*RxDocs*](http://docs.rainboxlab.org) is a collaborative work of scientific, technical and artistic popularization in the field of audiovisual production in the broad sense: image, video, animation, sound ... These documents are intended for anyone working in the field (phography, video, motion design, directing, animation, illustration, cinematography, editing ...)

!!! note
    All names followed by an asterisk* are explained in the [Glossary](ZZ-vocabulaire.md)

## Introduction

The methods and tools of color management in (digital) image processing often seem complicated and are sometimes misunderstood by people working in audiovisual production.

The software are full of different parameters, and which seem to be very different from one to another.

As a result, color management is not always mastered; very often the user lose control over colors and can’t achieve the desired look.

This field, certainly very technical, is however not as complicated as it seems, and this document aims to explain and vulgarize the problems related to color management in image treatment, and is intended for any person dealing with this problem in the production of digital images1. The goal is not to make theory but to arrive quickly at the concrete application of the explanations, and we will limit the historical and theoretical explanations to the bare minimum.


!!! note
    Practically, the colorimetric spaces are intrinsically related to the data encoding formats, and we will also speak partly about these various formats.

The first part will be theoretical, starting from light and color, and studying how we perceive it, then how to record it, represent it and reproduce it in a digital system.

Then we will approach the practical aspect, explaining in concrete cases what are the useful and recommended parameters in your productions of all types, and in different applications.



!!! tip
    This document is constantly evolving! If you find any errors, or wish to make improvements, [contribute](http://docs.rxlab.guide/contribute.html) or [report it to us](https://rainboxlab.org/about/contact/) !

### I - Theory

- A - [What is color?](A-definition.md)
    - A.1 - Physical color: visible light
    - A.2 - Following light : from emission to reception
        - A.2.a - Emission, transmission, reflection, reception
        - A.2.b - Breakdown of the received light
- B - [Small inventory and classification of colors](B-inventaire.md)
    - note : short intro on human perception
    - B.1 - Black
    - B.2 - Monochromatic lights
    - B.3 - Purple
    - B.4 - Grey and white
        - B.4.a - Complementary colors
        - B.4.b - Perception
- C - [Perception of light and colors by the human eye](C-perception.md)
    - B.1 - The eye
    - B.2 - The nervous system
    - B.3 - Implications
        - B.3.a - On brightness and contrast
        - B.3.b - On shading
- D - [Color reproduction](D-reproduction.md)
    - D.1 - Additive synthesis
    - D.2 - Subtractive synthesis
- E - [About white values : temperature](E-temperature.md)
    - E.1 - Black body
    - E.2 - Planckian locus
    - E.3 - White balance
- F - [Objective representation of colors](F-representation.md)
    - F.1 - Decomposing  colors
    - F.2 - Color Charts, *CIE XYZ* of 1931 and *CIE xyZ*
    - F.3 - Other *CIE* spaces
- G - [From real life to digital](G-numerisation.md)
    - G.1 - Digitization and storage: converting to binary
    - G.2 - The Color Spaces
- H - [What is a color space?](H-espace-colo.md)
    - H.1 - What defines a color space
        - H.1.a - Primaries and gamut
        - H.1.b - White point
        - H.1.c - Transfer curve
    - H.2 - Other parameters
        - H.2.a - Pixel format
        - H.2.b - Depth
    - H.3 - Why different color spaces?
- I - [List of color spaces](I-liste-espaces.md)
- J - [List of color space parameters](J-liste-params.md)
- K - [Pixel format](K-pix-format.md)
    - K.1 - RGB and YUV
        - K.1.a - RGB
        - K.1.b - YUV
        - K.1.c - Comparison
        - K.1.d - Others
    - K.2 - YUV 4:4:4, 4:2:2, 4:2:0... Chrominance downsampling.
        - K.2.a - 4:4:4
        - K.2.b - 4:2:2
        - K.2.c - 4:2:0
    - K.3 - Color depth (bits, bpc and bpp)
        - K.3.a - RGB
        - K.3.b - YUV
        - K.3.c - Others
    - K.4 - Full range / Limited / TV / PC ?
        - K.4.a - Full range / PC
        - K.4.b - Limited range / TV
        - K.4.c - Practical implications
            - K.4.c.a - Encoding
            - K.4.c.b - Playback and display
- L - [Transfer curves, linear space and gamma](L-transfert.md)
- M - [Les LUTs](M-LUT.md)
    - M.1 - Description
    - M.2 - Use
- N - [OpenColorIO and ACES](N-ocio.md)
    - N.1 - Compatible applications
    - N.2 - ACES
        - N.2.a - ACES color space
            - N.2.a.a - ACES2065-1
            - N.2.a.b - ACEScg
            - N.2.a.c - ACEScc

### II - Application

!!! hint
    The list of applications is arranged in alphabetical order, with the publisher's name at the top.

- A - [Practical application: choosing color spaces and formats](pratique.md)
    - A.1 - Theory
        - A.1.a - Journey of a color
    - A.2 - Workspace (scene referred)
    - A.3 - Input
    - A.4 - Display
        - A.4.a - Screen space
        - A.4.b - Settings and color profiles
        - A.4.c - In the application
    - A.5 - Color pickers
    - A.6 - Intermediate output
    - A.7 - Final output
- B - [A few standards](standards.md)
- C - [Screen calibration](calibration.md)
    - C.1 - Introduction
    - C.2 - Environment
    - C.3 - Calibration
        - C.3.a - Choosing the color space of the screen and the calibration
        - C.3.b - White point and brightness
        - C.3.c - Calibration and application of the color profile
            - C.3.c.1 - Calibration
            - C.3.c.2 - Colorimetric profile
- D - [Soft-proofing and simulation](epreuvage.md)
- E - [Setting up the production pipeline](preparer.md)
    - E.1 - 3D Animation with Blender, Filmic
        - E.1.a - Textures et autres images 2D
        - E.1.b - 3D rendering
        - E.1.c - Compositing
            - E.1.c.a - Filmic and After Effects
        - E.1.d - Exports
    - E.2 - 3D Animation with ACES
        - E.2.a - Textures and other 2D images
        - E.2.b - 3D rendering
        - E.2.c - Compositing
        - E.2.d - Exports
    - E.3 - 2D Animation
    - E.4 - Videos, live action and VFX
- F - [Setting up the production pipeline with *OpenColorIO*](ocio.md)
    - F.1 - Setting up
    - F.2 - Analysis of an OCIO configuration
        - F.2.a - Metadata
        - F.2.b - Roles
        - F.2.c - Displays
- G - [Color management : Adobe After Effects](ae.md)
    - G.1 - Project Settings - Workspace
    - G.2 - Interprétation des métrages - Espaces d'Input
    - G.3 - View Options - Display Space and Simulations
    - G.4 - Export Options - Output Spaces
    - G.5 - *OCIO*
        - G.5.a - Introduction
        - G.5.b - Installing *OCIO* plugin
        - G.5.c - Disabling color management in After Effects
        - G.5.d - Managing
        - G.5.e - Input and workspace
        - G.5.f - Output
        - G.5.g - Display
- H - [Color management : Adobe Premiere and Media Encoder](premiere.md)
    - H.1 - Output space
    - H.2 - Applying a LUT
    - H.3 - Workspace and display
- I - Color management : Adobe Photoshop
- J - [Color management : Autodesk Maya](maya.md)
- K - [Color management : Blender](blender.md)
    - K.1 - Default configuration : *Filmic*
        - K.1.a - Render (scene referred) and display
        - K.1.b - Output
        - K.1.c - Input (textures)
    - K.2 - Chaîne de fabrication OCIO
        - K.2.a - Changer la configuration OCIO
    - K.3 - Utiliser *ACES*
        - K.3.a - Rendu (scene referred) et affichage
        - K.3.b - Input (textures)
- L - [Color management : Darktable](darktable.md)
    - L.1 - Input and Workspace
    - L.2 - Output
    - L.3 - Soft-Proofing
- M - [Color management : DuME](dume.md)
    - M.1 - Workspace
    - M.2 - Input
    - M.3 - Output
    - M.4 - Presets
    - M.5 - LUT
    - M.6 - OCIO
- N - [Color management : Krita](krita.md)
    - N.1 - Workspace
    - N.2 - Display
        - N.2.a - Screen
        - N.2.b - Soft-proofing
    - N.3 - Color pickers
    - N.4 - Output
    - N.5 - *OCIO* with Krita

### III - Appendixes

- [In a Nutshell: a quick summary of how to get it right](ZZ-bref.md)
- [Common Errors and Misunderstandings, Problem Solving](ZZ-errors.md)
- [Glossary](ZZ-vocabulaire.md)
- [French-English Dictionary](ZZ-english.md)
- [Downloads and Other Resources](ZZ-download.md)

[^1]:
    For the sake of simplicity, we will allow ourselves certain shortcuts and approximations, the aim being the concrete application and acquisition of know-how, and not the scientific study of the subject.  
    We will also limit the explanation to the elements necessary for the concrete application and understanding of the parameters; we will avoid information of purely historical interest, with the intention of keeping this guide clear and as concrete as possible.  
    We invite the reader to start by reading the [*Wikipedia*] articles (https://fr.wikipedia.org/wiki/Couleur) to learn more about the subject and to complete the theoretical information missing from this guide; there is no lack of resources on the subject.  
    On each page, we regularly add and complete the sources and references to deepen what is explained.

![META](authors:Nicolas "Duduf" Dufresne, Lionel "Viclio" Vicidomini for the translation;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/30)
