![META](authors:Nicolas "Duduf" Dufresne;medias:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/07/11)

# Glossary

Alphabetical listing.

- ***ACES*** : *Academy Color Encoding System* is a standard of exchange, of color management for digital imaging. It aims to simplify color management by maintaining color fidelity throughout the production pipeline. The standard is free and open source and many companies contribute to its development. It uses in particular the *OCIO*\* software library.

- ***Alpha*** : a fourth *channel** is sometimes added to the pixels of a video to store transparency information in addition to color. The *RGBA* and *YUVA* channels are usually noted in this case, and in the case of *YUVA* a fourth value is sometimes added to the *[chroma subsampling](K-pix-format.md)* acronym: *4:4:4:4*, *4:2:2:4*, etc.

- ***Bit*** : The basic unit of both binary computer calculation and storage. A *bit* is either 0 or 1. 8 bits make up a *byte*, a sequence of eight 0s or 1s. Not to be confused with the *Byte*. Noted `b` (whereas *Byte* is noted `B` and byte is noted `o`).

- ***Byte*** : smallest unit of usable memory on a given system (pronounced /baɪt/); usually made up of 8 *bits* and (only in this case but not necessarily) equivalent to one *byte*

- ***Candela*** : Unit of the international system representing a luminous intensity, i.e. a quantity of light emitted by a light source in a given direction (whereas the *lumen\** represents this quantity of light in total, in all directions). Symbol : `cd`. *Cf*. *Intensity*.

- ***CIE*** : *La Commission internationale de l'éclairage* is an international organization dedicated to light, lighting, color and color spaces. It was founded in Berlin in 1913 and is currently based in Vienna, Austria.  Note: the French acronym *CIE* is the one used internationally although in English it is the *International Commission on Illumination*.

- ***Codec*** : abbreviation for encoder-decoder. *Software* used to encode and decode a video or audio stream into a certain *standard\**. By the way, the codec is often confused with the *standard* or *format*, but it is indeed *software* and not a *format*. For example, *x264* or *nvenc* are codecs allowing to encode a video in the *standard* *h.264* (in *format* *mp4* for example).

- (Colors) ***complementary*** : set of colors that, when mixed, cancel the perception of color, producing a neutral gray. Two complementary colors are diametrically opposed on the color wheel. In the chromaticity diagram *CIE XYZ*, the points that represent them are aligned on either side of the white point. 

- ***Container*** : synonym for *file type*. Defines how multimedia streams (audio, video, subtitles, metadata...) should be saved together in a specific file. For example: *Quicktime* (*\*.mov*), *MP4* (*\*.mp4*), *Matroska* (*\*.mkv*) are containers (but *h.264* is a *standard**, and *x264* is a *codec\**). Some containers are specialized and impose a certain *standard* (e.g., a *MP4* should always use the *h.264* or *h.265* *standard*), while others allow a large number of different standards (e.g., *Quicktime* allows *PNG*, *Prores*, *RLE/Animation*, *MJPEG*, etc.).

- ***Contrast*** : difference in value between the most intense and the least intense point in an image.

- ***Channel*** (color) : AIn a pixel, the color is described by several values; each value is a *channel* of the pixel (or image). In *RGB* the three channels are red, green, and blue, in *YUV*, the *luminance* and two channels of *chrominance*.

- ***Transfer curve*** : mathematical function used to convert the intensities of a given color space to a linear scale (and vice versa). It is also called *gamma* even if the name *gamma* should rather be limited to only those functions that consist of a mathematical function of *power*, while transfer functions can take more varied and complex forms; they can however all have a relatively accurate approximation in a simple *gamma*. see also *gamma* and the chapter entitled [*Transfer curves, linear space and gamma*](L-transfer.md).

- ***Proofing*** or Softproofing: *Simulation* of color conversion in a specific space which will be that of the final export (followed by a conversion towards the space of the screen for a correct display). This technique makes it possible to check that the successive conversions of the colors do not degrade the image too much and that the new colors are close to what one seeks, by checking what will see the final spectator. It is important to note that softproofing can remain far from reality if the space of exit is larger than that of the screen or too different (for example *CMJN* on a screen *sRGB* or *Rec.2020* on a screen *sRGB*); it makes it possible however to preview what a user will see on a similar screen.

- ***Format*** : synonym for *file type*. See *container*. Not to be confused with *standard* and *codec*.

- ***Frequency*** : in the *ondulatory* representation of the light (and of all the range of electromagnetic waves), the frequency, measured in *Hertz* (*Hz*) is the number of undulations per second; it is the inverse of the wavelength\* (`F = 1 / λ` with *F* for the frequency and *λ* for the wavelength): when the frequency increases, the wavelength decreases. In the visible part of the electromagnetic waves (the light), towards *10<sup>15</sup>Hz* (*1000 TeraHertz*), each frequency corresponds to a precise color, a *monochromatic* light. 

