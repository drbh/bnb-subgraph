# Welcome to the BNB Subgraph

👌BNB Subgraph submission for the 2019 The Graph + CoinList Hackathon  

### The Graph Hosted subgraph
https://thegraph.com/explorer/subgraph/drbh/etherdelta  

### Simple HTTP Directed Graph APP

![screenshot](https://raw.githubusercontent.com/drbh/bnb-subgraph/master/images/screenshot.png)

http://bnb-the-graph.s3-website-us-east-1.amazonaws.com/

#### Example Query
[https://api.thegraph.com/subgraphs/name/drbh/bnb](https://api.thegraph.com/subgraphs/name/drbh/bnb)
```graphql
{
  burns(first: 5) {
    id
    timestamp
    from
    value
  }
}

````


### GraphQL Schema

### Transfer
### Burn
### Freeze
### Unfreeze