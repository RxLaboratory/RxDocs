# Release process de Duik

A new version of Duik is available, the doc is up-to-date, it's time to release it. Here's the process.

!!! Note
    To run the scripts, you need DuBuilder in the PATH environment varialbe on Windows, or in a bin folder on Linux (like /usr/bin)

    You also need the *DuAEF*, *Duik_required* and *api* folder of Duik to be added in the "Include paths" inside DuBuilder.

## DuAEF

2. Windows: run `tools/build tools/build-duaef.bat`.
3. Zip the contents of the output folder, move it out of the repo, then commit and push changes
1. If dev has been made on a dev branch: Create a pull request and merge dev branch to master
5. Create Github Release, attach the zip

## DuAEF Duik Doc

1. Update version in mkdocs.yml
2. Build Duik Doc
3. Push to Github
	
## DuAEF Duik

1. Windows: run `tools/build tools/build-duik.bat`.
2. Copy Duik doc to output (except CNAME)
3. Zip the contents of the output/Duik and Duik_API folders, move them out of the repo, then commit and push changes
6. If dev has been made on a dev branch: Create a pull request and merge dev branch to master
5. Create Github Release, attach release Zip and API Zip

## Release

11. Upload Release Zip to rainboxlab.org
12. Update date and version on rainboxlab.org
13. Update news on rainboxprod.net
14. Announcement on Discord

Here's a template for the text of the release:

```markdown
The sixteenth update of Duik Bassel.2 fixes the IK/FK switch used with extracted controllers.

As always, it is strongly advised to update Duik as soon as you can.

The detailed list of what’s new is available in the changelog [here](https://duik-docs.rainboxlab.org/duik-16-changelog.html).

Here is the [comprehensive documentation for Duik](https://duik-docs.rainboxlab.org), and here is the [reference for the Duik API](https://duik-api.rainboxlab.org/).
```
