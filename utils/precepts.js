const precepts = [
    {
        "preceptsId": 1,
        "dataType": "1",
        "subType": "",
        "content": "第一戒者，不得阴贼潜谋，害物利己，当行阴德，广济群生。"
    },
    {
        "preceptsId": 2,
        "dataType": "1",
        "subType": "",
        "content": "第二戒者，不得杀害含生，以充滋味，当行慈惠，以及昆虫。"
    },
    {
        "preceptsId": 3,
        "dataType": "1",
        "subType": "",
        "content": "第三戒者，不得淫邪败真，秽慢灵气，当守贞操，使无缺犯。"
    },
    {
        "preceptsId": 4,
        "dataType": "1",
        "subType": "",
        "content": "第四戒者，不得败人成功，离人骨肉，当以道助物，令九族雍和。"
    },
    {
        "preceptsId": 5,
        "dataType": "1",
        "subType": "",
        "content": "第五戒者，不得谗毁贤良，露才扬己，当称人之美善，不自伐其功能。"
    },
    {
        "preceptsId": 6,
        "dataType": "1",
        "subType": "",
        "content": "第六戒者，不得饮酒过差，食肉违禁，当调和气性，专务清虚。"
    },
    {
        "preceptsId": 7,
        "dataType": "1",
        "subType": "",
        "content": "第七戒者，不得贪求无厌，积财不散，当行节俭，惠恤贫穷。"
    },
    {
        "preceptsId": 8,
        "dataType": "1",
        "subType": "",
        "content": "第八戒者，不得交游非贤，居处秽杂，当慕胜己，栖集清虚。"
    },
    {
        "preceptsId": 9,
        "dataType": "1",
        "subType": "",
        "content": "第九戒者，不得不忠不孝，不仁不信，当尽节君亲，推诚万物。"
    },
    {
        "preceptsId": 10,
        "dataType": "1",
        "subType": "",
        "content": "第十戒者，不得轻忽言笑，举动非真，当持重寡词，以道德为务。"
    },
    {
        "preceptsId": 11,
        "dataType": "2",
        "subType": "",
        "content": "第一戒者，不得杀害一切众生物命。"
    },
    {
        "preceptsId": 12,
        "dataType": "2",
        "subType": "",
        "content": "第二戒者，不得啖食众生血肉。"
    },
    {
        "preceptsId": 13,
        "dataType": "2",
        "subType": "",
        "content": "第三戒者，不得饮酒。"
    },
    {
        "preceptsId": 14,
        "dataType": "2",
        "subType": "",
        "content": "第四戒者，不得啖五辛。"
    },
    {
        "preceptsId": 15,
        "dataType": "2",
        "subType": "",
        "content": "第五戒者，不得绮语两舌不信。"
    },
    {
        "preceptsId": 16,
        "dataType": "2",
        "subType": "",
        "content": "第六戒者，不得恶门骂詈。"
    },
    {
        "preceptsId": 17,
        "dataType": "2",
        "subType": "",
        "content": "第七戒者，不得以未得妄言为得，未证妄言为证。"
    },
    {
        "preceptsId": 18,
        "dataType": "2",
        "subType": "",
        "content": "第八戒者，不得窥窥妇女稍生淫念。"
    },
    {
        "preceptsId": 19,
        "dataType": "2",
        "subType": "",
        "content": "第九戒者，不得窃盗人物。"
    },
    {
        "preceptsId": 20,
        "dataType": "2",
        "subType": "",
        "content": "第十戒者，不得妄取人一钱以上物。"
    },
    {
        "preceptsId": 21,
        "dataType": "2",
        "subType": "",
        "content": "第十一戒者，不得图谋一切人物。"
    },
    {
        "preceptsId": 22,
        "dataType": "2",
        "subType": "",
        "content": "第十二戒者，不得横求人物。"
    },
    {
        "preceptsId": 23,
        "dataType": "2",
        "subType": "",
        "content": "第十三戒者，不得恚怒师长。"
    },
    {
        "preceptsId": 24,
        "dataType": "2",
        "subType": "",
        "content": "第十四戒者，不得背师恩爱。"
    },
    {
        "preceptsId": 25,
        "dataType": "2",
        "subType": "",
        "content": "第十五戒者，不得嫉贤妒能。"
    },
    {
        "preceptsId": 26,
        "dataType": "2",
        "subType": "",
        "content": "第十六成者，不得不忠其上。"
    },
    {
        "preceptsId": 27,
        "dataType": "2",
        "subType": "",
        "content": "第十七戒者，不得罔略其下。"
    },
    {
        "preceptsId": 28,
        "dataType": "2",
        "subType": "",
        "content": "第十八戒者，不得欺罔老幼。"
    },
    {
        "preceptsId": 29,
        "dataType": "2",
        "subType": "",
        "content": "第十九戒者，不得欺诳同学。"
    },
    {
        "preceptsId": 30,
        "dataType": "2",
        "subType": "",
        "content": "第二十戒者，不得嫉妒同学。"
    },
    {
        "preceptsId": 31,
        "dataType": "2",
        "subType": "",
        "content": "第二十一戒者，不得轻谩弟子。"
    },
    {
        "preceptsId": 32,
        "dataType": "2",
        "subType": "",
        "content": "第二十二戒者，不得嗔恚弟子。"
    },
    {
        "preceptsId": 33,
        "dataType": "2",
        "subType": "",
        "content": "第二十三戒者，不得视弟子偏颇。"
    },
    {
        "preceptsId": 34,
        "dataType": "2",
        "subType": "",
        "content": "第二十四戒者，不得溺爱弟子。"
    },
    {
        "preceptsId": 35,
        "dataType": "2",
        "subType": "",
        "content": "第二十五戒者，不得说人过恶。"
    },
    {
        "preceptsId": 36,
        "dataType": "2",
        "subType": "",
        "content": "第二十六戒者，不得轻慢老人。"
    },
    {
        "preceptsId": 37,
        "dataType": "2",
        "subType": "",
        "content": "第二十七戒者，不得富厚忘师。"
    },
    {
        "preceptsId": 38,
        "dataType": "2",
        "subType": "",
        "content": "第二十八戒者，不得口是心非内怀阴恶。"
    },
    {
        "preceptsId": 39,
        "dataType": "2",
        "subType": "",
        "content": "第二十九戒者，不得贪利入己无厌，"
    },
    {
        "preceptsId": 40,
        "dataType": "2",
        "subType": "",
        "content": "第三十戒者，不得多积财物不思散施。"
    },
    {
        "preceptsId": 41,
        "dataType": "2",
        "subType": "",
        "content": "第三十一戒者，不得私畜刀杖兵器。"
    },
    {
        "preceptsId": 42,
        "dataType": "2",
        "subType": "",
        "content": "第三十二戒者，不得身带刀杖兵器。"
    },
    {
        "preceptsId": 43,
        "dataType": "2",
        "subType": "",
        "content": "第三十三戒者，不得豢养六畜。"
    },
    {
        "preceptsId": 44,
        "dataType": "2",
        "subType": "",
        "content": "第三十四戒者，不得鞭打六畜。"
    },
    {
        "preceptsId": 45,
        "dataType": "2",
        "subType": "",
        "content": "第三十五戒者，不得有心践踏虫蚁。"
    },
    {
        "preceptsId": 46,
        "dataType": "2",
        "subType": "",
        "content": "第三十六戒者，不得观玩钓弋以为娱乐。"
    },
    {
        "preceptsId": 47,
        "dataType": "2",
        "subType": "",
        "content": "第三十七戒者，不得上树探巢破卵。"
    },
    {
        "preceptsId": 48,
        "dataType": "2",
        "subType": "",
        "content": "第三十八戒者，不得羡慕富贵希图逸乐。"
    },
    {
        "preceptsId": 49,
        "dataType": "2",
        "subType": "",
        "content": "第三十九戒者，不得用金银器食饮。"
    },
    {
        "preceptsId": 50,
        "dataType": "2",
        "subType": "",
        "content": "第四十戒者，不得营谋身后厚葬体骨。"
    },
    {
        "preceptsId": 51,
        "dataType": "2",
        "subType": "",
        "content": "第四十一戒者，不得以食物投水火中。"
    },
    {
        "preceptsId": 52,
        "dataType": "2",
        "subType": "",
        "content": "第四十二戒者，不得烧败成功现物。"
    },
    {
        "preceptsId": 53,
        "dataType": "2",
        "subType": "",
        "content": "第四十三戒者，不得埋藏器物。"
    },
    {
        "preceptsId": 54,
        "dataType": "2",
        "subType": "",
        "content": "第四十四戒者，不得贪著滋味。"
    },
    {
        "preceptsId": 55,
        "dataType": "2",
        "subType": "",
        "content": "第四十五戒者，不得以粗物易人好物。"
    },
    {
        "preceptsId": 56,
        "dataType": "2",
        "subType": "",
        "content": "第四十六成者，不得訾毁人物为恶。"
    },
    {
        "preceptsId": 57,
        "dataType": "2",
        "subType": "",
        "content": "第四十七戒者，不得自誉己物为好。"
    },
    {
        "preceptsId": 58,
        "dataType": "2",
        "subType": "",
        "content": "第四十八戒者，不得妄作书与人。"
    },
    {
        "preceptsId": 59,
        "dataType": "2",
        "subType": "",
        "content": "第四十九戒者，不得投书谮人。"
    },
    {
        "preceptsId": 60,
        "dataType": "2",
        "subType": "",
        "content": "第五十戒者，不得以书字器物投埋秽处。"
    },
    {
        "preceptsId": 61,
        "dataType": "2",
        "subType": "",
        "content": "第五十一戒者，不得求知军国事务。"
    },
    {
        "preceptsId": 62,
        "dataType": "2",
        "subType": "",
        "content": "第五十二戒者，不得占卜军国事务吉凶。"
    },
    {
        "preceptsId": 63,
        "dataType": "2",
        "subType": "",
        "content": "第五十三戒者，不得评论国事。"
    },
    {
        "preceptsId": 64,
        "dataType": "2",
        "subType": "",
        "content": "第五十四戒者，不得设权变谋。"
    },
    {
        "preceptsId": 65,
        "dataType": "2",
        "subType": "",
        "content": "第五十五戒者，不得无故见王侯贵人。"
    },
    {
        "preceptsId": 66,
        "dataType": "2",
        "subType": "",
        "content": "第五十六戒者，不得数往来富贵之家。"
    },
    {
        "preceptsId": 67,
        "dataType": "2",
        "subType": "",
        "content": "第五十七戒者，不得妄说天时指论星宿。"
    },
    {
        "preceptsId": 68,
        "dataType": "2",
        "subType": "",
        "content": "第五十八戒者，不得习天文星相占卜等艺。"
    },
    {
        "preceptsId": 69,
        "dataType": "2",
        "subType": "",
        "content": "第五十九戒者，不得向北小便。"
    },
    {
        "preceptsId": 70,
        "dataType": "2",
        "subType": "",
        "content": "第六十戒者，不得便溺虫蚁上。"
    },
    {
        "preceptsId": 71,
        "dataType": "2",
        "subType": "",
        "content": "第六十一戒者，不得便溺生草上。"
    },
    {
        "preceptsId": 72,
        "dataType": "2",
        "subType": "",
        "content": "第六十二戒者，不得便溺人所食水中。"
    },
    {
        "preceptsId": 73,
        "dataType": "2",
        "subType": "",
        "content": "第六十三戒者，不得笼罩鸟兽。"
    },
    {
        "preceptsId": 74,
        "dataType": "2",
        "subType": "",
        "content": "第六十四戒者，不得惊散栖伏。"
    },
    {
        "preceptsId": 75,
        "dataType": "2",
        "subType": "",
        "content": "第六十五戒者，不得无故采摘花草。"
    },
    {
        "preceptsId": 76,
        "dataType": "2",
        "subType": "",
        "content": "第六十六戒者，不得无故砍伐树木。"
    },
    {
        "preceptsId": 77,
        "dataType": "2",
        "subType": "",
        "content": "第六十七戒者，不得以火烧田野山林。"
    },
    {
        "preceptsId": 78,
        "dataType": "2",
        "subType": "",
        "content": "第六十八戒者，不得冬月发掘地中蛰藏。"
    },
    {
        "preceptsId": 79,
        "dataType": "2",
        "subType": "",
        "content": "第六十九戒者，不得偏众独食。"
    },
    {
        "preceptsId": 80,
        "dataType": "2",
        "subType": "",
        "content": "第七十戒者，不得择美食。"
    },
    {
        "preceptsId": 81,
        "dataType": "2",
        "subType": "",
        "content": "第七十一戒者，不得预世间婚姻事。"
    },
    {
        "preceptsId": 82,
        "dataType": "2",
        "subType": "",
        "content": "第七十二戒者，不得破世间婚姻事。"
    },
    {
        "preceptsId": 83,
        "dataType": "2",
        "subType": "",
        "content": "第七十三戒者，不得观看妓乐。"
    },
    {
        "preceptsId": 84,
        "dataType": "2",
        "subType": "",
        "content": "第七十四戒者，不得持人长短更相嫌恨。"
    },
    {
        "preceptsId": 85,
        "dataType": "2",
        "subType": "",
        "content": "第七十五戒者，不得闻人恶事猜疑百端。"
    },
    {
        "preceptsId": 86,
        "dataType": "2",
        "subType": "",
        "content": "第七十六戒者，不得泄人阴私。"
    },
    {
        "preceptsId": 87,
        "dataType": "2",
        "subType": "",
        "content": "第七十七戒者，不得妄求窥人书疏。"
    },
    {
        "preceptsId": 88,
        "dataType": "2",
        "subType": "",
        "content": "第七十八戒者，不得夺人暗室中火。"
    },
    {
        "preceptsId": 89,
        "dataType": "2",
        "subType": "",
        "content": "第七十九戒者，不得避众独行。"
    },
    {
        "preceptsId": 90,
        "dataType": "2",
        "subType": "",
        "content": "第八十戒者，不得与女人独语独行。"
    },
    {
        "preceptsId": 91,
        "dataType": "2",
        "subType": "",
        "content": "第八十一戒者，不得男女群居。"
    },
    {
        "preceptsId": 92,
        "dataType": "2",
        "subType": "",
        "content": "第八十二戒者，不得与女人同食交错衣物。"
    },
    {
        "preceptsId": 93,
        "dataType": "2",
        "subType": "",
        "content": "第八十三戒者，不得亲教女人。"
    },
    {
        "preceptsId": 94,
        "dataType": "2",
        "subType": "",
        "content": "第八十四戒者，不得说人亲长过恶。"
    },
    {
        "preceptsId": 95,
        "dataType": "2",
        "subType": "",
        "content": "第八十五戒者，不得面誉世人阴毁善人。"
    },
    {
        "preceptsId": 96,
        "dataType": "2",
        "subType": "",
        "content": "第八十六戒者，不得隔壁探人家室。"
    },
    {
        "preceptsId": 97,
        "dataType": "2",
        "subType": "",
        "content": "第八十七戒者，不得误以毒药投诸水中。"
    },
    {
        "preceptsId": 98,
        "dataType": "2",
        "subType": "",
        "content": "第八十八戒者，不得疏宗族亲异姓。"
    },
    {
        "preceptsId": 99,
        "dataType": "2",
        "subType": "",
        "content": "第八十九戒者，不得阿党所亲。"
    },
    {
        "preceptsId": 100,
        "dataType": "2",
        "subType": "",
        "content": "第九十戒者，不得教人落子伤胎。"
    },
    {
        "preceptsId": 101,
        "dataType": "2",
        "subType": "",
        "content": "第九十一戒者，不得教人轻离家室。"
    },
    {
        "preceptsId": 102,
        "dataType": "2",
        "subType": "",
        "content": "第九十二戒者，不得因公报怨。"
    },
    {
        "preceptsId": 103,
        "dataType": "2",
        "subType": "",
        "content": "第九十三戒者，不得亲近异类。"
    },
    {
        "preceptsId": 104,
        "dataType": "2",
        "subType": "",
        "content": "第九十四戒者，不得妄聚众人。"
    },
    {
        "preceptsId": 105,
        "dataType": "2",
        "subType": "",
        "content": "第九十五戒者，不得多聚会众饮食狼籍。"
    },
    {
        "preceptsId": 106,
        "dataType": "2",
        "subType": "",
        "content": "第九十六戒者，不得妄受人礼敬。"
    },
    {
        "preceptsId": 107,
        "dataType": "2",
        "subType": "",
        "content": "第九十七戒者，不得与恶人交游。"
    },
    {
        "preceptsId": 108,
        "dataType": "2",
        "subType": "",
        "content": "第九十八戒者，不得夺人所好物。"
    },
    {
        "preceptsId": 109,
        "dataType": "2",
        "subType": "",
        "content": "第九十九戒者，不得自骄自贵。"
    },
    {
        "preceptsId": 110,
        "dataType": "2",
        "subType": "",
        "content": "第一百戒者，不得任性自用。"
    },
    {
        "preceptsId": 111,
        "dataType": "2",
        "subType": "",
        "content": "第一百一戒者，不得怀怨思报于人。"
    },
    {
        "preceptsId": 112,
        "dataType": "2",
        "subType": "",
        "content": "第一百二戒者，不得以秽物戏人。"
    },
    {
        "preceptsId": 113,
        "dataType": "2",
        "subType": "",
        "content": "第一百三戒者，不得怒目视人。"
    },
    {
        "preceptsId": 114,
        "dataType": "2",
        "subType": "",
        "content": "第一百四戒者，不得吐舌向人。"
    },
    {
        "preceptsId": 115,
        "dataType": "2",
        "subType": "",
        "content": "第一百五戒者，不得妄作忌讳。"
    },
    {
        "preceptsId": 116,
        "dataType": "2",
        "subType": "",
        "content": "第一百六戒者，不得希望人物。"
    },
    {
        "preceptsId": 117,
        "dataType": "2",
        "subType": "",
        "content": "第一百七戒者，不得塞井及沟池。"
    },
    {
        "preceptsId": 118,
        "dataType": "2",
        "subType": "",
        "content": "第一百八戒者，不得竭陂池水泽。"
    },
    {
        "preceptsId": 119,
        "dataType": "2",
        "subType": "",
        "content": "第一百九戒者，不得妄入江河中浴。"
    },
    {
        "preceptsId": 120,
        "dataType": "2",
        "subType": "",
        "content": "第一百十戒者，不得以秽物投井中。"
    },
    {
        "preceptsId": 121,
        "dataType": "2",
        "subType": "",
        "content": "第一百十一戒者，不得裸形露浴。"
    },
    {
        "preceptsId": 122,
        "dataType": "2",
        "subType": "",
        "content": "第一百十二戒者，不得热水泼地致伤虫蚁。"
    },
    {
        "preceptsId": 123,
        "dataType": "2",
        "subType": "",
        "content": "第一百十三戒者，不得高声发笑。"
    },
    {
        "preceptsId": 124,
        "dataType": "2",
        "subType": "",
        "content": "第一百十四戒者，不得薄贱人老病残疾。"
    },
    {
        "preceptsId": 125,
        "dataType": "2",
        "subType": "",
        "content": "第一百十五戒者，不得弃薄乞人。"
    },
    {
        "preceptsId": 126,
        "dataType": "2",
        "subType": "",
        "content": "第一百十六戒者，不得恃威势以凌世人。"
    },
    {
        "preceptsId": 127,
        "dataType": "2",
        "subType": "",
        "content": "第一百十七戒者，不得与父母兄弟别门易户。"
    },
    {
        "preceptsId": 128,
        "dataType": "2",
        "subType": "",
        "content": "第一百十八戒者，不得评论师友才思长短。"
    },
    {
        "preceptsId": 129,
        "dataType": "2",
        "subType": "",
        "content": "第一百十九戒者，不得嗔怨师长。"
    },
    {
        "preceptsId": 130,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十戒者，不得轻慢师尊违背盟师。"
    },
    {
        "preceptsId": 131,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十一戒者，不得轻慢经教法言。"
    },
    {
        "preceptsId": 132,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十二戒者，不得攻击善人。"
    },
    {
        "preceptsId": 133,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十三戒者，不得嗔责善人。"
    },
    {
        "preceptsId": 134,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十四戒者，不得骂人为奴婢畜牲。"
    },
    {
        "preceptsId": 135,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十五成者，不得漫骂使令打其四体。"
    },
    {
        "preceptsId": 136,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十六戒者，不得快人过失。"
    },
    {
        "preceptsId": 137,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十七戒者，不得快人家灾祸。"
    },
    {
        "preceptsId": 138,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十八戒者，不得敛告烦扰世间。"
    },
    {
        "preceptsId": 139,
        "dataType": "2",
        "subType": "",
        "content": "第一百二十九戒者，不得为世俗人作礼主。"
    },
    {
        "preceptsId": 140,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十戒者，不得为人图山立宅。"
    },
    {
        "preceptsId": 141,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十一戒者，不得占知世间吉凶。"
    },
    {
        "preceptsId": 142,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十二戒者，不得去就背向违道。"
    },
    {
        "preceptsId": 143,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十三戒者，不得倡和词讼官事。"
    },
    {
        "preceptsId": 144,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十四戒者，不得与欲人群党更相嘲毁。"
    },
    {
        "preceptsId": 145,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十五戒者，不得假借人物以为礼赂。"
    },
    {
        "preceptsId": 146,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十六戒者，不得为人作中保契卖交易。"
    },
    {
        "preceptsId": 147,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十七戒者，不得在人中多语参预流俗。"
    },
    {
        "preceptsId": 148,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十八戒者，不得驰骋流俗求竞世间。"
    },
    {
        "preceptsId": 149,
        "dataType": "2",
        "subType": "",
        "content": "第一百三十九戒者，不得与俗庆吊。"
    },
    {
        "preceptsId": 150,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十戒者，不得掩他人功以为己德。"
    },
    {
        "preceptsId": 151,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十一戒者，不得为人往来传送恶言。"
    },
    {
        "preceptsId": 152,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十二戒者，不得多用使令之人。"
    },
    {
        "preceptsId": 153,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十三戒者，不得与兵卒为侣。"
    },
    {
        "preceptsId": 154,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十四戒者，不得与淫佚之家往来。"
    },
    {
        "preceptsId": 155,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十五戒者，不得自炫能医。"
    },
    {
        "preceptsId": 156,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十六戒者，不得轻漫官长。"
    },
    {
        "preceptsId": 157,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十七戒者，不得预世间议论曲直事。"
    },
    {
        "preceptsId": 158,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十八戒者，不得施惠追吝。"
    },
    {
        "preceptsId": 159,
        "dataType": "2",
        "subType": "",
        "content": "第一百四十九戒者，不得游遨无度。"
    },
    {
        "preceptsId": 160,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十戒者，不得登高临下。"
    },
    {
        "preceptsId": 161,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十一戒者，不得乘车乘马妄事交游。"
    },
    {
        "preceptsId": 162,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十二戒者，不得择好房舍床榻卧息。"
    },
    {
        "preceptsId": 163,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十三戒者，不得评论人家饮食好恶。"
    },
    {
        "preceptsId": 164,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十四戒者，不得以手搏食残咬众淆。"
    },
    {
        "preceptsId": 165,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十五戒者，不得以荆棘横塞道路。"
    },
    {
        "preceptsId": 166,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十六戒者，不得淫祀神只以求侥幸。"
    },
    {
        "preceptsId": 167,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十七成者，不得向神鬼礼拜。"
    },
    {
        "preceptsId": 168,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十八戒者，不得向神鬼咒誓。"
    },
    {
        "preceptsId": 169,
        "dataType": "2",
        "subType": "",
        "content": "第一百五十九戒者，不得裸形三光。"
    },
    {
        "preceptsId": 170,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十戒者，不得妄诃风雨。"
    },
    {
        "preceptsId": 171,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十一戒者，不得不修斋直及斋直不精。"
    },
    {
        "preceptsId": 172,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十二戒者，不得假借财物不还本主。"
    },
    {
        "preceptsId": 173,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十三戒者，不得劝人为恶事。"
    },
    {
        "preceptsId": 174,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十四戒者，不得阻人为善事。"
    },
    {
        "preceptsId": 175,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十五戒者，不得受师经道而称已得。"
    },
    {
        "preceptsId": 176,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十六戒者，不得宗有丧疾怨道怨师。"
    },
    {
        "preceptsId": 177,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十七戒者，不得以经戒传授非人及不依年月。"
    },
    {
        "preceptsId": 178,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十八戒者，不得以意增减经戒。"
    },
    {
        "preceptsId": 179,
        "dataType": "2",
        "subType": "",
        "content": "第一百六十九戒者，不得惊怖老少。"
    },
    {
        "preceptsId": 180,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十戒者，不得妄说灾厄惊惧人民。"
    },
    {
        "preceptsId": 181,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十一戒者，不得笑人顽暗贫穷。"
    },
    {
        "preceptsId": 182,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十二戒者，不得惊惧鸟兽促致穷地。"
    },
    {
        "preceptsId": 183,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十三戒者，不得傲慢三宝轻忽天尊。"
    },
    {
        "preceptsId": 184,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十四戒者，不得遇诸天斋日不礼经忏。"
    },
    {
        "preceptsId": 185,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十五戒者，不得与不孝不悌人交往。"
    },
    {
        "preceptsId": 186,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十六戒者，不得矫称自异号为真人。"
    },
    {
        "preceptsId": 187,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十七戒者，不得信外道杂术邪见。"
    },
    {
        "preceptsId": 188,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十八戒者，不得衣物盈徐不散穷人。"
    },
    {
        "preceptsId": 189,
        "dataType": "2",
        "subType": "",
        "content": "第一百七十九戒者，不得阻人念道。"
    },
    {
        "preceptsId": 190,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十戒者，不得假托经师欺诈来学。"
    },
    {
        "preceptsId": 191,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十一戒者，不得望人礼敬。"
    },
    {
        "preceptsId": 192,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十二戒者，不得窃写人经戒。"
    },
    {
        "preceptsId": 193,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十三戒者，不得荣饰衣服华丽。"
    },
    {
        "preceptsId": 194,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十四戒者，不得身不洁净而上高座。"
    },
    {
        "preceptsId": 195,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十五戒者，与人同行当让人以前。"
    },
    {
        "preceptsId": 196,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十六戒者，与人同学夏亲执爨(cuan读四声)(爨:本意为烧火做饭)"
    },
    {
        "preceptsId": 197,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十七戒者，与人同学冬亲汲水。"
    },
    {
        "preceptsId": 198,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十八戒者，与人同食当食其粗。"
    },
    {
        "preceptsId": 199,
        "dataType": "2",
        "subType": "",
        "content": "第一百八十九戒者，与人同食当食止己前。"
    },
    {
        "preceptsId": 200,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十戒者，与人同学当敬胜己先觉。"
    },
    {
        "preceptsId": 201,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十一戒者，与人同学住当任人处分。"
    },
    {
        "preceptsId": 202,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十二戒者，与人同学当念教不懈。"
    },
    {
        "preceptsId": 203,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十三戒者，与人同学当请问先进。"
    },
    {
        "preceptsId": 204,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十四戒者，人施恶于己不得有怨。"
    },
    {
        "preceptsId": 205,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十五戒者，乞化得食祝愿主人得福一切饱满。"
    },
    {
        "preceptsId": 206,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十六戒者，与女人共语不得正视面容含笑相对。"
    },
    {
        "preceptsId": 207,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十七戒者，与人同渡不得争先择地。"
    },
    {
        "preceptsId": 208,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十八戒者，失物不得猜疑同学。"
    },
    {
        "preceptsId": 209,
        "dataType": "2",
        "subType": "",
        "content": "第一百九十九戒者，失物当委运自悔多罪。"
    },
    {
        "preceptsId": 210,
        "dataType": "2",
        "subType": "",
        "content": "第二百戒者，多疾病当恭已自责，念改往修来。"
    },
    {
        "preceptsId": 211,
        "dataType": "2",
        "subType": "",
        "content": "第二百一戒者，当忍人所不能忍。"
    },
    {
        "preceptsId": 212,
        "dataType": "2",
        "subType": "",
        "content": "第二百二戒者，当断人所不能断。"
    },
    {
        "preceptsId": 213,
        "dataType": "2",
        "subType": "",
        "content": "第二百三戒者，当学人所不能学。"
    },
    {
        "preceptsId": 214,
        "dataType": "2",
        "subType": "",
        "content": "第二百四戒者，当容人所不能容。"
    },
    {
        "preceptsId": 215,
        "dataType": "2",
        "subType": "",
        "content": "第二百五戒者，所至之处必先问贤人善士当亲依之。"
    },
    {
        "preceptsId": 216,
        "dataType": "2",
        "subType": "",
        "content": "第二百六戒者，所至之处必先问其禁忌。"
    },
    {
        "preceptsId": 217,
        "dataType": "2",
        "subType": "",
        "content": "第二百七戒者，凡入人家必先问其家中尊长名讳。"
    },
    {
        "preceptsId": 218,
        "dataType": "2",
        "subType": "",
        "content": "第二百八戒者，人有谤己当精修大道，勿忧闷以损精神。"
    },
    {
        "preceptsId": 219,
        "dataType": "2",
        "subType": "",
        "content": "第二百九戒者，学无经业精神浮散真想不通。"
    },
    {
        "preceptsId": 220,
        "dataType": "2",
        "subType": "",
        "content": "第二百十戒者，身不洁净魂魄离人。"
    },
    {
        "preceptsId": 221,
        "dataType": "2",
        "subType": "",
        "content": "第二百十一戒者，有心则天真高逝魔官不服。"
    },
    {
        "preceptsId": 222,
        "dataType": "2",
        "subType": "",
        "content": "第二百十二戒者，有家则三毒不灭三真不居。"
    },
    {
        "preceptsId": 223,
        "dataType": "2",
        "subType": "",
        "content": "第二百十三戒者，有身则众欲不去神思无应。"
    },
    {
        "preceptsId": 224,
        "dataType": "2",
        "subType": "",
        "content": "第二百十四戒者，当栖心静寂万虑俱息。"
    },
    {
        "preceptsId": 225,
        "dataType": "2",
        "subType": "",
        "content": "第二百十五戒者，当委志虚无内外洁白。"
    },
    {
        "preceptsId": 226,
        "dataType": "2",
        "subType": "",
        "content": "第二百十六戒者，当灭识见然后真人现。"
    },
    {
        "preceptsId": 227,
        "dataType": "2",
        "subType": "",
        "content": "第二百十七戒者，当念菜食为常一志清俭。"
    },
    {
        "preceptsId": 228,
        "dataType": "2",
        "subType": "",
        "content": "第二百十八戒者，当念先度人后度己身。"
    },
    {
        "preceptsId": 229,
        "dataType": "2",
        "subType": "",
        "content": "第二百十九戒者，当念居山林幽静神思至道。"
    },
    {
        "preceptsId": 230,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十戒者，当念安贫读经行道无倦。"
    },
    {
        "preceptsId": 231,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十一戒者，当念烧众明香流芳诸天彻魔境界。"
    },
    {
        "preceptsId": 232,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十二戒者，当念在贤众中听受妙音。"
    },
    {
        "preceptsId": 233,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十三戒者，当念请受三洞宝经勤身供养。"
    },
    {
        "preceptsId": 234,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十四戒者，当念立功度人终劫不倦。"
    },
    {
        "preceptsId": 235,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十五戒者，当念报师友本德终劫不怠。"
    },
    {
        "preceptsId": 236,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十六戒者，当念国中清净王化太平无有不道。"
    },
    {
        "preceptsId": 237,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十七戒者，当念邻国有道各守境界。"
    },
    {
        "preceptsId": 238,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十八戒者，当念祝愿百姓令常安全。"
    },
    {
        "preceptsId": 239,
        "dataType": "2",
        "subType": "",
        "content": "第二百二十九戒者，当念万物为先不但祷祝己身。"
    },
    {
        "preceptsId": 240,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十戒者，当念敬鬼神不谄不慢。"
    },
    {
        "preceptsId": 241,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十一戒者，当念远外术攘魔之道。"
    },
    {
        "preceptsId": 242,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十二戒者，当念远声色歌舞之术。"
    },
    {
        "preceptsId": 243,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十三戒者，当念远离巫觋妖妄之人。"
    },
    {
        "preceptsId": 244,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十四戒者，当念崇本守真一志无移。"
    },
    {
        "preceptsId": 245,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十五戒者，当念口不违心心不负形。"
    },
    {
        "preceptsId": 246,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十六戒者，当念信守经戒无有疑贰。"
    },
    {
        "preceptsId": 247,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十七戒者，当念无求无欲清白守贞。"
    },
    {
        "preceptsId": 248,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十八戒者，当念心无异想惟空惟寂。"
    },
    {
        "preceptsId": 249,
        "dataType": "2",
        "subType": "",
        "content": "第二百三十九戒者，当念家家安宁咸无苦痛。"
    },
    {
        "preceptsId": 250,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十戒者，当念世间忧危之人罪系苦恼咸得消释。"
    },
    {
        "preceptsId": 251,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十一戒者，当念天子圣明宏道皇家日盛。"
    },
    {
        "preceptsId": 252,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十二戒者，当念台辅贤良常保有道。"
    },
    {
        "preceptsId": 253,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十三戒者，当念天地日月风雨雪霜以时。"
    },
    {
        "preceptsId": 254,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十四戒者，当念父母养我因缘。"
    },
    {
        "preceptsId": 255,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十五戒者，当念七祖父母咸升开堂。"
    },
    {
        "preceptsId": 256,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十六戒者，当念我师早得升度。"
    },
    {
        "preceptsId": 257,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十七戒者，当念天尊放白毫相光济度三涂咸得光明。"
    },
    {
        "preceptsId": 258,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十八戒者，当念同志辅相教导令入正道。"
    },
    {
        "preceptsId": 259,
        "dataType": "2",
        "subType": "",
        "content": "第二百四十九戒者，当念不违其口所诵之文。"
    },
    {
        "preceptsId": 260,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十戒者，当念勤服气断谷为不死道。"
    },
    {
        "preceptsId": 261,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十一戒者，当念勤求长生昼夜勿倦。"
    },
    {
        "preceptsId": 262,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十二戒者，当念勤避嫌疑勿恃恩情亵狎。"
    },
    {
        "preceptsId": 263,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十三戒者，当念勤避患难勿苟贪世荣。"
    },
    {
        "preceptsId": 264,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十四戒者，当念勤避凶人勿弃背朋友。"
    },
    {
        "preceptsId": 265,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十五戒者，当念我宿命因缘根断。"
    },
    {
        "preceptsId": 266,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十六戒者，当念我胎根己绝不复世生同缘种亲。"
    },
    {
        "preceptsId": 267,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十七戒者，当念我生树己枯神合太无无数之劫体道合真。"
    },
    {
        "preceptsId": 268,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十八戒者，当念洞观十方无所隐藏。"
    },
    {
        "preceptsId": 269,
        "dataType": "2",
        "subType": "",
        "content": "第二百五十九戒者，当念三涂路塞地狱长休。"
    },
    {
        "preceptsId": 270,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十戒者，当念清气养神弃诸肥滋。"
    },
    {
        "preceptsId": 271,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十一戒者，当念常存三宫真人子丹。"
    },
    {
        "preceptsId": 272,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十二戒者，当念处世和光不矫于俗。"
    },
    {
        "preceptsId": 273,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十三戒者，当念持三宝经戒常诵不辍。"
    },
    {
        "preceptsId": 274,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十四戒者，当念守雌抱一肃若对神。"
    },
    {
        "preceptsId": 275,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十五威者，当念登仙度世利济群生。"
    },
    {
        "preceptsId": 276,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十六成者，当念师友同学共成道果。"
    },
    {
        "preceptsId": 277,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十七戒者，当念亲见真仙高道修行法事。"
    },
    {
        "preceptsId": 278,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十八戒者，当念圣王治世海外稽道乘风向化。"
    },
    {
        "preceptsId": 279,
        "dataType": "2",
        "subType": "",
        "content": "第二百六十九戒者，当念食天厨自然之膳无饥渴之想。"
    },
    {
        "preceptsId": 280,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十戒者，当念与天真共对淡然无为。"
    },
    {
        "preceptsId": 281,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十一戒者，当念仙童玉女来侍法筵。"
    },
    {
        "preceptsId": 282,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十二戒者，当念东游青林东华。"
    },
    {
        "preceptsId": 283,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十三戒者，当念南游大丹南华。"
    },
    {
        "preceptsId": 284,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十四戒者，当念西游安养西华。"
    },
    {
        "preceptsId": 285,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十五戒者，当念北游碧落北华。"
    },
    {
        "preceptsId": 286,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十六戒者，当念游东北方数百姓男女，授其劝戒，度入东北之门，使得入无为之场。"
    },
    {
        "preceptsId": 287,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十七戒者，当念游东南方救百姓男女，授其劝戒，度入东南之门，令得与道为因。"
    },
    {
        "preceptsId": 288,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十八戒者，当念游西南方救百姓男女，授其劝戒，度入西南之门，令得入无为之道。"
    },
    {
        "preceptsId": 289,
        "dataType": "2",
        "subType": "",
        "content": "第二百七十九戒者，当念游西北方救百姓男女,授其劝戒,度入西北之门,当得升入至真之场。"
    },
    {
        "preceptsId": 290,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十戒者，当念遨游洞天阆台昆仑。"
    },
    {
        "preceptsId": 291,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十一戒者，当念游至斋堂进肄圣道明解渊微。"
    },
    {
        "preceptsId": 292,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十二戒者，当念游上清金阙礼见真人太上。"
    },
    {
        "preceptsId": 293,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十三戒者，当念游玉清七宝宫礼三元天尊。"
    },
    {
        "preceptsId": 294,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十四戒者，当念游玉清丹霞宫礼太上二十四高圣。"
    },
    {
        "preceptsId": 295,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十五戒者，当念游太上玉京七宝流霞台荫盖玉林礼太上天尊十方大圣终劫复始。"
    },
    {
        "preceptsId": 296,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十六戒者，当念游紫云宫礼洞真三十九高圣。"
    },
    {
        "preceptsId": 297,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十七戒者，当念游三十六天黄金宫礼天帝君。"
    },
    {
        "preceptsId": 298,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十八戒者，当念游九天黄金晖宫礼无上至真。"
    },
    {
        "preceptsId": 299,
        "dataType": "2",
        "subType": "",
        "content": "第二百八十九戒者，当念游诸天宫宅与真人问道论经。"
    },
    {
        "preceptsId": 300,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十戒者，当念游六天七宝宫观见大魔王见我籍已入仙品出离泉曲部。"
    },
    {
        "preceptsId": 301,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十一戒者，当念游日月宫殿光明焕赫礼见日月王饮以日月华金液之浆。"
    },
    {
        "preceptsId": 302,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十二戒者，当念游大梵天流景宫礼四天帝王听诸天诵咏清绝雅妙。"
    },
    {
        "preceptsId": 303,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十三戒者，当念游诸天七宝林返生灵香流芳逆风闻三千里外狮子飞龙鸣哨其列。"
    },
    {
        "preceptsId": 304,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十四戒者，当念游诸天浴池安坐莲花之上香洁自然流溢诸天池皆如一处人人快乐。"
    },
    {
        "preceptsId": 305,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十五戒者，当念游诸天阙听钧天乐无世间想。"
    },
    {
        "preceptsId": 306,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十六戒者，当念游十方外天礼大圣像无上正真人。"
    },
    {
        "preceptsId": 307,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十七戒者，当念游下方无极金则天宫礼诸元老真人。"
    },
    {
        "preceptsId": 308,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十八戒者，当念游天地名山隐宫洞室礼圣众先得道人。"
    },
    {
        "preceptsId": 309,
        "dataType": "2",
        "subType": "",
        "content": "第二百九十九戒者，当念隐密天真名讳不出于口。"
    },
    {
        "preceptsId": 310,
        "dataType": "2",
        "subType": "",
        "content": "第三百戒者，行戒不犯，犯即能悔，改往修来，劝人奉受，念形不念恶广度一切自咸神真吉无不利保汝成真。"
    },
    {
        "preceptsId": 311,
        "dataType": "3",
        "subType": "1",
        "content": "一者智慧远身行法。不可称量。"
    },
    {
        "preceptsId": 312,
        "dataType": "3",
        "subType": "1",
        "content": "二者慈悲远身行法。不可称量。"
    },
    {
        "preceptsId": 313,
        "dataType": "3",
        "subType": "1",
        "content": "三者含忍远身行法。不可称量。"
    },
    {
        "preceptsId": 314,
        "dataType": "3",
        "subType": "1",
        "content": "四者行功远身行法。不可称量。"
    },
    {
        "preceptsId": 315,
        "dataType": "3",
        "subType": "1",
        "content": "五者修心远身行法。不可称量。"
    },
    {
        "preceptsId": 316,
        "dataType": "3",
        "subType": "1",
        "content": "六者善业远身行法。不可称量。"
    },
    {
        "preceptsId": 317,
        "dataType": "3",
        "subType": "1",
        "content": "七者精进远身行法。不可称量。"
    },
    {
        "preceptsId": 318,
        "dataType": "3",
        "subType": "1",
        "content": "八者饰身远身行法。不可称量。"
    },
    {
        "preceptsId": 319,
        "dataType": "3",
        "subType": "1",
        "content": "九者遣情远身行法。不可称量。"
    },
    {
        "preceptsId": 320,
        "dataType": "3",
        "subType": "1",
        "content": "十者普心远身行法。不可称量。"
    },
    {
        "preceptsId": 321,
        "dataType": "3",
        "subType": "2",
        "content": "一者智慧离口过法。不可称量。"
    },
    {
        "preceptsId": 322,
        "dataType": "3",
        "subType": "2",
        "content": "二者慈悲离口过法。不可称量。"
    },
    {
        "preceptsId": 323,
        "dataType": "3",
        "subType": "2",
        "content": "三者含忍离口过法。不可称量。"
    },
    {
        "preceptsId": 324,
        "dataType": "3",
        "subType": "2",
        "content": "四者行功离口过法。不可称量。"
    },
    {
        "preceptsId": 325,
        "dataType": "3",
        "subType": "2",
        "content": "五者修心离口过法。不可称量。"
    },
    {
        "preceptsId": 326,
        "dataType": "3",
        "subType": "2",
        "content": "六者善业离口过法。不可称量。"
    },
    {
        "preceptsId": 327,
        "dataType": "3",
        "subType": "2",
        "content": "七者精进离口过法。不可称量。"
    },
    {
        "preceptsId": 328,
        "dataType": "3",
        "subType": "2",
        "content": "八者饰身离口过法。不可称量。"
    },
    {
        "preceptsId": 329,
        "dataType": "3",
        "subType": "2",
        "content": "九者遣情离口过法。不可称量。"
    },
    {
        "preceptsId": 330,
        "dataType": "3",
        "subType": "2",
        "content": "十者普心离口过法。不可称量。"
    },
    {
        "preceptsId": 331,
        "dataType": "3",
        "subType": "3",
        "content": "一者智慧除恶想法。不可称量。"
    },
    {
        "preceptsId": 332,
        "dataType": "3",
        "subType": "3",
        "content": "二者慈悲除恶想法。不可称量。"
    },
    {
        "preceptsId": 333,
        "dataType": "3",
        "subType": "3",
        "content": "三者含忍除恶想法。不可称量。"
    },
    {
        "preceptsId": 334,
        "dataType": "3",
        "subType": "3",
        "content": "四者行功除恶想法。不可称量。"
    },
    {
        "preceptsId": 335,
        "dataType": "3",
        "subType": "3",
        "content": "五者修心除恶想法。不可称量。"
    },
    {
        "preceptsId": 336,
        "dataType": "3",
        "subType": "3",
        "content": "六者善业除恶想法。不可称量。"
    },
    {
        "preceptsId": 337,
        "dataType": "3",
        "subType": "3",
        "content": "七者精进除恶想法。不可称量。"
    },
    {
        "preceptsId": 338,
        "dataType": "3",
        "subType": "3",
        "content": "八者饰身除恶想法。不可称量。"
    },
    {
        "preceptsId": 339,
        "dataType": "3",
        "subType": "3",
        "content": "九者遣情除恶想法。不可称量。"
    },
    {
        "preceptsId": 340,
        "dataType": "3",
        "subType": "3",
        "content": "十者普心除恶想法。不可称量。"
    },
    {
        "preceptsId": 341,
        "dataType": "3",
        "subType": "4",
        "content": "一者智慧拔逮根法。不可称量。"
    },
    {
        "preceptsId": 342,
        "dataType": "3",
        "subType": "4",
        "content": "二者慈悲拔逮根法。不可称量。"
    },
    {
        "preceptsId": 343,
        "dataType": "3",
        "subType": "4",
        "content": "三者含忍拔逮根法。不可称量。"
    },
    {
        "preceptsId": 344,
        "dataType": "3",
        "subType": "4",
        "content": "四者行功拔逮根法。不可称量。"
    },
    {
        "preceptsId": 345,
        "dataType": "3",
        "subType": "4",
        "content": "五者修心拔逮根法。不可称量。"
    },
    {
        "preceptsId": 346,
        "dataType": "3",
        "subType": "4",
        "content": "六者善业拔逮根法。不可称量。"
    },
    {
        "preceptsId": 347,
        "dataType": "3",
        "subType": "4",
        "content": "七者精进拔逮根法。不可称量。"
    },
    {
        "preceptsId": 348,
        "dataType": "3",
        "subType": "4",
        "content": "八者饰身拔逮根法。不可称量。"
    },
    {
        "preceptsId": 349,
        "dataType": "3",
        "subType": "4",
        "content": "九者遣情拔逮根法。不可称量。"
    },
    {
        "preceptsId": 350,
        "dataType": "3",
        "subType": "4",
        "content": "十者普心拔逮根法。不可称量。"
    },
    {
        "preceptsId": 351,
        "dataType": "3",
        "subType": "5",
        "content": "一者智慧绝声色法。不可称量。"
    },
    {
        "preceptsId": 352,
        "dataType": "3",
        "subType": "5",
        "content": "二者慈悲绝声色法。不可称量。"
    },
    {
        "preceptsId": 353,
        "dataType": "3",
        "subType": "5",
        "content": "三者含忍绝声色法。不可称量。"
    },
    {
        "preceptsId": 354,
        "dataType": "3",
        "subType": "5",
        "content": "四者行功绝声色法。不可称量。"
    },
    {
        "preceptsId": 355,
        "dataType": "3",
        "subType": "5",
        "content": "五者修心绝声色法。不可称量。"
    },
    {
        "preceptsId": 356,
        "dataType": "3",
        "subType": "5",
        "content": "六者善业绝声色法。不可称量。"
    },
    {
        "preceptsId": 357,
        "dataType": "3",
        "subType": "5",
        "content": "七者精进绝声色法。不可称量。"
    },
    {
        "preceptsId": 358,
        "dataType": "3",
        "subType": "5",
        "content": "八者饰身绝声色法。不可称量。"
    },
    {
        "preceptsId": 359,
        "dataType": "3",
        "subType": "5",
        "content": "九者遣情绝声色法。不可称量。"
    },
    {
        "preceptsId": 360,
        "dataType": "3",
        "subType": "5",
        "content": "十者普心绝声色法。不可称量。"
    },
    {
        "preceptsId": 361,
        "dataType": "3",
        "subType": "6",
        "content": "一者智慧俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 362,
        "dataType": "3",
        "subType": "6",
        "content": "二者慈悲俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 363,
        "dataType": "3",
        "subType": "6",
        "content": "三者含忍俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 364,
        "dataType": "3",
        "subType": "6",
        "content": "四者行功俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 365,
        "dataType": "3",
        "subType": "6",
        "content": "五者修心俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 366,
        "dataType": "3",
        "subType": "6",
        "content": "六者善业俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 367,
        "dataType": "3",
        "subType": "6",
        "content": "七者精进俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 368,
        "dataType": "3",
        "subType": "6",
        "content": "八者饰身俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 369,
        "dataType": "3",
        "subType": "6",
        "content": "九者遣情俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 370,
        "dataType": "3",
        "subType": "6",
        "content": "十者普心俭爱欲法。不可称量。"
    },
    {
        "preceptsId": 371,
        "dataType": "3",
        "subType": "7",
        "content": "一者智慧放翫习法。不可称量。"
    },
    {
        "preceptsId": 372,
        "dataType": "3",
        "subType": "7",
        "content": "二者慈悲放翫习法。不可称量。"
    },
    {
        "preceptsId": 373,
        "dataType": "3",
        "subType": "7",
        "content": "三者含忍放翫习法。不可称量。"
    },
    {
        "preceptsId": 374,
        "dataType": "3",
        "subType": "7",
        "content": "四者行功放翫习法。不可称量。"
    },
    {
        "preceptsId": 375,
        "dataType": "3",
        "subType": "7",
        "content": "五者修心放翫习法。不可称量。"
    },
    {
        "preceptsId": 376,
        "dataType": "3",
        "subType": "7",
        "content": "六者善业放翫习法。不可称量。"
    },
    {
        "preceptsId": 377,
        "dataType": "3",
        "subType": "7",
        "content": "七者精进放翫习法。不可称量。"
    },
    {
        "preceptsId": 378,
        "dataType": "3",
        "subType": "7",
        "content": "八者饰身放翫习法。不可称量。"
    },
    {
        "preceptsId": 379,
        "dataType": "3",
        "subType": "7",
        "content": "九者遣情放翫习法。不可称量。"
    },
    {
        "preceptsId": 380,
        "dataType": "3",
        "subType": "7",
        "content": "十者普心放翫习法。不可称量。"
    },
    {
        "preceptsId": 381,
        "dataType": "3",
        "subType": "8",
        "content": "一者智慧洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 382,
        "dataType": "3",
        "subType": "8",
        "content": "二者慈悲洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 383,
        "dataType": "3",
        "subType": "8",
        "content": "三者含忍洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 384,
        "dataType": "3",
        "subType": "8",
        "content": "四者行功洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 385,
        "dataType": "3",
        "subType": "8",
        "content": "五者修心洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 386,
        "dataType": "3",
        "subType": "8",
        "content": "六者善业洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 387,
        "dataType": "3",
        "subType": "8",
        "content": "七者精进洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 388,
        "dataType": "3",
        "subType": "8",
        "content": "八者饰身洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 389,
        "dataType": "3",
        "subType": "8",
        "content": "九者遣情洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 390,
        "dataType": "3",
        "subType": "8",
        "content": "十者普心洗垢秽法。不可称量。"
    },
    {
        "preceptsId": 391,
        "dataType": "3",
        "subType": "9",
        "content": "一者智慧无昏惑法。不可称量。"
    },
    {
        "preceptsId": 392,
        "dataType": "3",
        "subType": "9",
        "content": "二者慈悲无昏惑法。不可称量。"
    },
    {
        "preceptsId": 393,
        "dataType": "3",
        "subType": "9",
        "content": "三者含忍无昏惑法。不可称量。"
    },
    {
        "preceptsId": 394,
        "dataType": "3",
        "subType": "9",
        "content": "四者行功无昏惑法。不可称量。"
    },
    {
        "preceptsId": 395,
        "dataType": "3",
        "subType": "9",
        "content": "五者修心无昏惑法。不可称量。"
    },
    {
        "preceptsId": 396,
        "dataType": "3",
        "subType": "9",
        "content": "六者善业无昏惑法。不可称量。"
    },
    {
        "preceptsId": 397,
        "dataType": "3",
        "subType": "9",
        "content": "七者精进无昏惑法。不可称量。"
    },
    {
        "preceptsId": 398,
        "dataType": "3",
        "subType": "9",
        "content": "八者饰身无昏惑法。不可称量。"
    },
    {
        "preceptsId": 399,
        "dataType": "3",
        "subType": "9",
        "content": "九者遣情无昏惑法。不可称量。"
    },
    {
        "preceptsId": 400,
        "dataType": "3",
        "subType": "9",
        "content": "十者普心无昏惑法。不可称量。"
    },
    {
        "preceptsId": 401,
        "dataType": "3",
        "subType": "10",
        "content": "一者智慧不淫想法。不可称量。"
    },
    {
        "preceptsId": 402,
        "dataType": "3",
        "subType": "10",
        "content": "二者慈悲不淫想法。不可称量。"
    },
    {
        "preceptsId": 403,
        "dataType": "3",
        "subType": "10",
        "content": "三者含忍不淫想法。不可称量。"
    },
    {
        "preceptsId": 404,
        "dataType": "3",
        "subType": "10",
        "content": "四者行功不淫想法。不可称量。"
    },
    {
        "preceptsId": 405,
        "dataType": "3",
        "subType": "10",
        "content": "五者修心不淫想法。不可称量。"
    },
    {
        "preceptsId": 406,
        "dataType": "3",
        "subType": "10",
        "content": "六者善业不淫想法。不可称量。"
    },
    {
        "preceptsId": 407,
        "dataType": "3",
        "subType": "10",
        "content": "七者精进不淫想法。不可称量。"
    },
    {
        "preceptsId": 408,
        "dataType": "3",
        "subType": "10",
        "content": "八者饰身不淫想法。不可称量。"
    },
    {
        "preceptsId": 409,
        "dataType": "3",
        "subType": "10",
        "content": "九者遣情不淫想法。不可称量。"
    },
    {
        "preceptsId": 410,
        "dataType": "3",
        "subType": "10",
        "content": "十者普心不淫想法。不可称量。"
    },
    {
        "preceptsId": 411,
        "dataType": "3",
        "subType": "11",
        "content": "一者智慧不疑空法。不可称量。"
    },
    {
        "preceptsId": 412,
        "dataType": "3",
        "subType": "11",
        "content": "二者慈悲不疑空法。不可称量。"
    },
    {
        "preceptsId": 413,
        "dataType": "3",
        "subType": "11",
        "content": "三者含忍不疑空法。不可称量。"
    },
    {
        "preceptsId": 414,
        "dataType": "3",
        "subType": "11",
        "content": "四者行功不疑空法。不可称量。"
    },
    {
        "preceptsId": 415,
        "dataType": "3",
        "subType": "11",
        "content": "五者修心不疑空法。不可称量。"
    },
    {
        "preceptsId": 416,
        "dataType": "3",
        "subType": "11",
        "content": "六者善业不疑空法。不可称量。"
    },
    {
        "preceptsId": 417,
        "dataType": "3",
        "subType": "11",
        "content": "七者精进不疑空法。不可称量。"
    },
    {
        "preceptsId": 418,
        "dataType": "3",
        "subType": "11",
        "content": "八者饰身不疑空法。不可称量。"
    },
    {
        "preceptsId": 419,
        "dataType": "3",
        "subType": "11",
        "content": "九者遣情不疑空法。不可称量。"
    },
    {
        "preceptsId": 420,
        "dataType": "3",
        "subType": "11",
        "content": "十者普心不疑空法。不可称量。"
    },
    {
        "preceptsId": 421,
        "dataType": "3",
        "subType": "12",
        "content": "一者智慧平好丑法。不可称量。"
    },
    {
        "preceptsId": 422,
        "dataType": "3",
        "subType": "12",
        "content": "二者慈悲平好丑法。不可称量。"
    },
    {
        "preceptsId": 423,
        "dataType": "3",
        "subType": "12",
        "content": "三者含忍平好丑法。不可称量。"
    },
    {
        "preceptsId": 424,
        "dataType": "3",
        "subType": "12",
        "content": "四者行功平好丑法。不可称量。"
    },
    {
        "preceptsId": 425,
        "dataType": "3",
        "subType": "12",
        "content": "五者修心平好丑法。不可称量。"
    },
    {
        "preceptsId": 426,
        "dataType": "3",
        "subType": "12",
        "content": "六者善业平好丑法。不可称量。"
    },
    {
        "preceptsId": 427,
        "dataType": "3",
        "subType": "12",
        "content": "七者精进平好丑法。不可称量。"
    },
    {
        "preceptsId": 428,
        "dataType": "3",
        "subType": "12",
        "content": "八者饰身平好丑法。不可称量。"
    },
    {
        "preceptsId": 429,
        "dataType": "3",
        "subType": "12",
        "content": "九者遣情平好丑法。不可称量。"
    },
    {
        "preceptsId": 430,
        "dataType": "3",
        "subType": "12",
        "content": "十者普心平好丑法。不可称量。"
    },
    {
        "preceptsId": 431,
        "dataType": "3",
        "subType": "13",
        "content": "一者智慧不邪还法。不可称量。"
    },
    {
        "preceptsId": 432,
        "dataType": "3",
        "subType": "13",
        "content": "二者慈悲不邪还法。不可称量。"
    },
    {
        "preceptsId": 433,
        "dataType": "3",
        "subType": "13",
        "content": "三者含忍不邪还法。不可称量。"
    },
    {
        "preceptsId": 434,
        "dataType": "3",
        "subType": "13",
        "content": "四者行功不邪还法。不可称量。"
    },
    {
        "preceptsId": 435,
        "dataType": "3",
        "subType": "13",
        "content": "五者修心不邪还法。不可称量。"
    },
    {
        "preceptsId": 436,
        "dataType": "3",
        "subType": "13",
        "content": "六者善业不邪还法。不可称量。"
    },
    {
        "preceptsId": 437,
        "dataType": "3",
        "subType": "13",
        "content": "七者精进不邪还法。不可称量。"
    },
    {
        "preceptsId": 438,
        "dataType": "3",
        "subType": "13",
        "content": "八者饰身不邪还法。不可称量。"
    },
    {
        "preceptsId": 439,
        "dataType": "3",
        "subType": "13",
        "content": "九者遣情不邪还法。不可称量。"
    },
    {
        "preceptsId": 440,
        "dataType": "3",
        "subType": "13",
        "content": "十者普心不邪还法。不可称量。"
    },
    {
        "preceptsId": 441,
        "dataType": "3",
        "subType": "14",
        "content": "一者智慧常住无法。不可称量。"
    },
    {
        "preceptsId": 442,
        "dataType": "3",
        "subType": "14",
        "content": "二者慈悲常住无法。不可称量。"
    },
    {
        "preceptsId": 443,
        "dataType": "3",
        "subType": "14",
        "content": "三者含忍常住无法。不可称量。"
    },
    {
        "preceptsId": 444,
        "dataType": "3",
        "subType": "14",
        "content": "四者行功常住无法。不可称量。"
    },
    {
        "preceptsId": 445,
        "dataType": "3",
        "subType": "14",
        "content": "五者修心常住无法。不可称量。"
    },
    {
        "preceptsId": 446,
        "dataType": "3",
        "subType": "14",
        "content": "六者善业常住无法。不可称量。"
    },
    {
        "preceptsId": 447,
        "dataType": "3",
        "subType": "14",
        "content": "七者精进常住无法。不可称量。"
    },
    {
        "preceptsId": 448,
        "dataType": "3",
        "subType": "14",
        "content": "八者饰身常住无法。不可称量。"
    },
    {
        "preceptsId": 449,
        "dataType": "3",
        "subType": "14",
        "content": "九者遣情常住无法。不可称量。"
    },
    {
        "preceptsId": 450,
        "dataType": "3",
        "subType": "14",
        "content": "十者普心常住无法。不可称量。"
    },
    {
        "preceptsId": 451,
        "dataType": "3",
        "subType": "15",
        "content": "一者智慧绝心想法。不可称量。"
    },
    {
        "preceptsId": 452,
        "dataType": "3",
        "subType": "15",
        "content": "二者慈悲绝心想法。不可称量。"
    },
    {
        "preceptsId": 453,
        "dataType": "3",
        "subType": "15",
        "content": "三者含忍绝心想法。不可称量。"
    },
    {
        "preceptsId": 454,
        "dataType": "3",
        "subType": "15",
        "content": "四者行功绝心想法。不可称量。"
    },
    {
        "preceptsId": 455,
        "dataType": "3",
        "subType": "15",
        "content": "五者修心绝心想法。不可称量。"
    },
    {
        "preceptsId": 456,
        "dataType": "3",
        "subType": "15",
        "content": "六者善业绝心想法。不可称量。"
    },
    {
        "preceptsId": 457,
        "dataType": "3",
        "subType": "15",
        "content": "七者精进绝心想法。不可称量。"
    },
    {
        "preceptsId": 458,
        "dataType": "3",
        "subType": "15",
        "content": "八者饰身绝心想法。不可称量。"
    },
    {
        "preceptsId": 459,
        "dataType": "3",
        "subType": "15",
        "content": "九者遣情绝心想法。不可称量。"
    },
    {
        "preceptsId": 460,
        "dataType": "3",
        "subType": "15",
        "content": "十者普心绝心想法。不可称量。"
    },
    {
        "preceptsId": 461,
        "dataType": "3",
        "subType": "16",
        "content": "一者智慧习悉意法。不可称量。"
    },
    {
        "preceptsId": 462,
        "dataType": "3",
        "subType": "16",
        "content": "二者慈悲习悉意法。不可称量。"
    },
    {
        "preceptsId": 463,
        "dataType": "3",
        "subType": "16",
        "content": "三者含忍习悉意法。不可称量。"
    },
    {
        "preceptsId": 464,
        "dataType": "3",
        "subType": "16",
        "content": "四者行功习悉意法。不可称量。"
    },
    {
        "preceptsId": 465,
        "dataType": "3",
        "subType": "16",
        "content": "五者修心习悉意法。不可称量。"
    },
    {
        "preceptsId": 466,
        "dataType": "3",
        "subType": "16",
        "content": "六者善业习悉意法。不可称量。"
    },
    {
        "preceptsId": 467,
        "dataType": "3",
        "subType": "16",
        "content": "七者精进习悉意法。不可称量。"
    },
    {
        "preceptsId": 468,
        "dataType": "3",
        "subType": "16",
        "content": "八者饰身习悉意法。不可称量。"
    },
    {
        "preceptsId": 469,
        "dataType": "3",
        "subType": "16",
        "content": "九者遣情习悉意法。不可称量。"
    },
    {
        "preceptsId": 470,
        "dataType": "3",
        "subType": "16",
        "content": "十者普心习悉意法。不可称量。"
    },
    {
        "preceptsId": 471,
        "dataType": "3",
        "subType": "17",
        "content": "一者智慧善防言法。不可称量。"
    },
    {
        "preceptsId": 472,
        "dataType": "3",
        "subType": "17",
        "content": "二者慈悲善防言法。不可称量。"
    },
    {
        "preceptsId": 473,
        "dataType": "3",
        "subType": "17",
        "content": "三者含忍善防言法。不可称量。"
    },
    {
        "preceptsId": 474,
        "dataType": "3",
        "subType": "17",
        "content": "四者行功善防言法。不可称量。"
    },
    {
        "preceptsId": 475,
        "dataType": "3",
        "subType": "17",
        "content": "五者修心善防言法。不可称量。"
    },
    {
        "preceptsId": 476,
        "dataType": "3",
        "subType": "17",
        "content": "六者善业善防言法。不可称量。"
    },
    {
        "preceptsId": 477,
        "dataType": "3",
        "subType": "17",
        "content": "七者精进善防言法。不可称量。"
    },
    {
        "preceptsId": 478,
        "dataType": "3",
        "subType": "17",
        "content": "八者饰身善防言法。不可称量。"
    },
    {
        "preceptsId": 479,
        "dataType": "3",
        "subType": "17",
        "content": "九者遣情善防言法。不可称量。"
    },
    {
        "preceptsId": 480,
        "dataType": "3",
        "subType": "17",
        "content": "十者普心善防言法。不可称量。"
    },
    {
        "preceptsId": 481,
        "dataType": "3",
        "subType": "18",
        "content": "一者智慧不乱转法。不可称量。"
    },
    {
        "preceptsId": 482,
        "dataType": "3",
        "subType": "18",
        "content": "二者慈悲不乱转法。不可称量。"
    },
    {
        "preceptsId": 483,
        "dataType": "3",
        "subType": "18",
        "content": "三者含忍不乱转法。不可称量。"
    },
    {
        "preceptsId": 484,
        "dataType": "3",
        "subType": "18",
        "content": "四者行功不乱转法。不可称量。"
    },
    {
        "preceptsId": 485,
        "dataType": "3",
        "subType": "18",
        "content": "五者修心不乱转法。不可称量。"
    },
    {
        "preceptsId": 486,
        "dataType": "3",
        "subType": "18",
        "content": "六者善业不乱转法。不可称量。"
    },
    {
        "preceptsId": 487,
        "dataType": "3",
        "subType": "18",
        "content": "七者精进不乱转法。不可称量。"
    },
    {
        "preceptsId": 488,
        "dataType": "3",
        "subType": "18",
        "content": "八者饰身不乱转法。不可称量。"
    },
    {
        "preceptsId": 489,
        "dataType": "3",
        "subType": "18",
        "content": "九者遣情不乱转法。不可称量。"
    },
    {
        "preceptsId": 490,
        "dataType": "3",
        "subType": "18",
        "content": "十者普心不乱转法。不可称量。"
    },
    {
        "preceptsId": 491,
        "dataType": "3",
        "subType": "19",
        "content": "一者智慧不悟念法。不可称量。"
    },
    {
        "preceptsId": 492,
        "dataType": "3",
        "subType": "19",
        "content": "二者慈悲不悟念法。不可称量。"
    },
    {
        "preceptsId": 493,
        "dataType": "3",
        "subType": "19",
        "content": "三者含忍不悟念法。不可称量。"
    },
    {
        "preceptsId": 494,
        "dataType": "3",
        "subType": "19",
        "content": "四者行功不悟念法。不可称量。"
    },
    {
        "preceptsId": 495,
        "dataType": "3",
        "subType": "19",
        "content": "五者修心不悟念法。不可称量。"
    },
    {
        "preceptsId": 496,
        "dataType": "3",
        "subType": "19",
        "content": "六者善业不悟念法。不可称量。"
    },
    {
        "preceptsId": 497,
        "dataType": "3",
        "subType": "19",
        "content": "七者精进不悟念法。不可称量。"
    },
    {
        "preceptsId": 498,
        "dataType": "3",
        "subType": "19",
        "content": "八者饰身不悟念法。不可称量。"
    },
    {
        "preceptsId": 499,
        "dataType": "3",
        "subType": "19",
        "content": "九者遣情不悟念法。不可称量。"
    },
    {
        "preceptsId": 500,
        "dataType": "3",
        "subType": "19",
        "content": "十者普心不悟念法。不可称量。"
    },
    {
        "preceptsId": 501,
        "dataType": "3",
        "subType": "20",
        "content": "一者智慧不彼念法。不可称量。"
    },
    {
        "preceptsId": 502,
        "dataType": "3",
        "subType": "20",
        "content": "二者慈悲不彼念法。不可称量。"
    },
    {
        "preceptsId": 503,
        "dataType": "3",
        "subType": "20",
        "content": "三者含忍不彼念法。不可称量。"
    },
    {
        "preceptsId": 504,
        "dataType": "3",
        "subType": "20",
        "content": "四者行功不彼念法。不可称量。"
    },
    {
        "preceptsId": 505,
        "dataType": "3",
        "subType": "20",
        "content": "五者修心不彼念法。不可称量。"
    },
    {
        "preceptsId": 506,
        "dataType": "3",
        "subType": "20",
        "content": "六者善业不彼念法。不可称量。"
    },
    {
        "preceptsId": 507,
        "dataType": "3",
        "subType": "20",
        "content": "七者精进不彼念法。不可称量。"
    },
    {
        "preceptsId": 508,
        "dataType": "3",
        "subType": "20",
        "content": "八者饰身不彼念法。不可称量。"
    },
    {
        "preceptsId": 509,
        "dataType": "3",
        "subType": "20",
        "content": "九者遣情不彼念法。不可称量。"
    },
    {
        "preceptsId": 510,
        "dataType": "3",
        "subType": "20",
        "content": "十者普心不彼念法。不可称量。"
    },
    {
        "preceptsId": 511,
        "dataType": "3",
        "subType": "21",
        "content": "一者智慧不悠想法。不可称量。"
    },
    {
        "preceptsId": 512,
        "dataType": "3",
        "subType": "21",
        "content": "二者慈悲不悠想法。不可称量。"
    },
    {
        "preceptsId": 513,
        "dataType": "3",
        "subType": "21",
        "content": "三者含忍不悠想法。不可称量。"
    },
    {
        "preceptsId": 514,
        "dataType": "3",
        "subType": "21",
        "content": "四者行功不悠想法。不可称量。"
    },
    {
        "preceptsId": 515,
        "dataType": "3",
        "subType": "21",
        "content": "五者修心不悠想法。不可称量。"
    },
    {
        "preceptsId": 516,
        "dataType": "3",
        "subType": "21",
        "content": "六者善业不悠想法。不可称量。"
    },
    {
        "preceptsId": 517,
        "dataType": "3",
        "subType": "21",
        "content": "七者精进不悠想法。不可称量。"
    },
    {
        "preceptsId": 518,
        "dataType": "3",
        "subType": "21",
        "content": "八者饰身不悠想法。不可称量。"
    },
    {
        "preceptsId": 519,
        "dataType": "3",
        "subType": "21",
        "content": "九者遣情不悠想法。不可称量。"
    },
    {
        "preceptsId": 520,
        "dataType": "3",
        "subType": "21",
        "content": "十者普心不悠想法。不可称量。"
    },
    {
        "preceptsId": 521,
        "dataType": "3",
        "subType": "22",
        "content": "一者智慧无常定法。不可称量。"
    },
    {
        "preceptsId": 522,
        "dataType": "3",
        "subType": "22",
        "content": "二者慈悲无常定法。不可称量。"
    },
    {
        "preceptsId": 523,
        "dataType": "3",
        "subType": "22",
        "content": "三者含忍无常定法。不可称量。"
    },
    {
        "preceptsId": 524,
        "dataType": "3",
        "subType": "22",
        "content": "四者行功无常定法。不可称量。"
    },
    {
        "preceptsId": 525,
        "dataType": "3",
        "subType": "22",
        "content": "五者修心无常定法。不可称量。"
    },
    {
        "preceptsId": 526,
        "dataType": "3",
        "subType": "22",
        "content": "六者善业无常定法。不可称量。"
    },
    {
        "preceptsId": 527,
        "dataType": "3",
        "subType": "22",
        "content": "七者精进无常定法。不可称量。"
    },
    {
        "preceptsId": 528,
        "dataType": "3",
        "subType": "22",
        "content": "八者饰身无常定法。不可称量。"
    },
    {
        "preceptsId": 529,
        "dataType": "3",
        "subType": "22",
        "content": "九者遣情无常定法。不可称量。"
    },
    {
        "preceptsId": 530,
        "dataType": "3",
        "subType": "22",
        "content": "十者普心无常定法。不可称量。"
    },
    {
        "preceptsId": 531,
        "dataType": "3",
        "subType": "23",
        "content": "一者智慧无常的法。不可称量。"
    },
    {
        "preceptsId": 532,
        "dataType": "3",
        "subType": "23",
        "content": "二者慈悲无常的法。不可称量。"
    },
    {
        "preceptsId": 533,
        "dataType": "3",
        "subType": "23",
        "content": "三者含忍无常的法。不可称量。"
    },
    {
        "preceptsId": 534,
        "dataType": "3",
        "subType": "23",
        "content": "四者行功无常的法。不可称量。"
    },
    {
        "preceptsId": 535,
        "dataType": "3",
        "subType": "23",
        "content": "五者修心无常的法。不可称量。"
    },
    {
        "preceptsId": 536,
        "dataType": "3",
        "subType": "23",
        "content": "六者善业无常的法。不可称量。"
    },
    {
        "preceptsId": 537,
        "dataType": "3",
        "subType": "23",
        "content": "七者精进无常的法。不可称量。"
    },
    {
        "preceptsId": 538,
        "dataType": "3",
        "subType": "23",
        "content": "八者饰身无常的法。不可称量。"
    },
    {
        "preceptsId": 539,
        "dataType": "3",
        "subType": "23",
        "content": "九者遣情无常的法。不可称量。"
    },
    {
        "preceptsId": 540,
        "dataType": "3",
        "subType": "23",
        "content": "十者普心无常的法。不可称量。"
    },
    {
        "preceptsId": 541,
        "dataType": "3",
        "subType": "24",
        "content": "一者智慧无常顾法。不可称量。"
    },
    {
        "preceptsId": 542,
        "dataType": "3",
        "subType": "24",
        "content": "二者慈悲无常顾法。不可称量。"
    },
    {
        "preceptsId": 543,
        "dataType": "3",
        "subType": "24",
        "content": "三者含忍无常顾法。不可称量。"
    },
    {
        "preceptsId": 544,
        "dataType": "3",
        "subType": "24",
        "content": "四者行功无常顾法。不可称量。"
    },
    {
        "preceptsId": 545,
        "dataType": "3",
        "subType": "24",
        "content": "五者修心无常顾法。不可称量。"
    },
    {
        "preceptsId": 546,
        "dataType": "3",
        "subType": "24",
        "content": "六者善业无常顾法。不可称量。"
    },
    {
        "preceptsId": 547,
        "dataType": "3",
        "subType": "24",
        "content": "七者精进无常顾法。不可称量。"
    },
    {
        "preceptsId": 548,
        "dataType": "3",
        "subType": "24",
        "content": "八者饰身无常顾法。不可称量。"
    },
    {
        "preceptsId": 549,
        "dataType": "3",
        "subType": "24",
        "content": "九者遣情无常顾法。不可称量。"
    },
    {
        "preceptsId": 550,
        "dataType": "3",
        "subType": "24",
        "content": "十者普心无常顾法。不可称量。"
    },
    {
        "preceptsId": 551,
        "dataType": "3",
        "subType": "25",
        "content": "一者智慧不追怀法。不可称量。"
    },
    {
        "preceptsId": 552,
        "dataType": "3",
        "subType": "25",
        "content": "二者慈悲不追怀法。不可称量。"
    },
    {
        "preceptsId": 553,
        "dataType": "3",
        "subType": "25",
        "content": "三者含忍不追怀法。不可称量。"
    },
    {
        "preceptsId": 554,
        "dataType": "3",
        "subType": "25",
        "content": "四者行功不追怀法。不可称量。"
    },
    {
        "preceptsId": 555,
        "dataType": "3",
        "subType": "25",
        "content": "五者修心不追怀法。不可称量。"
    },
    {
        "preceptsId": 556,
        "dataType": "3",
        "subType": "25",
        "content": "六者善业不追怀法。不可称量。"
    },
    {
        "preceptsId": 557,
        "dataType": "3",
        "subType": "25",
        "content": "七者精进不追怀法。不可称量。"
    },
    {
        "preceptsId": 558,
        "dataType": "3",
        "subType": "25",
        "content": "八者饰身不追怀法。不可称量。"
    },
    {
        "preceptsId": 559,
        "dataType": "3",
        "subType": "25",
        "content": "九者遣情不追怀法。不可称量。"
    },
    {
        "preceptsId": 560,
        "dataType": "3",
        "subType": "25",
        "content": "十者普心不追怀法。不可称量。"
    },
    {
        "preceptsId": 561,
        "dataType": "3",
        "subType": "26",
        "content": "一者智慧无犹豫法。不可称量。"
    },
    {
        "preceptsId": 562,
        "dataType": "3",
        "subType": "26",
        "content": "二者慈悲无犹豫法。不可称量。"
    },
    {
        "preceptsId": 563,
        "dataType": "3",
        "subType": "26",
        "content": "三者含忍无犹豫法。不可称量。"
    },
    {
        "preceptsId": 564,
        "dataType": "3",
        "subType": "26",
        "content": "四者行功无犹豫法。不可称量。"
    },
    {
        "preceptsId": 565,
        "dataType": "3",
        "subType": "26",
        "content": "五者修心无犹豫法。不可称量。"
    },
    {
        "preceptsId": 566,
        "dataType": "3",
        "subType": "26",
        "content": "六者善业无犹豫法。不可称量。"
    },
    {
        "preceptsId": 567,
        "dataType": "3",
        "subType": "26",
        "content": "七者精进无犹豫法。不可称量。"
    },
    {
        "preceptsId": 568,
        "dataType": "3",
        "subType": "26",
        "content": "八者饰身无犹豫法。不可称量。"
    },
    {
        "preceptsId": 569,
        "dataType": "3",
        "subType": "26",
        "content": "九者遣情无犹豫法。不可称量。"
    },
    {
        "preceptsId": 570,
        "dataType": "3",
        "subType": "26",
        "content": "十者普心无犹豫法。不可称量。"
    },
    {
        "preceptsId": 571,
        "dataType": "3",
        "subType": "27",
        "content": "一者智慧忍不可忍法。不可称量。"
    },
    {
        "preceptsId": 572,
        "dataType": "3",
        "subType": "27",
        "content": "二者慈悲忍不可忍法。不可称量。"
    },
    {
        "preceptsId": 573,
        "dataType": "3",
        "subType": "27",
        "content": "三者含忍忍不可忍法。不可称量。"
    },
    {
        "preceptsId": 574,
        "dataType": "3",
        "subType": "27",
        "content": "四者行功忍不可忍法。不可称量。"
    },
    {
        "preceptsId": 575,
        "dataType": "3",
        "subType": "27",
        "content": "五者修心忍不可忍法。不可称量。"
    },
    {
        "preceptsId": 576,
        "dataType": "3",
        "subType": "27",
        "content": "六者善业忍不可忍法。不可称量。"
    },
    {
        "preceptsId": 577,
        "dataType": "3",
        "subType": "27",
        "content": "七者精进忍不可忍法。不可称量。"
    },
    {
        "preceptsId": 578,
        "dataType": "3",
        "subType": "27",
        "content": "八者饰身忍不可忍法。不可称量。"
    },
    {
        "preceptsId": 579,
        "dataType": "3",
        "subType": "27",
        "content": "九者遣情忍不可忍法。不可称量。"
    },
    {
        "preceptsId": 580,
        "dataType": "3",
        "subType": "27",
        "content": "十者普心忍不可忍法。不可称量。"
    }
]



