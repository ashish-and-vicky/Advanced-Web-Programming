# Day 15
- What is NodeJS?
- Server Side Programming (It can connect with DB) vs Client Side Programming
- The JS in NodeJS does not only define that it can be used only in client side
- Backend Engineer vs Front End Engineer
- We can use Javascript in server environment, apart from Browser only.
- It is Asynchronous in Nature.

- NodeJS vs (JAVA[Servlet, JSP], PHP, ASP, .NET, Ruby Rail)
- Older Generation does not Understand what is callback
-Advantage or  Disadvantage (Programming Style / Structure) :: [Scripting Language]

# Day 14

- jQuery vs document (jquery was mainly designed to support DOM operation)
- \$("#id1") vs document.querySelector('#id1') vs document.getElementById('id1')

# Day 13

- HTTP
  -- GET
  --- TRANSPARENT
  --- SEND MIN INFORMATION TO THE SERVER AND GET MAX INFORMATION FROM SERVER
  --- INFORMATION ARE SEND IN URL
  --- LIMITATION - 1 :: THE LENGTH OF THE URL IS LIMITED
  --- LIMITATION - 2 :: URL IS READABLE :: CONCERN :: SECURITY CONSTRAINT
  --- LIMITATION - 3 :: Only Text informaton. Binary Data LIMIATION (IMG, MP3, MP4)

  --- Reference URL

```
  https://www.google.com/                         :: URL WITHOUT INFORMATION
  https://www.google.com/search?q=java&oq=java&   :: URL WITH INFORMATION SENT BY CLIENT
```

-- POST
--- IT DOES NOT PASS INFORMATION IN URL (HTTP BODY)
--- NO LENGHT LIMIATATION
--- SECIRITY ISSUE
--- BINARY DATA SUPPORT.
-- PUT
-- DELETE

## STUDY URL

```
  https://www.google.com:80/                         :: URL WITHOUT INFORMATION
  https://www.google.com:80/search?q=java&oq=java&   :: URL WITH INFORMATION SENT BY CLIENT
  https://drive.google.com/
  https:/mail.google.com/abcd/?

  http://localhost:5500/day12/3.html

https://www.google.com/search?

```

- Seprator
  -- :// Between Protocl and Domain
  -- . Between Domain Name and Extension
  -- : Between Domain And Port
  -- / Between Path Parameter
  -- ? Query Separator (Optional) [KEY and VALUE]
  -- & Between two key
  -- = key and value
  e.g ?key1=value1&key2=value2&key3=value3

- 1. Https => Protocol
- 2. www => Sub Domain
- 3. google => domain
- 4. com => domain extension
- 5. :80 => Default port of web (: is the seprator between Domain and Port Number)
- 6. /serach => Path Parameter
- 7. ?

https://devdocs.io/http/methods/get
https://home.openweathermap.org/api_keys

# SUBMITTING A FORM

- username email and password
- https://www.mydomain.com/form?username=mean&password=12345&email=abcd@gmail.com

# Weather API

- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
- https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7023923dd26a725da995c75b65864de5&units=metric

* jQuery
* HTTP
* Weather Application

# Day 12

# JSON

- Read a property
- Update a property
- Delete a property
- Array of JSON
- JSON with Property cantaing Array Value

# FAKE REST API (MY FAKE SERVER)

- https://fakerestapi.azurewebsites.net/
- https://reqres.in/

# Day 11

- AJAX, XML, JSON

## AJAX CALL

- let xhr = new XMLHttpRequest();
- xhr.open() // study open()

- This must comes before send() method
- xhr.onreadystatechange = ()=> {} // handle responses
- xhr.readyState
- xhr.reponseText // response from the server;;
- xhr.responseXML

- xhr.send()

# Day 10

- Bootstrap and DOM Operations.

# Day 9

- how to stop non block things // how to stop interval :: SANAM or ME (clearInterval())
- what can be the problem with `Async block or Non Blocking Code`.

# Bootstrap

- What is boostrap
  -- CSS Framework
  -- Its Super Easy to learn.
  -- It consist of reusable style; that means lot of CSS classes.

