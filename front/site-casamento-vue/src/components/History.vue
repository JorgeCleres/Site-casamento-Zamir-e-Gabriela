<template>
    <div class="history">
      <b-container>
        <h2 data-aos="fade-up" data-aos-duration="1000">NOSSA HISTÓRIA</h2>
        <p id="sub" data-aos="fade-up" data-aos-duration="1000">Conheça os detalhes da nossa caminhada até esse grande sonho do nosso casamento.</p>

        <section id="conference-timeline">
            <div class="meta-date2"></div>
            <div class="conference-center-line"></div>
            <div class="conference-timeline-content">

              <Historia 
                icone = "bb.png"
                data = "29 de Abril de 1995"
                imagem = "gabibb.png"
                titulo = "Gabi bebê"
                texto = "Nasceu em 29 de Abril de 1995."
                posicaoImagem = "left"
                posicaoTexto = "right"
              />

              <Historia 
                icone = "bb.png"
                data = "06 de Janeiro de 1994"
                imagem = "zamirbb.png"
                titulo = "Zamir bebê"
                texto = "Nasceu em 06 de Janeiro de 1994."
                posicaoImagem = "right"
                posicaoTexto = "left"
              />

              <Historia 
                icone = "casal.png"
                imagem = "primeiroencontro.png"
                titulo = "Nosso primeiro encontro"
                texto = "Neste dia, a Gabi saiu para jantar com uma amiga e conheceu o Zamir."
                data = "07 de abril de 2017"
                posicaoImagem = "left"
                posicaoTexto = "right"
                sizeImg = "70%"
              />

              <Historia 
                icone = "fotos.png"
                imagem = "primeirafoto.png"
                titulo = "Nossa primeira Foto juntos"
                data = "11 de abril de 2017"
                texto = "Segundo encontro."
                posicaoImagem = "right"
                posicaoTexto = "left"
                sizeImg = "70%"
              />

              <Historia 
                icone = "primeiro-encontro.png"
                imagem = "pedidodenamoro.jpeg"
                titulo = "Pedido de Namoro"
                data = "Julho de 2017"
                texto = "Não lembramos a data do pedido de namoro kkkk Mas a Gabi chamou o Zamir para jantar numa quinta-feira qualquer de Julho sem nenhuma pretensão e o pedido aconteceu, escrito no guardanapo, com direito a aliança de namoro e o Zamir ajoelhado no meio do restaurante."
                posicaoImagem = "left"
                posicaoTexto = "right"
                sizeImg = "90%"
              />

              <Historia 
                icone = "anel-de-diamante.png"
                imagem = "noivado.png"
                titulo = "Noivado"
                texto = "Viajamos para Imbituba - SC. Conhecemos e ficamos encantados com a praia Canto da Vila, decidimos então voltar no outro dia para fazer a trilha e chegar no Farol da praia (a ideia do Zamir era fazer o pedido lá no Farol, mas eu nem imaginava o plano). No meio da trilha tinham muitos lagartos e saímos correndo de medo sem concluir a trilha kkkkkk quando chegamos nas pedras da praia, o Zamir disse que queria perguntar uma coisa, se ajoelhou e eu (Gabi) falei que aceito e saí correndo de medo dos lagartos, que pareciam jacarés de tão grandes (as praias de Imbituba são bem preservadas, então é normal encontrar vários bichinhos). Quando entramos no carro morremos de rir. Depois, dentro do carro mesmo ele conseguiu fazer o pedido com palavras tão lindas que nunca vou me esquecer, e claro, eu disse SIM!"
                data = "28 de Agosto de 2020"
                posicaoImagem = "right"
                posicaoTexto = "left"
              />

              <Historia 
                icone = "caminhao.png"
                imagem = "conjuntofotos.png"
                titulo = "Nossa Mudança"
                data = "08 de Agosto de 2020"
                texto = "Em Agosto de 2020 decidimos juntar nossas escovas de dente e dar início a nossa família e ao nosso lar. Fomos muito abençoados por Deus e por todas as pessoas que nos ajudaram a realizar esse sonho, sem elas isso não seria possível."
                posicaoImagem = "left"
                posicaoTexto = "right"
              />   

              <Historia 
                icone = "aliancas-de-casamento.png"
                imagem = "casamentocartorio.png"
                titulo = "Casamento Cartório"
                texto = "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito. Que a paz de Cristo seja o juiz em seu coração, visto que vocês foram chamados para viver em paz, como membros de um só corpo. E sejam agradecidos. Colossenses 3:14"
                data = "14 de Outubro de 2020"
                posicaoImagem = "right"
                posicaoTexto = "left"
              />

            </div>
            <div class="meta-date3"></div>
        </section>
      </b-container>
    </div>
</template>

<script>
  import Historia from '../components/linha_do_tempo/Historia.vue'
  export default {
    components: {Historia}
  }
</script>

