<template>
  <q-page>
      <div class="row ">
        <div class="col-md-3">
           <q-card>
             <q-card-section class="bg-primary text-white">
            <div class="text-h6 text-center">Course</div>
            <q-separator />
            <q-item-section> 
              <q-item-label>
                Total:
              </q-item-label>
            </q-item-section>
          </q-card-section>
           </q-card>
        </div>
        <div class="col-md-3">
           <q-card>
             <q-card-section class="bg-primary text-white">
            <div class="text-h6  text-center">Lecturer</div>
            <q-separator />
            <q-item-section> 
              <q-item-label>
                Total:
              </q-item-label>
            </q-item-section>
          </q-card-section>
           </q-card>
        </div>
        <div class="col-3 col-md">
           <q-card>
             <q-card-section class="bg-primary text-white">
            <div class="text-h6  text-center">Assigned Lecturers</div>
            <q-separator />
            <q-item-section> 
              <q-item-label>
                Total:
              </q-item-label>
            </q-item-section>
          </q-card-section>
           </q-card>
        </div>
        <div class="col-3 col-md">
           <q-card>
             <q-card-section class="bg-primary text-white">
            <div class="text-h6  text-center">Course Delegate</div>
            <q-separator />
            <q-item-section> 
              <q-item-label>
                Total:
              </q-item-label>
            </q-item-section>
          </q-card-section>
           </q-card>
        </div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