- Basic Reusable Classes Provided By Bootstrap.
  -- container, container-fluid
  -- row, col

# Rule 1 :: Linking the Boostrap in the Program.

- Link the Bootstrap in your html.
- Add the meta tag; with the help of website.

# Rule 2

- Put Everything Under
  `container || container-fluid`
  `row, col`
  `sm, md, lg, xl`
  `col-sm, col-md, col-lg`
  `col-md-6 col-sm-12`
  `align-items-center`
  `justify-content-start, justify-content-end, justify-content-between`

## colors classes

`primary, seconday, info, success, warning, danger, light, dark`
-- bg-primary
-- bg-secondary
-- bg-info
-- bg-success
-- bg-warning
-- bg-danger
-- bg-light
-- bg-dark

-- text-primary
-- text-secondary
-- text-info
-- text-success
-- text-warning
-- text-danger
-- text-light
-- text-dark

-- mt, mb, ml, mr
-- pt, pb, pl, pr

- Why?
  -- Creating Layout (we can create with flex; somehow it is not easy.)
  -- Making Elements (Webpage) beautiful.
  -- Default Styling of an Element

- Advantage
  -- Responsive
  -- In Build Classes
  -- Consistency
- Disadvantage
  -- Size

# Day 8

- Chrome Dev Tools
- JS Fundamentals Programming syntax and Functions and callbackfunction
- bootstrap
- functions parameter
- callback functions usage
- Arrays, JSON and XML
- Ajax Preparation

## Selector Javascript

- document.querySelector() # All in One
- document.getElementById()
- document.getElementByTagName()
- document.getElementByClassName()

## Practice Functions

- Named,
- Annony,
- Arrow Function and
- Callback

## Study Global Function

- setTimout() // with callback fn
- setInterval() // with callback fn

## Study

- Blocking code
- Non Blocking Code /Asnchronous code

## Array Fundamental

- declare
- access
- update
- update at any index (Splice)

## Working with Objects usin JSON

- {}

## Working with an Array of Object.

- [{}, {}, {}]

# Day 7

- Chrome Dev Tools
- JS Fundamentals Programming syntax and Functions and callbackfunction
- bootstrap
- Event and keyCode
- callback / event
- window.addEventListener

# Callback Syntax

- A function which accepts function as an another paramter.

# Documentation

- https://devdocs.io/
- https://www.w3schools.com/JSREF/DEFAULT.ASP

# Day 6

- document DOM Operations
- Chrome Dev Tools
- JS Fundamentals
- CSS Selectors

# Next

- Layout like whatsapp
- Practice
- Edit the comment
- Boostrap
- Ajax

# Quick Revision

- document
- innerHTML
- querySelector, getElementById, getElementByClassName, getElementByTagName
- createElement
- children
- parent and parentElement
- remove and removeChild

# Todo

- Dynamic Comment with Input field
- Insert latest comment at the top
- Layout to delete the comment and challanges
- Layout to delete using clone
- Delete Comment using this

## Method/Function Declartion Rule in C / Javascript

```
String main(String a) {

  return "Hello"
}
```

```
function main() {

  // return "hello world";
  // return;
}
```

```
  // it takes one parameter and data type of parameter is int
  // it reutnrs int value
  int main(int a, string b) {
    return 100;
  }


  function main(a, b) {
    return 100;
  }
```

## Concept of this

- this represesnt current object;
- in html; elements are also object;

# Day 5

- Chrome Dev Tools
- JS Fundamentals
- CSS Selectors
- document

# Difficulites Which we faced yesterday??

- html & js (inline/internal/external)
- SYNTAX (let / var /const / function)
- document (querySelector, getElementById)
- innerHTML
- Flow of the program / dry run (Button/Event/Action/logic)

## Common Mistakes

- We have not included the JS file
- Spell Error in method name
- Spell Error in js file name / inclusion
- console.log never appperas in web page.

# Day 4

- Flexbox [ CV Practical / Google Page]
- CSS Selectors
- Chrome Dev Tools
- JS Fundamentals
- HTML Form Elements
- Fontawsome
- background and graident

