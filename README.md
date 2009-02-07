# glowQuery

Add the ability to make elements "glow" when you hover over
them. For browsers that support the `text-shadow` CSS property,
you can also add a halo.

## Usage

Here's the most basic example:

    $(document).ready(function() {
      $('.glow-me').addGlow();
    });

Here's a more advanced one:

    $(document).ready(function() {
      $('.glow-me').addGlow({
        radius: 20,
        textColor: '#ff0',
        haloColor: '#ffa',
        duration: 200
      });
    });

## Custom Options

The following options can be used:

**`textColor`**: Which color the text should glow.
**`haloColor`**: The halo color (in supported browsers).
**`radius`**: Controls the size of the halo (in supported browsers).
**`duration`**: The speed of the glowing effect.

## Requirements

* jQuery
* the jQuery color plugin (bundled in `src` directory)

## TODO

* Add a `delay` option

(c) Copyright 2009 Pat Nakajima, released under MIT License.