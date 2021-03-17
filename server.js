const express = require( 'express' );
const cors = require( 'cors' );

const app = express();
app.use( cors() );

const myApp = ( num1, num2 ) => {
  const result = num1 + num2;
  return result;
};

myApp( 5, 5 );

app.get( '/', ( req, res ) => {
  res.send( { hello: 'World', hey: 'there', Hi: 'Wonderful coders' } );
} );

const PORT = process.env.PORT || 5000;

app.listen( PORT, () => console.log( `Server started on port: ${ PORT }` ) );
