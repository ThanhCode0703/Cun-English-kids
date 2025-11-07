const topics = {
  // 1️⃣ FAMILY
  Family: {
    icon: "fa-house-chimney",
    color: "bg-gradient-to-br from-pink-200 to-rose-300 text-rose-700",
    vocabulary: [
      {
        word: "father",
        phonetic: "/ˈfɑːðər/",
        meaning: "cha",
        img: "https://api.iconify.design/twemoji:man.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/father--_gb_1.mp3",
      },
      {
        word: "mother",
        phonetic: "/ˈmʌðər/",
        meaning: "mẹ",
        img: "https://api.iconify.design/twemoji:woman.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/mother--_gb_1.mp3",
      },
      {
        word: "brother",
        phonetic: "/ˈbrʌðər/",
        meaning: "anh/em trai",
        img: "https://api.iconify.design/twemoji:boy.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/brother--_gb_1.mp3",
      },
      {
        word: "sister",
        phonetic: "/ˈsɪstər/",
        meaning: "chị/em gái",
        img: "https://api.iconify.design/twemoji:girl.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sister--_gb_1.mp3",
      },
      {
        word: "grandfather",
        phonetic: "/ˈɡræn(d)ˌfɑːðər/",
        meaning: "ông",
        img: "https://api.iconify.design/twemoji:older-man.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/grandfather--_gb_1.mp3",
      },
      {
        word: "grandmother",
        phonetic: "/ˈɡræn(d)ˌmʌðər/",
        meaning: "bà",
        img: "https://api.iconify.design/twemoji:older-woman.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/grandmother--_gb_1.mp3",
      },
      {
        word: "uncle",
        phonetic: "/ˈʌŋ.kəl/",
        meaning: "chú/cậu/bác trai",
        img: "https://api.iconify.design/twemoji:man.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/uncle--_gb_1.mp3",
      },
      {
        word: "aunt",
        phonetic: "/ɑːnt/",
        meaning: "cô/dì/bác gái",
        img: "https://api.iconify.design/twemoji:woman.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/aunt--_gb_1.mp3",
      },
      {
        word: "cousin",
        phonetic: "/ˈkʌz.ən/",
        meaning: "anh/chị/em họ",
        img: "https://api.iconify.design/twemoji:person.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cousin--_gb_1.mp3",
      },
      {
        word: "baby",
        phonetic: "/ˈbeɪ.bi/",
        meaning: "em bé",
        img: "https://api.iconify.design/twemoji:baby.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/baby--_gb_1.mp3",
      },
      {
        word: "parents",
        phonetic: "/ˈpeə.rənts/",
        meaning: "cha mẹ",
        img: "https://api.iconify.design/twemoji:family-man-woman-boy.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/parent--_gb_1.mp3",
      },
      {
        word: "family",
        phonetic: "/ˈfæm.əl.i/",
        meaning: "gia đình",
        img: "https://api.iconify.design/twemoji:family-man-woman-boy-girl.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/family--_gb_1.mp3",
      },
      {
        word: "husband",
        phonetic: "/ˈhʌz.bənd/",
        meaning: "chồng",
        img: "https://api.iconify.design/twemoji:man.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/husband--_gb_1.mp3",
      },
      {
        word: "wife",
        phonetic: "/waɪf/",
        meaning: "vợ",
        img: "https://api.iconify.design/twemoji:woman.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/wife--_gb_1.mp3",
      },
      {
        word: "son",
        phonetic: "/sʌn/",
        meaning: "con trai",
        img: "https://api.iconify.design/twemoji:boy.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/son--_gb_1.mp3",
      },
      {
        word: "daughter",
        phonetic: "/ˈdɔː.tər/",
        meaning: "con gái",
        img: "https://api.iconify.design/twemoji:girl.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/daughter--_gb_1.mp3",
      },
      {
        word: "niece",
        phonetic: "/niːs/",
        meaning: "cháu gái",
        img: "https://api.iconify.design/twemoji:girl.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/niece--_gb_1.mp3",
      },
      {
        word: "nephew",
        phonetic: "/ˈnef.juː/",
        meaning: "cháu trai",
        img: "https://api.iconify.design/twemoji:boy.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/nephew--_gb_1.mp3",
      },
      {
        word: "grandson",
        phonetic: "/ˈɡrænd.sʌn/",
        meaning: "cháu trai của ông bà",
        img: "https://api.iconify.design/twemoji:boy.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/grandson--_gb_1.mp3",
      },
      {
        word: "granddaughter",
        phonetic: "/ˈɡrændɔː.tər/",
        meaning: "cháu gái của ông bà",
        img: "https://api.iconify.design/twemoji:girl.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/granddaughter--_gb_1.mp3",
      },
      {
        word: "stepfather",
        phonetic: "/ˈstɛpˌfɑːðər/",
        meaning: "cha dượng",
        img: "https://api.iconify.design/twemoji:man.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/father--_gb_1.mp3",
      },
      {
        word: "stepmother",
        phonetic: "/ˈstɛpˌmʌðər/",
        meaning: "mẹ kế",
        img: "https://api.iconify.design/twemoji:woman.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/mother--_gb_1.mp3",
      },
      {
        word: "relative",
        phonetic: "/ˈrel.ə.tɪv/",
        meaning: "người thân",
        img: "https://api.iconify.design/twemoji:family-man-woman-boy-girl.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/relative--_gb_1.mp3",
      },
      {
        word: "twins",
        phonetic: "/twɪnz/",
        meaning: "sinh đôi",
        img: "https://api.iconify.design/twemoji:people-with-bunny-ears.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/twin--_gb_1.mp3",
      },
      {
        word: "in-laws",
        phonetic: "/ɪn lɔːz/",
        meaning: "gia đình vợ/chồng",
        img: "https://api.iconify.design/twemoji:family-man-woman-boy-girl.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/law--_gb_1.mp3",
      },
      {
        word: "fiancé",
        phonetic: "/fiˈɒn.seɪ/",
        meaning: "hôn phu",
        img: "https://api.iconify.design/twemoji:man.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/fiance--_gb_1.mp3",
      },
      {
        word: "fiancée",
        phonetic: "/fiˈɒn.seɪ/",
        meaning: "hôn thê",
        img: "https://api.iconify.design/twemoji:woman.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/fiancee--_gb_1.mp3",
      },
      {
        word: "bride",
        phonetic: "/braɪd/",
        meaning: "cô dâu",
        img: "https://api.iconify.design/twemoji:bride-with-veil.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bride--_gb_1.mp3",
      },
      {
        word: "groom",
        phonetic: "/ɡruːm/",
        meaning: "chú rể",
        img: "https://api.iconify.design/twemoji:man-in-tuxedo.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/groom--_gb_1.mp3",
      },
      {
        word: "ancestor",
        phonetic: "/ˈæn.ses.tər/",
        meaning: "tổ tiên",
        img: "https://api.iconify.design/twemoji:older-person.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/ancestor--_gb_1.mp3",
      },
      {
        word: "descendant",
        phonetic: "/dɪˈsen.dənt/",
        meaning: "hậu duệ",
        img: "https://api.iconify.design/twemoji:child.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/descendant--_gb_1.mp3",
      },
      {
        word: "generation",
        phonetic: "/ˌdʒen.əˈreɪ.ʃən/",
        meaning: "thế hệ",
        img: "https://api.iconify.design/twemoji:family-man-woman-boy-girl.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/generation--_gb_1.mp3",
      },
      {
        word: "family tree",
        phonetic: "/ˈfæm.əl.i triː/",
        meaning: "cây gia phả",
        img: "https://api.iconify.design/twemoji:deciduous-tree.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/family--_gb_1.mp3",
      },
      {
        word: "house",
        phonetic: "/haʊs/",
        meaning: "ngôi nhà",
        img: "https://api.iconify.design/twemoji:house.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/house--_gb_1.mp3",
      },
      {
        word: "home",
        phonetic: "/həʊm/",
        meaning: "tổ ấm",
        img: "https://api.iconify.design/twemoji:house-with-garden.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/home--_gb_1.mp3",
      },
      {
        word: "love",
        phonetic: "/lʌv/",
        meaning: "tình yêu",
        img: "https://api.iconify.design/twemoji:red-heart.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/love--_gb_1.mp3",
      },
      {
        word: "care",
        phonetic: "/keər/",
        meaning: "sự quan tâm",
        img: "https://api.iconify.design/twemoji:heart-hands.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/care--_gb_1.mp3",
      },
      {
        word: "support",
        phonetic: "/səˈpɔːt/",
        meaning: "ủng hộ, chăm sóc",
        img: "https://api.iconify.design/twemoji:handshake.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/support--_gb_1.mp3",
      },
      {
        word: "orphan",
        phonetic: "/ˈɔː.fən/",
        meaning: "trẻ mồ côi",
        img: "https://api.iconify.design/twemoji:child.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/orphan--_gb_1.mp3",
      },
      {
        word: "marriage",
        phonetic: "/ˈmær.ɪdʒ/",
        meaning: "hôn nhân",
        img: "https://api.iconify.design/twemoji:wedding.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/marriage--_gb_1.mp3",
      },
      {
        word: "divorce",
        phonetic: "/dɪˈvɔːs/",
        meaning: "ly hôn",
        img: "https://api.iconify.design/twemoji:broken-heart.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/divorce--_gb_1.mp3",
      },
    ],
  },
  // 2️⃣ ANIMALS
  Animals: {
    icon: "fa-paw",
    color: "bg-gradient-to-br from-green-200 to-emerald-300 text-emerald-800",
    vocabulary: [
      {
        word: "dog",
        phonetic: "/dɒɡ/",
        meaning: "chó",
        img: "https://api.iconify.design/twemoji:dog.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/dog--_gb_1.mp3",
      },
      {
        word: "cat",
        phonetic: "/kæt/",
        meaning: "mèo",
        img: "https://api.iconify.design/twemoji:cat.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cat--_gb_1.mp3",
      },
      {
        word: "bird",
        phonetic: "/bɜːd/",
        meaning: "chim",
        img: "https://api.iconify.design/twemoji:bird.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bird--_gb_1.mp3",
      },
      {
        word: "fish",
        phonetic: "/fɪʃ/",
        meaning: "cá",
        img: "https://api.iconify.design/twemoji:fish.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/fish--_gb_1.mp3",
      },
      {
        word: "cow",
        phonetic: "/kaʊ/",
        meaning: "bò",
        img: "https://api.iconify.design/twemoji:cow.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cow--_gb_1.mp3",
      },
      {
        word: "chicken",
        phonetic: "/ˈtʃɪk.ɪn/",
        meaning: "gà",
        img: "https://api.iconify.design/twemoji:chicken.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/chicken--_gb_1.mp3",
      },
      {
        word: "duck",
        phonetic: "/dʌk/",
        meaning: "vịt",
        img: "https://api.iconify.design/twemoji:duck.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/duck--_gb_1.mp3",
      },
      {
        word: "pig",
        phonetic: "/pɪɡ/",
        meaning: "heo",
        img: "https://api.iconify.design/twemoji:pig.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pig--_gb_1.mp3",
      },
      {
        word: "sheep",
        phonetic: "/ʃiːp/",
        meaning: "cừu",
        img: "https://api.iconify.design/twemoji:sheep.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sheep--_gb_1.mp3",
      },
      {
        word: "goat",
        phonetic: "/ɡəʊt/",
        meaning: "dê",
        img: "https://api.iconify.design/twemoji:goat.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/goat--_gb_1.mp3",
      },
      {
        word: "horse",
        phonetic: "/hɔːs/",
        meaning: "ngựa",
        img: "https://api.iconify.design/twemoji:horse.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/horse--_gb_1.mp3",
      },
      {
        word: "rabbit",
        phonetic: "/ˈræb.ɪt/",
        meaning: "thỏ",
        img: "https://api.iconify.design/twemoji:rabbit.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/rabbit--_gb_1.mp3",
      },
      {
        word: "mouse",
        phonetic: "/maʊs/",
        meaning: "chuột",
        img: "https://api.iconify.design/twemoji:mouse.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/mouse--_gb_1.mp3",
      },
      {
        word: "elephant",
        phonetic: "/ˈel.ɪ.fənt/",
        meaning: "voi",
        img: "https://api.iconify.design/twemoji:elephant.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/elephant--_gb_1.mp3",
      },
      {
        word: "lion",
        phonetic: "/ˈlaɪ.ən/",
        meaning: "sư tử",
        img: "https://api.iconify.design/twemoji:lion.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/lion--_gb_1.mp3",
      },
      {
        word: "tiger",
        phonetic: "/ˈtaɪ.ɡər/",
        meaning: "hổ",
        img: "https://api.iconify.design/twemoji:tiger.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/tiger--_gb_1.mp3",
      },
      {
        word: "bear",
        phonetic: "/beər/",
        meaning: "gấu",
        img: "https://api.iconify.design/twemoji:bear.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bear--_gb_1.mp3",
      },
      {
        word: "monkey",
        phonetic: "/ˈmʌŋ.ki/",
        meaning: "khỉ",
        img: "https://api.iconify.design/twemoji:monkey.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/monkey--_gb_1.mp3",
      },
      {
        word: "snake",
        phonetic: "/sneɪk/",
        meaning: "rắn",
        img: "https://api.iconify.design/twemoji:snake.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/snake--_gb_1.mp3",
      },
      {
        word: "frog",
        phonetic: "/frɒɡ/",
        meaning: "ếch",
        img: "https://api.iconify.design/twemoji:frog.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/frog--_gb_1.mp3",
      },
      {
        word: "duckling",
        phonetic: "/ˈdʌk.lɪŋ/",
        meaning: "vịt con",
        img: "https://api.iconify.design/twemoji:baby-chick.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/duckling--_gb_1.mp3",
      },
      {
        word: "donkey",
        phonetic: "/ˈdɒŋ.ki/",
        meaning: "lừa",
        img: "https://api.iconify.design/twemoji:donkey.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/donkey--_gb_1.mp3",
      },
      {
        word: "zebra",
        phonetic: "/ˈzeb.rə/",
        meaning: "ngựa vằn",
        img: "https://api.iconify.design/twemoji:zebra.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/zebra--_gb_1.mp3",
      },
      {
        word: "panda",
        phonetic: "/ˈpæn.də/",
        meaning: "gấu trúc",
        img: "https://api.iconify.design/twemoji:panda.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/panda--_gb_1.mp3",
      },
      {
        word: "kangaroo",
        phonetic: "/ˌkæŋ.ɡəˈruː/",
        meaning: "chuột túi",
        img: "https://api.iconify.design/twemoji:kangaroo.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/kangaroo--_gb_1.mp3",
      },
      {
        word: "fox",
        phonetic: "/fɒks/",
        meaning: "cáo",
        img: "https://api.iconify.design/twemoji:fox.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/fox--_gb_1.mp3",
      },
      {
        word: "wolf",
        phonetic: "/wʊlf/",
        meaning: "sói",
        img: "https://api.iconify.design/twemoji:wolf.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/wolf--_gb_1.mp3",
      },
      {
        word: "bat",
        phonetic: "/bæt/",
        meaning: "dơi",
        img: "https://api.iconify.design/twemoji:bat.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bat--_gb_1.mp3",
      },
      {
        word: "owl",
        phonetic: "/aʊl/",
        meaning: "cú mèo",
        img: "https://api.iconify.design/twemoji:owl.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/owl--_gb_1.mp3",
      },
      {
        word: "parrot",
        phonetic: "/ˈpær.ət/",
        meaning: "vẹt",
        img: "https://api.iconify.design/twemoji:parrot.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/parrot--_gb_1.mp3",
      },
      {
        word: "penguin",
        phonetic: "/ˈpeŋ.ɡwɪn/",
        meaning: "chim cánh cụt",
        img: "https://api.iconify.design/twemoji:penguin.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/penguin--_gb_1.mp3",
      },
      {
        word: "crocodile",
        phonetic: "/ˈkrɒk.ə.daɪl/",
        meaning: "cá sấu",
        img: "https://api.iconify.design/twemoji:crocodile.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/crocodile--_gb_1.mp3",
      },
      {
        word: "whale",
        phonetic: "/weɪl/",
        meaning: "cá voi",
        img: "https://api.iconify.design/twemoji:whale.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/whale--_gb_1.mp3",
      },
      {
        word: "shark",
        phonetic: "/ʃɑːk/",
        meaning: "cá mập",
        img: "https://api.iconify.design/twemoji:shark.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/shark--_gb_1.mp3",
      },
      {
        word: "octopus",
        phonetic: "/ˈɒk.tə.pəs/",
        meaning: "bạch tuộc",
        img: "https://api.iconify.design/twemoji:octopus.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/octopus--_gb_1.mp3",
      },
      {
        word: "crab",
        phonetic: "/kræb/",
        meaning: "cua",
        img: "https://api.iconify.design/twemoji:crab.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/crab--_gb_1.mp3",
      },
      {
        word: "butterfly",
        phonetic: "/ˈbʌt.ə.flaɪ/",
        meaning: "bướm",
        img: "https://api.iconify.design/twemoji:butterfly.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/butterfly--_gb_1.mp3",
      },
      {
        word: "bee",
        phonetic: "/biː/",
        meaning: "ong",
        img: "https://api.iconify.design/twemoji:honeybee.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bee--_gb_1.mp3",
      },
      {
        word: "ant",
        phonetic: "/ænt/",
        meaning: "kiến",
        img: "https://api.iconify.design/twemoji:ant.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/ant--_gb_1.mp3",
      },
      {
        word: "spider",
        phonetic: "/ˈspaɪ.dər/",
        meaning: "nhện",
        img: "https://api.iconify.design/twemoji:spider.svg",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/spider--_gb_1.mp3",
      },
    ],
  }, // 3️⃣ FOOD
  Food: {
    icon: "fa-utensils",
    color: "bg-gradient-to-br from-yellow-200 to-orange-300 text-orange-800",
    vocabulary: [
      {
        word: "apple",
        phonetic: "/ˈæp.əl/",
        meaning: "táo",
        img: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/apple--_gb_1.mp3",
      },
      {
        word: "banana",
        phonetic: "/bəˈnɑː.nə/",
        meaning: "chuối",
        img: "https://cdn-icons-png.flaticon.com/512/415/415775.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/banana--_gb_1.mp3",
      },
      {
        word: "orange",
        phonetic: "/ˈɒr.ɪndʒ/",
        meaning: "cam",
        img: "https://cdn-icons-png.flaticon.com/512/415/415734.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/orange--_gb_1.mp3",
      },
      {
        word: "grape",
        phonetic: "/ɡreɪp/",
        meaning: "nho",
        img: "https://cdn-icons-png.flaticon.com/512/415/415753.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/grape--_gb_1.mp3",
      },
      {
        word: "watermelon",
        phonetic: "/ˈwɔː.təˌmel.ən/",
        meaning: "dưa hấu",
        img: "https://cdn-icons-png.flaticon.com/512/415/415776.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/watermelon--_gb_1.mp3",
      },
      {
        word: "pineapple",
        phonetic: "/ˈpaɪnˌæp.əl/",
        meaning: "dứa (thơm)",
        img: "https://cdn-icons-png.flaticon.com/512/415/415740.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pineapple--_gb_1.mp3",
      },
      {
        word: "mango",
        phonetic: "/ˈmæŋ.ɡəʊ/",
        meaning: "xoài",
        img: "https://cdn-icons-png.flaticon.com/512/415/415738.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/mango--_gb_1.mp3",
      },
      {
        word: "lemon",
        phonetic: "/ˈlem.ən/",
        meaning: "chanh vàng",
        img: "https://cdn-icons-png.flaticon.com/512/415/415736.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/lemon--_gb_1.mp3",
      },
      {
        word: "strawberry",
        phonetic: "/ˈstrɔːˌbər.i/",
        meaning: "dâu tây",
        img: "https://cdn-icons-png.flaticon.com/512/415/415745.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/strawberry--_gb_1.mp3",
      },
      {
        word: "cherry",
        phonetic: "/ˈtʃer.i/",
        meaning: "anh đào",
        img: "https://cdn-icons-png.flaticon.com/512/415/415747.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cherry--_gb_1.mp3",
      },
      {
        word: "pear",
        phonetic: "/peər/",
        meaning: "lê",
        img: "https://cdn-icons-png.flaticon.com/512/415/415749.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pear--_gb_1.mp3",
      },
      {
        word: "peach",
        phonetic: "/piːtʃ/",
        meaning: "đào",
        img: "https://cdn-icons-png.flaticon.com/512/415/415748.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/peach--_gb_1.mp3",
      },
      {
        word: "carrot",
        phonetic: "/ˈkær.ət/",
        meaning: "cà rốt",
        img: "https://cdn-icons-png.flaticon.com/512/415/415758.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/carrot--_gb_1.mp3",
      },
      {
        word: "tomato",
        phonetic: "/təˈmɑː.təʊ/",
        meaning: "cà chua",
        img: "https://cdn-icons-png.flaticon.com/512/415/415760.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/tomato--_gb_1.mp3",
      },
      {
        word: "cucumber",
        phonetic: "/ˈkjuː.kʌm.bər/",
        meaning: "dưa leo",
        img: "https://cdn-icons-png.flaticon.com/512/415/415761.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cucumber--_gb_1.mp3",
      },
      {
        word: "potato",
        phonetic: "/pəˈteɪ.təʊ/",
        meaning: "khoai tây",
        img: "https://cdn-icons-png.flaticon.com/512/415/415762.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/potato--_gb_1.mp3",
      },
      {
        word: "onion",
        phonetic: "/ˈʌn.jən/",
        meaning: "hành tây",
        img: "https://cdn-icons-png.flaticon.com/512/415/415763.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/onion--_gb_1.mp3",
      },
      {
        word: "garlic",
        phonetic: "/ˈɡɑː.lɪk/",
        meaning: "tỏi",
        img: "https://cdn-icons-png.flaticon.com/512/415/415764.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/garlic--_gb_1.mp3",
      },
      {
        word: "rice",
        phonetic: "/raɪs/",
        meaning: "cơm/gạo",
        img: "https://cdn-icons-png.flaticon.com/512/415/415768.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/rice--_gb_1.mp3",
      },
      {
        word: "bread",
        phonetic: "/bred/",
        meaning: "bánh mì",
        img: "https://cdn-icons-png.flaticon.com/512/415/415769.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bread--_gb_1.mp3",
      },
      {
        word: "egg",
        phonetic: "/eɡ/",
        meaning: "trứng",
        img: "https://cdn-icons-png.flaticon.com/512/415/415770.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/egg--_gb_1.mp3",
      },
      {
        word: "meat",
        phonetic: "/miːt/",
        meaning: "thịt",
        img: "https://cdn-icons-png.flaticon.com/512/415/415771.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/meat--_gb_1.mp3",
      },
      {
        word: "chicken",
        phonetic: "/ˈtʃɪk.ɪn/",
        meaning: "thịt gà",
        img: "https://cdn-icons-png.flaticon.com/512/415/415772.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/chicken--_gb_1.mp3",
      },
      {
        word: "fish",
        phonetic: "/fɪʃ/",
        meaning: "cá",
        img: "https://cdn-icons-png.flaticon.com/512/415/415773.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/fish--_gb_1.mp3",
      },
      {
        word: "milk",
        phonetic: "/mɪlk/",
        meaning: "sữa",
        img: "https://cdn-icons-png.flaticon.com/512/415/415778.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/milk--_gb_1.mp3",
      },
      {
        word: "juice",
        phonetic: "/dʒuːs/",
        meaning: "nước ép",
        img: "https://cdn-icons-png.flaticon.com/512/415/415779.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/juice--_gb_1.mp3",
      },
      {
        word: "tea",
        phonetic: "/tiː/",
        meaning: "trà",
        img: "https://cdn-icons-png.flaticon.com/512/415/415780.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/tea--_gb_1.mp3",
      },
      {
        word: "coffee",
        phonetic: "/ˈkɒf.i/",
        meaning: "cà phê",
        img: "https://cdn-icons-png.flaticon.com/512/415/415781.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/coffee--_gb_1.mp3",
      },
      {
        word: "cake",
        phonetic: "/keɪk/",
        meaning: "bánh ngọt",
        img: "https://cdn-icons-png.flaticon.com/512/415/415782.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cake--_gb_1.mp3",
      },
      {
        word: "ice cream",
        phonetic: "/ˈaɪs ˌkriːm/",
        meaning: "kem",
        img: "https://cdn-icons-png.flaticon.com/512/415/415783.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/ice_cream--_gb_1.mp3",
      },
      {
        word: "sandwich",
        phonetic: "/ˈsæn.wɪtʃ/",
        meaning: "bánh mì kẹp",
        img: "https://cdn-icons-png.flaticon.com/512/415/415784.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sandwich--_gb_1.mp3",
      },
      {
        word: "pizza",
        phonetic: "/ˈpiːt.sə/",
        meaning: "bánh pizza",
        img: "https://cdn-icons-png.flaticon.com/512/415/415785.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pizza--_gb_1.mp3",
      },
      {
        word: "hamburger",
        phonetic: "/ˈhæmˌbɜː.ɡər/",
        meaning: "bánh hamburger",
        img: "https://cdn-icons-png.flaticon.com/512/415/415786.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/hamburger--_gb_1.mp3",
      },
      {
        word: "noodles",
        phonetic: "/ˈnuː.dəlz/",
        meaning: "mì",
        img: "https://cdn-icons-png.flaticon.com/512/415/415787.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/noodle--_gb_1.mp3",
      },
      {
        word: "soup",
        phonetic: "/suːp/",
        meaning: "súp",
        img: "https://cdn-icons-png.flaticon.com/512/415/415788.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/soup--_gb_1.mp3",
      },
      {
        word: "salad",
        phonetic: "/ˈsæl.əd/",
        meaning: "rau trộn",
        img: "https://cdn-icons-png.flaticon.com/512/415/415789.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/salad--_gb_1.mp3",
      },
      {
        word: "butter",
        phonetic: "/ˈbʌt.ər/",
        meaning: "bơ",
        img: "https://cdn-icons-png.flaticon.com/512/415/415790.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/butter--_gb_1.mp3",
      },
      {
        word: "cheese",
        phonetic: "/tʃiːz/",
        meaning: "phô mai",
        img: "https://cdn-icons-png.flaticon.com/512/415/415791.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cheese--_gb_1.mp3",
      },
      {
        word: "salt",
        phonetic: "/sɒlt/",
        meaning: "muối",
        img: "https://cdn-icons-png.flaticon.com/512/415/415792.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/salt--_gb_1.mp3",
      },
      {
        word: "sugar",
        phonetic: "/ˈʃʊɡ.ər/",
        meaning: "đường",
        img: "https://cdn-icons-png.flaticon.com/512/415/415793.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sugar--_gb_1.mp3",
      },
      {
        word: "honey",
        phonetic: "/ˈhʌn.i/",
        meaning: "mật ong",
        img: "https://cdn-icons-png.flaticon.com/512/415/415794.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/honey--_gb_1.mp3",
      },
    ],
  }, // 4️⃣ WEATHER
  Weather: {
    icon: "fa-cloud-sun",
    color: "bg-gradient-to-br from-sky-200 to-blue-300 text-blue-800",
    vocabulary: [
      {
        word: "sunny",
        phonetic: "/ˈsʌ.ni/",
        meaning: "nắng",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222800.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sunny--_gb_1.mp3",
      },
      {
        word: "rainy",
        phonetic: "/ˈreɪ.ni/",
        meaning: "mưa",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222799.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/rainy--_gb_1.mp3",
      },
      {
        word: "cloudy",
        phonetic: "/ˈklaʊ.di/",
        meaning: "nhiều mây",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222803.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cloudy--_gb_1.mp3",
      },
      {
        word: "windy",
        phonetic: "/ˈwɪn.di/",
        meaning: "gió",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222804.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/windy--_gb_1.mp3",
      },
      {
        word: "stormy",
        phonetic: "/ˈstɔː.mi/",
        meaning: "bão tố",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222802.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/stormy--_gb_1.mp3",
      },
      {
        word: "snowy",
        phonetic: "/ˈsnəʊ.i/",
        meaning: "có tuyết",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222801.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/snowy--_gb_1.mp3",
      },
      {
        word: "foggy",
        phonetic: "/ˈfɒ.ɡi/",
        meaning: "sương mù",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222805.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/foggy--_gb_1.mp3",
      },
      {
        word: "cold",
        phonetic: "/kəʊld/",
        meaning: "lạnh",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222806.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cold--_gb_1.mp3",
      },
      {
        word: "hot",
        phonetic: "/hɒt/",
        meaning: "nóng",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222807.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/hot--_gb_1.mp3",
      },
      {
        word: "humid",
        phonetic: "/ˈhjuː.mɪd/",
        meaning: "ẩm ướt",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222808.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/humid--_gb_1.mp3",
      },
      {
        word: "lightning",
        phonetic: "/ˈlaɪt.nɪŋ/",
        meaning: "tia sét",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222810.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/lightning--_gb_1.mp3",
      },
      {
        word: "thunder",
        phonetic: "/ˈθʌn.dər/",
        meaning: "sấm",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222811.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/thunder--_gb_1.mp3",
      },
      {
        word: "rainbow",
        phonetic: "/ˈreɪn.bəʊ/",
        meaning: "cầu vồng",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222812.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/rainbow--_gb_1.mp3",
      },
      {
        word: "temperature",
        phonetic: "/ˈtem.prə.tʃər/",
        meaning: "nhiệt độ",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222813.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/temperature--_gb_1.mp3",
      },
      {
        word: "ice",
        phonetic: "/aɪs/",
        meaning: "băng",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222814.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/ice--_gb_1.mp3",
      },
      {
        word: "tornado",
        phonetic: "/tɔːˈneɪ.dəʊ/",
        meaning: "lốc xoáy",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222815.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/tornado--_gb_1.mp3",
      },
      {
        word: "hail",
        phonetic: "/heɪl/",
        meaning: "mưa đá",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222816.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/hail--_gb_1.mp3",
      },
      {
        word: "storm",
        phonetic: "/stɔːm/",
        meaning: "bão",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222817.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/storm--_gb_1.mp3",
      },
      {
        word: "drizzle",
        phonetic: "/ˈdrɪz.əl/",
        meaning: "mưa phùn",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222818.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/drizzle--_gb_1.mp3",
      },
      {
        word: "forecast",
        phonetic: "/ˈfɔː.kɑːst/",
        meaning: "dự báo",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222819.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/forecast--_gb_1.mp3",
      },
      {
        word: "umbrella",
        phonetic: "/ʌmˈbrel.ə/",
        meaning: "ô (dù)",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222820.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/umbrella--_gb_1.mp3",
      },
      {
        word: "season",
        phonetic: "/ˈsiː.zən/",
        meaning: "mùa",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222821.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/season--_gb_1.mp3",
      },
      {
        word: "summer",
        phonetic: "/ˈsʌm.ər/",
        meaning: "mùa hè",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222822.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/summer--_gb_1.mp3",
      },
      {
        word: "winter",
        phonetic: "/ˈwɪn.tər/",
        meaning: "mùa đông",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222823.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/winter--_gb_1.mp3",
      },
      {
        word: "spring",
        phonetic: "/sprɪŋ/",
        meaning: "mùa xuân",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222824.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/spring--_gb_1.mp3",
      },
      {
        word: "autumn",
        phonetic: "/ˈɔː.təm/",
        meaning: "mùa thu",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222825.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/autumn--_gb_1.mp3",
      },
      {
        word: "freeze",
        phonetic: "/friːz/",
        meaning: "đóng băng",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222826.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/freeze--_gb_1.mp3",
      },
      {
        word: "melt",
        phonetic: "/mɛlt/",
        meaning: "tan chảy",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222827.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/melt--_gb_1.mp3",
      },
      {
        word: "sky",
        phonetic: "/skaɪ/",
        meaning: "bầu trời",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222828.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sky--_gb_1.mp3",
      },
      {
        word: "clear",
        phonetic: "/klɪər/",
        meaning: "trời quang",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222831.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/clear--_gb_1.mp3",
      },
      {
        word: "overcast",
        phonetic: "/ˈəʊ.və.kɑːst/",
        meaning: "u ám",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222832.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/overcast--_gb_1.mp3",
      },
      {
        word: "thunderstorm",
        phonetic: "/ˈθʌn.də.stɔːm/",
        meaning: "dông bão",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222833.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/thunderstorm--_gb_1.mp3",
      },
      {
        word: "raincoat",
        phonetic: "/ˈreɪn.kəʊt/",
        meaning: "áo mưa",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222834.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/raincoat--_gb_1.mp3",
      },
      {
        word: "sunshine",
        phonetic: "/ˈsʌn.ʃaɪn/",
        meaning: "ánh nắng",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222835.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sunshine--_gb_1.mp3",
      },
      {
        word: "flood",
        phonetic: "/flʌd/",
        meaning: "lũ lụt",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222837.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/flood--_gb_1.mp3",
      },
      {
        word: "drought",
        phonetic: "/draʊt/",
        meaning: "hạn hán",
        img: "https://cdn-icons-png.flaticon.com/512/3222/3222838.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/drought--_gb_1.mp3",
      },
    ],
  }, // 5️⃣ SCHOOL
  School: {
    icon: "fa-school",
    color: "bg-gradient-to-br from-indigo-200 to-indigo-300 text-indigo-800",
    vocabulary: [
      {
        word: "school",
        phonetic: "/skuːl/",
        meaning: "trường học",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443338.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/school--_gb_1.mp3",
      },
      {
        word: "teacher",
        phonetic: "/ˈtiː.tʃər/",
        meaning: "giáo viên",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443339.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/teacher--_gb_1.mp3",
      },
      {
        word: "student",
        phonetic: "/ˈstjuː.dənt/",
        meaning: "học sinh",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443340.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/student--_gb_1.mp3",
      },
      {
        word: "classroom",
        phonetic: "/ˈklɑːs.ruːm/",
        meaning: "phòng học",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443341.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/classroom--_gb_1.mp3",
      },
      {
        word: "desk",
        phonetic: "/desk/",
        meaning: "bàn học",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443342.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/desk--_gb_1.mp3",
      },
      {
        word: "chair",
        phonetic: "/tʃeər/",
        meaning: "ghế",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443343.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/chair--_gb_1.mp3",
      },
      {
        word: "board",
        phonetic: "/bɔːd/",
        meaning: "bảng",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443344.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/board--_gb_1.mp3",
      },
      {
        word: "chalk",
        phonetic: "/tʃɔːk/",
        meaning: "phấn viết",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443345.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/chalk--_gb_1.mp3",
      },
      {
        word: "book",
        phonetic: "/bʊk/",
        meaning: "sách",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443346.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/book--_gb_1.mp3",
      },
      {
        word: "pen",
        phonetic: "/pen/",
        meaning: "bút mực",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443347.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pen--_gb_1.mp3",
      },
      {
        word: "pencil",
        phonetic: "/ˈpen.səl/",
        meaning: "bút chì",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443348.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pencil--_gb_1.mp3",
      },
      {
        word: "eraser",
        phonetic: "/ɪˈreɪ.zər/",
        meaning: "tẩy",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443349.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/eraser--_gb_1.mp3",
      },
      {
        word: "ruler",
        phonetic: "/ˈruː.lər/",
        meaning: "thước kẻ",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443350.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/ruler--_gb_1.mp3",
      },
      {
        word: "notebook",
        phonetic: "/ˈnəʊt.bʊk/",
        meaning: "vở ghi",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443351.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/notebook--_gb_1.mp3",
      },
      {
        word: "bag",
        phonetic: "/bæɡ/",
        meaning: "cặp/túi",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443352.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bag--_gb_1.mp3",
      },
      {
        word: "homework",
        phonetic: "/ˈhəʊm.wɜːk/",
        meaning: "bài tập về nhà",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443353.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/homework--_gb_1.mp3",
      },
      {
        word: "test",
        phonetic: "/test/",
        meaning: "bài kiểm tra",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443354.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/test--_gb_1.mp3",
      },
      {
        word: "exam",
        phonetic: "/ɪɡˈzæm/",
        meaning: "kỳ thi",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443355.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/exam--_gb_1.mp3",
      },
      {
        word: "lesson",
        phonetic: "/ˈles.ən/",
        meaning: "bài học",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443356.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/lesson--_gb_1.mp3",
      },
      {
        word: "subject",
        phonetic: "/ˈsʌb.dʒɪkt/",
        meaning: "môn học",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443357.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/subject--_gb_1.mp3",
      },
      {
        word: "math",
        phonetic: "/mæθ/",
        meaning: "toán",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443358.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/math--_gb_1.mp3",
      },
      {
        word: "English",
        phonetic: "/ˈɪŋ.ɡlɪʃ/",
        meaning: "tiếng Anh",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443359.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/english--_gb_1.mp3",
      },
      {
        word: "science",
        phonetic: "/ˈsaɪ.əns/",
        meaning: "khoa học",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443360.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/science--_gb_1.mp3",
      },
      {
        word: "history",
        phonetic: "/ˈhɪs.tər.i/",
        meaning: "lịch sử",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443361.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/history--_gb_1.mp3",
      },
      {
        word: "geography",
        phonetic: "/dʒiˈɒɡ.rə.fi/",
        meaning: "địa lý",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443362.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/geography--_gb_1.mp3",
      },
      {
        word: "art",
        phonetic: "/ɑːt/",
        meaning: "mỹ thuật",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443363.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/art--_gb_1.mp3",
      },
      {
        word: "music",
        phonetic: "/ˈmjuː.zɪk/",
        meaning: "âm nhạc",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443364.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/music--_gb_1.mp3",
      },
      {
        word: "computer",
        phonetic: "/kəmˈpjuː.tər/",
        meaning: "máy tính",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443365.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/computer--_gb_1.mp3",
      },
      {
        word: "library",
        phonetic: "/ˈlaɪ.brər.i/",
        meaning: "thư viện",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443366.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/library--_gb_1.mp3",
      },
      {
        word: "principal",
        phonetic: "/ˈprɪn.sɪ.pəl/",
        meaning: "hiệu trưởng",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443367.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/principal--_gb_1.mp3",
      },
      {
        word: "classmate",
        phonetic: "/ˈklɑːs.meɪt/",
        meaning: "bạn cùng lớp",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443368.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/classmate--_gb_1.mp3",
      },
      {
        word: "uniform",
        phonetic: "/ˈjuː.nɪ.fɔːm/",
        meaning: "đồng phục",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443369.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/uniform--_gb_1.mp3",
      },
      {
        word: "bell",
        phonetic: "/bel/",
        meaning: "chuông",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443370.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bell--_gb_1.mp3",
      },
      {
        word: "break time",
        phonetic: "/breɪk taɪm/",
        meaning: "giờ ra chơi",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443371.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/break--_gb_1.mp3",
      },
      {
        word: "playground",
        phonetic: "/ˈpleɪ.ɡraʊnd/",
        meaning: "sân chơi",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443372.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/playground--_gb_1.mp3",
      },
      {
        word: "backpack",
        phonetic: "/ˈbæk.pæk/",
        meaning: "ba lô",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443373.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/backpack--_gb_1.mp3",
      },
      {
        word: "marker",
        phonetic: "/ˈmɑː.kər/",
        meaning: "bút dạ",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443374.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/marker--_gb_1.mp3",
      },
      {
        word: "glue",
        phonetic: "/ɡluː/",
        meaning: "keo dán",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443375.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/glue--_gb_1.mp3",
      },
      {
        word: "scissors",
        phonetic: "/ˈsɪz.əz/",
        meaning: "cái kéo",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443376.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/scissors--_gb_1.mp3",
      },
      {
        word: "clock",
        phonetic: "/klɒk/",
        meaning: "đồng hồ",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443377.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/clock--_gb_1.mp3",
      },
      {
        word: "map",
        phonetic: "/mæp/",
        meaning: "bản đồ",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443378.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/map--_gb_1.mp3",
      },
      {
        word: "teacher's desk",
        phonetic: "/ˈtiː.tʃərz desk/",
        meaning: "bàn giáo viên",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443379.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/teacher--_gb_1.mp3",
      },
      {
        word: "school bus",
        phonetic: "/skuːl bʌs/",
        meaning: "xe buýt trường học",
        img: "https://cdn-icons-png.flaticon.com/512/3443/3443380.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bus--_gb_1.mp3",
      },
    ],
  }, // 6️⃣ JOBS
  Jobs: {
    icon: "fa-user-tie",
    color: "bg-gradient-to-br from-orange-200 to-amber-300 text-amber-800",
    vocabulary: [
      {
        word: "doctor",
        phonetic: "/ˈdɒk.tər/",
        meaning: "bác sĩ",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/doctor--_gb_1.mp3",
      },
      {
        word: "nurse",
        phonetic: "/nɜːs/",
        meaning: "y tá",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995579.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/nurse--_gb_1.mp3",
      },
      {
        word: "teacher",
        phonetic: "/ˈtiː.tʃər/",
        meaning: "giáo viên",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995577.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/teacher--_gb_1.mp3",
      },
      {
        word: "student",
        phonetic: "/ˈstjuː.dənt/",
        meaning: "học sinh",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995568.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/student--_gb_1.mp3",
      },
      {
        word: "police officer",
        phonetic: "/pəˈliːs ˌɒf.ɪ.sər/",
        meaning: "cảnh sát",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995571.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/police_officer--_gb_1.mp3",
      },
      {
        word: "firefighter",
        phonetic: "/ˈfaɪəˌfaɪ.tər/",
        meaning: "lính cứu hỏa",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995570.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/firefighter--_gb_1.mp3",
      },
      {
        word: "pilot",
        phonetic: "/ˈpaɪ.lət/",
        meaning: "phi công",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995566.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pilot--_gb_1.mp3",
      },
      {
        word: "chef",
        phonetic: "/ʃef/",
        meaning: "đầu bếp",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995569.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/chef--_gb_1.mp3",
      },
      {
        word: "farmer",
        phonetic: "/ˈfɑː.mər/",
        meaning: "nông dân",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995567.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/farmer--_gb_1.mp3",
      },
      {
        word: "singer",
        phonetic: "/ˈsɪŋ.ər/",
        meaning: "ca sĩ",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995576.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/singer--_gb_1.mp3",
      },
      {
        word: "actor",
        phonetic: "/ˈæk.tər/",
        meaning: "diễn viên",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995565.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/actor--_gb_1.mp3",
      },
      {
        word: "artist",
        phonetic: "/ˈɑː.tɪst/",
        meaning: "họa sĩ",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995578.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/artist--_gb_1.mp3",
      },
      {
        word: "engineer",
        phonetic: "/ˌen.dʒɪˈnɪər/",
        meaning: "kỹ sư",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995575.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/engineer--_gb_1.mp3",
      },
      {
        word: "driver",
        phonetic: "/ˈdraɪ.vər/",
        meaning: "tài xế",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995580.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/driver--_gb_1.mp3",
      },
      {
        word: "builder",
        phonetic: "/ˈbɪl.dər/",
        meaning: "thợ xây",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995564.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/builder--_gb_1.mp3",
      },
      {
        word: "cleaner",
        phonetic: "/ˈkliː.nər/",
        meaning: "người dọn dẹp",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995572.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cleaner--_gb_1.mp3",
      },
      {
        word: "scientist",
        phonetic: "/ˈsaɪən.tɪst/",
        meaning: "nhà khoa học",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995581.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/scientist--_gb_1.mp3",
      },
      {
        word: "writer",
        phonetic: "/ˈraɪ.tər/",
        meaning: "nhà văn",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995582.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/writer--_gb_1.mp3",
      },
      {
        word: "reporter",
        phonetic: "/rɪˈpɔː.tər/",
        meaning: "phóng viên",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995583.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/reporter--_gb_1.mp3",
      },
      {
        word: "photographer",
        phonetic: "/fəˈtɒɡ.rə.fər/",
        meaning: "nhiếp ảnh gia",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995584.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/photographer--_gb_1.mp3",
      },
      {
        word: "soldier",
        phonetic: "/ˈsəʊl.dʒər/",
        meaning: "người lính",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995585.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/soldier--_gb_1.mp3",
      },
      {
        word: "policeman",
        phonetic: "/pəˈliːs.mən/",
        meaning: "cảnh sát nam",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995586.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/policeman--_gb_1.mp3",
      },
      {
        word: "policewoman",
        phonetic: "/pəˈliːsˌwʊm.ən/",
        meaning: "nữ cảnh sát",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995587.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/policewoman--_gb_1.mp3",
      },
      {
        word: "dentist",
        phonetic: "/ˈden.tɪst/",
        meaning: "nha sĩ",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995588.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/dentist--_gb_1.mp3",
      },
      {
        word: "vet",
        phonetic: "/vet/",
        meaning: "bác sĩ thú y",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995589.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/vet--_gb_1.mp3",
      },
      {
        word: "mechanic",
        phonetic: "/məˈkæn.ɪk/",
        meaning: "thợ sửa xe",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995590.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/mechanic--_gb_1.mp3",
      },
      {
        word: "waiter",
        phonetic: "/ˈweɪ.tər/",
        meaning: "phục vụ nam",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995591.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/waiter--_gb_1.mp3",
      },
      {
        word: "waitress",
        phonetic: "/ˈweɪ.trəs/",
        meaning: "phục vụ nữ",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995592.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/waitress--_gb_1.mp3",
      },
      {
        word: "sailor",
        phonetic: "/ˈseɪ.lər/",
        meaning: "thủy thủ",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995593.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sailor--_gb_1.mp3",
      },
      {
        word: "postman",
        phonetic: "/ˈpəʊst.mən/",
        meaning: "người đưa thư",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995594.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/postman--_gb_1.mp3",
      },
      {
        word: "shop assistant",
        phonetic: "/ˈʃɒp əˌsɪs.tənt/",
        meaning: "nhân viên bán hàng",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995595.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/shop_assistant--_gb_1.mp3",
      },
      {
        word: "tailor",
        phonetic: "/ˈteɪ.lər/",
        meaning: "thợ may",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995596.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/tailor--_gb_1.mp3",
      },
      {
        word: "baker",
        phonetic: "/ˈbeɪ.kər/",
        meaning: "thợ làm bánh",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995597.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/baker--_gb_1.mp3",
      },
      {
        word: "driver",
        phonetic: "/ˈdraɪ.vər/",
        meaning: "người lái xe",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995598.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/driver--_gb_1.mp3",
      },
      {
        word: "cook",
        phonetic: "/kʊk/",
        meaning: "đầu bếp",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995599.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cook--_gb_1.mp3",
      },
      {
        word: "singer",
        phonetic: "/ˈsɪŋ.ər/",
        meaning: "ca sĩ",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995600.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/singer--_gb_1.mp3",
      },
      {
        word: "architect",
        phonetic: "/ˈɑː.kɪ.tekt/",
        meaning: "kiến trúc sư",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995601.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/architect--_gb_1.mp3",
      },
      {
        word: "designer",
        phonetic: "/dɪˈzaɪ.nər/",
        meaning: "nhà thiết kế",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995602.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/designer--_gb_1.mp3",
      },
      {
        word: "programmer",
        phonetic: "/ˈprəʊ.ɡræm.ər/",
        meaning: "lập trình viên",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995603.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/programmer--_gb_1.mp3",
      },
      {
        word: "engineer",
        phonetic: "/ˌen.dʒɪˈnɪər/",
        meaning: "kỹ sư",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995604.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/engineer--_gb_1.mp3",
      },
    ],
  }, // 7️⃣ SPORTS
  Sports: {
    icon: "fa-futbol",
    color: "bg-gradient-to-br from-green-200 to-emerald-300 text-emerald-800",
    vocabulary: [
      {
        word: "sport",
        phonetic: "/spɔːt/",
        meaning: "thể thao",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sport--_gb_1.mp3",
      },
      {
        word: "football",
        phonetic: "/ˈfʊt.bɔːl/",
        meaning: "bóng đá",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046769.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/football--_gb_1.mp3",
      },
      {
        word: "basketball",
        phonetic: "/ˈbɑː.skɪt.bɔːl/",
        meaning: "bóng rổ",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/basketball--_gb_1.mp3",
      },
      {
        word: "volleyball",
        phonetic: "/ˈvɒl.i.bɔːl/",
        meaning: "bóng chuyền",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046792.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/volleyball--_gb_1.mp3",
      },
      {
        word: "badminton",
        phonetic: "/ˈbæd.mɪn.tən/",
        meaning: "cầu lông",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046768.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/badminton--_gb_1.mp3",
      },
      {
        word: "tennis",
        phonetic: "/ˈten.ɪs/",
        meaning: "quần vợt",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046790.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/tennis--_gb_1.mp3",
      },
      {
        word: "table tennis",
        phonetic: "/ˈteɪ.bəl ˌten.ɪs/",
        meaning: "bóng bàn",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046789.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/table_tennis--_gb_1.mp3",
      },
      {
        word: "swimming",
        phonetic: "/ˈswɪm.ɪŋ/",
        meaning: "bơi lội",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046783.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/swimming--_gb_1.mp3",
      },
      {
        word: "running",
        phonetic: "/ˈrʌn.ɪŋ/",
        meaning: "chạy bộ",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046787.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/running--_gb_1.mp3",
      },
      {
        word: "cycling",
        phonetic: "/ˈsaɪ.klɪŋ/",
        meaning: "đạp xe",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046773.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cycling--_gb_1.mp3",
      },
      {
        word: "skiing",
        phonetic: "/ˈskiː.ɪŋ/",
        meaning: "trượt tuyết",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046791.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/skiing--_gb_1.mp3",
      },
      {
        word: "skating",
        phonetic: "/ˈskeɪ.tɪŋ/",
        meaning: "trượt patin",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046780.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/skating--_gb_1.mp3",
      },
      {
        word: "surfing",
        phonetic: "/ˈsɜː.fɪŋ/",
        meaning: "lướt sóng",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046781.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/surfing--_gb_1.mp3",
      },
      {
        word: "boxing",
        phonetic: "/ˈbɒk.sɪŋ/",
        meaning: "đấm bốc",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046772.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/boxing--_gb_1.mp3",
      },
      {
        word: "golf",
        phonetic: "/ɡɒlf/",
        meaning: "đánh gôn",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046775.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/golf--_gb_1.mp3",
      },
      {
        word: "baseball",
        phonetic: "/ˈbeɪs.bɔːl/",
        meaning: "bóng chày",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046767.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/baseball--_gb_1.mp3",
      },
      {
        word: "archery",
        phonetic: "/ˈɑː.tʃər.i/",
        meaning: "bắn cung",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046766.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/archery--_gb_1.mp3",
      },
      {
        word: "gymnastics",
        phonetic: "/dʒɪmˈnæs.tɪks/",
        meaning: "thể dục dụng cụ",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046776.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/gymnastics--_gb_1.mp3",
      },
      {
        word: "yoga",
        phonetic: "/ˈjəʊ.ɡə/",
        meaning: "yoga",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046793.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/yoga--_gb_1.mp3",
      },
      {
        word: "karate",
        phonetic: "/kəˈrɑː.ti/",
        meaning: "võ karate",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046778.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/karate--_gb_1.mp3",
      },
      {
        word: "judo",
        phonetic: "/ˈdʒuː.dəʊ/",
        meaning: "võ judo",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046777.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/judo--_gb_1.mp3",
      },
      {
        word: "hockey",
        phonetic: "/ˈhɒk.i/",
        meaning: "khúc côn cầu",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046779.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/hockey--_gb_1.mp3",
      },
      {
        word: "baseball bat",
        phonetic: "/ˈbeɪs.bɔːl bæt/",
        meaning: "gậy bóng chày",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046765.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bat--_gb_1.mp3",
      },
      {
        word: "ball",
        phonetic: "/bɔːl/",
        meaning: "quả bóng",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046764.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/ball--_gb_1.mp3",
      },
      {
        word: "goal",
        phonetic: "/ɡəʊl/",
        meaning: "khung thành",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046774.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/goal--_gb_1.mp3",
      },
      {
        word: "player",
        phonetic: "/ˈpleɪ.ər/",
        meaning: "cầu thủ",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046782.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/player--_gb_1.mp3",
      },
      {
        word: "coach",
        phonetic: "/kəʊtʃ/",
        meaning: "huấn luyện viên",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046770.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/coach--_gb_1.mp3",
      },
      {
        word: "team",
        phonetic: "/tiːm/",
        meaning: "đội",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046788.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/team--_gb_1.mp3",
      },
      {
        word: "win",
        phonetic: "/wɪn/",
        meaning: "thắng",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046794.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/win--_gb_1.mp3",
      },
      {
        word: "lose",
        phonetic: "/luːz/",
        meaning: "thua",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046771.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/lose--_gb_1.mp3",
      },
      {
        word: "match",
        phonetic: "/mætʃ/",
        meaning: "trận đấu",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046775.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/match--_gb_1.mp3",
      },
      {
        word: "score",
        phonetic: "/skɔːr/",
        meaning: "tỷ số",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/score--_gb_1.mp3",
      },
      {
        word: "medal",
        phonetic: "/ˈmed.əl/",
        meaning: "huy chương",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/medal--_gb_1.mp3",
      },
      {
        word: "stadium",
        phonetic: "/ˈsteɪ.di.əm/",
        meaning: "sân vận động",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046787.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/stadium--_gb_1.mp3",
      },
      {
        word: "whistle",
        phonetic: "/ˈwɪs.əl/",
        meaning: "còi",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046795.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/whistle--_gb_1.mp3",
      },
      {
        word: "referee",
        phonetic: "/ˌref.əˈriː/",
        meaning: "trọng tài",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046788.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/referee--_gb_1.mp3",
      },
      {
        word: "practice",
        phonetic: "/ˈpræk.tɪs/",
        meaning: "luyện tập",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046796.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/practice--_gb_1.mp3",
      },
      {
        word: "champion",
        phonetic: "/ˈtʃæm.pi.ən/",
        meaning: "nhà vô địch",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046797.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/champion--_gb_1.mp3",
      },
      {
        word: "trophy",
        phonetic: "/ˈtrəʊ.fi/",
        meaning: "cúp",
        img: "https://cdn-icons-png.flaticon.com/512/1046/1046798.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/trophy--_gb_1.mp3",
      },
    ],
  }, // 8️⃣ CLOTHES
  Clothes: {
    icon: "fa-tshirt",
    color: "bg-gradient-to-br from-pink-200 to-rose-300 text-rose-800",
    vocabulary: [
      {
        word: "shirt",
        phonetic: "/ʃɜːt/",
        meaning: "áo sơ mi",
        img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/shirt--_gb_1.mp3",
      },
      {
        word: "T-shirt",
        phonetic: "/ˈtiː.ʃɜːt/",
        meaning: "áo thun",
        img: "https://cdn-icons-png.flaticon.com/512/892/892471.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/t_shirt--_gb_1.mp3",
      },
      {
        word: "pants",
        phonetic: "/pænts/",
        meaning: "quần dài",
        img: "https://cdn-icons-png.flaticon.com/512/892/892496.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pants--_gb_1.mp3",
      },
      {
        word: "shorts",
        phonetic: "/ʃɔːts/",
        meaning: "quần short",
        img: "https://cdn-icons-png.flaticon.com/512/892/892466.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/shorts--_gb_1.mp3",
      },
      {
        word: "skirt",
        phonetic: "/skɜːt/",
        meaning: "váy ngắn",
        img: "https://cdn-icons-png.flaticon.com/512/892/892467.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/skirt--_gb_1.mp3",
      },
      {
        word: "dress",
        phonetic: "/dres/",
        meaning: "đầm",
        img: "https://cdn-icons-png.flaticon.com/512/892/892470.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/dress--_gb_1.mp3",
      },
      {
        word: "jacket",
        phonetic: "/ˈdʒæk.ɪt/",
        meaning: "áo khoác",
        img: "https://cdn-icons-png.flaticon.com/512/892/892468.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/jacket--_gb_1.mp3",
      },
      {
        word: "coat",
        phonetic: "/kəʊt/",
        meaning: "áo choàng",
        img: "https://cdn-icons-png.flaticon.com/512/892/892469.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/coat--_gb_1.mp3",
      },
      {
        word: "hat",
        phonetic: "/hæt/",
        meaning: "mũ",
        img: "https://cdn-icons-png.flaticon.com/512/892/892472.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/hat--_gb_1.mp3",
      },
      {
        word: "cap",
        phonetic: "/kæp/",
        meaning: "nón lưỡi trai",
        img: "https://cdn-icons-png.flaticon.com/512/892/892473.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cap--_gb_1.mp3",
      },
      {
        word: "shoes",
        phonetic: "/ʃuːz/",
        meaning: "giày",
        img: "https://cdn-icons-png.flaticon.com/512/892/892474.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/shoes--_gb_1.mp3",
      },
      {
        word: "socks",
        phonetic: "/sɒks/",
        meaning: "tất",
        img: "https://cdn-icons-png.flaticon.com/512/892/892475.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/socks--_gb_1.mp3",
      },
      {
        word: "boots",
        phonetic: "/buːts/",
        meaning: "ủng",
        img: "https://cdn-icons-png.flaticon.com/512/892/892476.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/boots--_gb_1.mp3",
      },
      {
        word: "sandals",
        phonetic: "/ˈsæn.dəlz/",
        meaning: "dép quai hậu",
        img: "https://cdn-icons-png.flaticon.com/512/892/892477.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sandal--_gb_1.mp3",
      },
      {
        word: "scarf",
        phonetic: "/skɑːf/",
        meaning: "khăn quàng cổ",
        img: "https://cdn-icons-png.flaticon.com/512/892/892478.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/scarf--_gb_1.mp3",
      },
      {
        word: "gloves",
        phonetic: "/ɡlʌvz/",
        meaning: "găng tay",
        img: "https://cdn-icons-png.flaticon.com/512/892/892479.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/glove--_gb_1.mp3",
      },
      {
        word: "belt",
        phonetic: "/belt/",
        meaning: "thắt lưng",
        img: "https://cdn-icons-png.flaticon.com/512/892/892480.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/belt--_gb_1.mp3",
      },
      {
        word: "tie",
        phonetic: "/taɪ/",
        meaning: "cà vạt",
        img: "https://cdn-icons-png.flaticon.com/512/892/892481.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/tie--_gb_1.mp3",
      },
      {
        word: "watch",
        phonetic: "/wɒtʃ/",
        meaning: "đồng hồ đeo tay",
        img: "https://cdn-icons-png.flaticon.com/512/892/892482.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/watch--_gb_1.mp3",
      },
      {
        word: "sunglasses",
        phonetic: "/ˈsʌnˌɡlɑː.sɪz/",
        meaning: "kính râm",
        img: "https://cdn-icons-png.flaticon.com/512/892/892483.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sunglasses--_gb_1.mp3",
      },
      {
        word: "glasses",
        phonetic: "/ˈɡlɑː.sɪz/",
        meaning: "kính cận",
        img: "https://cdn-icons-png.flaticon.com/512/892/892484.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/glasses--_gb_1.mp3",
      },
      {
        word: "jeans",
        phonetic: "/dʒiːnz/",
        meaning: "quần jean",
        img: "https://cdn-icons-png.flaticon.com/512/892/892485.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/jeans--_gb_1.mp3",
      },
      {
        word: "uniform",
        phonetic: "/ˈjuː.nɪ.fɔːm/",
        meaning: "đồng phục",
        img: "https://cdn-icons-png.flaticon.com/512/892/892486.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/uniform--_gb_1.mp3",
      },
      {
        word: "pajamas",
        phonetic: "/pəˈdʒɑː.məz/",
        meaning: "đồ ngủ",
        img: "https://cdn-icons-png.flaticon.com/512/892/892487.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pajamas--_gb_1.mp3",
      },
      {
        word: "raincoat",
        phonetic: "/ˈreɪn.kəʊt/",
        meaning: "áo mưa",
        img: "https://cdn-icons-png.flaticon.com/512/892/892488.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/raincoat--_gb_1.mp3",
      },
      {
        word: "swimsuit",
        phonetic: "/ˈswɪm.suːt/",
        meaning: "đồ bơi",
        img: "https://cdn-icons-png.flaticon.com/512/892/892489.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/swimsuit--_gb_1.mp3",
      },
      {
        word: "hoodie",
        phonetic: "/ˈhʊd.i/",
        meaning: "áo có mũ",
        img: "https://cdn-icons-png.flaticon.com/512/892/892490.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/hoodie--_gb_1.mp3",
      },
      {
        word: "coat",
        phonetic: "/kəʊt/",
        meaning: "áo khoác ngoài",
        img: "https://cdn-icons-png.flaticon.com/512/892/892491.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/coat--_gb_1.mp3",
      },
      {
        word: "sweater",
        phonetic: "/ˈswet.ər/",
        meaning: "áo len",
        img: "https://cdn-icons-png.flaticon.com/512/892/892492.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sweater--_gb_1.mp3",
      },
      {
        word: "boots",
        phonetic: "/buːts/",
        meaning: "giày ống",
        img: "https://cdn-icons-png.flaticon.com/512/892/892493.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/boot--_gb_1.mp3",
      },
      {
        word: "mittens",
        phonetic: "/ˈmɪt.ənz/",
        meaning: "găng tay len",
        img: "https://cdn-icons-png.flaticon.com/512/892/892494.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/mitten--_gb_1.mp3",
      },
      {
        word: "necklace",
        phonetic: "/ˈnek.ləs/",
        meaning: "dây chuyền",
        img: "https://cdn-icons-png.flaticon.com/512/892/892495.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/necklace--_gb_1.mp3",
      },
      {
        word: "earrings",
        phonetic: "/ˈɪə.rɪŋz/",
        meaning: "bông tai",
        img: "https://cdn-icons-png.flaticon.com/512/892/892497.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/earring--_gb_1.mp3",
      },
      {
        word: "ring",
        phonetic: "/rɪŋ/",
        meaning: "nhẫn",
        img: "https://cdn-icons-png.flaticon.com/512/892/892498.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/ring--_gb_1.mp3",
      },
      {
        word: "wallet",
        phonetic: "/ˈwɒl.ɪt/",
        meaning: "ví tiền",
        img: "https://cdn-icons-png.flaticon.com/512/892/892499.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/wallet--_gb_1.mp3",
      },
      {
        word: "bag",
        phonetic: "/bæɡ/",
        meaning: "túi xách",
        img: "https://cdn-icons-png.flaticon.com/512/892/892500.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bag--_gb_1.mp3",
      },
      {
        word: "umbrella",
        phonetic: "/ʌmˈbrel.ə/",
        meaning: "ô",
        img: "https://cdn-icons-png.flaticon.com/512/892/892501.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/umbrella--_gb_1.mp3",
      },
      {
        word: "mask",
        phonetic: "/mɑːsk/",
        meaning: "khẩu trang",
        img: "https://cdn-icons-png.flaticon.com/512/892/892502.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/mask--_gb_1.mp3",
      },
      {
        word: "shoestring",
        phonetic: "/ˈʃuː.strɪŋ/",
        meaning: "dây giày",
        img: "https://cdn-icons-png.flaticon.com/512/892/892503.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/shoelace--_gb_1.mp3",
      },
      {
        word: "button",
        phonetic: "/ˈbʌt.ən/",
        meaning: "nút áo",
        img: "https://cdn-icons-png.flaticon.com/512/892/892504.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/button--_gb_1.mp3",
      },
    ],
  }, // 9️⃣ TRANSPORT
  Transport: {
    icon: "fa-car-side",
    color: "bg-gradient-to-br from-sky-200 to-cyan-300 text-cyan-800",
    vocabulary: [
      {
        word: "car",
        phonetic: "/kɑːr/",
        meaning: "xe hơi",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995571.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/car--_gb_1.mp3",
      },
      {
        word: "bus",
        phonetic: "/bʌs/",
        meaning: "xe buýt",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995570.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bus--_gb_1.mp3",
      },
      {
        word: "bicycle",
        phonetic: "/ˈbaɪ.sɪ.kəl/",
        meaning: "xe đạp",
        img: "https://cdn-icons-png.flaticon.com/512/743/743131.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bicycle--_gb_1.mp3",
      },
      {
        word: "motorbike",
        phonetic: "/ˈməʊ.tə.baɪk/",
        meaning: "xe máy",
        img: "https://cdn-icons-png.flaticon.com/512/743/743133.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/motorbike--_gb_1.mp3",
      },
      {
        word: "train",
        phonetic: "/treɪn/",
        meaning: "tàu hỏa",
        img: "https://cdn-icons-png.flaticon.com/512/743/743147.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/train--_gb_1.mp3",
      },
      {
        word: "plane",
        phonetic: "/pleɪn/",
        meaning: "máy bay",
        img: "https://cdn-icons-png.flaticon.com/512/743/743146.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/plane--_gb_1.mp3",
      },
      {
        word: "helicopter",
        phonetic: "/ˈhel.ɪˌkɒp.tər/",
        meaning: "trực thăng",
        img: "https://cdn-icons-png.flaticon.com/512/743/743144.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/helicopter--_gb_1.mp3",
      },
      {
        word: "boat",
        phonetic: "/bəʊt/",
        meaning: "thuyền",
        img: "https://cdn-icons-png.flaticon.com/512/743/743134.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/boat--_gb_1.mp3",
      },
      {
        word: "ship",
        phonetic: "/ʃɪp/",
        meaning: "tàu thủy",
        img: "https://cdn-icons-png.flaticon.com/512/743/743135.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/ship--_gb_1.mp3",
      },
      {
        word: "subway",
        phonetic: "/ˈsʌb.weɪ/",
        meaning: "tàu điện ngầm",
        img: "https://cdn-icons-png.flaticon.com/512/743/743150.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/subway--_gb_1.mp3",
      },
      {
        word: "truck",
        phonetic: "/trʌk/",
        meaning: "xe tải",
        img: "https://cdn-icons-png.flaticon.com/512/743/743149.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/truck--_gb_1.mp3",
      },
      {
        word: "taxi",
        phonetic: "/ˈtæk.si/",
        meaning: "xe taxi",
        img: "https://cdn-icons-png.flaticon.com/512/743/743148.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/taxi--_gb_1.mp3",
      },
      {
        word: "van",
        phonetic: "/væn/",
        meaning: "xe tải nhỏ",
        img: "https://cdn-icons-png.flaticon.com/512/743/743151.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/van--_gb_1.mp3",
      },
      {
        word: "train station",
        phonetic: "/treɪn ˈsteɪ.ʃən/",
        meaning: "ga tàu",
        img: "https://cdn-icons-png.flaticon.com/512/743/743152.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/station--_gb_1.mp3",
      },
      {
        word: "airport",
        phonetic: "/ˈeə.pɔːt/",
        meaning: "sân bay",
        img: "https://cdn-icons-png.flaticon.com/512/743/743153.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/airport--_gb_1.mp3",
      },
      {
        word: "ticket",
        phonetic: "/ˈtɪk.ɪt/",
        meaning: "vé",
        img: "https://cdn-icons-png.flaticon.com/512/743/743154.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/ticket--_gb_1.mp3",
      },
      {
        word: "seat",
        phonetic: "/siːt/",
        meaning: "chỗ ngồi",
        img: "https://cdn-icons-png.flaticon.com/512/743/743155.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/seat--_gb_1.mp3",
      },
      {
        word: "helmet",
        phonetic: "/ˈhel.mɪt/",
        meaning: "mũ bảo hiểm",
        img: "https://cdn-icons-png.flaticon.com/512/743/743156.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/helmet--_gb_1.mp3",
      },
      {
        word: "road",
        phonetic: "/rəʊd/",
        meaning: "đường",
        img: "https://cdn-icons-png.flaticon.com/512/743/743157.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/road--_gb_1.mp3",
      },
      {
        word: "bridge",
        phonetic: "/brɪdʒ/",
        meaning: "cầu",
        img: "https://cdn-icons-png.flaticon.com/512/743/743158.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bridge--_gb_1.mp3",
      },
      {
        word: "traffic light",
        phonetic: "/ˈtræf.ɪk laɪt/",
        meaning: "đèn giao thông",
        img: "https://cdn-icons-png.flaticon.com/512/743/743159.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/traffic_light--_gb_1.mp3",
      },
      {
        word: "crosswalk",
        phonetic: "/ˈkrɒs.wɔːk/",
        meaning: "vạch qua đường",
        img: "https://cdn-icons-png.flaticon.com/512/743/743160.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/crosswalk--_gb_1.mp3",
      },
      {
        word: "driver",
        phonetic: "/ˈdraɪ.vər/",
        meaning: "người lái xe",
        img: "https://cdn-icons-png.flaticon.com/512/743/743161.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/driver--_gb_1.mp3",
      },
      {
        word: "passenger",
        phonetic: "/ˈpæs.ɪn.dʒər/",
        meaning: "hành khách",
        img: "https://cdn-icons-png.flaticon.com/512/743/743162.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/passenger--_gb_1.mp3",
      },
      {
        word: "wheel",
        phonetic: "/wiːl/",
        meaning: "bánh xe",
        img: "https://cdn-icons-png.flaticon.com/512/743/743163.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/wheel--_gb_1.mp3",
      },
      {
        word: "engine",
        phonetic: "/ˈen.dʒɪn/",
        meaning: "động cơ",
        img: "https://cdn-icons-png.flaticon.com/512/743/743164.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/engine--_gb_1.mp3",
      },
      {
        word: "fuel",
        phonetic: "/ˈfjuː.əl/",
        meaning: "nhiên liệu",
        img: "https://cdn-icons-png.flaticon.com/512/743/743165.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/fuel--_gb_1.mp3",
      },
      {
        word: "garage",
        phonetic: "/ˈɡær.ɑːʒ/",
        meaning: "nhà để xe",
        img: "https://cdn-icons-png.flaticon.com/512/743/743166.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/garage--_gb_1.mp3",
      },
      {
        word: "parking",
        phonetic: "/ˈpɑː.kɪŋ/",
        meaning: "bãi đỗ xe",
        img: "https://cdn-icons-png.flaticon.com/512/743/743167.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/parking--_gb_1.mp3",
      },
      {
        word: "bus stop",
        phonetic: "/bʌs stɒp/",
        meaning: "trạm xe buýt",
        img: "https://cdn-icons-png.flaticon.com/512/743/743168.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/bus_stop--_gb_1.mp3",
      },
      {
        word: "harbor",
        phonetic: "/ˈhɑː.bər/",
        meaning: "bến cảng",
        img: "https://cdn-icons-png.flaticon.com/512/743/743169.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/harbor--_gb_1.mp3",
      },
      {
        word: "sail",
        phonetic: "/seɪl/",
        meaning: "cánh buồm",
        img: "https://cdn-icons-png.flaticon.com/512/743/743170.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/sail--_gb_1.mp3",
      },
      {
        word: "boat trip",
        phonetic: "/bəʊt trɪp/",
        meaning: "chuyến đi thuyền",
        img: "https://cdn-icons-png.flaticon.com/512/743/743171.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/boat--_gb_1.mp3",
      },
      {
        word: "flight",
        phonetic: "/flaɪt/",
        meaning: "chuyến bay",
        img: "https://cdn-icons-png.flaticon.com/512/743/743172.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/flight--_gb_1.mp3",
      },
      {
        word: "driver’s license",
        phonetic: "/ˈdraɪ.vəz ˌlaɪ.səns/",
        meaning: "bằng lái xe",
        img: "https://cdn-icons-png.flaticon.com/512/743/743173.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/license--_gb_1.mp3",
      },
      {
        word: "seatbelt",
        phonetic: "/ˈsiːt.belt/",
        meaning: "dây an toàn",
        img: "https://cdn-icons-png.flaticon.com/512/743/743174.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/seat_belt--_gb_1.mp3",
      },
      {
        word: "traffic",
        phonetic: "/ˈtræf.ɪk/",
        meaning: "giao thông",
        img: "https://cdn-icons-png.flaticon.com/512/743/743175.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/traffic--_gb_1.mp3",
      },
      {
        word: "turn left",
        phonetic: "/tɜːn left/",
        meaning: "rẽ trái",
        img: "https://cdn-icons-png.flaticon.com/512/743/743176.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/turn--_gb_1.mp3",
      },
      {
        word: "turn right",
        phonetic: "/tɜːn raɪt/",
        meaning: "rẽ phải",
        img: "https://cdn-icons-png.flaticon.com/512/743/743177.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/turn--_gb_1.mp3",
      },
      {
        word: "go straight",
        phonetic: "/ɡəʊ streɪt/",
        meaning: "đi thẳng",
        img: "https://cdn-icons-png.flaticon.com/512/743/743178.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/go--_gb_1.mp3",
      },
      {
        word: "stop",
        phonetic: "/stɒp/",
        meaning: "dừng lại",
        img: "https://cdn-icons-png.flaticon.com/512/743/743179.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/stop--_gb_1.mp3",
      },
    ],
  }, // 1️⃣0️⃣ FRUITS
  Fruits: {
    icon: "fa-apple-alt",
    color: "bg-gradient-to-br from-red-200 to-orange-300 text-red-800",
    vocabulary: [
      {
        word: "apple",
        phonetic: "/ˈæp.əl/",
        meaning: "táo",
        img: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/apple--_gb_1.mp3",
      },
      {
        word: "banana",
        phonetic: "/bəˈnɑː.nə/",
        meaning: "chuối",
        img: "https://cdn-icons-png.flaticon.com/512/415/415734.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/banana--_gb_1.mp3",
      },
      {
        word: "orange",
        phonetic: "/ˈɒr.ɪndʒ/",
        meaning: "cam",
        img: "https://cdn-icons-png.flaticon.com/512/415/415744.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/orange--_gb_1.mp3",
      },
      {
        word: "mango",
        phonetic: "/ˈmæŋ.ɡəʊ/",
        meaning: "xoài",
        img: "https://cdn-icons-png.flaticon.com/512/415/415742.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/mango--_gb_1.mp3",
      },
      {
        word: "grape",
        phonetic: "/ɡreɪp/",
        meaning: "nho",
        img: "https://cdn-icons-png.flaticon.com/512/415/415741.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/grape--_gb_1.mp3",
      },
      {
        word: "watermelon",
        phonetic: "/ˈwɔː.təˌmel.ən/",
        meaning: "dưa hấu",
        img: "https://cdn-icons-png.flaticon.com/512/415/415749.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/watermelon--_gb_1.mp3",
      },
      {
        word: "pineapple",
        phonetic: "/ˈpaɪnˌæp.əl/",
        meaning: "dứa",
        img: "https://cdn-icons-png.flaticon.com/512/415/415747.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pineapple--_gb_1.mp3",
      },
      {
        word: "strawberry",
        phonetic: "/ˈstrɔː.bər.i/",
        meaning: "dâu tây",
        img: "https://cdn-icons-png.flaticon.com/512/415/415748.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/strawberry--_gb_1.mp3",
      },
      {
        word: "lemon",
        phonetic: "/ˈlem.ən/",
        meaning: "chanh",
        img: "https://cdn-icons-png.flaticon.com/512/415/415740.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/lemon--_gb_1.mp3",
      },
      {
        word: "pear",
        phonetic: "/peər/",
        meaning: "lê",
        img: "https://cdn-icons-png.flaticon.com/512/415/415745.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pear--_gb_1.mp3",
      },
      {
        word: "cherry",
        phonetic: "/ˈtʃer.i/",
        meaning: "anh đào",
        img: "https://cdn-icons-png.flaticon.com/512/415/415737.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cherry--_gb_1.mp3",
      },
      {
        word: "peach",
        phonetic: "/piːtʃ/",
        meaning: "đào",
        img: "https://cdn-icons-png.flaticon.com/512/415/415744.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/peach--_gb_1.mp3",
      },
      {
        word: "plum",
        phonetic: "/plʌm/",
        meaning: "mận",
        img: "https://cdn-icons-png.flaticon.com/512/415/415746.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/plum--_gb_1.mp3",
      },
      {
        word: "coconut",
        phonetic: "/ˈkəʊ.kə.nʌt/",
        meaning: "dừa",
        img: "https://cdn-icons-png.flaticon.com/512/415/415739.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/coconut--_gb_1.mp3",
      },
      {
        word: "papaya",
        phonetic: "/pəˈpaɪ.ə/",
        meaning: "đu đủ",
        img: "https://cdn-icons-png.flaticon.com/512/415/415743.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/papaya--_gb_1.mp3",
      },
      {
        word: "kiwi",
        phonetic: "/ˈkiː.wiː/",
        meaning: "kiwi",
        img: "https://cdn-icons-png.flaticon.com/512/415/415738.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/kiwi--_gb_1.mp3",
      },
      {
        word: "melon",
        phonetic: "/ˈmel.ən/",
        meaning: "dưa gang",
        img: "https://cdn-icons-png.flaticon.com/512/415/415741.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/melon--_gb_1.mp3",
      },
      {
        word: "lime",
        phonetic: "/laɪm/",
        meaning: "chanh xanh",
        img: "https://cdn-icons-png.flaticon.com/512/415/415740.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/lime--_gb_1.mp3",
      },
      {
        word: "avocado",
        phonetic: "/ˌæv.əˈkɑː.dəʊ/",
        meaning: "bơ",
        img: "https://cdn-icons-png.flaticon.com/512/415/415735.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/avocado--_gb_1.mp3",
      },
      {
        word: "guava",
        phonetic: "/ˈɡwɑː.və/",
        meaning: "ổi",
        img: "https://cdn-icons-png.flaticon.com/512/415/415741.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/guava--_gb_1.mp3",
      },
      {
        word: "pomegranate",
        phonetic: "/ˈpɒm.ɪ.ɡræn.ɪt/",
        meaning: "lựu",
        img: "https://cdn-icons-png.flaticon.com/512/415/415746.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/pomegranate--_gb_1.mp3",
      },
      {
        word: "blueberry",
        phonetic: "/ˈbluːˌbər.i/",
        meaning: "việt quất",
        img: "https://cdn-icons-png.flaticon.com/512/415/415736.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/blueberry--_gb_1.mp3",
      },
      {
        word: "raspberry",
        phonetic: "/ˈrɑːz.bər.i/",
        meaning: "mâm xôi",
        img: "https://cdn-icons-png.flaticon.com/512/415/415748.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/raspberry--_gb_1.mp3",
      },
      {
        word: "durian",
        phonetic: "/ˈdʒʊə.ri.ən/",
        meaning: "sầu riêng",
        img: "https://cdn-icons-png.flaticon.com/512/415/415739.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/durian--_gb_1.mp3",
      },
      {
        word: "jackfruit",
        phonetic: "/ˈdʒæk.fruːt/",
        meaning: "mít",
        img: "https://cdn-icons-png.flaticon.com/512/415/415738.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/jackfruit--_gb_1.mp3",
      },
      {
        word: "dragon fruit",
        phonetic: "/ˈdræɡ.ən fruːt/",
        meaning: "thanh long",
        img: "https://cdn-icons-png.flaticon.com/512/415/415737.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/dragon_fruit--_gb_1.mp3",
      },
      {
        word: "custard apple",
        phonetic: "/ˈkʌs.təd ˌæp.əl/",
        meaning: "mãng cầu",
        img: "https://cdn-icons-png.flaticon.com/512/415/415739.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/apple--_gb_1.mp3",
      },
      {
        word: "soursop",
        phonetic: "/ˈsaʊə.sɒp/",
        meaning: "mãng cầu xiêm",
        img: "https://cdn-icons-png.flaticon.com/512/415/415740.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/soursop--_gb_1.mp3",
      },
      {
        word: "tamarind",
        phonetic: "/ˈtæm.ə.rɪnd/",
        meaning: "me",
        img: "https://cdn-icons-png.flaticon.com/512/415/415747.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/tamarind--_gb_1.mp3",
      },
      {
        word: "fig",
        phonetic: "/fɪɡ/",
        meaning: "sung",
        img: "https://cdn-icons-png.flaticon.com/512/415/415741.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/fig--_gb_1.mp3",
      },
      {
        word: "grapefruit",
        phonetic: "/ˈɡreɪp.fruːt/",
        meaning: "bưởi",
        img: "https://cdn-icons-png.flaticon.com/512/415/415741.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/grapefruit--_gb_1.mp3",
      },
      {
        word: "olive",
        phonetic: "/ˈɒl.ɪv/",
        meaning: "ô liu",
        img: "https://cdn-icons-png.flaticon.com/512/415/415740.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/olive--_gb_1.mp3",
      },
      {
        word: "date",
        phonetic: "/deɪt/",
        meaning: "chà là",
        img: "https://cdn-icons-png.flaticon.com/512/415/415740.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/date--_gb_1.mp3",
      },
      {
        word: "apricot",
        phonetic: "/ˈeɪ.prɪ.kɒt/",
        meaning: "mơ",
        img: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/apricot--_gb_1.mp3",
      },
      {
        word: "blackberry",
        phonetic: "/ˈblæk.bər.i/",
        meaning: "mâm xôi đen",
        img: "https://cdn-icons-png.flaticon.com/512/415/415736.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/blackberry--_gb_1.mp3",
      },
      {
        word: "cranberry",
        phonetic: "/ˈkræn.bər.i/",
        meaning: "nam việt quất",
        img: "https://cdn-icons-png.flaticon.com/512/415/415736.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/cranberry--_gb_1.mp3",
      },
      {
        word: "melon seeds",
        phonetic: "/ˈmel.ən siːdz/",
        meaning: "hạt dưa",
        img: "https://cdn-icons-png.flaticon.com/512/415/415747.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/seed--_gb_1.mp3",
      },
      {
        word: "fruit juice",
        phonetic: "/fruːt dʒuːs/",
        meaning: "nước trái cây",
        img: "https://cdn-icons-png.flaticon.com/512/415/415750.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/juice--_gb_1.mp3",
      },
      {
        word: "basket",
        phonetic: "/ˈbɑː.skɪt/",
        meaning: "giỏ đựng trái cây",
        img: "https://cdn-icons-png.flaticon.com/512/415/415751.png",
        audio:
          "https://ssl.gstatic.com/dictionary/static/sounds/20200429/basket--_gb_1.mp3",
      },
    ],
  },
};
