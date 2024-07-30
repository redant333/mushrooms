# How is data organized

## `thumbnails/`
This contains the thumbnails shown on the cards.
Each thumbnails should be 256x256px in size.

## `images/`
This folder contains the images of mushrooms.
At the moment, they are not used but the plan is to use them in a gallery that pops up on click.

## `data.json`
This is a JSON file containing an array of entries, each describing a card.
Each entry should have the following structure:
```json
    {
        "name-lat": "Scientific name of the mushroom",
        "name-eng": "English name of the mushroom",
        "name-swe": "Swedish name of the mushroom",
        "thumbnail": "thumbnail.jpg",
        "images": [
            ["image 1 name", "date in format YYYY-MM-DD"],
            ["image 2 name", "date in format YYYY-MM-DD"],
            //...
        ]
    },
```
Both images and thumbnails are relative to their own folders, i.e. `/data/images/` should not be included in the path.

Field `images` is currently not used, but should be added anyways so that images for all mushrooms exist once the gallery is implemented.

# How to add a new mushroom
1. Add the thumbnail to `/data/thumbnails` (remember that it's size should be 256x256px)
2. Add one or more images to `/data/images` (no restriction on the size)
3. Add the new entry to `/data/data.json`
4. Load the page and verify that nothing went wrong
