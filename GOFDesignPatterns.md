# Design Patterns

## Creational

---

### Factory

A factory design pattern adds extra abstraction between creation of the object and where it is used. This pattern is an interface that defers the creation of the final object to a subclass. Used when we dont know what or how many objects need to be created until runtime. Removes the need for the client to have to know specifics of building an object. Main theme is that the project defers the creation of objects to the subclass that the factory has delegated it too.

#### Terminology

- Concrete Creator: Calls the Factory Method
- Product Interface: describes the attr and methods that is required in order to create the object
- Creator: declares factory method that returns the object
- Concrete Product: the object returned from the product interface

---

### Builder

Fairly similar to the Factory Pattern. The difference is that creating an object is more complex. Instead of the Factory returning `ObjectA` it calls the builder constructor method `ObjectA.construct()`.

#### Terminology

- Product: the product being built
- Builder Interface: the interface the concreate builder should implement
- Builder: Provides methods to build and retrieve concrete products.
- Director: has a `construct()` method that creates a customized product using the builder methods

---

### Prototype

Saves resources by creating a copy of any existing object that is already in memory. Create a static clone method that is implemented by all classes that use the interface. Deep or shallow copies. Used to create an object at runtime from a object that is already initiated using it as a template. Useful when the builder is a complex resource intensive process. "Why build a whole new house when you can just copy the neighboring house and add different furniture.". Need to decide how deep the clone needs to be.

#### Terminology

- Prototype Interface: Describes the `clone()` method
- Prototype: The object or interface that implements the Prototype Interface
- Client: the client application that uses and creates the prototype.

---

### Singleton

Used when we only want a single instance of an object. We can enforce that even if we create multiple instances of an object by ensuring they reference the original instance. Needs to use static methods, static variables and/or class methods. There can only be one copy of the Singleton no matter how many times or in which class it was created. Similar to a global variable.

## Structural

---

### Decorator

Allows adding additional responsibilities at runtime. Adds extensibility without modifying the original object. Can nest decorators recursively. Can remove the decorator if we no longer need it. More flexible than static inheritance.

#### Terminology

- Component Interface: An interface for objects.
- Component: The object that may be decorated.
- Decorator: The class that applies the extra responsibilities to the component being decorated. It also implements the same component interface.

---

### Adaptor

Similar to Decorator. Allows non compatible interfaces to interact. Can adjust the methods to overwrite the defaults. Modifying the method signatures, combining methods or transforming data that is exchanged between the interface and the client. Used when we have a exisiting interface that doesnt directly map to the interface the client requires.

#### Terminology

- Target: The domain specific interface or class that needs to be adapted.
- Adapter Interface: The interface of the target that the adapter will need to implement.
- Adapter: The concrete adapter class containing the adaption process.
- Client: The client application that will use the Adapter.
