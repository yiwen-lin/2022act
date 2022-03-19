const question = [
  {
    title: '每個人都可以簽「預立醫療決定（AD）」嗎？',
    option: [
      {
        content: '不分年齡，每個人都可以簽署',
        score: 0,
      },
      {
        content: '年滿20歲的成年人，或未成年但以合法結婚者即可簽署',
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
        content: '不需要，兩者法條意思雷同',
        score: 0,
      }
    ],
  },
  {
    title: '中年時簽「預立醫療決定（AD）」，老病時就自動生效？',
    option: [
      {
        content: '是，因為AD就是在保障已進入無法自主決定／判斷的病人',
        score: 0,
      },
      {
        content: '不是，需符合5種臨床條件之一，並經醫療團隊至少2次照會，確認病人的AD及內容，AD才會生效',
        score: 15,
      }
    ],
  },
  {
    title: '家人現在已經生病、意識不清，我可以幫他簽「預立醫療決定（AD）」嗎？',
    option: [
      {
        content: '不行，當病人意識昏迷或無法表達意願時，「不實施心肺復甦術（DNR）」可以由家屬簽同意書，但AD只有本人可以簽。',
        score: 15,
      },
      {
        content: '可以，因為病主法保障已進入無法自主決定／判斷的病人，所以我可以為家人簽署',
        score: 0,
      }
    ],
  },
  {
    title: '我一個人去做「預立醫療照護諮商（ACP）」就可以了嗎？',
    option: [
      {
        content: '可以，病主法就是保障、尊重病人自主',
        score: 0,
      },
      {
        content: '不可以，想簽署AD的意願人必須找二親等內的親屬至少1人及醫療委任代理人（如有指定）共同參與ACP',
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
    content: '有待加強！對於《病人自主權利法》相關內容與保障權益還要再加油，下滑看更多相關知識懶人包，一起預約美好告別！',
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
  const template = `<div class="quiz quiz-${index+1}"><h4 class="mb-4">${item.title}</h4>
  <button type="button" class="btn-option btn w-full py-4 px-5 mt-3 mb-2" data-index="${index+1}" data-score="${item.option[0].score}">${item.option[0].content}</button>
  <button type="button" class="btn-option btn w-full py-4 px-5 mt-3 mb-2" data-index="${index+1}" data-score="${item.option[1].score}">${item.option[1].content}</button>
  <button type="button" class="btn-back btn btn-link d-table mx-auto mt-3 mb-2" data-prev="${index}">回上一題</button></div>`;
  str += template;
});

$('.quiz-wrap').html(str);

let sum = 0;
let sumArray = [];

$('.quiz button').click(function(e) {
  const buttonScore = $(this).attr('data-score');
  const buttonIndex = $(this).attr('data-index');
  console.log(buttonIndex);
  if ( $(this).hasClass('btn-option') ) {
    if ( buttonIndex < 6 ) {
      $('.quiz-wrap').css('margin-left', `${-100 * buttonIndex}%`);
      sumArray.push(Number(buttonScore));
      $('.progress-number .h2').text(Number(buttonIndex)+1);
      $('.progress-line .line').css('width', 16.666666666666667 * (Number(buttonIndex)+1)+'%');
    } else {
      calculate();
      renew();
      $('.result').show();
      $('.progress-group, .quiz-group').slideUp();
    }
  } else if ( $(this).hasClass('btn-back') ) {
    sumArray.pop();
  }
  console.log(sumArray);
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
  console.log(sum);

  let resultCopy = {
    name: '',
    content: '',
    link: '',
  };
  switch (true) {
    case (sum <= 59):
      resultCopy.name =     result[0].name;
      resultCopy.content =  result[0].content;
      resultCopy.link =     result[0].link;
      break;
    case (sum <= 70):
      resultCopy.name =     result[1].name;
      resultCopy.content =  result[1].content;
      resultCopy.link =     result[1].link;
      break;
    case (sum <= 100):
      resultCopy.name =     result[2].name;
      resultCopy.content =  result[2].content;
      resultCopy.link =     result[2].link;
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
                        <button type="button" id="renew" class="btn btn-link mx-3">再玩一次</button>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://yiwen-lin.github.io/2022act/${resultCopy.link}.html" class="btn btn-primary px-5 py-3 mx-3" target="_blank" rel="noopener noreferrer">分享成績</a>
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
