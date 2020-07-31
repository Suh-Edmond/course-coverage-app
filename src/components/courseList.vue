<template>
        <q-page>
            <q-item 
                clickable
                v-ripple>
                <q-item-section side>
                    <div class="row">
                        <div class="column justify-end">
                                <q-item-label caption class="justify-end">{{ courses.title}}</q-item-label>
                                <small><q-item-label caption class="justify-end">{{ courses.credit_value }}</q-item-label></small>
                        </div>
                    </div>
                </q-item-section>   
            </q-item>
        </q-page>

    
</template>

<script>
    export default {
        props:['courses','id']
    }
</script>


<style scoped>

</style>