
const app = Vue.createApp({

    data() {
        return {
            cartPage: false,
            ascending: true,
            descending: false,
            activeBtn: "",
            cart: [],
            checkout: {
                name: "",
                phoneNumber: ""
            },
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
            ],
            searchInput: "",
            filteredLessons: []
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
            if(!this.cart.length || this.cart.length === 0) {
                this.cartPage = false;
            }
        },
        clearCart() {
            this.cart = [];
            this.cartPage = false;
        },
        changeToCartPage() {
            this.cartPage = !this.cartPage;
        },
        changeToAscending() {
            this.descending = false;
            this.ascending = true;
            this.activeBtn = 'asc'
        },
        changeToDescending() {
            this.ascending = false;
            this.descending = true;
            this.activeBtn = 'dsc'
        },
        sortPrices() {
            if(this.ascending){
                let sortedSubs = this.lessons
                sortedSubs = sortedSubs.sort((a, b) => {
                    return a.price - b.price;
                })
            }
            if (this.descending) {
                let sortedSubs = this.lessons
                sortedSubs = sortedSubs.sort((a, b) => {
                    return b.price - a.price
                })
            }
        },
        sortLocations() {
            if (this.ascending) {
                let sortedSubs = this.lessons
            sortedSubs = sortedSubs.sort((a, b) => {
                let subsA = a.location.toLowerCase()
                let subsB = b.location.toLowerCase()
                if (subsA < subsB) {
                    return -1
                }
                if (subsA > subsB) {
                    return 1
                }
                return 0
            })
            }   
            if (this.descending) {
                let sortedSubs = this.lessons
                sortedSubs = sortedSubs.sort((a, b) => {
                    let subsA = a.location.toLowerCase()
                    let subsB = b.location.toLowerCase()
                    if (subsA < subsB) {
                        return 1
                    }
                    if (subsA > subsB) {
                        return -1
                    }
                    return 0
                })
            }
        },
        sortSpaces() {
            if(this.ascending) {
                let sortedSubs = this.lessons
                sortedSubs = sortedSubs.sort((a, b) => {
                    return a.spaces - b.spaces;
                })
            }
            if(this.descending) {
                let sortedSubs = this.lessons
                sortedSubs = sortedSubs.sort((a, b) => {
                    return b.spaces - a.spaces;
                })
            }
        },
        sortSubjects() {
            if (this.ascending) {
                let sortedSubs = this.lessons
                sortedSubs = sortedSubs.sort((a, b) => {
                    let subsA = a.subject.toLowerCase()
                    let subsB = b.subject.toLowerCase()
                    if (subsA < subsB) {
                        return -1
                    }
                    if (subsA > subsB) {
                        return 1
                    }
                    return 0
                })
            }
            if (this.descending) {
                let sortedSubs = this.lessons
                sortedSubs = sortedSubs.sort((a, b) => {
                    let subsA = a.subject.toLowerCase()
                    let subsB = b.subject.toLowerCase()
                    if (subsA < subsB) {
                        return 1
                    }
                    if (subsA > subsB) {
                        return -1
                    }
                    return 0
                })
            }
        },
        isLetters($event) {
            var charCode = $event.keyCode;
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {
                return true;
            } else {
                $event.preventDefault();
            }      
        },
        isNumbers($event) {
            var charCode = $event.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                $event.preventDefault();
            } else {
                return true;
            }
        },
        checkedOut() {
            alert('You have successfully checked out!')
        },
        searchText(search) {
            console.log(search)
            const regex = new RegExp(search, 'i')
            let filteredLessons = this.lessons
            filteredLessons = this.lessons.filter((lesson) => 
                regex.test(lesson.subject) || regex.test(lesson.location)
            )
            return this.lessons = filteredLessons
        }
    },
})