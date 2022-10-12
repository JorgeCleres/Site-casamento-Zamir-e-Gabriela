<template>
    <div class="timeline-article">
        <div :class="`content-${posicaoImagem}-container`" :data-aos="`fade-${posicaoTexto}`" data-aos-duration="1000">
            <div :class="`content-${posicaoImagem}`" :style="`width:${sizeImg}; margin: 0 auto;`">
                <img :src="require('@/assets/' + imagem)" alt="">
            </div>
        </div>

        <div :class="`content-${posicaoTexto}-container`" :data-aos="`fade-${posicaoImagem}`" data-aos-duration="1000">
            <div :class="`content-${posicaoTexto}`">
                <h3>{{ titulo }}</h3>
                <h6 if="data">{{ data }}</h6>
                <p>{{ texto }}</p>
            </div>
        </div>

        <div class="meta-date">
            <img class="icon" :src="require('@/assets/icons/' + icone)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ['imagem', 'data', 'texto', 'icone', 'posicaoImagem', 'posicaoTexto', 'titulo', 'sizeImg'],
    data() {
        return {

        }
    }
}
</script>

<!-- <style scoped>
    .timeline-article {
        overflow: hidden !important;
    }

    #conference-timeline {
        position: relative;
        width: 100%;
        margin: 60px auto 0;
    }

    #conference-timeline .conference-center-line {
        position: absolute;
        width: 3px;
        height: 100%;
        top: 0;
        left: 50%;
        margin-left: -2px;
        background: #ebebeb;
        z-index: -1;
    }

    #conference-timeline .conference-timeline-content {
        padding-top: 100px;
        padding-bottom: 67px;
    }

    .timeline-article {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        margin: 0 0 90px;
    }

    .timeline-article .content-left-container,
    .timeline-article .content-right-container {
        max-width: 44%;
        width: 100%;
    }

    .timeline-article .content-left,
    .timeline-article .content-right {
        position: relative;
        width: auto;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .03);
        padding: 0px;
    }

    .timeline-article .content-left-container {
        float: left;
    }

    .timeline-article .content-right-container {
        float: right;
    }

    .timeline-article .content-left:before,
    .timeline-article .content-right:before {
        position: absolute;
        top: 20px;
        font-size: 23px;
        color: #fff;
    }

    .timeline-article .meta-date {
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

     .timeline-article .meta-date .date,
     .timeline-article .meta-date .month {
        display: block;
        text-align: center;
        font-weight: 900;
    }
    .timeline-article .meta-date .date {
        font-size: 30px;
        line-height: 40px;
    }
    .timeline-article .meta-date .month {
        font-size: 18px;
        line-height: 10px;
    }

    /*===== Resonsive Vertical Timeline =====*/
    @media only screen and (max-width: 830px) {
        #conference-timeline .timeline-start,
        #conference-timeline .timeline-end {
            margin: 0;
        }
        #conference-timeline .conference-center-line {
            margin-left: 0;
            left: 50px;
        }
        .timeline-article .meta-date {
            margin-left: 0;
            left: 20px;
        }
        .timeline-article .content-left-container,
        .timeline-article .content-right-container {
            max-width: 100%;
            width: auto;
            float: none;
            margin-left: 110px;
            min-height: 53px;
        }
        .timeline-article .content-left-container {
            margin-bottom: 20px;
        }
        .timeline-article .content-left,
        .timeline-article .content-right {
            padding: 10px 25px;
            min-height: 65px;
        }
        .timeline-article .content-left:before {
            content: "\f0d9";
            right: auto;
            left: -8px;
        }
        .timeline-article .content-right:before {
            display: none;
        }
        .timeline-article .content-left, .timeline-article .content-right {
            padding: 10px 0px;
        }
        #conference-timeline .conference-timeline-content[data-v-aa4ea6d8] {
            padding-top: 20px;
            padding-bottom: 67px;
        }
    }

    @media only screen and (max-width: 400px) {
        .timeline-article p {
            margin: 0;
        }
    }
</style> -->