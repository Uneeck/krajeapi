$(document).ready(function(){

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries(){
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';

	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item){
		var added = $('<li>').text("Country: "+item.name).appendTo(countriesList);
		$(added).append('<p>Capital: '+item.capital+'</p>');
		$(added).append('<p>Currency: '+item.currencies[0].code+'</p>');
		$(added).append('<img src="'+item.flag+'"/>');
	})
}

});