# New IOS Keychain bug crashes Apps when typing to autofill password

Since Apple released the IOS v14, The Safari browser in all IOS devices have a problem with the Input type's `password` which the application crashes when you click on the Password Input.
The problem is The `Keychain` has a critical problem and wants to autofill a user match but will crashes while loading the matches, So I tried so many ways to fix this issue, and I found these solutions:
1. Try to use [`dotsfont`](https://github.com/kylewelsby/dotsfont) by [Kyle Welsby](https://github.com/kylewelsby)
    
    Usage:
    ```css
    @font-face {
      font-family: 'dotsfont';
      src: url('dotsfont.eot');
      src: url('dotsfont.eot?#iefix') format('embedded-opentype'),
           url('dotsfont.woff') format('woff'),
           url('dotsfont.ttf') format('truetype'),
           url('dotsfont.svg#dotsfontregular') format('svg');
    }
    
    .conceal{
      font-family: 'dotsfont';
    }
    ```
    And Check if the Safari Version is Greater than 14, The Input types `password` should be replaced with `text`, if not then the Password filed's type should be `password`. I wrote some examples in `React`, `Pure javascript`, and `jQuery`. 
2. To disable the `autofill` feature, Add `autocomplete="off"` to the Password inputs, but it works in some cases(I don't know why!!!). 

### Fix the problem in:
1. `Login pages`: In these types of pages, there is no issue because the Keychain can find a matching item by the `username` and `password` fields while you did the 2nd solution before.
2. `Other Pages`: In other pages that contain `password` fields, you should do the 1st solution. and follow what I wrote in the examples folder.


If you have any other solution, please contribute to this repo to tell other programmers how they can fix this huge problem.
