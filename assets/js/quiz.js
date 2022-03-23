const question = [
  {
    title: '每個人都可以簽「預立醫療決定（AD）」嗎？',
    option: [
      {
        content: '不分年齡，每個人都可以簽署',
        score: 0,
      },
      {
        content: '年滿20歲的成年人（或未成年已婚）即可簽署',
        score: 15,
      }
    ],
  },
  {
    title: '我有簽過放棄急救（DNR），還要再簽「預立醫療決定（AD）」嗎？',
    option: [
      {
        content: '要，兩者為不同權利保障',
        score: 20,
      },
      {
        content: '不需要，兩者保障的權利完全相同',
        score: 0,
      }
    ],
  },
  {
    title: '我簽了「預立醫療決定（AD）」，是不是將來只要被送醫院，醫師都不會救我了？',
    option: [
      {
        content: '是，因為簽完AD視同「放棄急救」',
        score: 0,
      },
      {
        content: '不是，任何危急時刻，無論有無簽AD，醫師都會搶救。只有當符合病主法規範的5種重大疾病，經過嚴謹的流程與家庭溝通，確定啟動AD後，才會進入不救治或撤除醫療的程序。',
        score: 20,
      }
    ],
  },
  {
    title: '家人現在已經生病、意識不清，我可以幫他簽「預立醫療決定（AD）」嗎？',
    option: [
      {
        content: '不行，AD只能由病人本人在意識清楚時自己簽，不能由旁人代簽。',
        score: 20,
      },
      {
        content: '可以，因為病主法保障已進入無法自主決定／判斷的病人，所以我可以為家人簽署。',
        score: 0,
      }
    ],
  },
  {
    title: '我自己參加「預立醫療照護諮商（ACP）」就可以嗎？',
    option: [
      {
        content: '可以，病主法保障的權利只跟自己有關，不會影響家人。',
        score: 0,
      },
      {
        content: '不行，想簽AD的意願人必須找二親等內的親屬至少1人及醫療委任代理人（如有指定）共同參與ACP，ACP目的是促進家庭溝通，提早讓家人瞭解自己的重要決定，將來啟動AD時會更圓滿。',
        score: 10,
      }
    ],
  },
  {
    title: '自己簽一簽「預立醫療決定（AD）」，留給家人或公布在Facebook就可以了嗎？',
    option: [
      {
        content: '可以，簽完後公佈就表示公開個人簽署意願',
        score: 0,
      },
      {
        content: '不行，簽AD前，必須先經過預立醫療照護諮商（ACP）的程序，不是自己簽了就生效',
        score: 15,
      }
    ],
  },
];

const result = [
  {
    name: '後段班',
    link: 'level-3',
    min: 0,
    max: 59,
    content: '你的進步空間很大，對於《病人自主權利法》相關內容與保障權益還要再加油，下滑看更多相關知識懶人包，一起預約美好告別！',
  },
  {
    name: '中段班',
    link: 'level-2',
    min: 60,
    max: 70,
    content: '還不錯！對於《病人自主權利法》相關內容與保障權益算有概念，下滑看更多內容，一起預約美好告別！',
  },
  {
    name: '資優班',
    link: 'level-1',
    min: 71,
    max: 100,
    content: '你超棒！對於《病人自主權利法》相關內容與保障權益有一定的認識，下滑看更多內容，一起預約美好告別！',
  }
];

let str = '';
question.forEach((item, index) => {
  let template = `<div class="quiz quiz-${index+1}"><h4 class="mb-4">${item.title}</h4>`;
  if ( item.option[0].score > 0 ) {
    template += `<button
      type="button"
      class="btn-option btn w-full py-4 px-5 mt-3 mb-2"
      data-index="${index+1}"
      data-score="${item.option[0].score}"
      eventcategory="web_web"
      eventaction="advance-decision"
      eventlabel="click-test-${index+1}-1"
    >${item.option[0].content}<img src="assets/images/ans-right.png" alt="正確icon"></button>`;
  } else {
    template += `<button
      type="button"
      class="btn-option btn w-full py-4 px-5 mt-3 mb-2"
      data-index="${index+1}"
      data-score="${item.option[0].score}"
      eventcategory="web_web"
      eventaction="advance-decision"
      eventlabel="click-test-${index+1}-1"
    >${item.option[0].content}<img src="assets/images/ans-wrong.png" alt="錯誤icon"></button>`;
  }
  if ( item.option[1].score > 0 ) {
    template += `<button
      type="button"
      class="btn-option btn w-full py-4 px-5 mt-3 mb-2"
      data-index="${index+1}"
      data-score="${item.option[1].score}"
      eventcategory="web_web"
      eventaction="advance-decision"
      eventlabel="click-test-${index+1}-1"
    >${item.option[1].content}<img src="assets/images/ans-right.png" alt="正確icon"></button>`;
  } else {
    template += `<button
      type="button"
      class="btn-option btn w-full py-4 px-5 mt-3 mb-2"
      data-index="${index+1}"
      data-score="${item.option[1].score}"
      eventcategory="web_web"
      eventaction="advance-decision"
      eventlabel="click-test-${index+1}-1"
    >${item.option[1].content}<img src="assets/images/ans-wrong.png" alt="錯誤icon"></button>`;
  }
  template += `<button 
    type="button" 
    class="btn-back btn btn-link d-table mx-auto mt-3 mb-2" 
    data-prev="${index}"
    eventcategory="web_web"
    eventaction="advance-decision"
    eventlabel="click-test-goback"
  >回上一題</button>
</div>`;
  str += template;
});