- ***Gamma*** : Mathematical function used as a transfer curve and for colorimetric retouching, consisting of a power; the gamma value is that of the power (or the inverse of the power for inverse retouching): <code>x<sup>1/2.4</sup></code> for a *gamma* 2.4, for example. see also *transfer curve* and the chapter titled [*Transfer Curves, Linear Space, and Gamma*](L-transfer.md).

- ***Gamut*** : extent of colors that can be represented by a color space, represented by a subsurface in the chromaticity diagram *CIE XYZ*, in triangle when the space uses three primary. The area then represents the *gamut*; we also speak of the "width" of the *gamut*: the more colors the space contains, the more its *gamut* is "wide".

- (Colors) ***Homochromes*** : cf. *Metamers*

- ***Illuminant*** : coordinates (in the *CIE XYZ*) of the point representing conventionally the white in a given color space. It can also be referred to by a standardized name, such as *D65* or *D60*, or by a blackbody temperature, in Kelvin, 6500 K for example. See also *White Temperature*.

- ***Intensity*** : quantity of light received by a surface (reflecting or a sensor) or emitted by a light source, measured in number of photons received by a given surface in a given time (for example in photons per second per square centimeter). In the case of a light emitter (candle, lamp, screen), we speak in terms of a cone (a solid angle) of emission and not a receiving surface and the unit is the *candela*\* noted `cd`[^1].

- ***Linear*** : graphic representation of a *proportional* function, a mathematical function known as *affine*, represented by a straight line. The term *linear* is used to speak about color spaces whose correspondences of values with the physical intensity are proportional and thus represented by a straight line on a graph.
  
- ***Wavelength*** : in the *ondulatory* representation of the light (and of all the range of electromagnetic waves), the wavelength, measured in *nanometers* (*nm*) is the "size" of the undulations ; it is the reverse of the frequency\* (`λ = 1 / F` with *F* for the frequency and *λ* for the wavelength) : when the frequency increases, the wavelength decreases. In the visible part of the electromagnetic waves (the light thus), in *400nm* and *700nm* approximately, each wavelength corresponds to a precise color, a *monochromatic\* light.

- ***Luminance*** : representation of the physical intensity of light (or color) corresponding to a color on a linear scale. Different from *luminosity* or *luma*.

- ***Luminosity*** or ***Luma*** : representation of the intensity of the light (or the color), but on a scale adapted to the human perception, using a *gamma* (cf *Transfer curve*), contrary to the *luminance*.

- ***LUT*** : from *Lookup Table*. A *LUT* allows in computer science (especially in its early days) to replace complex mathematical functions (and especially time-consuming to realize) by tables of values; instead of *calculating* correspondences and conversions, one finds the value in the table. They are still used a lot in colorimetry: they allow to convert colors between different color spaces without worrying about the corresponding mathematical formula (and are thus an easy way to make a conversion between spaces in a software which does not manage them natively). They can cause a (small) loss of information if they are not precise enough (do not contain enough values). They are also used as calibration or colorimetry *presets* and can allow to easily replicate an effect, even in a software that would not allow it with its native color tools (as long as it can apply a *LUT* anyway). See the section entitled [*The LUTs*](M-LUT.md) for more details.
  
- (Colors) **_Metamers_** : two (or more) colors are said *metamers* when they are of identical appearance (the eye and the brain do not make the difference) although they are composed in reality of a different mixture of *monochromatic rays*\*.

- ***Lumen*** : Unit of the international system representing luminous flux, symbol: `lm`. Measured by the total amount of light emitted by a light source in a given time.

- (Light) ***Monochromatic*** : *pure* light, composed of rays of a single precise *frequency*, without mixing *frequencies\**, like the light generated by a *laser*. The color of such a light is part of the spectrum of visible electro-magnetic waves, of the rainbow, going from blue to pure red (passing by cyan, green, yellow, orange...).

- ***Lux*** : Unit of the international system representing *illumination* (the amount of light received by a surface, which can be described as surface brightness), symbol: `lx`. `1 lux = 1 lm/m²`, 1 lux is equivalent to one *lumen\** per square meter. For example, a typical office lighting environment is between *300 and 500 lux*, a cloudless sunset or sunrise around *400 lux*, an overcast day at 1000 lux, a sunny day between *10,000 and 25,000 lux*, with areas in full sunlight ranging from *32,000 to 100,000 lux*.

- ***Black*** : The *black* is the color resulting from the absence of light. It is thus the color of weakest luminosity (null) and its *saturation\** cannot be defined.

- ***Standard*** (video and audio) : defines the *way* in which the audio and video data are encoded, the standard used, and therefore with which *codec* these data can be decoded.

