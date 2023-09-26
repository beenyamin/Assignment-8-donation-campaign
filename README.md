

                              => Question <=
                         Add at least 3 Project features


                          => This is the answer <=

                 I have used three important features in this project

    1. Route,
    2. LocalStorage,
    3. React CusTom Hook ,
                                1 ==> Route <==

    A route, in the context of web development, refers to a specific URL or URI (Uniform Resource Identifier) path that is used to access a particular resource or page on a website or web application. Routes are essential for navigating between different sections or views of a web application and are typically associated with specific content or functionality.
    
                      Here are key points about routes:

1.URL Structure: A route is often defined by a unique URL path that appears in a web browser's address bar. For example, https://example.com/products might be the route for accessing a page that displays a list of products.

2.Nested Routes: Some web applications use nested routes to organize content hierarchically. This allows for complex page structures, such as dashboards with multiple sub-sections.

3.Client-Side Routing: In single-page applications (SPAs), client-side routing is commonly used. This means that route changes are handled by JavaScript on the client side without triggering full page reloads. This approach provides a smoother and more responsive user experience.

4.Server-Side Routing: In traditional web applications, route changes often involve server-side routing. When a user requests a specific route, the server determines which code or template to execute and sends the corresponding HTML response.


5.SEO: Properly designed routes are important for search engine optimization (SEO). Search engines use routes to index and rank web pages. Semantic and descriptive routes can improve a website's SEO.

6.Route Handling: In modern web frameworks and libraries, route handling is often abstracted into dedicated router libraries or built-in routing systems. These routers facilitate the definition of routes and the associated components or actions to be executed when a route is visited.

      


                                2 ==> LocalStorage <==


  localStorage is a web storage feature provided by modern web browsers that allows web applications to store data in a key-value pair format on a user's local device. It's a part of the Web Storage API along with sessionStorage. 
        
        
                     Here are some key points about localStorage:


1.Key-Value Storage: localStorage allows you to store data as key-value pairs. The keys and values are both strings.

2.Persistent Storage: Unlike sessionStorage, which is limited to the lifetime of a single page session, localStorage provides persistent storage. This means the data stored in localStorage remains available even when the user closes the browser or navigates away from the page.



3.Storage Limit: localStorage has a storage limit of around 5-10 megabytes, which can vary depending on the browser. This makes it suitable for storing small to moderately sized amounts of data.

4.Data Types: While localStorage stores data as strings, you can use methods like JSON.stringify() to store and retrieve more complex data types, such as objects and arrays, by converting them to strings before storage and parsing them back when retrieved.


5.Security: Data stored in localStorage is considered relatively secure because it cannot be accessed by other websites due to the same-origin policy enforced by web browsers.




                               3 ==> React CusTom Hook <==

  Custom hooks provide a way to modularize and organize our code, making it more maintainable and reusable.


         Here are some key characteristics and use cases for custom hooks:

(1.Reusability) :=> Custom hooks allow you to extract and reuse complex logic that We use in multiple components. This promotes the "DRY" (Don't Repeat Yourself) principle in our code.

(2.Separation of Concerns) :=> Custom hooks help separate concerns in our components. They allow us to keep our components focused on rendering and user interface concerns while delegating other logic to the custom hook.


(3.Composition) :=> we can compose multiple custom hooks together to create more complex behavior. This makes it easier to manage and combine different aspects of functionality.


(4.Testing):=> Custom hooks can be tested just like regular JavaScript functions, promoting testability and ensuring that our logic behaves as expected.


( 5.Sharing ):=> Custom hooks can be shared within our codebase, between different projects, or even with the broader React community by publishing them as npm packages. This sharing encourages code reuse and collaboration.


(6.Encapsulation):=> Custom hooks encapsulate their logic, making it easier to understand and maintain. They abstract the implementation details, providing a clean API for components to interact with.