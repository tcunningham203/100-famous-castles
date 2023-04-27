# 100-famous-castles
When visiting one of Japan's famous castles, you can apply a unique rubber stamp to your notebook. Use this application to prepare for a trip, read and write reviews, and learn fun facts on your journey to collect all 100 stamps.

## Credits
We used the one of the modules in Week 14 (part 23) of the bootcamp as a template to set up the server and file structure. After several commits, we altered the original code to fit our purposes. 




Questions that need to be answered:

We have the raw data that will be added- for the images, they were found on a certain website. Is it acceptable to just put the link to those images into the database and then have the server call upon that url? Or should we download the pictures and put them somewhere?

Leading into my second question: What do we do with pictures? Previously pictures were stored in an asset folder- is there a better way to do it now? Put it somewhere on the server? How does that work? Or is it better to put pictures into the public file?

Regarding the castle database info- what is the preferred way to store it? Currently, we have it as a google sheets doc, but there are options to convert it to a .json file or a csv file. Is one of those preferable over the other? Is there a 3rd, better option based on what we need?

A user creates an account. Is that information added to the same database as the castles? Or should we have 2 databases going at the same time? We eventually want to add commenting/reviewing functionality to each castle's page. How would that work with accounts? Would it create a new column labeled "user1_review" or something, and then all of their reviews would be added to the database? Or is there a better way? 

Another functionality we want to add is the ability to flag which castles they've visited, and have a page where they can display the stamps they've collected. How does that work with the database? Does the castle database make a new entry "user_stamps" and then set values in that column to true or false? Is that the way its supposed to be? What if there were like 5 million users? Does that mean the database would have 5 million columns? Is there a better way? Am I totally off track?