- ***OCIO*** : *OpenColorIO* is a software library (a "brick"/developer tool usable in other software/applications) dedicated to color management. It is free and open source, and has become standard with its inclusion and use in a large number of applications (natively on *Maya, Arnold, Krita, Blender, Nuke*... ; via plugins and add-ons on *After Effects*... ; via LUTs\*/Colorimetric profiles on *Photoshop* and others). This inclusion in different applications allows to share a single configuration of color management throughout the production pipeline and ensure identical color reproduction at all stages.

- ***Byte*** : 8 *bits*. Noté `B`.

- ***OpenColorIO*** : *cf*. *OCIO*

- ***OIIO*** : *OpenImageIO* mainly defines the standard for the *openEXR* image data storage format, and is a free and open source software library to handle this open format (and others), chosen as the default format by *ACES\*; it is interdependent with *OCIO\*.

- ***OpenEXR*** : Open and extremely versatile file format dedicated to images, and used in most production pipelines. *Cf*. *OIIO*.

- ***OpenImageIO*** : *cf*. *OIIO*

- ***Photon*** : Although the word dates from 1926, it was in 1905 that Albert Einstein theorized the *photon* as the *quantum* of light: the smallest indivisible quantity of light (of all electromagnetic waves in reality). The *photon* can be seen as the *particular* counterpart of the *radius* of light which would be the *ondulatory* counterpart. It is in reality *both* particle and wave. The intensity of light (and thus of colors as we perceive them) can be expressed in number of *photons* received by a given surface in a given time (thus for example in *photons* per square centimeter per second `γ/cm²/s`). We also measure the threshold of triggering (the lower level) and saturation (the upper level) of photo-sensitive sensors (such as retinal cells) in *photons* per second.

- ***White Point*** : *cf*. *Illuminant*

- ***Purple*** : The *purples* are the colors resulting from the mixture (only) of the two extremes of the spectrum of the visible *monochromatic\* lights: red and blue, in proportions which can vary. They are considered as *saturated\* colors.

- (Colors) ***Primaries*** : Colors chosen in a colorimetric space as basic colors for the representation, defining the *gamut*. Their mixture must make it possible to obtain white (in an additive system). In general, in digital imaging, a red, green and blue tint.

- ***Purity*** : *cf*. *Saturation*

- ***Colorimetric Purity*** : Ratio between the luminance of the monochromatic component of a light and the luminance of the total light.

- ***Purity of excitement*** : ratio between the amount of white and saturated color (monochromatic) in a light.

- ***Saturation*** : The most *saturated* colors possible are the *monochromatic* colors to which we add the purples (mixtures of red and blue). As soon as the colors are a mixture of several *monochromatic*\* lights (except mixture of the blue and red extremes), the saturation decreases until the color becomes gray or white. The saturated colors go from *black* to the colors of the rainbow. We also speak of *purity* of light. *cf*. *Colorimetric purity* and *Excitation purity*.

- ***Tint*** : Color of the dominant wavelength of a light (of the pure equivalent of a given light), and thus the color of the *pure* or *saturated* equivalent of the light. We usually locate the colors on a circle by considering that the primary colors are equally spaced, with the primary red at 0 °, the primary green at 120 °, the primary blue at 240 °, and the mixtures, at intermediate angles, in proportion to the two primaries that compose them.

- ***Temperature*** of whites : Comparison of a "white" light to the color of a *black body* (a body that only emits light, and whose color is a direct result of its temperature, such as the sun, an ember, a flame, molten metal ...). It is a way to define precisely the hue of a white, which is then expressed in temperature, using the *Kelvin* as unit. The yellow-orange of sunlight is around 5800 K, the blue of an electric flash at 9000 K, the orange of a candle around 1850 K, etc. See the chapter [*Back to whites: temperature*](E-temperature.md)

- ***Violet*** : see *Purplee*.

- ***YCbCr*** or ***YCC*** : digital version of the *YUV*..

- ***YPbPr*** : alternate name of *YUV*.

- ***YUV*** : System of coding of the colors in three channels: one of *luminance* or *luminosity* and two of *chrominance*. Several notations bring details on the system, although one uses very majority the term *YUV*:
    - When a prime is added to the Y, it is specified as *luminosity* (with a gamma) and not *luminance* (linear).
    - The correct terms in analog are: *YUV* or *YPbPr* with the *luminance* and *Y'UV* or *Y'PbPr* with the *luminosity*.
    - The correct terms in digital are: *YCbCr* or *YCC* with the *luminance* and *Y'CbCr* or *Y'CC* with the *luminosity*.

[^1]:
    The *lumen* measures the general intensity (so in all directions) unlike the candela, but is not used in computing.