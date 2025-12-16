<template>
    <div>
        <header class="vintage-header">
            <div class="info-header">
                <h1>🏁 VINTAGE RACING TERMINAL</h1>
                <p>Experience the legendary Formula 1 seasons of the 1970s. Explore historic races, circuits, and the
                    stories that shaped motorsport history.</p>
            </div>
        </header>

        <section class="racing-section">
            <div class="season-selector">
                <label for="year-select">SELECT SEASON</label>
                <select id="year-select" v-model="year" @change="loadRaces" class="select-season">
                    <option v-for="y in years" :key="y" :value="y">
                        SEASON {{ y }}
                    </option>
                </select>
            </div>

            <div class="layout">
                <VintageRaceList :races="races" @select="selectRace" />

                <VintageRaceDetails :race="selectedRace" :history="history" />
            </div>
        </section>
    </div>
</template>

<script>
import VintageRaceList from '../components/VintageRaceList.vue'
import VintageRaceDetails from '../components/VintageRaceDetails.vue'
import { getRacesByYear } from '../services/ergast.js'
import { getRaceHistory } from '../services/wikipedia.js'

export default {
    components: {
        VintageRaceList,
        VintageRaceDetails
    },

    data() {
        return {
            year: 1970,
            years: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979],
            races: [],
            selectedRace: null,
            history: null
        }
    },

    mounted() {
        this.loadRaces()
    },

    methods: {
        async loadRaces() {
            try {
                this.races = await getRacesByYear(this.year)
                this.selectedRace = null
                this.history = null
            } catch (error) {
                console.error('Error loading races:', error)
                this.races = []
            }
        },

        async selectRace(race) {
            this.selectedRace = race

            const title = race.raceName.replace(/ /g, '_')
            this.history = await getRaceHistory(title)

            // try {
            //     new Audio('/sounds/beep.mp3').play().catch(() => { })
            // } catch (error) {
            //     console.warn('Could not play sound:', error)
            // }
        }
    }
}
</script>

<style scoped>
.vintage-header {
    background: linear-gradient(135deg, #F58F56 0%, #d96e3e 100%);
    padding: 40px 20px;
    border-bottom: 8px solid black;
}

.info-header {
    max-width: 1200px;
    margin: 0 auto;
    color: white;
}

.info-header h1 {
    font-size: 48px;
    margin: 0 0 20px 0;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.info-header p {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    max-width: 800px;
}

.racing-section {
    padding: 40px 20px;
    background-color: #f5f5f5;
    min-height: calc(100vh - 200px);
}

.season-selector {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.season-selector label {
    font-weight: bold;
    font-size: 16px;
    color: #333;
}

.select-season {
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #F58F56;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s;
}

.select-season:hover {
    background-color: #F58F56;
    color: white;
    border-color: #d96e3e;
}

.select-season:focus {
    outline: none;
    border-color: #d96e3e;
    box-shadow: 0 0 5px rgba(245, 143, 86, 0.5);
}

.layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Media Queries - Tablets */
@media (max-width: 1024px) {
    .info-header h1 {
        font-size: 36px;
    }

    .info-header p {
        font-size: 14px;
    }

    .layout {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}

/* Media Queries - Mobile */
@media (max-width: 768px) {
    .vintage-header {
        padding: 30px 15px;
        border-bottom: 5px solid black;
    }

    .info-header h1 {
        font-size: 28px;
        margin-bottom: 15px;
    }

    .info-header p {
        font-size: 13px;
    }

    .racing-section {
        padding: 20px 15px;
    }

    .season-selector {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
    }

    .season-selector label {
        font-size: 14px;
    }

    .select-season {
        width: 100%;
        padding: 8px 12px;
        font-size: 14px;
    }

    .layout {
        gap: 15px;
    }
}

/* Media Queries - Small Mobile */
@media (max-width: 480px) {
    .vintage-header {
        padding: 20px 10px;
    }

    .info-header h1 {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .info-header p {
        font-size: 12px;
    }

    .racing-section {
        padding: 15px 10px;
    }

    .season-selector label {
        font-size: 12px;
    }

    .select-season {
        font-size: 12px;
    }
}
</style>
