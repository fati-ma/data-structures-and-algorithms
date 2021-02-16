'use strict';

const {Vertex, Edge, Graph} = require ('../depth-first');

describe ('Graph Class', () => {

  it('should return a collection of vertices from a  graph given a starting vertex in depth first order.', () => {
    let vertexA = new Vertex('A');
    let vertexB = new Vertex('B');
    let vertexC = new Vertex('C');
    let vertexD = new Vertex('D');
    let vertexE = new Vertex('E');
    let vertexF = new Vertex('F');
    let vertexG = new Vertex('G');
    let vertexH = new Vertex('H');

    let graph = new Graph();

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);
    graph.addVertex(vertexC);
    graph.addVertex(vertexD);
    graph.addVertex(vertexE);
    graph.addVertex(vertexF);
    graph.addVertex(vertexG);
    graph.addVertex(vertexH);
    graph.addDirectedEdge(vertexA, vertexB, 1);
    graph.addDirectedEdge(vertexB, vertexC, 1);
    graph.addDirectedEdge(vertexC, vertexG, 1);
    graph.addDirectedEdge(vertexB, vertexC, 1);
    graph.addDirectedEdge(vertexB, vertexD, 1);
    graph.addDirectedEdge(vertexD, vertexE, 1);
    graph.addDirectedEdge(vertexD, vertexH, 1);
    graph.addDirectedEdge(vertexH, vertexF, 1);
    graph.addDirectedEdge(vertexD, vertexA, 1);

    // console.log({graph});
    let output = graph.dfs(vertexA);
    console.log('TEST 1: ', {output});
    expect([...output]).toEqual([vertexA, vertexB, vertexC, vertexG, vertexD, vertexE, vertexH, vertexF]);
  })

  it('should return a collection of vertices from a bi-directional graph given an adjacency lists in depth first order.', () => {
    let vertexA = new Vertex('A');
    let vertexB = new Vertex('B');
    let vertexC = new Vertex('C');
    let vertexD = new Vertex('D');
    let vertexE = new Vertex('E');
    let vertexF = new Vertex('F');
    let vertexG = new Vertex('G');
    let vertexH = new Vertex('H');

    let graph = new Graph();

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);
    graph.addVertex(vertexC);
    graph.addVertex(vertexD);
    graph.addVertex(vertexE);
    graph.addVertex(vertexF);
    graph.addVertex(vertexG);
    graph.addVertex(vertexH);
    graph.addDirectedEdge(vertexA, vertexB, 1);
    graph.addDirectedEdge(vertexB, vertexC, 1);
    graph.addDirectedEdge(vertexC, vertexG, 1);
    graph.addDirectedEdge(vertexB, vertexC, 1);
    graph.addDirectedEdge(vertexB, vertexD, 1);
    graph.addDirectedEdge(vertexD, vertexE, 1);
    graph.addDirectedEdge(vertexD, vertexH, 1);
    graph.addDirectedEdge(vertexH, vertexF, 1);
    graph.addDirectedEdge(vertexD, vertexA, 1);

    graph.addDirectedEdge(vertexB, vertexA, 1);
    graph.addDirectedEdge(vertexC, vertexB, 1);
    graph.addDirectedEdge(vertexG, vertexC, 1);
    graph.addDirectedEdge(vertexC, vertexB, 1);
    graph.addDirectedEdge(vertexD, vertexB, 1);
    graph.addDirectedEdge(vertexE, vertexD, 1);
    graph.addDirectedEdge(vertexH, vertexD, 1);
    graph.addDirectedEdge(vertexF, vertexH, 1);
    graph.addDirectedEdge(vertexA, vertexD, 1);
 
    // console.log({graph});
    let output = graph.dfs(vertexA);
    console.log('TEST 1: ', {output});
    expect([...output]).toEqual([vertexA, vertexB, vertexC, vertexG, vertexD, vertexE, vertexH, vertexF]);
  })

  it('should return null for an empty graph.', () => {
    let graph = new Graph();
    // console.log(graph);
    expect(graph.dfs()).toEqual(null);
  })

})