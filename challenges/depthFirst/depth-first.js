'use strict';

class Vertex {
  constructor (value) {
    this.value = value;
  }
}

class Edge {
  constructor (vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(vertex){
    //.set(key,value) puts a key/value aka node in the map
    this.adjacencyList.set(vertex,[]); // when add vertex for first time the value is an empty array because it will eventually hold a list of all of the nodes that it is connected to
  }

  addDirectedEdge(startVertex, endVertex, weight){
    //error checking, must have starting and ending node
    if(!this.adjacencyList.has(startVertex) || (!this.adjacencyList.has(endVertex))) { //map.has() returns bool: true if exists in map, false if not
      throw new Error('error: start or end vertex missing');
    }
    //get startVertex from Map (all of verticies)
    //push a new Edge that will connect the start to the end 
    const adjacencies = this.adjacencyList.get(startVertex); //map.get() returns [] of all adjacencies
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    if(!this.adjacencyList.has(vertex)){
      throw new Error('error - invalid vertex', vertex);
    }
    return this.adjacencyList.get(vertex); //returns an array
  }


  dfs(startNode) {

    if(!startNode) return null;

    const visitedNodes = new Set();

    const _traverseNeighbors = (node) => {
      //add node to the Set
      visitedNodes.add(node);

      //get all of the neighbors
      const neighbors = this.getNeighbors(node);
      //loop over all neighbors
      for(let edge of neighbors){
        //if the set doesn't have the node
        if(!visitedNodes.has(edge.vertex)){
          //then run function again
          _traverseNeighbors(edge.vertex);
        }
      }
    }
    _traverseNeighbors(startNode);
    return visitedNodes;
  }
}

module.exports = {Vertex, Edge, Graph};