import CodeImage from "@/components/codeImage";
import BlogLayout from "@/layout/blogLayout";

const RaectInterviewPreperation = () => {
  return (
    <>
      <BlogLayout>
        <CodeImage
          className="object-cover w-full"
          image="https://www.copycat.dev/blog/wp-content/uploads/2022/12/React-Interview-Questions.png"
        />

        <h1>1.What is React?</h1>
        <p>
          React is a front-end and open-source JavaScript library which is
          useful in developing user interfaces specifically for applications
          with a single page. It is helpful in building complex and reusable
          user interface(UI) components of mobile and web applications and it
          follows the component-based approach.
        </p>

        <h1>2.What is useState?</h1>
        <p>
          useState is a function that allows us to use state variables in
          functional components. It takes the initial state as an argument and
          returns an array containing two Items ,first Item is the current value
          of state and Second item is a function to update it.
        </p>

        <h1>3.What are Keys in React</h1>
        <p>
          A key is a special string attribute that needs to be included when
          using lists of elements.
        </p>
        <h1>4.What is JSX</h1>
        <p>
          JSX stands for JavaScript XML. It allows us to write HTML inside
          JavaScript and place them in the DOM without using functions like
          appendChild( ) or createElement( ).
        </p>
        <h1>
          5. Differences between functional and Class components? what should we
          use and Why
        </h1>
        <p>
          .a) Functional can be declared using an arrow function . where Class
          Component can be declared using ES6 Class
          <br />
          .b) Fuctional Component uses useState and useEffect to manage state
          and perform side effects. In Other Hand Class components have
          traditionally been the primary way to manage state and lifecycle
          methods in React. They maintain their own state using this.state and
          can modify it using this.setState().
          <br />
          .c) functional components are more readable Then Class
          components.Beacause Class Component have more boilerplate code due to
          the class syntax and lifecycle methods. They can be harder to read and
          understand, especially for developers who are new to React or come
          from non-object-oriented programming backgrounds.
          <br />
          .d)functional components are generally preferred over class components
          due to their simplicity, readability, and the availability of hooks
          for managing state and lifecycle methods
        </p>
        <h1>6.What is Virtual Dom</h1>
        <p>
          virtual DOM is a virtual representation of the real DOM.It is Faster
          Than Actaul Dom .Whenever Any State Changes React updates the virtual
          DOM first instead of the actual DOM
        </p>
        <h1>
          7.What are the differences between controlled and uncontrolled
          components
        </h1>
        <p>
          In controlled components, the value of the form element (like
          &lt;input&gt; or &lt;textarea&gt;) is controlled by React state.
          <br />
          In uncontrolled components, the value of the form element is managed
          by the DOM itself. You can still access the input value using a ref,
          but React doesn't control the input value through state.
        </p>

        <h1>8.Props & State</h1>
        <p>
          <li>
            Props are inputs to a React component.
            <br /> They are passed from parent components to child components.
            <br />
            Props are immutable, meaning they cannot be modified by the
            component itself.
          </li>
          <li>
            The state is a built-in React object that is used to contain data or
            information about the component.
            <br />
            They are Mutable in Nature ,whenever it changes, the component
            re-renders.
            <br />
            can only be passed as props
          </li>
        </p>
        <h1>9.Element & Componet</h1>
        <p>
          <li>
            In React an element represents a single piece of the user interface,
            typically a DOM element like &lt;div&gt;, &lt;span&gt;, or
            &lt;p&gt;.
          </li>
          <li>
            A component is a reusable, self-contained piece of UI that may
            consist of one or more elements.
          </li>
        </p>
        <h1>10.prop drilling in React?</h1>
        <p>Prop Drilling Means Passing Data to Components that dont need </p>
        <h1>What are error boundaries?</h1>
        <p>
          Error boundaries provide a way for us to catch errors that occur in
          the render phase.
        </p>
        <h1>11.React Hooks</h1>
        <p>
          React hooks are functions that allow functional components to manage
          state, perform side effects, and access React lifecycle features
          without using class components. They were introduced in React version
          16.8{" "}
        </p>
        <h1>12. What are the rules using React Hooks</h1>
        <p>
          <li>Only Call Hooks at the Top Level</li>
          <li>Call Hooks in Functional Components</li>
        </p>
        <h1>13.life cycle method in react</h1>
        <p>
          React lifecycle methods are special methods that are invoked
          automatically at various points during the lifecycle of a React
          component.
          <br />
          Mounting Phase:
          <li>
            constructor(): The constructor method is called before a component
            is mounted.
          </li>
          <li>
            render(): The render method is required and must return JSX to be
            rendered on the screen.
          </li>
          <li>
            componentDidMount(): This method is called after the component is
            rendered into the DOM. It is often used to perform tasks like
            fetching data from an API or setting up event listeners.
          </li>
          <br />
          <br />
          Updating Phase:These methods are called when a component is being
          re-rendered as a result of changes to its props or state.
          <li>
            shouldComponentUpdate(nextProps, nextState): This method allows you
            to control if the component should re-render based on changes in
            props or state.
          </li>
          <li>
            componentDidUpdate(prevProps, prevState): This method is called
            after the component has been updated and re-rendered. It can be used
            to perform side effects such as updating the DOM or fetching new
            data based on changes
          </li>
          <br />
          <br />
          Unmounting Phase: These methods are called when a component is being
          removed from the DOM.
          <li>
            ComponentWillUnmount(): This method is called just before the
            component is unmounted and destroyed.{" "}
          </li>
        </p>

        <h1>14.UseEffect</h1>
        <p>
          useEffect is a React hook that enables you to perform side effects in
          functional components. Side effects include data fetching,
          subscriptions, or manually changing the DOM. It's similar to lifecycle
          methods in class components like componentDidMount,
          componentDidUpdate, and componentWillUnmount.
          <br />
          and it take two parameter
          <li>Callback Function</li>
          <li>Dependency Array</li>
        </p>
        <h1>15.Ref</h1>
        <p>Refs are a feature in React that provide a way to directly interact with DOM elements or React components created in the render method. They allow you to reference and manipulate DOM nodes or React components outside of the typical React data flow.</p>
      </BlogLayout>
    </>
  );
};

export default RaectInterviewPreperation;
