<template>
  <div>
    <h1>大神风采</h1>
    <hr />
    <br />

    <table
      width="920"
      height="330"
      border="1"
      style="border-radius: 10px; border: 3px solid #7d7dff"
    >
      <tr>
        <td width="66" style="border-radius: 10px">
          <a @click="funcShow(1)">FireWork</a>
        </td>
        <td colspan="5" rowspan="7" style="border-radius: 10px">
          <div id="div1" style="display: block;">
            <iframe
              id="iframe"
              src="https://www.17sucai.com/preview/1/2016-10-31/yh/index.html"
              frameborder="0"
              width="100%"
              height="315px"
              style="border-radius: 10px; margin-top: 5px"
            ></iframe>
          </div>
          <div class="all">
            <div id="div2" style="display: none">
              <img
                :src="pingpong"
                style="
                  margin-top: -10px;
                  margin-left: -680px;
                  border-radius: 10px;
                "
              />
              <div style="margin-top: -310px; margin-left: 180px">
                国乒长盛不衰，只因总有“青春”长出来
              </div>
              <br />
              <div class="introduce">
                中国队长盛不衰？因为关键时刻总有人能站出来。
                在东京奥运会乒乓球女单半决赛孙颖莎赢下与日本天才少女伊藤美诚的青春对决后，
                带出过王楠、张怡宁、李晓霞三位“大满贯”的功勋教练李隼无不感慨。
                <div style="font-size: 15px">
                  <div style="margin-top: 20px; margin-left: -475px">
                    <li>孙颖莎：击败老对手</li>
                  </div>
                  <div style="margin-left: -419px; margin-top: 20px">
                    <li>陈梦：一步一步迎来“梦”时代</li>
                  </div>
                  <div style="margin-left: -354px; margin-top: 20px">
                    <li>王曼昱：做好自己该做的事时刻准备着</li>
                  </div>
                </div>
                <img
                  :src="personal"
                  style="float: right; margin-top: -145px; margin-right: 15px"
                />
              </div>
            </div>
            <div id="div3" style="display: none">
              <img
                :src="jumpOne"
                style="
                  margin-top: -5px;
                  margin-left: -680px;
                  border-radius: 10px;
                "
              />
              <div style="margin-top: -315px; margin-left: 180px">
                全红婵：7年跳水 脱颖而出
              </div>
              <br />
              <div
                style="
                  width: 650px;
                  height: 250px;
                  border: 1px solid #7d7dff;
                  float: right;
                  margin-right: 10px;
                  margin-top: -25px;
                  border-radius: 10px;
                "
              >
                <div
                  style="
                    width: 210px;
                    height: 20px;
                    font-size: 15px;
                    margin-top: 25px;
                  "
                >
                  中国小将全红婵和陈芋汐包揽了女子10米跳台项目的金银牌。
                  全红婵在比赛过程中有三跳拿到了满分，
                  她的动作完成度之高令人惊叹， 最终全红婵五次动作拿到466.2分，
                  陈芋汐五次动作拿到425.4分。全红婵的表现
                </div>
                <img
                  :src="jumpTwo"
                  style="
                    float: right;
                    margin-right: 25px;
                    margin-top: -25px;
                    border-radius: 10px;
                  "
                />
                <div style="font-size: 15px; margin-top: 135px">
                  实在是太令人意外了，更令人意外的是今年全红婵只有14岁。
                  红婵的表现实在是太令人惊喜了
                </div>
                <div style="font-size: 15px; margin-left: -420px">
                  ，奥运冠军秦凯称全红婵为魔鬼
                </div>
              </div>
            </div>
            <div id="div4" style="display: none; margin-top: 150px">
              <img
                :src="gunOne"
                style="
                  margin-top: -145px;
                  margin-left: -680px;
                  border-radius: 10px;
                "
              />
              <div style="margin-top: -305px; margin-left: 180px">
                “气枪公主”杨倩：18岁上清华，21岁夺奥运金牌
              </div>
              <div
                style="
                  width: 660px;
                  height: 250px;
                  border: 1px solid #7d7dff;
                  float: right;
                  margin-right: 10px;
                  margin-top: 10px;
                  border-radius: 10px;
                "
              >
                <div style="font-size:16px;margin-top:5px">
                  在东京奥运会的第一天，为中国拿下首枚奥运金牌的竟然是一个零零后，她叫杨倩。
                  杨倩经过几轮的紧张角逐，射中了十米外的靶子，
                  当时杨倩的教练早已按捺不住激动的心情，
                  杨倩也心知肚明，冠军稳拿!对于年仅11岁的杨倩来说，
                  每天的基础训练过于枯燥乏味。虽然只是打气枪，
                  可是为了取得好成绩，基础训练是不可缺少的一环，
                  所以杨倩每天都会不停地训练
                </div>
                <div style="font-size:16px;width:400px;height:55px">
                  跪姿、卧姿，还要训练跑步。
                  在训练期间，杨倩有的时候为了维持一个姿势，需要坚持几个小时。
                  成功并非一蹴而就杨倩的成功再次提醒人们，一个人的人生选择至关重要，
                  坚持也是不可或缺的可贵品质。只有选择了正确的道路，坚定不移地走下去，收获成功一定指日可待！
                </div>
                <img
                  :src="gunTwo"
                  style="
                    float: right;
                    margin-right: 10px;
                    margin-top: -58px;
                    border-radius: 10px;
                  "
                />
              </div>
            </div>
            <div id="div5" style="display: none;margin-top:145px">
              <img
                :src="runOne"
                style="
                  margin-top: -135px;
                  margin-left: -550px;
                  border-radius: 10px;
                "
              />
              <div style="margin-top: -295px; margin-left: 320px">
                创造黄种人奇迹————苏炳添
              </div>
              <div style="width: 530px;
                  height: 250px;
                  border: 1px solid #7d7dff;
                  float: right;
                  margin-right: 10px;
                  border-radius: 10px;">
                  <div style="font-size:15px">
                    9 秒 83！东京奥运会男子 100 米半决赛上，
                    中国选手苏炳添创造了一个属于黄种人，属于整个亚洲的神迹！
                    除此之外，他也成为了电计时代以来首个闯进奥运会男子 100 米决赛的亚洲人！
                    苏炳添不仅仅是 " 亚洲飞人 "，因为除北美洲之外，
                    苏炳添打破的是其余各大洲的纪录，包括亚洲、非洲、欧洲、南美洲和澳洲。
                    近五年，在世界级大赛上，
                    苏炳添的 9.83 秒是人类第 4 好的成绩，
                    这已
                  </div>
                  <div style="font-size:15px;width:265px;">经不仅仅是属于中国
                    的历史，
                    更是属于亚洲的历史，
                    打破了 " 亚洲人百米不可能跑进十秒 " 的定律。
                    所以说，苏炳添这一跑，跑服了亚洲，也跑服了世界。</div>
                  <img
                  :src="runTwo"
                  style="
                    float: right;
                    margin-right: 10px;
                    margin-top:-85px;
                    border-radius: 10px;
                  "
                />
                  </div>
            </div>
            <div id="div6" style="display: none">
              <img
                :src="gymnasticsOne"
                style="
                  margin-top: 5px;
                  margin-left: -680px;
                  border-radius: 10px;
                "
              />
              <div style="margin-top: -295px; margin-left: 280px">
                首次参加奥运就夺金！
              </div>
              <div style="width: 630px;
                  height: 250px;
                  border: 1px solid #7d7dff;
                  float: right;
                  margin-right: 10px;
                  border-radius: 10px;">
                  <div style="font-size:15px">
                    北京时间8月3日，16岁管晨辰最后一个出场，由于在她出场之间，
                    中国另一位选手唐茜靖暂列第一，也就是说中国代表团已经提前锁定这枚金牌。
                    不过对于管晨辰来说，她需要挑战自我。在预赛，管晨辰14.933分艳压群芳。
                    而在决赛，管晨辰依然发挥稳健，最终14.633分夺得金
                     </div>
                     <div style="font-size:15px;width:300px">
                       牌！教练眼中的“管小胖”，
                    在浙江省体操队主教练陈红的眼中，这个2004年出生的小姑娘性格有些小倔强，
                    不服输，想争胜是管晨辰
                     </div>
                     <div style="font-size:15px;width:100px">最大的特点。</div>
                  <img
                  :src="gymnasticsTwo"
                  style="
                    float: right;
                    margin-right: 5px;
                    margin-top:-85px;
                    border-radius: 20px;
                  "
                />
                  </div>
            </div>
            <div id="div7" style="display: none">
              <img
                :src="doublejumpOne"
                style="
                  margin-top: 5px;
                  margin-left: -680px;
                  border-radius: 10px;
                "
              />
              <div style="margin-top: -310px; margin-left: 280px">
                俩"00后"完美发挥  张家齐陈芋汐夺冠
              </div>
              <div style="width: 630px;
                  height: 250px;
                  border: 1px solid #7d7dff;
                  float: right;
                  margin-right: 10px;
                  border-radius: 10px;">
                  <div style="font-size:15px">
                    东京奥运会跳水女子双人10米跳台决赛，
                    张家齐/陈芋汐出战，拿到金牌，这是中国代表团第8金，
                    也是中国跳水队第2金。此外，这也是2位小将的首枚奥运金牌！
                    截至目前，中国跳水队出战3个单项，拿到2金1银。依靠8金5银7铜，
                    金牌榜和奖牌榜，中国代表团超越美国。男子双人十米台上，
                    陈艾森、曹缘组合以470.58分的成绩，拿下银牌，他们输给了英国组合，
                    比赛中，
                    </div>
                    <div style="font-size:15px;width:385px">
                    两人出现了失误。跳水梦之队再次出现，张家齐/陈芋汐出战。
                    张家齐，2004年5月28日出生于北京；陈芋汐，2005年9月11日出生于上海。
                    2019年张家齐曾与卢为搭档在国际泳联世锦赛中夺得女子双人10米跳台冠军，
                    陈芋汐则是2019年国际泳联世锦赛女子单人10米跳台冠军。
                    因此，两
                    </div>
                    <div style="font-size:15px;width:225px">人年纪轻轻，但已经是世界冠军。</div>
                  </div>
                  <img
                  :src="doublejumpTwo"
                  style="
                    float: right;
                    margin-right: 20px;
                    margin-top:-155px;
                    border-radius: 10px;
                  "
                />
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td style="border-radius: 10px"><a @click="funcShow(5)">短跑</a></td>
      </tr>
      <tr>
        <td style="border-radius: 10px"><a @click="funcShow(2)">国乒</a></td>
      </tr>
      <tr>
        <td style="border-radius: 10px"><a @click="funcShow(4)">气枪</a></td>
      </tr>
      <tr>
        <td style="border-radius: 10px"><a @click="funcShow(3)">跳水</a></td>
      </tr>
      <tr>
        <td style="border-radius: 10px"><a @click="funcShow(6)">体操</a></td>
      </tr>
      <tr>
        <td style="border-radius: 10px"><a @click="funcShow(7)">双人跳水</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
