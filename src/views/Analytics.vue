<template>
  <div>
    <h1>Analytics Dashboard</h1>
    <BarChart/>
  </div>
</template>

<script>
import { db } from "../firestoreInit";
import BarChart from "../components/BarChart.vue";

export default {
    name: "Analytics",
    data() {
        return {
            list: []
        };
    },
    methods: {
        async getMarker() {
            await db.collection("users").get()
                .then((snapshot) => snapshot.docs.forEach((doc) => {
                this.list.push(doc.data());
            }));
            console.log(this.list[0].data);
        }
    },
    beforeMount() {
        this.getMarker();
    },
    components: { BarChart }
};
</script>
