<template>
	<div class="user">
		<div class="user-img"><img :src="avatar?avatar:require('./img/icon/avatar.jpg')"/></div>
	</div>
</template>


<script>
	export default {
	  props:{
	  	avatar:{
	  		type:String,
	  		default:''
	  	}
	  },	
	  data() {
	    return {
	      comment: ''
	    }
	  },
	 
	}
</script>

<style type="text/css" scoped>
	.user{
		text-align: center;	
		z-index: 9999;
		height: 50px;
		width: 50px;
	}
	.user-img img{
		text-align: center;
		width:100%;
		height: 100%;
		border-radius:50%;
	}

</style>