
const app = Vue.createApp({
    
    
    data() {
        return {
            cartPage: false,
            checkoutPage: false,
            cart: [],
            lessons: [
                {
                    "id": 1,
                    "subject": "Maths",
                    "location": "London",
                    "price": 30,
                    "spaces": 5,
                    "icon": "fa fa-bar-chart"
                },
                {
                    "id": 2,
                    "subject": "Language",
                    "location": "Manchester",
                    "price": 50,
                    "spaces": 5,
                    "icon": "fa fa-language"
                },
                {
                    "id": 3,
                    "subject": "Geography",
                    "location": "Cardiff",
                    "price": 40,
                    "spaces": 5,
                    "icon": "fa fa-globe"
                },
                {
                    "id": 4,
                    "subject": "Chemistry",
                    "location": "Birmingham",
                    "price": 30,
                    "spaces": 5,
                    "icon": "fa fa-flask"
                },
                {
                    "id": 5,
                    "subject": "Geography",
                    "location": "London",
                    "price": 20,
                    "spaces": 5,
                    "icon": "fa fa-globe"
                },
                {
                    "id": 6,
                    "subject": "Computer Studies",
                    "location": "London",
                    "price": 30,
                    "spaces": 5,
                    "icon": "fa fa-desktop"
                },
                {
                    "id": 7,
                    "subject": "Music",
                    "location": "Edinburgh",
                    "price": 30,
                    "spaces": 5,
                    "icon": "fa fa-music"
                },
                {
                    "id": 8,
                    "subject": "Music",
                    "location": "London",
                    "price": 40,
                    "spaces": 5,
                    "icon": "fa fa-music"
                },
                {
                    "id": 9,
                    "subject": "Music",
                    "location": "Cardiff",
                    "price": 40,
                    "spaces": 5,
                    "icon": "fa fa-music"
                },
                {
                    "id": 10,
                    "subject": "Chemistry",
                    "location": "London",
                    "price": 50,
                    "spaces": 5,
                    "icon": "fa fa-flask"
                },
                {
                    "id": 11,
                    "subject": "Physics",
                    "location": "Manchester",
                    "price": 40,
                    "spaces": 5,
                    "icon": "fa fa-tachometer"
                },
                {
                    "id": 12,
                    "subject": "Physics",
                    "location": "London",
                    "price": 50,
                    "spaces": 5,
                    "icon": "fa fa-tachometer"
                },
                {
                    "id": 13,
                    "subject": "Physics",
                    "location": "Edinburgh",
                    "price": 20,
                    "spaces": 5,
                    "icon": "fa fa-tachometer"
                },
                {
                    "id": 14,
                    "subject": "Business",
                    "location": "Birmingham",
                    "price": 40,
                    "spaces": 5,
                    "icon": "fa fa-briefcase"
                },
                {
                    "id": 15,
                    "subject": "Maths",
                    "location": "Manchester",
                    "price": 25,
                    "spaces": 5,
                    "icon": "fa fa-bar-chart"
                },
                {
                    "id": 16,
                    "subject": "Language",
                    "location": "London",
                    "price": 60,
                    "spaces": 5,
                    "icon": "fa fa-language"
                },
                {
                    "id": 17,
                    "subject": "Language",
                    "location": "Birmingham",
                    "price": 50,
                    "spaces": 5,
                    "icon": "fa fa-language"
                },
                {
                    "id": 18,
                    "subject": "Geography",
                    "location": "Manchester",
                    "price": 30,
                    "spaces": 5,
                    "icon": "fa fa-globe"
                },
                {
                    "id": 19,
                    "subject": "Geography",
                    "location": "Edinburgh",
                    "price": 35,
                    "spaces": 5,
                    "icon": "fa fa-globe"
                },
                {
                    "id": 20,
                    "subject": "Chemistry",
                    "location": "Manchester",
                    "price": 40,
                    "spaces": 5,
                    "icon": "fa fa-flask"
                },
                {
                    "id": 21,
                    "subject": "Computer Studies",
                    "location": "Edinburgh",
                    "price": 25,
                    "spaces": 5,
                    "icon": "fa fa-desktop"
                },
                {
                    "id": 22,
                    "subject": "Computer Studies",
                    "location": "Birmingham",
                    "price": 25,
                    "spaces": 5,
                    "icon": "fa fa-desktop"
                },
                {
                    "id": 23,
                    "subject": "Business",
                    "location": "Cardiff",
                    "price": 35,
                    "spaces": 5,
                    "icon": "fa fa-briefcase"
                },
                {
                    "id": 24,
                    "subject": "Business",
                    "location": "London",
                    "price": 40,
                    "spaces": 5,
                    "icon": "fa fa-briefcase"
                }
            ]
        }
    },
    methods: {
        addToCart(lesson) {
            lesson.spaces -= 1
            if(lesson.spaces < 0) {
                lesson.spaces = 0;
            } else {
                this.cart.push(lesson)
            }
        },
        removeFromCart(lesson) {
            this.cart.splice(this.cart.indexOf(lesson), 1)
            ++lesson.spaces
        },
        clearCart() {
            this.cart = [];
            this.checkoutPage = false;
            this.cartPage = false;
        },
        changeToCartPage() {
            this.cartPage = !this.cartPage;
            this.checkoutPage = false;
        },
        changeToCheckoutPage() {
            this.checkoutPage = !this.checkoutPage;
            this.cartPage = false;
        }
    },
})