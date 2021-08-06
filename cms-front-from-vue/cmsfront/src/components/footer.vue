<template>
  <!-- <div class="container"> -->
    <div class="footermain">

    </div>
    <!-- <div class="card">
      <div class="imgBx">
        <img src="./img/二维码1.png" alt="" />
      </div>
      <div class="contentBx">
        <h2>设计</h2>
        <p>
          任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!
        </p>
        <a href="#"><span>Read More</span></a>
      </div>
    </div>
    <div class="card">
      <div class="imgBx">
        <img src="./img/二维码1.png" alt="" />
      </div>
      <div class="contentBx">
        <h2>编码</h2>
        <p>
          任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!
        </p>
        <a href="#"><span>Read More</span></a>
      </div>
    </div>
    <div class="card">
      <div class="imgBx">
        <img src="./img/二维码1.png" alt="" />
      </div>
      <div class="contentBx">
        <h2>成长</h2>
        <p>
          任何时候，无论你面临着生命的何等困惑，抑或经受着多少挫折，无论道路如何的艰难，无论希望变得如何渺茫，请你不要绝望，再试一次，成功一定属于你!
        </p>
        <a href="#"><span>Read More</span></a>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
*{
  font-family: '微软雅黑', sans-serif;
  box-sizing: border-box;
}
body{
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-height: 100vh;
  background: #ebf5fc;
  overflow: hidden;
}
.container{
  position: relative !important;
  display: flex !important;
  justify-content: space-around !important;
  align-items: center !important;
  width: 100% !important;
  flex-wrap: wrap !important;
}

.container .card{
  width: 320px;
  margin: 20px;
  padding: 40px 30px;
  background: #F5F7FA;
  border-radius: 40px;
  border: none !important;
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
              6px 6px 20px rgba(0, 0, 0, .1);
}

.container .card:hover{
  box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.5),
              inset 6px 6px 20px rgba(0, 0, 0, 0.05);
}

.container .card .imgBx{
  position: relative;
  text-align: center;
}

.container .card .imgBx img{
  max-width: 120px;
}

.container .card .contentBx{
  position: relative;
  margin-top: 20px;
  text-align: center;
}

.container .card .contentBx h2{
  color: #32a3b1;
  font-weight: 700;
  font-size: 1.4em;
  letter-spacing: 2px;
}

.container .card .contentBx p{
  color: #32a3b1;
}

.container .card .contentBx a{
  display: inline-block;
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 40px;
  color: #32a3b1;
  font-size: 16px;
  text-decoration: none;
  box-shadow: -4px -4px 15px rgba(255, 255, 255, 1),
  4px 4px 15px rgba(0, 0, 0, .1);
}

.container .card .contentBx a:hover{
  box-shadow: inset -4px -4px 10px rgba(255, 255, 255, 0.5),
  inset 4px 4px 10px rgba(0, 0, 0, .1);
}

.container .card .contentBx a:hover span{
  display: block;
  transform: scale(0.98);
}

.container .card:hover .imgBx,
.container .card:hover .contentBx{
  transform: scale(0.98);
}
.footermain{
  width: 100%;
  height: 200px;
  border: rgb(12, 9, 9);
}
</style>