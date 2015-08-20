# Numeric-Sequence-Calculator-using-.NET-and-Angular-
Numeric Sequence Calculator app is responsible for generating different kinds of sequences(Even, odd, Fibonocci and custom numbers) based on user input.The app is developed based on ASP.NET MVC C# and with some AngularJS,the working procedure given as follows.
<p>The user enters the positive whole number, then clicks the generate button to produce all sequences.
By using angularjs we make $http ajax calls to the server where the relevent action methods are defined in perticular controller.
There action methods gets executed and returns the required sequences as Json data. By using angularjs we bind those json data to our UI.</p>
<h2>Description</h2>
This is web based app that lets you create following types of sequences from a given positive whole number  
 <ul><li>All numbers upto and including the number entered.</li>  
 <li>All odd numbers upto and including the number entered.</li>  
 <li>All even numbers upto and including the number entered.</li>  
 <li> All numbers upto and including number entered, except when</li>  
      <ul><li>A number is a multiple of 3 output C, and when</li>  
         <li>A number is a multiple of 5 output E, and when</li>  
         <li>A number is multiple of 3 and 5 output Z</li></ul>  
 <li>All fibonacci numbers upto and number entered.</li></ul>  
<h2>Running the Application</h2>
1) Grab the zip file from this repo and unzip in a clean folder.<br/>
2) Load the entire solution (NumericSequenceCalculator.sln) in Visula Studio(I used visual studio express 2013).<br/>
3) Rebuild the solution.<br/>
4) Hit f5 to run the site, the instructions button appears along with textbox to enter input and Generate button to generate sequences.
<h2>Running unit tests</h2>
1) Tests are written for the controller actions (which are responsible for generating sequences) using MStest provided by Visual Studio.<br/>
2) Unit tests are written for the Angular js code(~/Scripts/app.js) using Jasmine 2.3.4 is present in the NumCalculatorSpec.js (~/Scripts/NumCalculatorSpec.js).These tests can be easily run by using SpecRunner.html present in the project solution.<br/>
3) End to End UI tests are written using CasperJs.These tests are present in the folder End-to-End UI Tests(UITest.js) in the solution.<br/>
<h3>Running UI Tests using CasperJs</h3>
 1)CasperJs is fast Testing framework, Firstly we need to install casperjs into the system,it is completly casper caommand line based.<br/>
 2) After installing CasperJs run this command using casper command tool.<br/>
 <code>$ casperjs test UITest.js</code>

