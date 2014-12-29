ytlink
======

###[New version here](https://github.com/gwcmk/youtube-link)

I originally planned to make this by giving the iframe the following css properties:
```
.ytlink{
    position: absolute;
    bottom: 0;
    left: 0;
}
```
Then, I would update the bottom property as the user scrolled. This proved to be much worse than simply doing the following:
```
.ytlink{
    position: fixed;
    bottom: 0;
    left: 0;
}
```
That's how the new version above accomplishes this effect. However, I plan to go in a different direction with this repository, so I decided to make them separate. For now, this is just a work in progress.



