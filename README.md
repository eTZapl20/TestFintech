# TestFintech Repository
## Simple HTML & JavaScript to test sessionStorage
https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
### Files used in test:
1. index.html - with button click to call function in script.js to save data to sessionStorage & link to change to page2.html
2. page2.html - with button click to call function in script2.jst to get data from sessionStrorage to display in HTML and link to change back to index.html
3. script.js - function to save data to sessionStorage
4. script2.js - function to get data from sessionStorage and display in HTML
### Test Steps:
1. Open index.html
2. Click button to save data to sessionStorage. (save cust_id = 000001)
3. Click link to change to page2.html
4. Cick button to get data from sessionStorage & display in HTML. (displays cust_id = 000001)
5. Close browser.
6. Open index.html again but do not click button to save data to sessionStorage.
7. Click link to change to page2.html.
8. Click button to get data from sessionStorage & display in HTML.  (displays cust_id = null
   becuse closing browser cleared sessionStorage and cust_id was not saved to sessionStorage in second round.
9. Can also perform addiitonal test steps e.g. (a) going to a different webpage after clicking button on index.html before
   clicking button in page2.html (still works) (b) opening page2.hmtl in different tab or window (does not work).
### Additional observations:
1. sessionStorage is cleared when browser is closed.
2. sessionStorage is cleared when browser cache is cleared.
3. sessionStorage only applies to the existing browser tab / window.  If page2.html is opened in different browser tab from
   index.html, button click on page2.html produces cust_id = null, even if button on index.html was clicked. 