let elementaryPrecepts = new Array();
let elementaryPreceptsContent = new Array();

let middlePrecepts = new Array();
let middlePreceptsContent = new Array();

let highPrecepts = new Array();
let highPreceptsContent = new Array();

for(let i = 0;i<precepts.length;i++){
    if(precepts[i].dataType == "1"){
        elementaryPrecepts.push(precepts[i]);
        elementaryPreceptsContent.push(precepts[i].content);
    }else if(precepts[i].dataType == "2"){
        middlePrecepts.push(precepts[i]);
        middlePreceptsContent.push(precepts[i].content);
    }else if(precepts[i].dataType == "3"){
        highPrecepts.push(precepts[i]);
        switch (precepts[i].preceptsId) {
            case 311:
            highPreceptsContent.push("十种远身行法");
            break;
            case 321:
            highPreceptsContent.push("十种离口过法");
            break;  
            case 331:
            highPreceptsContent.push("十种除恶想法");
            break;  
            case 341:
            highPreceptsContent.push("十种拔逮根法");
            break;  
            case 351:
            highPreceptsContent.push("十种绝声色法");
            break;  
            case 361:
            highPreceptsContent.push("十种俭爱欲法");
            break;  
            case 371:
            highPreceptsContent.push("十种放翫习法");
            break;  
            case 381:
            highPreceptsContent.push("十种洗垢秽法");
            break;  
            case 391:
            highPreceptsContent.push("十种无昏惑法");
            break;  
            case 401:
            highPreceptsContent.push("十种不淫想法");
            break;  
            case 411:
            highPreceptsContent.push("十种不疑空法");
            break;  
            case 421:
            highPreceptsContent.push("十种平好丑法");
            break;  
            case 431:
            highPreceptsContent.push("十种不邪还法");
            break;  
            case 441:
            highPreceptsContent.push("十种常住无法");
            break;  
            case 451:
            highPreceptsContent.push("十种绝心想法");
            break;  
            case 461:
            highPreceptsContent.push("十种习悉意法");
            break;  
            case 471:
            highPreceptsContent.push("十种善防言法");
            break;  
            case 481:
            highPreceptsContent.push("十种不乱转法");
            break;  
            case 491:
            highPreceptsContent.push("十种不悟念法");
            break;  
            case 501:
            highPreceptsContent.push("十种不彼念法");
            break;  
            case 511:
            highPreceptsContent.push("十种不悠想法");
            break;  
            case 521:
            highPreceptsContent.push("十种无常定法");
            break;  
            case 531:
            highPreceptsContent.push("十种无常的法");
            break;  
            case 541:
            highPreceptsContent.push("十种无常顾法");
            break;  
            case 551:
            highPreceptsContent.push("十种不追怀法");
            break;  
            case 561:
            highPreceptsContent.push("十种无犹豫法");
            break;  
            case 571:
            highPreceptsContent.push("十种忍不可忍法");
            break;    
        }
        highPreceptsContent.push(precepts[i].content);
    }

}; 

module.exports = {
    precepts:precepts,
    elementaryPrecepts:elementaryPrecepts,
    middlePrecepts:middlePrecepts,
    highPrecepts:highPrecepts,
    elementaryPreceptsContent:elementaryPreceptsContent,
    middlePreceptsContent:middlePreceptsContent,
    highPreceptsContent:highPreceptsContent
}