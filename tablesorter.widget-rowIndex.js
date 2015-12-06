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
    	className: 'row-index',
    	// give the widget a id
    	id: 'rowIndex',
    	// format is called on init and when a sorting has finished
    	format: function(table) {			
    		if( !$(table).hasClass( this.className ) ){
    			$(table).addClass( this.className );
    		}
    		
    		var rowIndexHeaderExist = $( 'thead tr th.' + this.className, table ).length > 0 ;
    		if( !rowIndexHeaderExist ){
    			// insert a row index header
	    		$('thead tr th:first',table).before( '<th class="' + this.className + ' ' + this.className +'-created">&nbsp;</th>');  			
    		}
    		 		
    		var rowIndexColumnExist = $( 'tbody tr td.' + this.className, table ).length > 0 ;
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
    			$('tbody tr:eq(' + (i) + ') td:first',table).before( '<td class="' + this.className + ' ' + this.className + '-created">' + (index)  + '</td>' );
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
    			$('tbody tr:eq(' + (i) + ') td.' + this.className,table).html( (index) );
    			index++;
    		}        		
    	}
    });
});