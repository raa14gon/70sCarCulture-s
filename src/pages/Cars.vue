<template>
    <header class="title-header">
        <h1>Cards Car Specs</h1>
    </header>
    <section>
        <div class="cards-container">
            <CardCars v-for="car in cars" :key="car.id" :cars="car" />
        </div>
    </section>
</template>

<script>
import CardCars from '../components/CardCars.vue';

export default {
    components: { CardCars },

    data() {
        return {
            cars: [],
            selectedId: null,
            error: null,
        }
    },

    mounted() {
        fetch('/70sCarCulture-s/json-cars.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.cars = data;
            })
            .catch(error => {
                this.error = 'There was a problem fetching the car data: ' + error.message;
            });
    }
}   
</script>

<style scoped>
.title-header {
    background-color: whitesmoke;
    border-top: 5px solid black;
    border-bottom: 10px solid black;
    text-align: center;
    margin: 20px 0;
    font-size: 32px;
    font-weight: bold;
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
}

/* Media Queries - Tablets */
@media (max-width: 1024px) {
    .title-header {
        font-size: 28px;
        margin: 15px 0;
    }

    .cards-container {
        grid-template-columns: repeat(2, minmax(280px, 1fr));
        gap: 15px;
        padding: 15px;
    }
}

/* Media Queries - Mobile */
@media (max-width: 768px) {
    .title-header {
        font-size: 24px;
        margin: 10px 0;
        border-top: 3px solid black;
        border-bottom: 6px solid black;
    }

    .cards-container {
        grid-template-columns: 1fr;
        gap: 15px;
        padding: 10px;
    }
}

/* Media Queries - Small Mobile */
@media (max-width: 480px) {
    .title-header {
        font-size: 20px;
        margin: 8px 0;
    }

    .cards-container {
        gap: 10px;
        padding: 8px;
    }
}
</style>