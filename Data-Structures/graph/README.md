# Graphs


## Challenge

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods: `AddNode()`, `AddEdge()`, `GetNodes()` and `GetNeighbors()`.

## Approach & Efficiency

`AddNode()` Adds a new node to the graph Takes in the value of that node Returns the added node
- Big (O) Space and Time = O(1)

`AddEdge()` Adds a new edge between two nodes in the graph Include the ability to have a “weight” Takes in the two nodes to be connected by the edge Both nodes should already be in the Graph
- Big (O) Space and Time = O(1)

`GetNodes()` Returns all of the nodes in the graph as a collection (set, list, or similar)
- Big (O) Space and Time = O(n^2)

`GetNeighbors()` Returns a collection of edges connected to the given node Takes in a given node Include the weight of the connection in the returned collection
- Big (O) Space and Time = O(n^2)

`Size()` Returns the total number of nodes in the graph
- Big (O) Space and Time = O(n^2)