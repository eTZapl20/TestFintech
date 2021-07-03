# TestFintech Repository
## simple HTML & JavaScript to test sessionStorage
Files:
index.html - with button click to save data to sessionStorage & link to change to page2.html
page2.html - wiht button click to get data from sessionStrorage to display in HTML and link to change back to index.html
script.js - function to save data to sessionStorage
script2.js - function to get data from sessionStorage and display in HTML
Test Steps:
1. Open index.html
2. Click button to save data to sessionStorage. (save cust_id = 000001)
3. Click link to change to page2.html
4. Cick button to get data from sessionStorage & display in HTML. (displays cust_id = 000001)
5. Close browser.
6. Open index.html again but do not click button to save data to sessionStorage.
7. Click link to change to page2.html.
8. Click button to get data from sessionStorage & display in HTML.  (displays cust_id = null
   becuse closing browser cleared sessionStorage and cust_id was not saved to sessionStorage in second round.
Observations:
1. sessionStorage is cleared when browser is closed.
2. sessionStorage is cleared when browser cache is cleared.
3. sessionStorage only applies to the existing browser tab / Window.  If 
