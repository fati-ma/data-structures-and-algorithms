'use strict';

const {Vertex, Edge, Graph} = require ('../graph.js');

describe ('Graph Class', () => {

  it('should add a node to the graph.', () => {
    let vertex = new Vertex(7);
    let graph = new Graph();
    graph.addVertex(vertex);
    // console.log({vertex}, {graph} )
    expect(graph.getNeighbors(vertex)).toEqual([]);
  })

  it('should add an edge to the graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    // console.log({vertex}, {vertexTwo}, {graph});
    expect([...graph.bfs(vertex)]).toEqual([vertex, vertexTwo]);
  })

  it('should return a collection of vertices from a  graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let vertexThree = new Vertex(1);
    let vertexFour = new Vertex(2);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    graph.addDirectedEdge(vertexTwo, vertexThree, 6);
    graph.addDirectedEdge(vertexThree, vertexFour, 7);
    // console.log({graph});
    expect([...graph.bfs(vertex)]).toEqual([vertex, vertexTwo, vertexThree, vertexFour]);
  })

  it('should return a collection of neighbors graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let vertexThree = new Vertex(1);
    let vertexFour = new Vertex(2);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    graph.addDirectedEdge(vertexTwo, vertexThree, 6);
    graph.addDirectedEdge(vertex, vertexFour, 7);
    // console.log(graph.getNeighbors(vertex));
    expect(graph.getNeighbors(vertex).length).toEqual(2);
  })

  it('should return edge weights in a collection of neighbors graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let vertexThree = new Vertex(1);
    let vertexFour = new Vertex(2);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    graph.addDirectedEdge(vertexTwo, vertexThree, 6);
    graph.addDirectedEdge(vertex, vertexFour, 7);
    // console.log(graph.getNeighbors(vertex));
    expect(JSON.stringify(graph.getNeighbors(vertex))).toContain('weight');
  })

  it('should return the size of a graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let vertexThree = new Vertex(1);
    let vertexFour = new Vertex(2);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    graph.addDirectedEdge(vertexTwo, vertexThree, 6);
    graph.addDirectedEdge(vertex, vertexFour, 7);
    // console.log(graph.getNeighbors(vertex));
    expect(graph.size(vertex)).toEqual(4);
  })


  it('should return a size of 0 for an empty graph', () => {
    let graph = new Graph();
    // console.log(graph);
    expect(graph.size()).toEqual(0);
  })

})