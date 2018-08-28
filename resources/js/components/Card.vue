<template>
    <card class="flex flex-col relative nova-current-environment-card" v-bind:class="envClass">
        <div class="px-3 py-3">
            <h3 class="text-base text-80 font-bold">Current Environment</h3>
            <p class="text-3xl text-center pt-8 capitalize">
                {{ currentEnvName }}
            </p>
         </div>
    </card>
</template>

<script>
export default {
    props: ['card'],

    data() {
        return {
            currentEnvName: '...'
        }
    },

    created: function () {
        Nova.request()
            .get("/nova-vendor/nova-current-environment-card/environment")
            .then(response => {
                this.currentEnvName = response.data;
            })
    },

    mounted() {
        //
    },

    computed: {
        envClass() {
            if(this.currentEnvName) {
                return "env-" + this.currentEnvName.toLowerCase();
            }

            return '';
        }
    }
}
</script>
