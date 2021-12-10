function getZodiacDateRange(date, month){
  datesRange = Object.keys(zodiacDateRange);
  let range;
  datesRange.forEach((dateRange)=>{
    let beginDate = dateRange.slice(4, 7);
    beginDate = Number(beginDate);
    let beginMonth = dateRange.slice(0, 4);
    let endDate = dateRange.slice(13, 16);
    endDate = Number(endDate);
    let endMonth = dateRange.slice(9, 13);
    date = Number(date);
    if(month.trim() == beginMonth.trim() || month.trim() == endMonth.trim()){
      if(month.trim() == beginMonth.trim() && date>=beginDate && date<=31){
        range = dateRange;
      }
      else if(month.trim() == endMonth.trim() && date>=1 && date<=endDate){
        range = dateRange;
      }
    }
  });
  return range;
}

function displayGregorianZodiac(zodiacSign, dateRange){
  document.getElementsByClassName("gregorian-heading")[0].innerHTML = zodiacSign;
  document.getElementsByClassName("gregorian-date-range")[0].innerHTML = dateRange;
  document.getElementsByClassName("gregorian-zodiac-detail")[0].innerHTML = zodiacSignsQualities[zodiacSign];
}

function displayChineseZodiac(zodiacAnimal, year){
  document.getElementsByClassName("chinese-heading")[0].innerHTML = zodiacAnimal;
  document.getElementsByClassName("chinese-year")[0].innerHTML = year;
  document.getElementsByClassName("chinese-zodiac-detail")[0].innerHTML = zodiacAnimalsQualities[zodiacAnimal];
}

function getZodiac(){
  document.getElementById("date-of-birth-input").style.display = "none";
  document.getElementById("zodiac-details").style.display = "block";
  let date = document.getElementById("date-input").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year-input").value;
  let dateRange = getZodiacDateRange(date, month);
  let zodiacSign = zodiacSigns[dateRange];
  let zodiacAnimal = zodiacAnimals[year%12];
  displayGregorianZodiac(zodiacSign, dateRange);
  displayChineseZodiac(zodiacAnimal, year);
}
