
	
$(document).ready(function(){	
var token = '3939283418.1677ed0.b340e29f299c498b968c9e8991670345';


  $.ajax({
      url: 'https://api.instagram.com/v1/users/self',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token},
      success: function(data){
          var follows = data['data']['counts']['followed_by'];
          var a = follows;
		  a = (a-(a%1000))/1000;
          $("#welovewebdesignfollowers").text(a + "K");
          $("#welovewebdesignfollowersall").text(a + ".000");
      },
      error: function(data){
          console.log(data);
      }
      
  });
});


	
$(document).ready(function(){	
var token = '3954040166.1677ed0.33552ccc18c147699e37d87361a5dbc0';


  $.ajax({
      url: 'https://api.instagram.com/v1/users/self',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token},
      success: function(data){
          var follows = data['data']['counts']['followed_by'];
          var a = follows;
		  a = (a-(a%1000))/1000;
          $("#welovebrandingfollowers").text(a + "K");
          $("#welovebrandingfollowersall").text(a + ".000");
      },
      error: function(data){
          console.log(data);
      }
      
  });
});

	
$(document).ready(function(){	
var token = '3940206495.1677ed0.ee2b7eec4b484fe19a32f04691483601';


  $.ajax({
      url: 'https://api.instagram.com/v1/users/self',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token},
      success: function(data){
          var follows = data['data']['counts']['followed_by'];
          var a = follows;
		  a = (a-(a%1000))/1000;
          $("#weloveillustrationfollowers").text(a + "K");
          $("#weloveillustrationfollowersall").text(a + ".000");
      },
      error: function(data){
          console.log(data);
      }
      
  });
});


	
$(document).ready(function(){	
var token = '5935115898.1677ed0.3d56dbc6bf924369ba74e1d9be3c762e';


  $.ajax({
      url: 'https://api.instagram.com/v1/users/self',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token},
      success: function(data){
          var follows = data['data']['counts']['followed_by'];
          var a = follows;
		  a = (a-(a%1000))/1000;
          $("#weloveanimationsfollowers").text(a + "K");
          $("#weloveanimationsfollowersall").text(a + ".000");
      },
      error: function(data){
          console.log(data);
      }
      
  });
});




			