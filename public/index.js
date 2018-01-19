'use strict';

//list of truckers
//useful for ALL 5 exercises
var truckers = [{
  'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'name': 'les-routiers-bretons',
  'pricePerKm': 0.05,
  'pricePerVolume': 5
}, {
  'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'name': 'geodis',
  'pricePerKm': 0.1,
  'pricePerVolume': 8.5
}, {
  'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'name': 'xpo',
  'pricePerKm': 0.10,
  'pricePerVolume': 10
}];

//list of current shippings
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var deliveries = [{
  'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'shipper': 'bio-gourmet',
  'truckerId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'distance': 100,
  'volume': 4,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury' : 0,
    'convargo': 0
  }
}, {
  'id': '65203b0a-a864-4dea-81e2-e389515752a8',
  'shipper': 'librairie-lu-cie',
  'truckerId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'distance': 650,
  'volume': 12,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury' : 0,
    'convargo': 0
  }
}, {
  'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'shipper': 'otacos',
  'truckerId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'distance': 1250,
  'volume': 30,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury' : 0,
    'convargo': 0
  }
}];

//list of actors for payment
//useful from exercise 5
const actors = [{
  'deliveryId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'deliveryId': '65203b0a-a864-4dea-81e2-e389515752a8',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'deliveryId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}];


console.log(truckers);
console.log(deliveries);
console.log(actors);

//Exercice 1
for(var i=0; i<deliveries.length; i++)
{
  var pricePerKm = 0;
  var pricePerVolume = 0;
  for(var j=0; j<truckers.length; j++)
  {
    if (deliveries[i].truckerId === truckers[j].id)
    {
      pricePerKm = truckers[j].pricePerKm;
      pricePerVolume = truckers[j].pricePerVolume;


//Exercice 2
  var decreased = 1
  if (deliveries[i].volume > 25)
  {
    decreased = 0.5;
  }
  else if (deliveries[i].volume > 10)
  {
    decreased = 0.7;
  }
  else if (deliveries[i].volume > 5)
  {
    decreased = 0.9;
  }
   pricePerVolume = truckers[j].pricePerVolume * decreased;
   deliveries[i].price = pricePerKm * deliveries[i].distance + pricePerVolume * deliveries[i].volume;
  }
};

  //Exercice 3
  var commission = deliveries[i].price * 0.3;
  deliveries[i].commission.insurance = commission / 2;
  deliveries[i].commission.treasury = 1 + Math.floor(deliveries[i].distance / 500);
  deliveries[i].commission.convargo = commission - (deliveries[i].commission.insurance + deliveries[i].commission.treasury);

  //Exercice 4
  if (deliveries[i].options.deductibleReduction == true)
  {
      deliveries[i].price = deliveries[i].price + 200;
      deliveries[i].commission.convargo = deliveries[i].commission.convargo + (deliveries[i].volume);
  }
  else
  {
    deliveries[i].price = deliveries[i].price + 1000;
  }

  //Exercice 5
  /*for(var k=0; k<actors.length; k++)
  {
        var amount = 0;
        if (deliveries[i].id === actors[k].deliveryId)
        {
          if(actors[k].payment.who = "shipper")
          {
            if(deliveries[i].options.deductibleReduction == true){
            amount = deliveries[i].price + 200;}
            else
            {amount = deliveries[i].price + 1000
            }
          }
          if (actors[k].payment.who = "owner")
          {
            amount = deliveries[i].price - commission;
          }
          if (actors[k].payment.who = "treasury")
          {
            amount = 1 + Math.floor(deliveries[i].distance / 500);
          }
          if (actors[k].payment.who = "insurance")
          {
            amount = commission / 2;
          }
          if (actors[k].payment.who = "convargo")
          {

            amount = commission - (deliveries[i].commission.insurance + deliveries[i].commission.treasury)
          }
        }

  }*/

}
console.log(deliveries);
