const ts = 1;
const publicKey = '1120682b8d282743b6e2d0b9b86dfa2b'
const hash = "134de50e4c0b0e1ec4272725a8788ed6a79fcc18f1120682b8d282743b6e2d0b9b86dfa2b";
  

fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1120682b8d282743b6e2d0b9b86dfa2b&hash=f35698b40ba34103b57af598a88487fc")
.then((response) => response.json())
.then((result) => console.log(result));
