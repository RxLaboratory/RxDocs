# Last step: edit/color grading

When reaching the last step, which should be edit and maybe color grading, you won't need as much data as previous steps, and can use formats closer to the final delivery, but you still need a good decoding performance when scrolling in your timeline.

[TOC]

## Internet and streaming

- **Intra-Frame**  
    Decoding has to be very efficient as when working on the file you have to be able to jump at any point in time. It is better to use either an file sequence, or a video using an intra-frame encoding.
- **Lossy**  
    You won't be making big changes on the video anymore, and color grading can afford a slight loss of data without any perceptible change for the human eye.
- **YUV 420**  
    Reducing the size of chroma channels can save a lot of space without impacting the decoding performance. The final delivery will surely be a *420* file, you can already work with this when editing the video.
- **8 bits**  
    You won't be making big changes on the video anymore, you don't need more data than what will be delivered in the end. Only if you have a lot of color grading to do it may be useful to keep 10 bits.
- **HD / 2K**  
    Will there be so many people watching this video on a huge screen, and close enough to it to see the difference if the video is in 4K and contains **4 times** more data? Is it really worth it?

## Television or HDR screens

- **Intra-Frame**  
    Decoding has to be very efficient as when working on the file you have to be able to jump at any point in time. It is better to use either an file sequence, or a video using an intra-frame encoding.
- **Lossy**  
    You won't be making big changes on the video anymore, and color grading can afford a slight loss of data without any perceptible change for the human eye.
- **YUV 420**  
    Reducing the size of chroma channels can save a lot of space without impacting the decoding performance. The final delivery may be a *420* file, you can already work with this when editing the video.
- **10 bits**  
    Television standards are made for bigger and often better screens, sometimes capable of HDR colors. You may need to keep 10- or 12-bit channels, but keeping this parameter as low as possible is better.
- **HD / 2K**  
    Will there be so many people watching this video on a huge screen, and close enough to it to see the difference if the video is in 4K and contains **4 times** more data? Is it really worth it?

## Cinema

- **Intra-Frame**  
    Decoding has to be very efficient as when working on the file you have to be able to jump at any point in time. It is better to use either an file sequence, or a video using an intra-frame encoding.
- **Lossy**  
    Do you really need a lossless format, or can you afford a theoretical loss of data, considering you won't see the difference?
- **RGB or YUV 444**  
    Your media is meant to be screened on huge screens, it is not recommended to reduce the size of chroma channels.
- **12 bits**  
    The final DCP file uses 12 bits of data. Very often people use 16- or 32-bit intermediary files, but do you real need this insane amount of colors?
- **HD / 2K** or 4K?  
    Don't you agree that most of the people in cinemas won't see any difference between 2K and 4K? Do you even notice the difference? Does your theater even screen 4K films, have they changed their expensive projectors when 4K was made available? Is this slight difference really worth it compared to the environmental impact of files 4 times bigger? Is entertainment really that important?

## Recommended formats

- ***h.265 Intra-frame mp4, 8-bit YUV 420*** will achieve all of the above points, and the resulting file size can be quite small, while being very easy to decode. Its lossy compression is very efficient, and you could also use more chroma data with a *422* or *444* encoding if you need. You can also increase to 10- or 12-bit channels. The only caveat is that it is not a frame sequence, so you won't be able to easily re-render only part of the video. Use only for short videos. If your software can't encode or decode *h.265*, try with intra-frame *h.264 (AVC-Intra)*.

- ***OpenEXR sequence, 16-bit RGB, Luma/Chroma, DWAA Compression*** can achieve very small files. The *Luma/Chroma* option is equivalent to a *422* chroma sub-sampling and also saves space without perceptible loss. *DWAA* compression is an efficient lossless or lossy compression, and even when lossy the loss can still be imperceptible.

## Formats to avoid

- ***Prores*** and ***DnxHD/HR***, although very common, are not that great. They are lossy intra-frame formats, but resulting file sizes are huge. You can have better quality and the same decoding performance with smaller intra-frame *h.265* or *openEXR* files.

- ***PNG*** is nice, but *openEXR* is better. With the right compression settings, *openEXR* files can be smaller or at least the same size, and at least *Adobe After Effects* is much more performant for encoding and decoding *openEXR*. *OpenEXR* can be both lossy or lossless.

- ***Not Intra-frame formats*** such as standard *h.264* for example, as this introduces a non-negligeable computing overhead while scrolling in the video file when working.

![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/07)
