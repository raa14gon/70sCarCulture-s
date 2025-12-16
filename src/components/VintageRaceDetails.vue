<template>
  <div v-if="race" class="details">
    <h3>{{ race.raceName }}</h3>
    <p>CIRCUIT: {{ race.Circuit?.circuitName || 'N/A' }}</p>
    <p>DATE: {{ race.date || 'N/A' }}</p>

    <div v-if="history" class="history">
      <h4>HISTORY</h4>
      <p v-if="history.extract" class="extract">
        {{ history.extract }}
      </p>
      <p v-else class="no-data">
        NO DATA AVAILABLE
      </p>
    </div>
    <p v-else class="loading">
      LOADING HISTORY...
    </p>
  </div>
  <div v-else class="details no-race">
    <p>SELECT A RACE TO VIEW DETAILS</p>
  </div>
</template>

<script>
export default {
  name: 'VintageRaceDetails',
  props: {
    race: {
      type: Object,
      default: null
    },
    history: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.details {
  margin-top: 20px;
  border: 2px solid #00ff66;
  padding: 16px;
  min-height: 200px;
}

.details h3 {
  font-size: 18px;
  margin: 0 0 12px 0;
}

.details p {
  font-size: 14px;
  margin: 8px 0;
}

.details.no-race {
  display: flex;
  align-items: center;
  justify-content: center;
}

.history {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px dashed #00ff66;
}

.history h4 {
  margin: 0 0 10px 0;
  font-size: 14px;
}

.extract {
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
}

.no-data,
.loading {
  color: #ffaa00;
  font-size: 12px;
  margin: 0;
}

/* Media Queries - Tablets */
@media (max-width: 1024px) {
  .details {
    padding: 14px;
    min-height: 180px;
  }

  .details h3 {
    font-size: 16px;
  }

  .details p {
    font-size: 13px;
  }

  .history h4 {
    font-size: 13px;
  }

  .extract {
    font-size: 11px;
  }
}

/* Media Queries - Mobile */
@media (max-width: 768px) {
  .details {
    margin-top: 15px;
    padding: 12px;
    min-height: 150px;
  }

  .details h3 {
    font-size: 15px;
    margin-bottom: 10px;
  }

  .details p {
    font-size: 12px;
    margin: 6px 0;
  }

  .history {
    margin-top: 12px;
    padding-top: 12px;
  }

  .history h4 {
    font-size: 12px;
    margin-bottom: 8px;
  }

  .extract {
    font-size: 11px;
    line-height: 1.3;
  }

  .no-data,
  .loading {
    font-size: 11px;
  }
}

/* Media Queries - Small Mobile */
@media (max-width: 480px) {
  .details {
    margin-top: 10px;
    padding: 10px;
    min-height: 120px;
    border: 1px solid #00ff66;
  }

  .details h3 {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .details p {
    font-size: 11px;
    margin: 5px 0;
  }

  .history {
    margin-top: 10px;
    padding-top: 10px;
  }

  .history h4 {
    font-size: 11px;
    margin-bottom: 6px;
  }

  .extract {
    font-size: 10px;
    line-height: 1.3;
  }

  .no-data,
  .loading {
    font-size: 10px;
  }
}
</style>