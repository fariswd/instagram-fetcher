# Instagram Fetcher

Fetching instagram links

## install dependencies
```
npm install
```
## use
```
picture: localhost:3000/?l=<instagram_link>
video: localhost:3000/?l=<instagram_link>&v=1
```

sample call picture  
```
localhost:3000/?l=https://www.instagram.com/p/BbG94jxliX8/
```
sample output picture
```
{
  "links":"https://www.instagram.com/p/BbG94jxliX8/",
  "pic_t":"https://www.instagram.com/p/BbG94jxliX8/media/?size=t",
  "pic_m":"https://www.instagram.com/p/BbG94jxliX8/media/?size=m",
  "pic_l":"https://www.instagram.com/p/BbG94jxliX8/media/?size=l"
}
```  

sample call video  
```
localhost:3000/?l=https://www.instagram.com/p/BbBA3IFFkrQ/&v=1
```
sample output video
```
{
  "links":"https://www.instagram.com/p/BbBA3IFFkrQ/",
  "pic_t":"https://www.instagram.com/p/BbBA3IFFkrQ/media/?size=t",
  "pic_m":"https://www.instagram.com/p/BbBA3IFFkrQ/media/?size=m",
  "pic_l":"https://www.instagram.com/p/BbBA3IFFkrQ/media/?size=l",
  "vid":"https://scontent-sin6-1.cdninstagram.com/t50.2886-16/23170418_1908776692708435_9189614371297296384_n.mp4"
}
```


## Table Explaination
| query | desc  |
|-------|-------|
| l=    | links |
| v=1   | video |

| obj   | desc       |
|-------|------------|
| t     | thumbnails |
| m     | medium     |
| l     | large      |
| vid   | video      |

havefun :rocket: