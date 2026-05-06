# Lab 5 - Starter
Kelly Dempster

### Links to Pages
[explore](https://kehiio.github.io/Lab5_Starter/explore.html)
[expose](https://kehiio.github.io/Lab5_Starter/exlore.html)

### Questions
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- While a unit test would tell us if the message function itself is working properly with all kinds of characters and text lengths, I think a comprehensive test is more important for testing the chat feature. I think a lot of the problems/bugs would arise from how the message feature itself is interacting with the rest of the application and other users. It should be tested on how it looks in the UI, if notifications are triggered by reciving a message, and how the rest of the system interacts with the message.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- Yes, I think that is a good application of a unit test since it would be testing a small part of the feature which is mostly affected by the message feature itself. I would create unit tests which check edge cases, what happens if a user tries to type more than 80 characters, or how the character size is being counted (since UNICODE characters can be multiple bytes and thus potentially seen as more characters).
