// Retorna um array de datas entre as duas datas
        var getDates = function(startDate, endDate) {
          var dates = [],
              currentDate = startDate,
              addDays = function(days) {
                var date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
              };
          while (currentDate <= endDate) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
          }
          return dates;
        };

        // Uso
        var dates = getDates(new Date(2021,10,20), new Date(2021,10,21));                                                                                                      
        dates.forEach(function(date) {
          console.log(date);
        });
		
		
		
//=============================================================================================
 // Returns an array of dates between the two dates
      const getDates = (startDate, endDate) => {
      const dates = [];
      // Strip hours minutes seconds etc.
      let currentDate = new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate()
      );
      while (currentDate <= endDate) {
          dates.push(currentDate);

          currentDate = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + 1, // Aumentará o mês se estiver acima da faixa
          );
      }
      return dates;
    };
    // Usage
    const dates = getDates(new Date(2021, 0, 0), new Date(2021, 0, 3)); 
    console.log(dates);
	
//===============================================================================================

<html>
    <head>
        <title>Test</title>

    </head>

    <body>

        <script type="text/javascript">
            var product_data = [
                {
                    "productId": "12",
                    "productName": "ProductA",
                    "productPrice": "1562",
                    "ProductDateCreated": "2015-07-24T12:58:17.430Z",
                    "TotalProduct": 294
                },
                {
                    "productId": "13",
                    "productName": "ProductB",
                    "productPrice": "8545",
                    "TotalProduct": 294,
                    "ProductHits": {
                        "2015-08-01T00:00:00Z"
                    }
                },
                {
                    "productId": "14",
                    "productName": "ProductC",
                    "productPrice": "8654",
                    "TotalProduct": 78,
                    "ProductHits": {
                        "2015-08-10T00:00:00Z"
                    }
                },
                {
                    "productId": "15",
                    "productName": "ProductD",
                    "productPrice": "87456",
                    "TotalProduct": 878,
                    "ProductHits": {
                        "2015-05-12T00:00:00Z"
                    }
                }
            ];

            var startDate = new Date("2015-08-04");
			var endDate = new Date("2015-08-12");

			var resultProductData = product_data.filter(a => {
			  var date = new Date(a.ProductHits);
			  return (date >= startDate && date <= endDate);
			});
			console.log(resultProductData)
        </script>

    </body>
</html>


	