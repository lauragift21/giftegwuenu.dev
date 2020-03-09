---
title: 'Improve Video Accessibility with Captions '
date: 2020-03-06T07:41:22.352Z
published: true
tags:
  - media
  - a11y
canonical_url: true
description: >-
  I'll be showing you how to auto-generate captions for any video content using
  Cloudinary.
---
Have you ever come across a video on a streaming website where the captions are so good that you read those instead of listening to the audio probably because you are in a noisy environment or you just want some quite? I can personally say I do this sometimes but the truth is, not so many streaming services provide this feature and what's even more important is to consider those without the ability to hear they rely on the captions to understand what is happening in the video which makes sure every video content is accessible to all users. In this article, I'll be showing you how to autogenerate captions for any video content using [Cloudinary](https://cloudinary.com/).

For our demo, I have a video of me without captions and we'll walk through how to generate a caption for the video. Here's a demo on codepen


```html
<video autoplay muted controls width="700">
  <source src="gift.mp4" type="video/mp4">
  
  <source src="gift.webm" type="video/webm">

  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="gift.mp4">link to the video</a> instead.
  </p>
</video>

```


https://codepen.io/lauragift21/pen/zYGZrmr?tabs=result?height=600



I have the video muted by default and without captions, you can't really tell what I am saying until you unmute it which is one step away and could turn users away in some cases. 

HTML video supports adding captions to your video with the [`<track>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track) tag. Let's say you already have a caption file for the video above you can add it to the video by including the file with the track tag.

```html
<track default kind="captions" srclang="en" src="gift.vtt" />
```

The attribute `default` indicates the captions should be shown by default, `kind` indicates the purpose of the text shown i.e captions or subtitles and `srclang` indicate the language used and lastly `src` is the location of the text file.

You can manually generate the captions by hand or have a web service do that automatically for you. We'll be using [Cloudinary](https://cloudinary.com/) add-ons to achieve this.

## Adding Captions with Cloudinary

[Cloudinary](https://cloudinary.com) is a cloud-based service that provides an end-to-end image and video management solution including uploads, storage, manipulations, optimizations, and delivery. An added benefit of using Cloudinary as a  media solution is you also get the [Add-ons](https://cloudinary.com/addons) feature which enables you to enhance your images and videos using functionalities offered by Cloudinary's vision and image processing partners.

![A list of Cloudinary Addons](https://dev-to-uploads.s3.amazonaws.com/i/yh6h6g9ctfug4nyyvvz1.png)


We are lucky because two different add-ons from the list can be used to accomplish what we are trying to solve.[Microsoft Azure Video Indexer](https://cloudinary.com/documentation/microsoft_azure_video_indexer_addon) and [Google AI Video Transcription](https://cloudinary.com/documentation/google_ai_video_transcription_addon). Now let's see how to get these services to work.

The first step to take is to upload the video to Cloudinary using the [Media Upload API](https://cloudinary.com/documentation/image_video_and_file_upload#image_and_video_upload_api). Cloudinary allows you to upload media to the cloud and perform transformations through the browser or using server-side code for this tutorial we'll go with the latter.

Let's use [Cloudinary Node.js SDK](https://cloudinary.com/documentation/node_integration) to upload the video. To get started, we need to install:

```bash
  yarn add cloudinary dotenv

```
Next, [sign up for an account if you don't already have one](https://cloudinary.com/signup) or login to the dashboard to get your account details.

Create a new file `index.js` and import these packages 

```js
require('dotenv').config();
var cloudinary = require('cloudinary').v2;

```

Create a `.env` file and set your env variables with details from the dashboard


```js
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});
```

Now to perform the upload action, the Cloudinary `upload` method sends an authenticated upload API call over HTTPS while sending the video file:


```js
cloudinary.uploader.upload('gift.mp4', {
  resource_type: "video",
  public_id: "gift",
}, function(error, result) {
  console.log(result, error)
})

```

The code block above will upload the video to the cloud but before doing that we should first enable captions on the video. By including a `raw_convert` parameter with a value '', this tells cloudinary to generate a caption for the video. I mentioned we have two add-ons option earlier this is how you can use either of them in your code.

```js

raw_convert: 'azure_video_indexer'
raw_convert: 'google_speech'

```
```js
cloudinary.uploader.upload('gift.mp4', {
  resource_type: "video",
  public_id: "gift",
  raw_convert: 'azure_video_indexer' // raw_convert: 'google_speech'

}, function(error, result) {
  console.log(result, error)
})

```
Also, you can request transcription/captions in the different languages and (optionally) region/dialect. 

```js
 raw_convert: "azure_video_indexer:fr-FR"
 raw_convert: "google_speech:de-DE"

```
A full list of supported languages and region codes is available on [Google Cloud speech-to-text language support](https://cloud.google.com/speech-to-text/docs/languages)

Uploading is performed synchronously, and once finished, the uploaded video is immediately available for manipulation and delivery.

![Media Dashboard](https://dev-to-uploads.s3.amazonaws.com/i/5lo4ufsyru2a1u1j7zqe.png)

Cloudinary delivers the caption in three different formats by default `.srt`, `.vvt` and `.transcript` but you can always specify the one you want by appending the format on the `raw_convert` parameter.

```js
  raw_convert: "azure_video_indexer:srt:vtt"
  raw_convert: "google_speech:srt:vtt"

```
Now, let's use the captions generated with our video.


```html

<video crossorigin autoplay muted controls width="100%">
  <source src="https://res.cloudinary.com/lauragift/video/upload/v1582792249/gift.mp4" type="video/mp4">
  
  <source src="https://res.cloudinary.com/lauragift/video/upload/v1582792249/gift.webm" type="video/webm">
  
  <track kind="captions" srclang="en" src="https://res.cloudinary.com/lauragift/raw/upload/v1582792283/gift.mp4.en-US.azure.vtt" default>
  
  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="https://res.cloudinary.com/lauragift/video/upload/v1582792249/gift.mp4">link to the video</a> instead.
  </p>
</video>

```


https://codepen.io/lauragift21/pen/KKpWOLY?tabs=result?height=600



This is a helpful approach in making sure your video content is accessible but always remember that no speech recognition tool is 100% accurate. If exact accuracy is important for your video, you can download the generated `.transcript`, `.srt` or `.vtt` file, edit them manually and overwrite the original files.

## Conclusion
Accessibility shouldn't be an afterthought and as we make more effort in delivering more accessible websites to our users we can pay close attention to media on the web. Going the extra mile to make sure that image or video is accessible to everyone will go a long way in creating a friendly and accessible web for everyone.

## Resources
[Cloudinary Upload Demo](https://github.com/cloudinary/cloudinary_npm/blob/master/samples/basic/basic.js)  
[Google AI Video Transcription Docs](https://cloudinary.com/documentation/google_ai_video_transcription_addon)  
[Microsoft Azure Video IndexerDocs](https://cloudinary.com/documentation/microsoft_azure_video_indexer_addon)  
[GitHub Repo](https://github.com/lauragift21/media-a11y-cloudinary)