$('.quiz-wrap').html(str);

let sum = 0;
let sumArray = [];

$('.quiz button').click(function(e) {
  const buttonScore = $(this).attr('data-score');
  const buttonIndex = $(this).attr('data-index');
  // console.log(buttonIndex);
  if ( $(this).hasClass('btn-option') ) {
    if ( buttonIndex < 6 ) {
      sumArray.push(Number(buttonScore));
      $(this).children('img').fadeIn();
      setTimeout(function(){
        $('.quiz-wrap').css('margin-left', `${-100 * buttonIndex}%`);
        $('.progress-number .h2').text(Number(buttonIndex)+1);
        $('.progress-line .line').css('width', 16.666666666666667 * (Number(buttonIndex)+1)+'%');
      }, 700)
      setTimeout(function(){
        $('.quiz button img').hide();
      }, 1000)
    } else {
      sumArray.push(Number(buttonScore));
      calculate();
      renew();
      $('.result').show();
      $('.progress-group, .quiz-group').slideUp();
    }
  } else if ( $(this).hasClass('btn-back') ) {
    sumArray.pop();
  }
  // console.log(sumArray);
});

$('.btn-back').click(function(e) {
  const backIndex = $(this).attr('data-prev');
  $('.quiz-wrap').css('margin-left', `${-100 * (backIndex-1)}%`);
  $('.progress-number .h2').text(Number(backIndex));
  $('.progress-line .line').css('width', 16.666666666666667 * (Number(backIndex))+'%');
});

function calculate() {
  sum = 0;
  sumArray.forEach(item => {
    sum += item;
  });
  // console.log(sum);

  let resultCopy = {
    name: '',
    content: '',
    link: '',
  };
  switch (true) {
    case (sum <= 59):
      resultCopy.name     = result[0].name;
      resultCopy.content  = result[0].content;
      resultCopy.link     = result[0].link;
      break;
    case (sum <= 70):
      resultCopy.name     = result[1].name;
      resultCopy.content  = result[1].content;
      resultCopy.link     = result[1].link;
      break;
    case (sum <= 100):
      resultCopy.name     = result[2].name;
      resultCopy.content  = result[2].content;
      resultCopy.link     = result[2].link;
      break;
  }

  const resultTemp = `<div class="d-flex align-items-end justify-content-center my-5">
                        <span class="h4 mb-0 pb-3">你的分數為</span>
                        <em class="display-4 font-weight-normal pr-3">${sum}</em>
                        <span class="h4 mb-0 pb-3">分</span>
                      </div>
                      <div class="type h4 text-center mb-3">${resultCopy.name}</div>
                      <p>${resultCopy.content}</p>
                      <div class="btn-function text-center mt-5">
                        <button
                          type="button"
                          id="renew"
                          class="btn btn-link mx-3"
                          eventcategory="web_web"
                          eventaction="advance-decision"
                          eventlabel="click-test-again"
                        >再玩一次</button>
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=https://web.commonhealth.com.tw/advance-decision/${resultCopy.link}.html"
                          class="btn btn-primary px-5 py-3 mx-3"
                          target="_blank"
                          rel="noopener noreferrer"
                          eventcategory="web_web"
                          eventaction="advance-decision"
                          eventlabel="click-test-share"
                        >分享成績</a>
                      </div>`;
  $('.result').html(resultTemp);
}

function renew() {
  $('.result #renew').click(function(e) {
    console.log(e);
    sumArray = [];
    buttonIndex = 0;
    $('.progress-group, .quiz-group').slideDown();
    $('.result').hide();
    $('.quiz-wrap').css('margin-left', 0);
    $('.quiz-6 button').prop('disabled', false);
    $('.progress-number .h2').text(1);
    $('.progress-line .line').css('width', 16.666666666666667+'%');
    $('html, body').animate({
      scrollTop: $('#exam').offset().top
    }, 700);
  });
}
