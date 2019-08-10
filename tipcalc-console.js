function calculateTip(cost, serviceRating){
  var tipPercent;
  var tip;
  var totalBill;
  if(serviceRating == 'Terrible'){
    tipPercent = 0;
  }
  else if (serviceRating == 'Poor'){
    tipPercent = 5;
  }
  else if (serviceRating == 'Good'){
    tipPercent = 10;
  }
  else if (serviceRating == 'Great'){
    tipPercent = 15;
  }
  else if (serviceRating == 'Excellent'){
    tipPercent = 20;
  }
  else {
    return 'Rating not recognized';
  }

  tip = Math.ceil((cost*tipPercent)/100);
  totalBill = cost+tip;


  return ('Your pre-tip cost is: '+cost+
    '\nYour rating is: '+serviceRating+
    '\nYour tip is: '+tip+
    '\nYour total bill is: '+totalBill);

}

console.log(calculateTip(240, 'Excellent'));