import pingpongball from "../components/img/国乒1.jpg";
import pingpongteam from "../components/img/国乒2.jpg";
import PjumpOne from "../components/img/跳水1.jpg";
import PjumpTwo from "../components/img/跳水2.jpg";
import PgunOne from "../components/img/气枪1.jpg";
import PgunTwo from "../components/img/气枪2.jpg";
import PrunOne from "../components/img/百米短跑1.png";
import PrunTwo from "../components/img/百米短跑2.png";
import PgymnasticsOne from "../components/img/体操1.jpg";
import PgymnasticsTwo from "../components/img/体操2.jpg";
import PdoublejumpOne from "../components/img/双人跳水1.jpg";
import PdoublejumpTwo from "../components/img/双人跳水2.jpg";
export default {
  data() {
    return {
      pingpong: pingpongball,
      personal: pingpongteam,
      jumpOne: PjumpOne,
      jumpTwo: PjumpTwo,
      gunOne: PgunOne,
      gunTwo: PgunTwo,
      runOne:PrunOne,
      runTwo:PrunTwo,
      gymnasticsOne:PgymnasticsOne,
      gymnasticsTwo:PgymnasticsTwo,
      doublejumpOne:PdoublejumpOne,
      doublejumpTwo:PdoublejumpTwo
    };
  },
  methods: {
    funcShow(id) {
      for (var i = 0; i < 7; i++) {
        let divInfo = document.getElementById("div" + (i + 1));
        divInfo.style.display = "none";
      }
      var div = document.getElementById("div" + id);
      div.style.display = "block";
    },
  },
};
</script>

<style>
.show-whole {
  border-radius: 40px;
  width: 955px;
  height: 340px;
  border: 5px solid rgb(161, 18, 197);
}
.all {
  font-size: 25px;
}
.introduce {
  width: 650px;
  height: 230px;
  border: 1px solid blue;
  float: right;
  margin-right: 15px;
  border-radius: 10px;
  font-size: 20px;
  margin-top: -15px;
}
</style>
