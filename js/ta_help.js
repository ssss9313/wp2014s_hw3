(function () {
  this.TAHelp = {
    // forked from: https://github.com/joshra/NccuStudentId2Department/    
    isVaildStudentID: function (stu_id) {
      stu_id = typeof stu_id !== 'string' ? stu_id.toString() : stu_id;
      stu_id = typeof stu_id !== 'undefined' ? stu_id : '';
      var department_hash = {
        //文學院
        "101": "中文系",
        "103": "歷史系",
        "104": "哲學系",
        //教育學院
        "102": "教育系",
        //社科院
        "202": "政治系",
        "204": "社會系",
        "205": "財政系",
        "206": "公行系",
        "207": "地震系",
        "208": "經濟系",
        "209": "民族系",
        //國務院
        "203": "外交系",
        //商學院
        "301": "國貿系",
        "302": "金融系",
        "303": "會計系",
        "304": "統計系",
        "305": "企管系",
        "306": "資管系",
        "307": "財管系",
        "308": "風管系",
        //傳播學院
        "401": "新聞系",
        "402": "廣告系",
        "403": "廣電系",
        "404": "傳播學程",
        //外語學院
        "501": "英文系",
        "502": "阿語系",
        "504": "斯語系",
        "506": "日文系",
        "507": "韓文系",
        "508": "土語系",
        "509": "歐語學程",
        //法學院
        "601": "法律系",
        //理學院
        "701": "應數系",
        "702": "心理系",
        "703": "科科系",
        //研究所
        //文學院
        "151": "中文所",
        "153": "歷史所",
        "154": "哲學所",
        "155": "圖檔所",
        "156": "宗教所",
        "158": "台史所",
        "159": "台文所",
        "161": "華語文教學碩士學程",
        "912": "國文教學碩士在職專班",
        "913": "圖書資訊學術位碩士在職專班",
        //教育學院
        "152": "教育所",
        "157": "幼教所",
        "171": "教政所",
        "911": "學校行政碩士在職專班",
        //社科院
        "252": "政治所",
        "254": "社會所",
        "255": "財政所",
        "256": "公行所",
        "257": "地政所",
        "258": "經濟所",
        "259": "民族所",
        "261": "國發所",
        "262": "勞工所",
        "264": "社工所",
        "921": "行政管理碩士學程",
        "923": "地政學系碩士在職專班",
        "926": "亞太研究英語碩士學程",
        //國務院
        "253": "外交所",
        "260": "東亞所",
        "263": "俄研所",
        "981": "國家安全與大陸研究碩士在職專班",
        "922": "外交學系戰略與國際事務碩士在職專班",
        //商學院
        "351": "國貿所",
        "352": "金融所",
        "353": "會計所",
        "354": "統計所",
        "355": "企管所",
        "356": "資管所",
        "357": "財管所",
        "358": "風管所",
        "359": "科管所",
        "361": "智財所",
        "934": "生科學程",
        "380": "商管專業學院碩士學程",
        "932": "經營管理碩士學程",
        "933": "國際經營管理英語碩士學程",
        //傳播學院
        "451": "新聞所",
        "452": "廣告所",
        "453": "廣電所",
        "461": "國際傳播學程",
        "462": "數位內容碩士學程",
        "941": "傳播學院碩士在職專班",
        //外語學院
        "551": "英文所",
        "554": "斯語所",
        "555": "語言所",
        "556": "日文所",
        "951": "英語教學碩士在職專班",
        "952": "歐洲語言文化學程碩士在職專班",
        //法學院
        "651": "法律所",
        "652": "法科所",
        "961": "法學院碩士在職專班",
        //理學院
        "751": "應數所",
        "752": "心理所",
        "753": "資科所",
        "754": "神科所",
        "755": "應物所",
        "971": "資科系碩士在職專班"
      };
      var department_id = (stu_id[0] == "1") ? stu_id.substring(3, 6) : stu_id.substring(2, 5);
      return(department_hash.hasOwnProperty(department_id)) ?
        true : false;
    },
    _Memberlist: [
      [],
      [{
        "StudentId": "101306051",
        "name": "蕭宇彤HSIAO,YU-TUNG",
        "groupNum": "1"
      }, {
        "StudentId": "100703001",
        "name": "施亦宣SHIH, YI-HSUAN",
        "groupNum": "1"
      }, {
        "StudentId": "100703044",
        "name": "江岱蓉JIANG,DAI-RONG",
        "groupNum": "1"
      }, {
        "StudentId": "98102016",
        "name": "王馨瑩WANG,HSIN-YING",
        "groupNum": "1"
      }, {
        "StudentId": "100103045",
        "name": "朱莉安CHU, LI-AN",
        "groupNum": "1"
      }, {
        "StudentId": "101104020",
        "name": "楊佳瑜YANG, CHIA-YU",
        "groupNum": "1"
      }],
      [{
        "StudentId": "101306052",
        "name": "鄭開倫CHENG,KAI-LUN",
        "groupNum": "2"
      }, {
        "StudentId": "100703002",
        "name": "黃祺超HUANG, CHI-CHAO",
        "groupNum": "2"
      }, {
        "StudentId": "100703033",
        "name": "劉義瑋LIU,YI-WEI",
        "groupNum": "2"
      }, {
        "StudentId": "98102031",
        "name": "吳育嘉Wu, Yu-Chia",
        "groupNum": "2"
      }, {
        "StudentId": "100104004",
        "name": "徐 容Hsu Jung",
        "groupNum": "2"
      }, {
        "StudentId": "100203009",
        "name": "林芝庭LIN, CHIH-TING",
        "groupNum": "2"
      }],
      [{
        "StudentId": "100306062",
        "name": "謝孟霖HSIEH, MENG-LIN",
        "groupNum": "3"
      }, {
        "StudentId": "100703009",
        "name": "郭士傑KUO,SHIH-CHIEH",
        "groupNum": "3"
      }, {
        "StudentId": "100703052",
        "name": "吳孟翰WU,MENG-HAN",
        "groupNum": "3"
      }, {
        "StudentId": "100404012",
        "name": "楊翔伊YANG, HSIANG-I",
        "groupNum": "3"
      }, {
        "StudentId": "101506002",
        "name": "陳玉美CHEN,YU-MEI",
        "groupNum": "3"
      }, {
        "StudentId": "100207430",
        "name": "黃 悅HUANG YUEH",
        "groupNum": "3"
      }],
      [{
        "StudentId": "99703006",
        "name": "林裕翔LIN, YU-HSIANG",
        "groupNum": "4"
      }, {
        "StudentId": "101703049",
        "name": "林柏辰LIN,PO-CHEN",
        "groupNum": "4"
      }, {
        "StudentId": "100703020",
        "name": "許惟琄HSU,WEI-CHUAN",
        "groupNum": "4"
      }, {
        "StudentId": "99104032",
        "name": "陳瑀旋CHEN,YU-XUAN",
        "groupNum": "4"
      }, {
        "StudentId": "100207241",
        "name": "翁家德WENG,CHIA-TE",
        "groupNum": "4"
      }, {
        "StudentId": "99101074",
        "name": "王文君WANG,WEN-CHUN",
        "groupNum": "4"
      }],
      [{
        "StudentId": "100306075",
        "name": "邱垂暉CHIU, CHUI-HUI",
        "groupNum": "5"
      }, {
        "StudentId": "100703031",
        "name": "陳立強chenyichung",
        "groupNum": "5"
      }, {
        "StudentId": "99703051",
        "name": "蘇智煒SU, JHIH-WEI",
        "groupNum": "5"
      }, {
        "StudentId": "99204049",
        "name": "邱思穎CIOU,SIH-YING",
        "groupNum": "5"
      }, {
        "StudentId": "100403005",
        "name": "林思妤LIN, SIH-YU",
        "groupNum": "5"
      }, {
        "StudentId": "100104039",
        "name": "孫湘蕙SUN,HIANG-HEUI",
        "groupNum": "5"
      }],
      [{
        "StudentId": "100306056",
        "name": "鄭巧翊CHENG,CHIAO-YI",
        "groupNum": "6"
      }, {
        "StudentId": "100703037",
        "name": "賴奎亨LAI,KWEI-HENG",
        "groupNum": "6"
      }, {
        "StudentId": "100703049",
        "name": "林宣佑LIN,SYUAN-YOU",
        "groupNum": "6"
      }, {
        "StudentId": "100209028",
        "name": "鍾宜汝CHUNG,YI-JU",
        "groupNum": "6"
      }, {
        "StudentId": "100504009",
        "name": "曾鈴淯TSENG, LIN YU",
        "groupNum": "6"
      }, {
        "StudentId": "99702002",
        "name": "李孜希LEE, TZU-HSI",
        "groupNum": "6"
      }],
      [{
        "StudentId": "100703007",
        "name": "劉律琪LIU, LU-CHI",
        "groupNum": "7"
      }, {
        "StudentId": "100703043",
        "name": "王邦任Dennis Wang",
        "groupNum": "7"
      }, {
        "StudentId": "99703043",
        "name": "蘇柏瑋SU,BO-WEI",
        "groupNum": "7"
      }, {
        "StudentId": "99208077",
        "name": "陳瑩琳CHEN,YING-LIN",
        "groupNum": "7"
      }, {
        "StudentId": "100305082",
        "name": "陳佳妤CHEN, CHIA-YU",
        "groupNum": "7"
      }, {
        "StudentId": "100402023",
        "name": "楊詠涵YANG,YUNG-HAN",
        "groupNum": "7"
      }],
      [{
        "StudentId": "101703026",
        "name": "陳宥丞CHEN, YU-CHENG",
        "groupNum": "8"
      }, {
        "StudentId": "100703008",
        "name": "李元銘LEE,YUAN-MING",
        "groupNum": "8"
      }, {
        "StudentId": "100703021",
        "name": "廖祥佑LIAO,HSIANG-YU",
        "groupNum": "8"
      }, {
        "StudentId": "99204048",
        "name": "蔡旻芸TSAI,MIN-YUN",
        "groupNum": "8"
      }, {
        "StudentId": "99208092",
        "name": "洪緻崴HUNG,CHIH-WEI",
        "groupNum": "8"
      }, {
        "StudentId": "99209028",
        "name": "劉 璞Liu, Pu",
        "groupNum": "8"
      }],
      [{
        "StudentId": "100703016",
        "name": "游佳霖Yu,Carolyn",
        "groupNum": "9"
      }, {
        "StudentId": "100703042",
        "name": "黃彥庭HUANG, YAN-TING",
        "groupNum": "9"
      }, {
        "StudentId": "99703028",
        "name": "陳志豪CHEN ZHI-HAO",
        "groupNum": "9"
      }, {
        "StudentId": "99208063",
        "name": "曾紀昀TSENG, CHI-YUN",
        "groupNum": "9"
      }, {
        "StudentId": "99702008",
        "name": "葉柏雅YE,BO-YA",
        "groupNum": "9"
      }],
      [{
        "StudentId": "101703031",
        "name": "黃哲猷HUANG,CHE-YU",
        "groupNum": "10"
      }, {
        "StudentId": "100703010",
        "name": "彭新雅PENG,SIN-YA",
        "groupNum": "10"
      }, {
        "StudentId": "100703048",
        "name": "曾紹祥TSENG SHAO-HSIANG",
        "groupNum": "10"
      }, {
        "StudentId": "98209035",
        "name": "林郁霖LIN,YU-LIN",
        "groupNum": "10"
      }, {
        "StudentId": "100702039",
        "name": "蘇道泓SU, TOU-HUNG",
        "groupNum": "10"
      }, {
        "StudentId": "100305019",
        "name": "陳玫如CHEN, MEI-RU",
        "groupNum": "10"
      }]
    ],
    _isMemberOf: function (stu_id) {
      stu_id = typeof stu_id !== 'undefined' ? stu_id : '';
      stu_id = typeof stu_id === 'string' ? parseInt(stu_id) : stu_id;
      var hashtable = {
        101306051: 1,
        100703001: 1,
        100703044: 1,
        98102016: 1,
        100103045: 1,
        101104020: 1,
        101306052: 2,
        100703002: 2,
        100703033: 2,
        98102031: 2,
        100104004: 2,
        100203009: 2,
        100306062: 3,
        100703009: 3,
        100703052: 3,
        100404012: 3,
        101506002: 3,
        100207430: 3,
        99703006: 4,
        101703049: 4,
        100703020: 4,
        99104032: 4,
        100207241: 4,
        99101074: 4,
        100306075: 5,
        100703031: 5,
        99703051: 5,
        99204049: 5,
        100403005: 5,
        100104039: 5,
        100306056: 6,
        100703037: 6,
        100703049: 6,
        100209028: 6,
        100504009: 6,
        99702002: 6,
        100703007: 7,
        100703043: 7,
        99703043: 7,
        99208077: 7,
        100305082: 7,
        100402023: 7,
        101703026: 8,
        100703008: 8,
        100703021: 8,
        99204048: 8,
        99208092: 8,
        99209028: 8,
        100703016: 9,
        100703042: 9,
        99703028: 9,
        99208063: 9,
        99702008: 9,
        101703031: 10,
        100703010: 10,
        100703048: 10,
        98209035: 10,
        100702039: 10,
        100305019: 10,
      };
      return(hashtable.hasOwnProperty(stu_id)) ?
        hashtable[stu_id] : false;
    },
    getMemberlistOf: function (stu_id) {
      if(TAHelp.isVaildStudentID(stu_id)) {
        var groupNum = TAHelp._isMemberOf(stu_id);
        return(groupNum) ? TAHelp._Memberlist[groupNum] : false;
      } else {
        return false;
      }
    }
  }
})();
