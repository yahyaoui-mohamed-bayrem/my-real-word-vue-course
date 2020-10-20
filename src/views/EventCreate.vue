<template>
  <div>
    <!-- Mastering Vuex course lesson 4 : mutation & actions -->
    <h1>Create an event</h1>
  <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="event.title" type="text" placeholder="Add an event title"/>
      </div>

      <div class="field">
        <label>Description</label>
        <input v-model="event.description" type="text" placeholder="Add a description"/>
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="event.location" type="text" placeholder="Add a location"/>
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">

          <option v-for="time in times" :key="time">{{ time }}</option>

        </select>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit"/>

    </form>

    <!-- Mastering Vuex course lesson 3 : state & getters -->
    <!-- <h1>Create event, {{ user.name }}</h1>
    <p> this event was created by {{ user.id }}</p>
    <p>{{ getEventByID(2) }}</p>
    <p>there are {{ catLength }} categories :</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul> -->
  </div>
</template>

<script>
// Mastering Vuex course lesson 4 : mutation & actions
import Datepicker from 'vuejs-datepivcker'

export default {
  components: {
    Datepicker,
    data() {
      const times =[]
      for (let i = 1; i <= 24; i++){
        times.push(i + ':00')
      }
      return {
        times,
        categories: this.$store.state.categories,
        event: this.createFreshEventObject()
      }
    },
  },
  methods: {
    createFreshEventObject() {
      const user = this.$store.state.user
      const id = Math.floor(Math.random() * 10000000)
      return {
        id,
        user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendies: []
      }
    }
  }
}

//  Mastering Vuex course lesson 3 : state & getters :
// import { mapState, mapGetters } from 'vuex'

// export default {
//   name: 'EventCreate',
//   // this way we can name / rename our computed props
//   // computed: mapState({
//   //   //userName: state => state.user.name,
//   //   //userID: state => state.user.id,
//   //   user: 'user',
//   //   categories: 'categories'
//   // })

//   //if we don't need to name our computed prop we can use this shortcut
//   computed: {
//     ...mapState(['user', 'categories']),
//     autherComputedProps() {
//       return null
//     },
//     catLength() {
//       return this.$store.getters.catLength
//     },    

//   //this computed prop declaration is without mapState
// //   computed: {
// //     userName() {
// //       return this.$store.state.user.name
// //   },
// //   userID() {
// //       return this.$store.state.user.id
// //   }
    
//     // getEvent() {
//     //   return this.$store.getters.getEventByID
//     // }
//     // or
//     ...mapGetters(['getEventByID'])
//  }
// }
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
