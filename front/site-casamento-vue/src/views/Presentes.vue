<template>
    <div>
        <NavBar 
            colorBack = 'white'
            shadowDisabled = '0px 0px 15px -5px black'
            shadowActivated = '0px 0px 1px 0px black'
            fontDisabled = 'black'
            fontActivated = 'black'
            logoActivated = 'zamir-gabi-black.png'
            logoDisable = 'zamir-gabi-black.png'
            colorNavDisable = '#fff'
            colorNavActivated = '#000'
            logoAlternative = 'zamir-gabi-white.png'
        />
        <CardPresents />
        <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import CardPresents from '@/components/listaPresentes/CardsPresents.vue'
import Footer from '@/components/Footer.vue'
    export default {
        components: {
            NavBar,
            CardPresents,
            Footer
        },
        data() {
            return {

            }
        }
    }
</script>