
import './App.css';
let Nav=()=>{
  return <nav className="navbar">
  <ul className="nav-item">
  <li className="nav-logo">
      <a>React-Introduction</a>
    </li>
    <li className="nav-link">
      <a>home</a>
    </li>
    <li className="nav-link">
      <a>about-us</a>
    </li>
    <li className="nav-link">
      <a>contact-us</a>
    </li>
  </ul>

</nav>
}
let Reactintroduction =()=>{
return <div className="itro-react">
  <h1>react-introduction</h1>
     <p>React is a front-end JavaScript library developed by Facebook in 2011.

It follows the component based approach which helps in building reusable UI components.
It is used for developing complex and interactive web and mobile UI.
Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.The interesting fact to note here is ReactJS is only a frontend library and not a whole framework, which deals with the View component of MVC (Model – View – Controller).

Also, in React, everything is a component. Consider one lego house as an entire application. Then compare each of the lego blocks to a component which acts as a building block. These blocks/ components are integrated together to build one bigger and dynamic application.</p>
<h1>spa vs mpa</h1>
     <p>SPA wins in terms of speed and code reusability, which can be applied to develop your mobile app, but it has deficiencies in SEO optimization. Using an MPA will help you rank higher in Google and is more scalable but much slower than SPA's. ... MPA's are best used in e-commerce apps, business catalogues, and marketplaces</p>
     <h1>Angular vs. React</h1>
     <p>Angular is a Javascript framework built using Typescript, while Reactjs is a Javascript library and built using JSX. Angular is mostly used to build complex enterprise-grade apps like single-page apps and progressive web apps, while React is used to build UI components in any app with frequently variable data. Angular’s learning curve is steeper due to its too many in-built functionalities while React’s smaller package size.</p>
     <h1>library vs.framework</h1>
     <p><h2>What is Library?</h2>
A Library is a set of code that was previously written by a developer that you can call when you are building your project.

In Library, you import or call specific methods that you need for your project.

In simple words, a bunch of code packed together that can be used repeatedly is known as Library.

Reusability is one of the main reasons to use libraries.

Let's understand this more clearly with the help of an example.

Think of you as a carpenter who needs to build a table.

Now, you can build a table without the help of tools, but it's time-consuming and a long process.

Whereas, if you choose the correct tools, you'll be able to build a table more quickly and that too without any hardship.

Think of here tools as a library. You can write your program without them.

But it will be a long process, and chances are your program will get buggy, while if you use Library, it'll be much easier for you to work with the program.

For example, if you use the in-built JavaScript fetch () method to fetch the data from API and you feel that it's not the ideal solution.

Then you can use Axios Library for the same purpose to make your work easier.s</p>
    
<h2>What is Framework?</h2>
<p>
A framework is a supporting structure that gives shape to your code.

In the Framework, you have to fill the structure accordingly with your code.

There is a specific structure for a particular framework that you have to follow, and it's generally more restrictive than Library.

One thing to remember here is that frameworks sometimes get quite large, so they may also use the Library.

But the Framework doesn't necessarily have to use Library.

Let's get back to our carpenter and table example for a better understanding of the Framework.

Here, if you want to build a table, then you need a model or skeleton for how the table looks, like the table has four legs and a top slab.

Now, this is the core structure of the table and you have to work accordingly to build the table.

Similar to this, Framework also provides the structure, and you have to write the code accordingly.</p>
<h1>two way data binding</h1>
       <p>Typically, the former describes two-way data binding, while the latter is a form of one-way data binding. The difference is how the UI element is updated. ... Even though both React and Angular 2 update the UI element from user interaction, React forces the model to be updated first, and then the UI element is updated.</p>
   
</div>
}



function App() {
  return (
    <div >
     <Nav/>
     <Reactintroduction/>
  
  
 
   
     

   </div>
  );
}

export default App;
