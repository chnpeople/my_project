<template>
	<div>
		<p>aes加密</p>
		<div>
			<input
				type="text"
				v-model="defaultValue"
			>
			<el-button
				size="mini"
				type="primary"
				@click="getAes"
			>加密</el-button>
			<span>{{aes}}</span>
		</div>
		<div>
			<p>解密</p>
			<input
				type="text"
				v-model="aes"
			>
			<el-button
				size="mini"
				type="primary"
				@click="getAesD"
			>解密</el-button>
			<span>{{aesD}}</span>
		</div>
	</div>
</template>

<script>
import { encrypt, decrypt } from '../libs/security.js'
export default {
	data () {
		return {
			defaultValue: '',
			aes: '',
			aesD: ''
		}
	},
	methods: {
		getAes () {
			this.aes = encrypt(this.defaultValue)
		},
		getAesD () {
			this.aesD = decrypt(this.aes)
		}
	},
}
</script>

<style>
</style>