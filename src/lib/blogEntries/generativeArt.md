---
title: Generative art investigation - mandalas
date: "2023-02-24"
editDate: "2023-02-24"
summary: Investigating current approaches to mandala generation.
tags: [art, mandalas]
---

<script>
    import chladni from "$lib/images/chladni.jpg"
    import mandala from "$lib/images/mandala.png"
    import mandalagaba from "$lib/images/mandalagaba.png"
    import silk from "$lib/images/silk.png"
    import midjourney from "$lib/images/midjourney.png"
</script>


## Introduction

I have always liked mandalas. I started drawing them on highschool. Throughout university I had developed a nice technique that I kept repeating.

First, I'd get a square piece of paper, compass and a ruler. I would start my process by finding the central point on the paper. I would later lay out a few circles, using some kind of symmetry, always centred in the middle point of the paper.

To visualize this, it would look a bit like a Chladni figure, which appears when you draw a bow over a piece of metal whose surface is lightly covered with sand. You can read more in Ernst Chladni's [wikipedia page](https://en.wikipedia.org/wiki/Ernst_Chladni). 

![chladni_image]({chladni})

I would later fill this skeleton with little pen strokes to produce the final piece. Here is an example of what it would look like:

![square_mandala]({mandala})

I have some other drawings I shared on my [instagram account](https://www.instagram.com/alexmandalas/).


I love doing those mandalas, and I really appreciate the time it takes to create a single piece (somewhere between 3 and 8 hours of work). However, I am a programmer so I can't avoid the question: Can this process be automated?

Hence my search begins. 

## Available products

### [MandalaGaba](https://www.mandalagaba.com/)

As their description reads:

> MandalaGaba is a free online mandala creation suite for designing, sharing and collaborating on mandalas, drawings, sketches, doodles and works of digital art!

This is a very nice application that speeds up the drawing process by providing a canvas with mirrored strokes. Look what I could do in a couple of minutes:

![mandalagaba]({mandalagaba})

It surely was a smooth experience, but this is not generative art since I need to manually draw the strokes. 

### [Silk](http://weavesilk.com/)

This time their description is shorter:

> Create beautiful flowing art with Silk. 

This application takes a more 'generative approach'. It provides a canvas with central symmetry as well, but your strokes are randomized, and change over time, meaning that if you keep pressing the same spot, more lines will flow.

By playing around just for a minute or two, I got the following:

![silk]({silk})

The result is a great deal in terms of value/effort. Even though this approach generates visually appealing images in no time, it is not quite what I want.

### [Midjourney](https://www.midjourney.com/)

Generative AI is very popular right now. I have tried with the product that I like the most in terms of results with the following prompt:

> mandala art, white background and black strokes. 6 fold rotational symmetry. The strokes are made with a pen. Many strokes and very small. The strokes never touch each other. Looking from afar, it looks like a flower.

With this prompt, Midjourney generates these:

![Midjourney]({midjourney})

The results are quite impressive, but not exactly what I asked for. Maybe some prompt engineering would take me closer.

## Conclusion

This article is a mere exploration of available tools for mandala generation. I have found that the pure generative approaches don't look as the ones I usually draw, and the ones that produce similar outputs, are just a drawing helper.

In order for me to find my desired tool, I need to investigate other approaches and maybe even build my own!

## Next steps

- Define my requirements, so I can look better for existing tools.
- Investigate generative techniques
  - Wave function collapse seems like a nice place to start

