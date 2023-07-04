# Cat Service Interface

### My first ever Swift App

#### May 21 2023

This week I opened Xcode and created my first macOS app written with Swift. It runs! Center image is an image capture from [The Noun Project](https://thenounproject.com/).

<img class="wrapper" width="560" alt="Screenshot of first working macOS App" src="{{site.url}}/assets/images/SwiftFirstmacOSApp.jpeg"/>

Now to make this app do something with some user input. I added a text input, a text box, and a button. The text box shows the text the user puts into the text input. The button currently does nothing. 

<img class="wrapper" width="560" alt="Gif of app with text box reflecting user input text" src="{{site.url}}/assets/images/SwiftApp.gif"/>

I made this recording after sun down. No hands on work was done to make this app compatible with dark mode. Pretty cool!

#### May 28 2023

This week I found an API to use for endpoint querying. It's called [Cat as a Service](https://cataas.com/).

<img class="wrapper" width="560" alt="Gif of app that changes hero image to random cat photo when user clicks button" src="{{site.url}}/assets/images/ClickForRandomCat.gif"/>

I spent the week setting up HTTP GET requests in Swift and managing the View. I learned about [URLSession](https://developer.apple.com/documentation/foundation/urlsession), managing [State](https://developer.apple.com/documentation/swiftui/state) variables in SwiftUI, converting bytes to [NSImage](https://developer.apple.com/documentation/appkit/nsimage) data types, and the concept of an [Optional](https://developer.apple.com/documentation/swift/optional) and how to unwrap it. I'm liking Swift! 

Now the user enters characters into the text box, clicks the button, and the last character of the input is removed. Also, the image changes to a random cat image made via HTTP GET request from CaaS. The two are currently unrelated. 

### 
#### June 4 2023

My next step is to add a drop down menu that will be populated with API Tags acquired via HTTP GET request from CaaS.

In Swift this is called a [Picker](https://developer.apple.com/documentation/swiftui/picker). I spent this week connecting the Picker values to the CaaS API tags. I also made the text input reactive so that when a user types in a character, the Picker appears, and when no characters are present, the Picker disappears.

I struggled with managing the State variables and GET requests from the CaaS server. In order to get complete data into the Picker, I added [escaping closures](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/#Escaping-Closures) to API GET request methods.

<img class="wrapper" idth="560" alt="Gif of app that displays a Picker with a list of API tags when user types a character" src="{{site.url}}/assets/images/SelectTagForRelevantCat.gif"/>

### The final tweak
#### June 18 2023

My final step is to filter the Picker contents based on the first character the user types in the text field. 

I had several race conditions between View updates and API calls. I solved the issue by moving all API calls to a class where they are stored as class members and methods. This reduces the number of API calls the app makes and improves performance as a result. 

<img class="wrapper" width="560" alt="Gif of app that displays a Picker with filtered contents based on a user's text input" src="{{site.url}}/assets/images/FilterTagsByCharAndGetCat.gif"/>

### The app is complete

<iframe class="wrapper" max-width="560" height="315" src="https://www.youtube.com/embed/zJSYj9NrGD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br/>
