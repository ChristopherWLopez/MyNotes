# Auth

Auth is a way where we can check if a person is who they say they are. There are various ways we can go about working through this problem. Because we cannot always trust everyone on the internet

usually we can check if a person is who they say they are by way of 2 factor auth. This way we can check two valid references of proof and really get to know things only what said person would know.

## Hash

What is a hash ?

One-way function from a large number to a smaller number
(take one big chunk of data and come away with a fingerprint)

we can take a lot of data and make it smaller, or make it very expensive to find out the next step of data. Making it difficult to figure out the fingerprint is a great line of defense.

`N * N % L`

- square the number
- than use the modulo to take the end of it and use it as the base.

