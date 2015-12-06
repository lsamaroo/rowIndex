/*
* @requires jQuery v1.2.6+ and tablesorter (http://mottie.github.io/tablesorter)
*
* Licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
*
* @author Leon Samaroo - (https://github.com/lsamaroo)
* 
*/



$(function() {
    // add new widget called rowIndex
    $.tablesorter.addWidget({
    	// give the widget a id
    	id: "rowIndex",
    	// format is called when on init and when a sorting has finished
    	format: function(table) {			
    		var rowIndexHeaderExist = $( "thead tr th.row-index", table ).length > 0 ;
    		if( !rowIndexHeaderExist ){
    			// insert a row index header
	    		$("thead tr th:first",table).before( "<th class='row-index row-index-created'>&nbsp;</th>" );  			
    		}
    		 		
    		var rowIndexColumnExist = $( "tbody tr td.row-index", table ).length > 0 ;
    		if( rowIndexColumnExist ){
    			this.updateExistingRowIndex( table );
    		}
    		else {
    			this.createNewRowIndex( table );
    		}
    	},
    
    	createNewRowIndex: function(table){
    		var index = 1;
    		var rows = table.tBodies[0].rows;  		
    		for(var i=0; i <= rows.length; i++) {
    			if( $(rows[i]).hasClass( 'group-header') ){
    				continue;
    			}
    			$("tbody tr:eq(" + (i) + ") td:first",table).before( "<td class='row-index row-index-created'>" + (index)  + "</td>" );
    			index++;
    		}      		
    	},
    	
    	updateExistingRowIndex: function( table ){
       		var index = 1;
    		var rows = table.tBodies[0].rows;
    		for(var i=0; i <= rows.length; i++) {	
    			if( $(rows[i]).hasClass( 'group-header') ){
    				continue;
    			}
    			$("tbody tr:eq(" + (i) + ") td.row-index",table).html( (index) );
    			index++;
    		}        		
    	}
    });
});