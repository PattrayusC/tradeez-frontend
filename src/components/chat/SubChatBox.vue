<template>
    <li class="d-flex justify-content-between mb-2">
        <div v-if="message.user.user_id == myUserID">
        </div>

        <div class="card mask-custom"  style="width: 50%;">
            <div class="card-header d-flex justify-content-between p-3"
                style="border-bottom: 1px solid rgba(255,255,255,.3);">
                
                <img :src="(message.user.profile_url != '') ? message.user.profile_url : defaultProfilePhoto" alt="avatar"
            class="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="40"> 

                <p class="fw-bold mb-0">{{ message.user.nickname }}</p>
                <p class="text-light small mb-0"><i class="far fa-clock"></i>{{ timePassed }}</p>
            </div>
            <div class="card-body">
                <div v-if="message.type == 'MESG'">
                    <p class="mb-0">{{ message.message }}</p>
                    
                </div>

                <div v-if="message.type == 'FILE'" class="card" style="width: 100%; border-radius: 10%;" >
                    <div ref="myDiv">
                        <img @click="openImagePopup" @load="$emit('complete-created')" :src="imageUrl" class="card-img-top" alt="..." style="width: 100%; border-radius: 10%;">
                    </div>
                </div>
            </div>
        </div>

        <div v-if="message.user.user_id != myUserID">
        </div>
    </li>
</template>

<script>
    import { SENDBIRD_CONSTANTS } from '../../CONSTS.js'
    export default {
        name: 'SubChatBox',
        methods: {
            
        },
        props:{
            message: Object,
            myUserID: String
        },
        data(){
            return {
                timePassed: '',
                defaultProfilePhoto:'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
                imageUrl: null,
            }
        },
        mounted() {
            // console.log(this.message);
            const currentTime = Date.now();
            const elapsedTime = currentTime - this.message.created_at;
            this.timePassed = this.getTimeElapsed(elapsedTime)

            this.fetchUrlFromFileStorage(this.$refs.myDiv);
        },
        methods:{
            openImagePopup() {
                this.$emit('open-image-popup', this.imageUrl);
            },
            getTimeElapsed(time) {
                const minutes = Math.floor(time / 60000);
                if (minutes < 60) {
                    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
                }
                const hours = Math.floor(minutes / 60);
                if (hours < 24) {
                    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
                }
                const days = Math.floor(hours / 24);
                return `${days} day${days === 1 ? '' : 's'} ago`;
            },
            async fetchUrlFromFileStorage(divElement){
                if(divElement == undefined) return
                if(this.message.file.size == 0){
                    this.imageUrl = this.message.file.url
                    return
                }
                const response = await fetch( this.message.file.url , {
                method: 'GET',
                headers: {
                    'Api-Token': SENDBIRD_CONSTANTS.API_TOKEN,
                },
                });
                // console.log(response);
                // Get the binary data from the response body
                const imageBlob = await response.blob();
                // Create a blob URL from the binary data
                const imageUrl = URL.createObjectURL(imageBlob);
                this.imageUrl = imageUrl
            },
        }
    }
</script>

<style scoped>
.mask-custom {
background: rgba(24, 24, 16, .2);
border-radius: 2em;

backdrop-filter: blur(15px);
border: 2px solid rgba(255, 255, 255, 0.05);
background-clip: padding-box;
box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
}
</style>