'use strict';

const {Vertex, Edge, Graph} = require ('../breadth-first');

describe ('Graph Class', () => {

  it('should return a collection of vertices from a  graph.', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 1);
    graph.addDirectedEdge(vertexTwo, vertexThree, 1);
    graph.addDirectedEdge(vertexTwo, vertexFour, 1);
    graph.addDirectedEdge(vertexThree, vertexFour, 1);
    graph.addDirectedEdge(vertexThree, vertexFive, 1);
    graph.addDirectedEdge(vertexThree, vertexSix, 1);
    graph.addDirectedEdge(vertexFour, vertexSix, 1);
    graph.addDirectedEdge(vertexFive, vertexSix, 1);
    // console.log({graph});
    expect([...graph.bfs(vertex)]).toEqual([vertex, vertexTwo, vertexThree, vertexFour, vertexFive, vertexSix]);
  })

  it('should return a collection of vertices from a linear graph.', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 1);
    graph.addDirectedEdge(vertexTwo, vertexThree, 1);
    graph.addDirectedEdge(vertexThree, vertexFour, 1);
    graph.addDirectedEdge(vertexFour, vertexFive, 1);  
    graph.addDirectedEdge(vertexFour, vertexSix, 1);
    // console.log({graph});
    expect([...graph.bfs(vertex)]).toEqual([vertex, vertexTwo, vertexThree, vertexFour, vertexFive, vertexSix]);
  })

  it('should return null for an empty graph', () => {
    let graph = new Graph();
    // console.log(graph);
    expect(graph.bfs()).toEqual(null);
  })

})