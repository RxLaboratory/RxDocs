## Intermediary formats

Intermediary Media files, which will be used during the production process between each step and software, need to keep a good quality and as much data as possible, so it will not be easy to reduce the file size a lot. That being said, we have to ask ourselves if we *really* need that lossless encoding or if a small theoretical loss could be acceptable, considering that even at some significant compression levels the human eye may still be incapable of seeing any difference. Of course the real question is if you'll still have enough data to edit the image afterwards, so that depends on your pipeline and what you need to do in the next step, but keep in mind you may not really need that full quality 32bpc lossless huge file.

[TOC]

### Internet and streaming

- **Intra-Frame**  
    Decoding has to be very efficient as when working on the file you have to be able to jump at any point in time. It is better to use either an file sequence, or a video using an intra-frame encoding.
- **Lossy**  
    Do you really need a lossless format, or can you afford a theoretical loss of data, considering you won't see the difference?
- **YUV 422**  
    Reducing the size of chroma channels can save a lot of space without impacting the decoding performance. If you don't need chroma keying, why not use a 422 format as soon as possible in the production, considering the video will be in 420 in the end?
- **8 bits**  
    Do you really need more than 8 bits per channel in intermediary format? Of course, your working space may need more accuracy, but won't the file used for transfering data have enough precision with 8 bits?
- **HD / 2K**  
    Will there be so many people watching this video on a huge screen, and close enough to it to see the difference if the video is in 4K and contains **4 times** more data? Is it really worth it?

### Television or HDR screens

- **Intra-Frame**  
    Decoding has to be very efficient as when working on the file you have to be able to jump at any point in time. It is better to use either an file sequence, or a video using an intra-frame encoding.
- **Lossy**  
    Do you really need a lossless format, or can you afford a theoretical loss of data, considering you won't see the difference?
- **YUV 422**  
    Reducing the size of chroma channels can save a lot of space without impacting the decoding performance. If you don't need chroma keying, why not use a 422 format as soon as possible in the production, considering the video will be in 420 in the end?
- **10 bits**  
    Television standards are made for bigger and often better screens, sometimes capable of HDR colors. You may need to keep 10- or 12-bit channels, but keeping this parameter as low as possible is better.
- **HD / 2K**  
    Will there be so many people watching this video on a huge screen, and close enough to it to see the difference if the video is in 4K and contains **4 times** more data? Is it really worth it?

### Cinema

- **Intra-Frame**  
    Decoding has to be very efficient as when working on the file you have to be able to jump at any point in time. It is better to use either an file sequence, or a video using an intra-frame encoding.
- **Lossy**  
    Do you really need a lossless format, or can you afford a theoretical loss of data, considering you won't see the difference?
- **RGB or YUV 444**  
    Your media is meant to be screened on huge screens, it is not recommended to reduce the size of chroma channels.
- **16 bits**  
    The final export has to be delivered with at least 16 bits of data per channel, and the final DCP file uses 12 bits of data. Very often people use 32-bit intermediary files, but do you real need this insane amount of colors?
- **HD / 2K** or 4K?  
    Don't you agree that most of the people in cinemas won't see any difference between 2K and 4K? Do you even notice the difference? Does your theater even screen 4K films, have they changed their expensive projectors when 4K was made available? Is this slight difference really worth it compared to the environmental impact of files 4 times bigger? Is entertainment really that important?

### Recommended formats

- ***h.265 Intra-frame mp4, 8-bit YUV 422*** will achieve all of the above points, and the resulting file size can be quite small, while being very easy to decode. It can use a lossless compression if you need, and you could also use all chroma data with a *444* encoding if you need. You can also increase to 10- or 12-bit channels. The only caveat is that it is not a frame sequence, so you won't be able to easily re-render only part of the video. Use only for short videos. If your software can't encode or decode *h.265*, try with intra-frame *h.264 (AVC-Intra)*.

- ***OpenEXR sequence, 16-bit RGB, Luma/Chroma, DWAA Compression*** can achieve very small files. The *Luma/Chroma* option is equivalent to a *422* chroma sub-sampling and also saves space without perceptible loss. If you need chroma key in the next step you could just omit the option. *DWAA* compression is an efficient lossless or lossy compression, and even when lossy the loss can still be imperceptible.

### Formats to avoid

- ***Prores*** and ***DnxHD/HR***, although very common, are not that great. They are lossy intra-frame formats, but resulting file sizes are huge. You can have better quality and the same decoding performance with smaller intra-frame *h.265* or *openEXR* files.

- ***PNG*** is nice, but *openEXR* is better. With the right compression settings, *openEXR* files can be smaller or at least the same size, and at least *Adobe After Effects* is much more performant for encoding and decoding *openEXR*. *OpenEXR* can be both lossy or lossless.

- ***Not Intra-frame formats*** such as standard *h.264* for example, as this introduces a non-negligeable computing overhead while scrolling in the video file when working.

![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/07)
