
 
<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  // props:['numtop'],
  // data1 :["topics1", "topic2"],
  // for(i =0; i < getWeek.length; i++){
  //     data1.push(i)
  // }
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels:['week1','week2','week3', 'week4', 'week5', 'week6', 'week7','week8', 'week9',  'week10'],
      datasets: [
        {
          label: 'Number of Covered Topics:',
          backgroundColor: '#f87979',
          data: [5,  6]
        }
      ]
    })
  }
}
</script>