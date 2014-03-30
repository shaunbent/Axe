# Axe Sass Framework

Axe is my personal Front End Development starting point. It is very much designed around how I approach my front end builds so might not suit everyone but if you like the structure and approach then feel free to give it a whirl.

## Why not use another Framework?

I approach Front End Development in a very specific way, as does any developer really, but I found that none of the existing frameworks out there gave me everything I wanted. So I decided that I would make my own by combining the best bits of different frameworks and resources from about the webs.

This framework follows [Harry Roberts](http://www.csswizardry.com) "Inverted Triangle Architecture" and heavily relies on the components of [Inuit CSS](https://github.com/inuitcss), as well as Nicolas Gallagher's brilliant [Normalize CSS](https://github.com/necolas/normalize.css), various mixin's from the [Guardian Guss Collection](https://github.com/guardian/guss) and some of the work I did whilst working at [Forepoint](https://github.com/forepoint/Forepoint-SASS-Framework). Credit has been give where due throughout the code.

## Why Axe?

I spent a while trying to think of a clever name for this Framework, in the end I settled on Axe. There is probably some clever analogy about how an axe is use to chop down a tree before its crafted into a beautiful piece of furniture but its actually named after one of my pet Tortoises. Here he is getting his thing on (he's the own on top):

->![Dirty Tortoise](http://distilleryimage8.ak.instagram.com/525f9d70df2d11e1b07922000a1e9bee_7.jpg)<-

And here is a video of him trying to eat a shoe: [http://instagram.com/p/lAEP2WA2xR/](http://instagram.com/p/lAEP2WA2xR/).

## Features

- Scalable OOCSS Framework
- RWD focused architecture
- Sass powered
- [BEM](http://bem.info/) style naming convention
- Browser Support: IE8+

## Dependancies

- [Sass 3.3+](http://sass-lang.com/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)

## Sass Structure

As mentioned previous this framework follow Harry Robert's "Inverted Triangle Architecture" meaning the further down the Sass/CSS file the more specific the styles become.

The [Sass directory](https://github.com/shaunbent/Axe/tree/master/assets/sass) uses the following structure:

- **[Settings](https://github.com/shaunbent/Axe/tree/master/assets/sass/settings)** - Global Sass variables and configuration, etc
- **[Tools](https://github.com/shaunbent/Axe/tree/master/assets/sass/tools)** - Mixins and functions
- **[Generic](https://github.com/shaunbent/Axe/tree/master/assets/sass/generic)** - High-level styles such as resets
- **[Base](https://github.com/shaunbent/Axe/tree/master/assets/sass/base)** - Initial site wide styling, typography
- **[Objects](https://github.com/shaunbent/Axe/tree/master/assets/sass/objects)** - Object and abstractions
- **[Components](https://github.com/shaunbent/Axe/tree/master/assets/sass/components)** - Site/project specific UI elements
- **[Trumps](https://github.com/shaunbent/Axe/tree/master/assets/sass/trumps)** - Overrides and helper classes

## Grunt

As part of my development workflow we use [Grunt](http://gruntjs.com/) to handle compiling Sass, combining and concatenating JavaScript files, managing dependancies via [Bower](http://bower.io/), on the fly creation of Icon fonts and various optimisations to code and assets.

**Note:** in order to use the Icon Font creation part of this Grunt process you will need to have `fontforge` installed and optionally `ttfautohint `. You can install these by running:

	brew install fontforge ttfautohint

You may need to use `sudo` for `brew`, depending on your setup.
