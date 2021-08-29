export default function( { $axios , redirect } ){

  $axios.onRequest( config => {
    console.log( "Making Request to" + config.url );

  });

  $axios.onError( error => {
    const code = parseInt( error.response && error.response.status );

    if( 400 === code ){ redirect( '/400' ) }

  });

}
