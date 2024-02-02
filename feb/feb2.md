# HTTP request. 

An http request is an object that comes from the client side and is often is "what" the client is seeking. There are various different parts to a request and I will break them down as to make a better understanding.

- Method(`req.method`):
    this represents the HTTP method that is being used for the request, such as GET, POST, PUT, DELETE, etc

- URL(`req.url`):
    This represents the URL of the requested resource, including the path and any query parameters.

- Headers(`req.headers`):
    This represents the HTTP headers that is being sent by the client in the request. Headers contain information about the request, such as the user agent, content type, authorization.

- Query Parameters(`req.query`):
    This represents the queary parameters in the URL.

- Request Body(`req.body`);
    The data sent by the client in the request body. This is commonly used for POST, PUT, and other requests where the data is sent in the request body, often in JSON format.

- Cookies(`req.cookies`):
    The cookies sent by the client in the request. Cookies are often used to store small pieces of information on the client side.

- Path Parameters(`req.params`):
    Represent parameters Extracted from the path of the URL. this is common in the routing systems where parts of the URL are treated as dynamic parameters.

- Protocol(`req.protocol`):
    Represents the protocol used for the request, such as 'http' or 'https'

Although these are common parts of the request object, the exact structure of the object can vary based of the web frame work. 