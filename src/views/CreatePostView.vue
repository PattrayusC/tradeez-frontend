<template>
    <div class="col-12 col-md-12 col-lg-12">
        <h1 class="text text-center tez-form-header tez-form-header-2">
            Create <span class="tez-form-header">Post</span>
        </h1>
        <div class="container col-lg-6 ">
            <div class="mb-3 mt-3 tez-form-text ">
                <label for="fname">Product Name</label>
                <input type="fname" class="form-control" v-model="this.Blog.product_name">
            </div>
            <div class="mb-3 mt-3 tez-form-text">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" rows="10" v-model="this.Blog.description"></textarea>
            </div>
            <button class="btn btn-primary px-5 py-0 tez-btn" @click="addBulletPoint">Add Bullet</button>
            <div class="mb-3 mt-3 tez-form-text">
                <label for="price">Price</label>
                <input type="number" min="0" class="form-control" v-model="this.Blog.price">
            </div>
            <div class="mb-3 mt-3 tez-form-text">
                <label for="cost">Shipping Cost</label>
                <input type="number" min="0" class="form-control" v-model="this.Blog.shipping_cost">
            </div>
            <div class="mb-3 mt-3 tez-form-text">
                <label for="formFileSm" class="form-label">Product Image</label>
                <input class="form-control form-control-sm " id="formFileSm" type="file" style="opacity:0.5;height:10;" @change="uploadImage($event)" accept="image/*">
            </div>
            <div class="category b-3 mt-3 tez-form-text">
                <span class="tag tez-title ">Category</span>
                <div><br /></div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Computer" id="flexCheckDefault-computer" v-model="this.Blog.categories">
                    <label class="form-check-label" for="flexCheckDefault-computer">
                        <span class="tez-title" style="font-size: 17px;"> Computer</span>
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Food" id="flexCheckDefault-food" v-model="this.Blog.categories">
                    <label class="form-check-label" for="flexCheckDefault-food">
                        <span class="tez-title" style="font-size: 17px;"> Food</span>
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Fashion" id="flexCheckDefault-fashion" v-model="this.Blog.categories">
                    <label class="form-check-label" for="flexCheckDefault-fashion">
                        <span class="tez-title" style="font-size: 17px;"> Fashion</span>
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Kid" id="flexCheckDefault-kid" v-model="this.Blog.categories">
                    <label class="form-check-label" for="flexCheckDefault-kid">
                        <span class="tez-title" style="font-size: 17px;"> Kid</span>
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Game" id="flexCheckDefault-game" v-model="this.Blog.categories">
                    <label class="form-check-label" for="flexCheckDefault-game">
                        <span class="tez-title" style="font-size: 17px;"> Game</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div class="row g-3 col-12 col-md-12 col-lg-12">
        <h1 class="text title text-center">
            <button type="button" class="btn btn-primary mt-3 tez-btn" data-bs-toggle="modal" data-bs-target="#edit-p" @click="submitForm" :disabled="!uploadDone">
                Comfirm Post </button>
        </h1>
    </div>
</template>

<script>
const url = 'http://127.0.0.1:5000/'
import axios from 'axios'
import { getAuth,onAuthStateChanged} from 'firebase/auth'
export default {
    name: 'CreateBlog',
    data() {
        return {
            Blog: {
                author: '',
                product_name: '',
                description: '',
                price: '',
                shipping_cost: '',
                product_img: 'https://cdn.discordapp.com/attachments/1071365428200345623/1107227240338559027/No_image_available.png',
                categories: [],
                time: '',
                sold: false,
                offers: [],
                reward: false,
                announce: false,
            },
            uploadDone: true
        }
    },
    methods: {
        submitForm: function() {
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    // console.log("test " + user.uid)
                    this.Blog.author = user.uid
                    var currentTime = new Date().toUTCString();
                    this.Blog.time = currentTime;
                    axios.post(url + 'createpost', this.Blog)
                        .then((response) => {
                            console.log(response.data)
                            // var save = this.$route.params.item
                            // this.$router.push('/detail/' + save)
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }
                else {
                    console.log("You are not authorized to access this area.")
                    this.$router.push('/')
                }
            })
        },
        uploadImage(event) {
            this.uploadDone = false
            let data = new FormData();
            data.append('name', 'my-picture');
            data.append('image', event.target.files[0]);
            let config = {
                header: {
                'Content-Type': 'image/png'
                }
            }
            axios.post(
                url + 'upload',
                data,
                config
            ).then(
                response => {
                    console.log('image upload response > ', response.data.uri)
                    this.Blog.product_img = response.data.uri
                    this.uploadDone = true
                }
            )
        },
        addBulletPoint: function() {
            this.Blog.description += '\n\u2022 '
        },
    }
}
</script>

<style scoped>
.information {
    padding: 1%;
}

.text {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    color: #3c3d42;
}

.title {
    line-height: 56px;
    font-size: 48px;
    color: #fa8a55;
    position: relative;
}

.p-img {
    height: 200px;
    width: 200px;
    object-fit: cover;
    display: block;
}

.profile-pic {
    margin-top: 1%;
    margin-bottom: 3%;
}

.btn-primary {
    background-color: #FB743E !important;
}

.btn-primary:visited,
.btn-primary:hover,
.btn-primary:active,
.btn-primary::backdrop {
    background-color: #d44911 !important;
}


.tez-btn {
    font-family: "PT Serif";
    border: none;
    height: auto;
    width: 180px;
    margin-left: 4%;
    margin-right: -1%;
    font-weight: 700;
    background-color: #fb743e;
    padding: 0.5em 0;
}

.tez-btn:focus {
    border-color: rgb(251, 116, 62);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 10px rgba(251, 90, 62, 0.7);
}

.tez-form-btn {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
}

.tez-form {
    max-width: 100%;
}

.modal-body {
    padding: 0px;
}

.tez-form {
    font-family: "PT Serif";
    box-shadow: 0 4px 6px 0px rgba(22, 22, 26, 0.18);
    padding: 2em;
    max-width: 100%;
}

.btn-close {
    position: absolute;
    right: 0;
    padding: 1em;
}

.btn-close:focus {
    border-color: rgb(251, 116, 62);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(251, 116, 62, 0.7);
}

.modal-content {
    width: 80%;
    margin: 0px auto;
}

.modal-body {
    padding: 0px;
}

.form-control {
    padding-top: 10px;
    background-color: inherit;
    color: #291d1d;
    padding-left: 5px;
    border: 0px;
    border-bottom: 1px solid #000000
}

.form-control:focus {
    border-color: rgb(251, 116, 62);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(251, 116, 62, 0.7);
}

.tez-form-text {
    padding-top: 1em;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    color: #272343;
}

.tez-form-header {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    color: #FB743E;
}

.tez-form-header-2 {
    color: #272343;
}
</style>
    