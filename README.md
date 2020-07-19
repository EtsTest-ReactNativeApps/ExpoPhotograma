# Bachelor-Thesis  ->  Photograma

[![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde) [![Implementations](https://img.shields.io/badge/%F0%9F%92%A1-implementations-8C8E93.svg?style=flat)](https://github.com/kentcdodds/all-contributors/blob/master/other/IMPLEMENTATIONS.md) [![Active](http://img.shields.io/badge/Status-Active-green.svg)](https://tterb.github.io)  [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/) 

Photograma is a mobile application created for my CS bachelor-thesis. The main idea is to create an application for photographers to share their passion and interest for photography and art with people who are willing to have an enjoyable photo shoot.

  - Create an account
  - Login to that account
  - Share your photos or search for a photographer that matches your preferences
  - Create an appointment
  - Enjoy your time and your photos
  
### Tech

* [React-Native](https://reactnative.dev/?source=post_page-----6e8a2396eea1----------------------) 
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Installation

This project requires [React-Native](https://reactnative.dev/?source=post_page-----6e8a2396eea1----------------------).

Make sure that you have an emulator or a phone connected and running. Check that using the command
   ```sh
$ adb devices
```


 ```clone or download the repository```
```sh
$ cd ExpoPhotograma
$ yarn start
```
  ```sh
Install EXPO application from GooglePlay or IOS Store(or open the Simulator) and scan the QR code.
```

---


## `SCREENSHOTS` - website example
<p float="left">
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/signInScreen1.jpg" width="250" height="500"/>
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/signInScreen2.jpg" width="250" height="500" /> 
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/signUpScreen.jpg" width="250" height="500" />
  
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/Dashbord.png" width="250" height="500" />
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/myProfile.jpg" width="250" height="500" />
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/Saved.png" width="250" height="500" />
  
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/Simulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202020-06-10%20at%2015.08.25.png" width="250" height="500" />
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/photographerProfile2.jpg" width="250" height="500" />
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/createAppointment.jpg" width="250" height="500" />
 
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/imgClassif2.png" width="250" height="500" />
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/imgClassif.png" width="250" height="500" />
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/imgClassif3.png" width="250" height="500" />
  
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/mapScreenForCluj.png" width="250" height="500" />
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/LikePhoto.png" width="250" height="500" />
  <img src="https://github.com/ungurnicoleta/ExpoPhotograma/blob/master/assets/Screenshots/NopePhoto.png" width="250" height="500" />
</p>

### Abstract

This thesis introduces the study ofHybrid mobile applicationsthat help developers tocreate cross-platform applications in an efficient way and in a short amount of time.  Theapplication developed for this research is called Photograma and the main purpose of itis to easily put photographers and people in contact when their contribution is needed.


Photograma application is developed in React Native and Ruby on Rails and the de-cision to use these technologies was taken after a careful analysis,  considering the costand the time, but also the mobile devices market and the latest development tools whichare used world-wide these days.  In terms of application structure/architecture and stor-age,  we  rely  on  the  PostgreSQL  database  and  AWS  S3  for  image  storage,  which  is  anexternal custom made server.  Another interesting decision that we made was to integrateCustom Vision (from Azure) to create an image classification model,  that was used topredict the photographer’s style. To this end, we wanted to emphasize the importance ofcloud-storage in the context of a mobile application in 2020, in particular for our purposeof storing images and getting the predictions for the images in real-time, but we discussedthis in more details in this paper.  We have treated each technology individually in thisthesis and we tried to explain why we have chosen each one.


With Photography and Influencers’ field growing so much and becoming a powerfuleconomic branch and among the few areas that receive innovative technologies with openarms  (in  order  to  promote  themselves),  we  were  thinking  of  a  way  of  structuring  in  asingle application more functionalities needed to satisfy the needs of customers and theirdifferent demands.  Photograma application aims to improve the process of finding a goodphotographer in the proximity of the user, matching their interests and photography stylesby providing an application that treats elements of each category.


Taking into account that the application is developed for people who are working inart/photography and are very creative, we have considered the design of the application avery important point.  Not only that hybrid applications have to be as intuitive, fast, andresponsive as a native one, but we have also taken very seriously the problem of visualelements.This work is the result of my own activity. 

Ungur Nicoleta
