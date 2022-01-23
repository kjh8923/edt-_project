const timerContainer=document.querySelector(".js-clock"),
    timer=timerContainer.querySelector(".timer1");

function getTime() {
  const DDay = new Date("2022-01-25:10:00:00+0900");
  const now=new Date();
  const gap=DDay-now;
  const d = Math.floor(gap / (1000 * 60 * 60 * 24)); // 일
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24); // 시
  const m = Math.floor(((gap / 1000) * 60) % 60); // 분
  const s = Math.floor((gap / 1000) % 60); // 초
  
  timer.innerText=`${d}일 ${h}시간 ${m}분 ${s}초`;
}

function init() {
    getTime();
    setInterval(getTime,1000);
}
init();

const timerContainer2=document.querySelector(".js-clock2"),
    timer2=timerContainer2.querySelector(".timer2");

    function getTime2() {
        const DDay2 = new Date("2022-01-26:10:00:00+0900");
        const now2=new Date();
        const gap2=DDay2-now2;
        const d2 = Math.floor(gap2 / (1000 * 60 * 60 * 24)); // 일
        const h2 = Math.floor((gap2 / (1000 * 60 * 60)) % 24); // 시
        const m2 = Math.floor(((gap2 / 1000) * 60) % 60); // 분
        const s2 = Math.floor((gap2 / 1000) % 60); // 초
        
        timer2.innerText=`${d2}일 ${h2}시간 ${m2}분 ${s2}초`;
      }
      
      function init2() {
          getTime2();
          setInterval(getTime2,1000);
      }
      init2();

const timerContainer3=document.querySelector(".js-clock3"),
timer3=timerContainer3.querySelector(".timer3");

    function getTime3() {
        const DDay3 = new Date("2022-01-27:10:00:00+0900");
        const now3=new Date();
        const gap3=DDay3-now3;
        const d3 = Math.floor(gap3 / (1000 * 60 * 60 * 24)); // 일
        const h3 = Math.floor((gap3 / (1000 * 60 * 60)) % 24); // 시
        const m3 = Math.floor(((gap3 / 1000) * 60) % 60); // 분
        const s3 = Math.floor((gap3 / 1000) % 60); // 초
        
        timer3.innerText=`${d3}일 ${h3}시간 ${m3}분 ${s3}초`;
      }
      
      function init3() {
          getTime3();
          setInterval(getTime3,1000);
      }
      init3();