# JavaScript

- Button Click Event Action Validate Logic

- HTML - This is all about PRESENTATION of data. using predefined tags.
- CSS - This is all about making things BEAUTIFUL. (Make tags beautiful)
- JS - This is all about making things INTERACTIVE. (Making tags/element interactive )

# HTML & JS Binding

- Inline - alert()
- Interal - <script>
- External - <script src="">

# HTML & CSS Binding

- Inline - Using style="" attribute inside an Element
- Internal - Using <style> tag
- External - Using <link> tag

# HTML & XML

- Both are mark up language
- Both are consit of Tags
- Syntax of markup language <html></html> || <dac></dac>
- Must have root tags or root node or root element. #1
- Tags must be closed. #2
- Tags must be properly closed. #3 (Stack || bracket match)

# Assignment Questions?

- How and Where to run the XML ?
- What is the purpose and use of xml?
- Tricky - can we use html tag in xml; will that xml remains valid xml?

# Practical Assignment

- Create your own Profile / CV using flexlayout.

# Observe / Study the URL

- http://localhost:5500/day3/1.html
- https://www.google.com/
- https://dacroom.web.app/home
  -- http/https PROTOCOL || Application Layer Protocol.

# Day 3

- Flexbox [Direction / Demo]
- Fontawsome
- Momentum
- Google
- background and graident
- Gradient

## Flex Continues

- display : flex;
- flex-direction : row/column;
- justify-content : Main Axis
- align-items : Corss Axis
- flex:1

- direction Row
  -- Main Axis (X) / Cross Axis (Y)
- Direction Column
  -- Main Axis (Y) / Cross Axis (X)

## Image as background

background
background-repeat
background-size
bcackground-position

# Day 2

- Quick Revision
- CSS Basics Property [color, background, border, margin, padding, units, colors ]
- CSS Flex Box Detail

### Most important tag of the Day 2

- <div>

### Most Important CSS Property

- color (foreground)
  -- COLOR_NAME
  -- rgb(200, 200, 200)
  -- rgba(50, 50, 50, 1) A is OPACITY here, the value can be (0, 1)
  -- hashcode (#4a8ad3)
- background
- border
  -- border width
  -- border style (solid/dotted)
  -- border color
- border-left
- border-right
- border-top
- border-bottom
- border-radius

- margin (If we want space BETWEEN element)
  -- margin-top
  -- mrging-bottom
  -- margin-left
  -- margin-right
- padding (Space WITHIN element)
  -- padding-top
  -- padding-bottm
  -- padding-left
  -- padding-right

### Text Styling

- color
- font-size
- font-weight
- font-family
- text-align (Mircrosoft, Left/Center/Right/Justify)

### Element Adjacent to Each other

- float : left;
- display: inline;

#### Related with flex

- diplay: flex; // Very Important
- justify-content : flex-start/center/flex-end/space-between :: Main Axis
- align-items :: Cross Axis

# Day 1

- Predefined Tags
- Angular Brackets
- Root Tags
- How to run the HTML Program.

# Extension 1 - How to run the HTML Program.

- Install Extenstion - Live Server
- Ctrl + Shift + P

# Extensin 2 - How to Indent/Format the Program.

- Setting -> Format -> Find and enable the format on save options

- Head Tag

# Tags have set of attributes

- But that is not mandatory
- id - Id should be unique
- name - Name will try to keep this also unique
- style - Styling
- class - Styling Common

# Hard Working

- Vipul- Ajax
- Ritesh
- Leena
- Rahul - Media
- Pratik
- Aman - Callback
- CV based website.

# Basic Rules of CSS

color:black;
background:white;

# Binding :: Link the CSS with HTML

css-property : property-value;

# CSS can be applied in three different way

- Inline Styling
  -- It applies only to one element; (and its child elements).
- Internal Styling
  -- Clean Program
  -- This can be applied to multiple elements

# Default things

color :black
background: white;
starts : top left;
width: 100% (blocking elemnt)
height: default height
