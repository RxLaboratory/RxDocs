# How to create/edit Rx Documentation

[TOC]

## Mkdocs

RxDocs use [mkdocs](https://www.mkdocs.org/). Edit the documentation in the source markdown `.md` files, either directly on github or by cloning the repository containing the files and pushing your changes (or creating pull requests).

When adding or removing pages, you must update the table of contents in the `mkdocs.yml` file at the root of the source.

If you want to check and see the documentation from the source, run `mkdocs serve` from the same directory as the `mkdocs.yml` file.

To build the doc in a static html site, run `mkdocs build`.

## Meta

All pages include a "meta" block called "*About this page*". Don't forget to edit it to add your name in the credits, and update the modified date. **Do not** change the license.

This block is built from the info available in the source of the `![META]` section at the end of all pages. If it is not present, you can create it.

### Keys

It uses a simple system of key/value pairs. These are the available keys and possible values:

- ***authors***: The list of authors/contributors to the *text* of the current page. This list will appear as it is; separate the authors with a comma.
- ***medias***: The list of authors/contributors to the *medias* (images, videos...) of the current page. This list will appear as it is; separate the authors with a comma.
- ***license***: The license. Possible values: 'CC-BY-NC-SA', 'CC-BY', 'CC-BY-SA', 'CC-BY-ND', 'CC-BY-NC-ND', 'GNU-FDL'.
- ***copyright***: The copyright year(s). Add the current year if it is not yet in the list. This list can either be a range, separated with `-` (e.g. "2019-2021") or a comma-separated list (e.g. 2019, 2020, 2021).
- ***updated***: Should be the date of the current edit of the page, in the form YYYY//MM/DD (e.g. 2021-11-28).

All key/value pairs are separated by semicolons.

### Example

```
![META](authors:Nicolas "Duduf" Dufresne, Léa Saint-Raymond;medias:Léa Saint-Raymond;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/07)
```

## PDF

If you want to generate a *PDF* file for the page, use the "print" function of your browser to print to pdf; remove all associated metadata/header/footer information.

![META](authors:Nicolas "Duduf" Dufresne;license:CC-BY-NC-SA;copyright:2021;updated:2021/03/07)