<style>
  .history {
    margin: 100px auto;
  }
  .history h2 {
    font-size: clamp(2rem, 2.5vw, 3.5rem);
    margin: 0 0 10px;
    font-weight: 200 !important;
    color: #5a5a5a;
  }
  .history #sub {
    font-size: 22px;
    font-weight: 100;
  }
  .history .timeline-article {
    overflow: hidden !important;
  }
  .history .content-left img, .content-right img {
    transition: 0.7s;
  }
  .history .content-left img:hover, .content-right img:hover {
    transform: scale(1.1);
  }
  .history img {
      width: 100%;
  }
  .history .icon {
    width: 50%;
    margin: 15px;
    transition: 0.9s;
    height: auto;
  }
  .history .meta-date:hover .icon {
    width: 50%;
    margin: 15px;
    transform: rotate(-360deg);
  }
  .history .content-left h3{
    text-align: end;
    font-size: clamp(1.5rem, 2.5vw, 3.5rem);
    font-family: 'Poppins', sans-serif;
    font-weight: 200 !important;
  }
  .history .content-left h6{
    text-align: end;
    color: #517031;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 25px;
  }
  .history .content-left p {
    margin: 0px;
    padding: 0 0 0 100px;
    font-weight: 400;
    color: #727272;
    font-size: 18px;
    line-height: 24px;
    position: relative;
    text-align: justify;
  }

  .history .content-right h3{
    text-align: initial;
    font-size: clamp(1.5rem, 2.5vw, 3.5rem);
    font-weight: 200 !important;
  }
  .history .content-right h6{
    text-align: initial;
    color: #517031;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 25px;
  }
  .history .content-right p {
    margin: 0px;
    padding: 0 100px 0 0;
    font-weight: 400;
    color: #727272;
    font-size: 18px;
    line-height: 24px;
    position: relative;
    text-align: justify;
  }
  .history #conference-timeline {
    position: relative;
    width: 100%;
    margin: 60px auto 0;
  }
  .history #conference-timeline .conference-center-line {
    position: absolute;
    width: 3px;
    height: 100%;
    top: 0;
    left: 50%;
    margin-left: -2px;
    background: #ebebeb;
    z-index: -1;
  }
  .history #conference-timeline .conference-timeline-content {
    padding-top: 100px;
    padding-bottom: 67px;
  }
  .history .timeline-article {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    margin: 0 0 90px;
  }
  .history .timeline-article .content-left-container,
  .history .timeline-article .content-right-container {
    max-width: 44%;
    width: 100%;
  }
  .history .timeline-article .content-left,
  .history .timeline-article .content-right {
    position: relative;
    width: auto;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,.03);
    padding: 0px;
  }
  .history .timeline-article .content-left-container {
    float: left;
  }
  .history .timeline-article .content-right-container {
    float: right;
  }
  .history .timeline-article .content-left:before,
  .history .timeline-article .content-right:before{
    position: absolute;
    top: 20px;
    font-size: 23px;
    color: #fff;
  }
  .history .timeline-article .meta-date {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    color: #fff;
    border-radius: 100%;
    background: #ebebeb;
  }
  .history .meta-date2 {
    position: absolute;
    top: 0;
    left: 50%;
    width: 9px;
    height: 9px;
    margin-left: -5px;
    color: #fff;
    border-radius: 100%;
    background: #517031;
  }
  .history .meta-date3 {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 9px;
    height: 9px;
    margin-left: -5px;
    color: #fff;
    border-radius: 100%;
    background: #517031;
  }
  
  .history .timeline-article .meta-date .date,
  .history .timeline-article .meta-date .month {
    display: block;
    text-align: center;
    font-weight: 900;
  }
  .history .timeline-article .meta-date .date {
    font-size: 30px;
    line-height: 40px;
  }
  .history .timeline-article .meta-date .month {
    font-size: 18px;
    line-height: 10px;
  } */

  .history .icon {
        animation: icon 0.9s infinite;
        display: table;
        animation-direction: alternate;
        -webkit-animation-name: icon;
        animation-name: icon;
    }

    @-webkit-keyframes icon {
        0% {
            -webkit-transform: scale(1);
            -webkit-filter: brightness(100%);
        }
        100% {
            -webkit-transform: scale(1.2);
            -webkit-filter: brightness(200%);
            
        }
    }
    @keyframes icon {
        0% {
            transform: scale(1);
            filter: brightness(100%);
        }
        100% {
            transform: scale(1.2);
            filter: brightness(200%);
            
        }
    }

/*===== Resonsive Vertical Timeline =====*/
@media only screen and (max-width: 830px) {
  .history #conference-timeline .timeline-start,
  .history #conference-timeline .timeline-end {
    margin: 0;
  }
  .history .content-left h6 {
    text-align: start;
  }
  .history #conference-timeline .conference-center-line {
    margin-left: 0;
    left: 50px;
  }
  .history .timeline-article .meta-date {
    margin-left: 0;
    left: 20px;
  }
  .history .timeline-article .content-left-container,
  .history .timeline-article .content-right-container {
    max-width: 100%;
    width: auto;
    float: none;
    margin-left: 110px;
    min-height: 53px;
  }
  .history .timeline-article .content-left-container {
    margin-bottom: 20px;
  }
  .history .timeline-article .content-left,
  .history .timeline-article .content-right {
    padding: 0px 0px;
    min-height: 65px;
    margin: 0 !important;
  }
  .history .timeline-article .content-left:before {
    content: "\f0d9";
    right: auto;
    left: -8px;
  }
  .history .timeline-article .content-right:before {
    display: none;
  }
  .history .meta-date2, .meta-date3 {
    display: none
  }
  .history .content-right p, .history .content-left p {
    padding: 0 !important;
    font-size: 17px
  }
  .history .timeline-article .content-left, .timeline-article .content-right {
    padding: 10px 0px;
  }
  .history #conference-timeline .conference-timeline-content[data-v-aa4ea6d8] {
      padding-top: 20px;
      padding-bottom: 67px;
  }
  .history .content-left h3, .content-left h6, .content-left p  {
    text-align: start;
  }
}
</style>