<script>
export default {
  data() {
    return {
      isFarsi: true,
      language: 'انگلیسی'
    }
  },
  methods:{
    clicked(){
      let body = document.getElementsByTagName('body')
      let arry = Array.from(body)[0]
      let dir = arry.attributes.dir.value
      // console.log(dir, this.isFarsi)
      if (this.isFarsi && dir == 'rtl'){
        this.language = 'Persian'
        arry.setAttribute("dir", "ltr");
      }else {
        arry.setAttribute("dir", "rtl");
        this.language = 'انگلیسی'
      }
      this.isFarsi = !this.isFarsi
      this.emitter.emit('langToggle', this.isFarsi)
    }
  }
}
</script>

<template>
	<h class="cursor-pointer font-shabnam font-medium text-gray-900 dark:text-gray-200" @click="clicked">{{ language }}</h>
</template>