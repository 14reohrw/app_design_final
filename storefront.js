var fs = require( 'fs' );
var http = require( 'http' );
var sql = require( 'sqlite3' ).verbose();
var table_elem = document.getElementById('clothing_selection');
/*function getFormValuesFromURL( url )
{
    var kvs = {};
    var parts = url.split( "?" );
    if( parts.length === 2 )
    {
        var key_value_pairs = parts[1].split( "&" );
        for( var i = 0; i < key_value_pairs.length; i++ )
        {
            var key_value = key_value_pairs[i].split( "=" );
            kvs[ key_value[0] ] = key_value[1];
        }
    }
    return kvs
}*/

function category(name)
{
var db = new sql.Database('eCommerce');
db.all("SELECT * FROM Products WHERE Category ==" + name,
function(err, rows){
  for (var i = 0; i < 4; i++) {
    var row_elem = document.createElement( 'tr' );
    for (var j = 0; j < 3; j++) {
      var cell_elem = document.createElement( 'td' );
      var grid_spot= (i * 3) + j;
      cell_elem.style.width= "20 px";

      var img_elem= document.createElement('img');
      img_elem.src= rows[j].itemPicture;
      img_elem.onmouseover=Zoom(grid_spot);
      img_elem.id=grid_spot;

      var para_elem= document.createElement('p');
      var node = document.createTextNode("Price: "+ rows[j].Price + document.createElement('br') + rows[j].ProductName);
      para_elem.appendChild(node);

      var button_elem=document.createElement('input');
      button_elem.type="button";
      button_elem.onclick=addtocart(rows[j].itemID);

      cell_elem.appendChild(img_elem);
      cell_elem.appendChild(para_elem);
      cell_elem.appendChild(button_elem);
      row_elem.appendChild(cell_elem);
    }
    content_elem.appendChild(row_elem);
  }
});

function Zoom(spot){
document.getElementById(spot).width= 200;
document.getElementById(spot).height= 160;
}

}
/*
function server_fun( req, res )
{
    console.log( req.url );
    // ...
    var filename = "./" + req.url;
    try {
        var contents = fs.readFileSync( filename ).toString();
        res.writeHead( 200 );
        res.end( contents );
    }
    catch( exp ) {
        if( req.url.indexOf( "add_student?" ) >= 0 )
        {
        }

        else
        {
            res.writeHead( 404 );
            res.end( "Cannot find file: "+filename );
        }
    }
}*/
