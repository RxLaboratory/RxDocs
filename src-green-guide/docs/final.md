# Final delivery

The final media file can be as small as possible and it's not a problem to use imperceptible lossy compression. You don't need it anymore to be performant when scrolling in time, as most of the time it will just be played at its intended speed, so **you don't need the format to be Intra-frame anymore** (i.e. *Prores* and *DnxHD/HR* are not meant to be used as a final delivery).

[TOC]

## Internet and streaming

- **Lossy**  
    You won't be making big changes on the video anymore, and color grading can afford a slight loss of data without any perceptible change for the human eye.
- **YUV 420**  
    It is very standard to use *420* chroma reduction in final files, and most of time nobody sees any difference.
- **8 bits**  
    That's just what screens connected to the internet can show, no less, no more.
- **HD / 2K**  
    Will there be so many people watching this video on a huge screen, and close enough to it to see the difference if the video is in 4K and contains **4 times** more data? Is it really worth it?

## Television or HDR screens

- **Lossy**  
    You won't be making big changes on the video anymore, and color grading can afford a slight loss of data without any perceptible change for the human eye.
- **YUV 420**  
    It is very standard to use *420* chroma reduction in final files, and most of time nobody sees any difference. Some TV Chanels may ask for *422* files.
- **10 bits**  
    Television standards are made for bigger and often better screens, sometimes capable of HDR colors. You may need to keep 10-bit channels, but keeping only 8 bits would be better.
- **HD / 2K**  
    Will there be so many people watching this video on a huge screen, and close enough to it to see the difference if the video is in 4K and contains **4 times** more data? Is it really worth it?

## Cinema

- **Lossless**  
    The DCI standard and final DCP files are lossless. Theoratically, we could still use lossy (but with an invisible loss) formats.
- **RGB or YUV 444**  
    Your media is meant to be screened on huge screens, it is not recommended to reduce the size of chroma channels.
- **12 bits**  
    The final DCP file uses 12 bits of data. Very often people use 16- or 32-bit intermediary files, but do you real need this insane amount of colors?
- **HD / 2K** or 4K?  
    Don't you agree that most of the people in cinemas won't see any difference between 2K and 4K? Do you even notice the difference? Does your theater even screen 4K films, have they changed their expensive projectors when 4K was made available? Is this slight difference really worth it compared to the environmental impact of files 4 times bigger? Is entertainment really that important?

## Recommended formats

- ***h.265 standard mp4, 8-bit YUV 420*** is small and very efficient. As it may not be supported everywhere yet, you could also use the less efficient h.264 instead. OGG Video (.ogv) is great too. All of them are capable of 10- or 12-bit HDR too. Note that some codecs have presets or settings to improve decoding performance and to adjust compatibility with older hardware; these settings usually reduce power consumption when playing the file.

## Formats to avoid

- ***Prores*** and ***DnxHD/HR***. Do you really want to send files that big over the internet?

- ***Image sequences***. Decoding performance is much better with standard video files.

![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/07)
