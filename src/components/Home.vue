<template>

  <div class="container w-100 " id="boxcolor">
    <table class="card bg-secondary">
      <tr class="btn btn-secondary">software-developer</tr>
      <tr class="btn btn-warning">job-seeker</tr>
      <tr class="btn btn-secondary">human</tr>
    </table>
    <div>
      <br>
    </div>
    <div>
      <div class="card bg-secondary">
        <button class="btn btn-warning">language-stack:</button>
        <button class="btn btn-secondary">css/go/html/java/javascript/ruby</button>
      </div>
        <div>
          <br>
        </div>
      <div class="card bg-secondary">
        <button class="btn btn-warning">framework-stack:</button>
        <button class="btn btn-secondary">bootstrap/ember/jquery/rails/react/spring/vue</button>
      </div>
        <div>
          <br>
        </div>
      <div class="card bg-secondary">
        <button class="btn btn-warning">backend-stack:</button>
        <button class="btn btn-secondary">sql/postgres-sql/node.js/npm/yarn</button>
      </div>
      <div>
        <br>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'This is Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
