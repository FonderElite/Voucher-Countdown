(function () {
  const second = 1000,
        minute = second * 60,
       hour = minute * 60,
        day = hour * 24;

  let stateDate = "Sep 30, 2021 00:00:00",
      countDown = new Date(stateDate).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
        hours_count =   document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        //do something later when date is reached
        if(hours_count < 12){
            document.getElementById('pp').src = "https://pbs.twimg.com/profile_images/1068232511602466816/zC_Xsvui_400x400.jpg";
            document.getElementById('headline').innerText = "TryHackMe Voucher Giveaway";
             headlinePosition =  document.getElementById('headline').style.left = "25%";
             document.getElementsByTagName('body')[0].style.background = "#282828";
             document.getElementById('edesc').innerText = "TryHackMe is an online platform that teaches cyber security through short, gamified real-world labs. We have content for both complete beginners and seasoned hackers, encorporating guides and challenges to cater for different learning styles.";
             document.getElementById('star3').style.top = "84%";
              document.getElementById('star4').style.top = "84%";
              document.getElementById('ejpt').style.background = "#282727";
              document.getElementById('edesc').style.background = "#141313";
        }
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "Voucher Countdown Ended!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
