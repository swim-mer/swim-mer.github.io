# Cat Service Interface

### My first ever Swift App
#### May 21 2023

This week I opened Xcode and created my first macOS app written with Swift. It runs! Center image is an image capture from [The Noun Project](https://thenounproject.com/).

![Screenshot of first working macOS App](https://github.com/swim-mer/swim-mer.github.io/raw/main/assets/images/SwiftFirstmacOSApp.jpeg)

Now to make this app do something with some user input. I added a text input, a text box, and a button. The text box shows the text the user puts into the text input. The button currently does nothing. 

![Gif of app with text box reflecting user input text](https://github.com/swim-mer/swim-mer.github.io/raw/main/assets/images/SwiftApp.gif)

I made this recording after sun down. No hands on work was done to make this app compatible with dark mode. Pretty cool!

#### May 28 2023

This week I found an API to use for endpoint querying. It's called [Cat as a Service](https://cataas.com/).

![Gif of app that changes hero image to random cat photo when user clicks button](https://github.com/swim-mer/swim-mer.github.io/raw/main/assets/images/ClickForRandomCat.gif) 

I spent the week setting up HTTP GET requests in Swift and managing the View. I learned about [URLSession](https://developer.apple.com/documentation/foundation/urlsession), managing [State](https://developer.apple.com/documentation/swiftui/state) variables in SwiftUI, converting bytes to [NSImage](https://developer.apple.com/documentation/appkit/nsimage) data types, and the concept of an [Optional](https://developer.apple.com/documentation/swift/optional) and how to unwrap it. I'm liking Swift! 

Now the user enters characters into the text box, clicks the button, and the last character of the input is removed. Also, the image changes to a random cat image made via HTTP GET request from CaaS. The two are currently unrelated. 
