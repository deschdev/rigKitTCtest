# rigKitTCtest
Coding Example for TC 

**files: **

**index.html = Where the JSON data is going to end up
rigkits.js = Fetched the looped through the JSON data to pull the titles, images, and buttons
style.css = How we made the website demo responsive, clean, and fun!**


**TASK AT HAND**

**Dataset** https://gemlux.com/collections/rigging-kits/products.json

Utilizing the above data, output the first 3 products to the screen using Vanilla JS and any packages you want. You are welcome to use FETCH / AXIOS / any other methods to grab the json data.

NOTE: CORS is set to allow *, so it should be all setup for you.

Data Needed:
Title = Text Below Images

Buy Now Link = https://google.com / Target = New Tab / Should be a LINK aka (A href=)

Image = Images Array in JSON, image with Position = 1. use the SRC value and don't worry that it is not optimized for the size, just make it 258x258 in the CSS.

Overall Title of the page is just Rigging Kits

NOTES:
* Mobile should stack 1 product across
* Buy Now link should just open a new tab to Google


**WHAT ALL MY FILES AND CODE ARE SAYING**


**What is happening in index.html?**
js file is at the top - remember to use defer to allow it to load after all of the html so there is no bogging down happening
inside of the body I created some simple elements that would allow the JSON to be passed to the document easier (HINT: #imageDiv)


**What is happening in rigkit.js?**
In order to loop through the JSON and have data appear on the document I did the following.

created a constant variable named json_url that would have the value of the API/JSON I wanted to reach out to
created a async fetch function to grab the data inside of the JSON
fetched the JSON data from the API and created another variable that pulled the pertinent information from the JSON for clarity and readablity
created a constant variable imageDiv and created and ID element with the same name for reusability
created a for loop to loop through the data in the JSON, remember DRY is important!
created a constant variable named src that pull the images for the products from the JSON
added string interpolation to apply the elements on the document and supplying the variable I created prior, src
created a one line if statement - the loop breaks once the array reaches the product in the 2nd place of the array (remember arrays are zero index - 0, 1, 2)
finally we add the imageDiv id via innerHTML to the str varible, which allows the JSON data to print to the document


****Resources: 

innerHTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

Fetch / API Refresher Fullstack with The Coding Train: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X

JSON Validator: https://jsonlint.com/

Media Queries in 7 Mins: https://www.youtube.com/watch?v=yU7jJ3NbPdA****
