
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
            lessons: lessons,
            searchInput: "",
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
        }
    },
    computed: {
        filteredLessons() {
            let filteredLessons = this.lessons
            if(this.searchInput.length > 0) {
                filteredLessons = this.lessons.filter((lesson) => {
                    return lesson.subject.toUpperCase().includes(this.searchInput.toUpperCase()) || lesson.location.toUpperCase().includes(this.searchInput.toUpperCase())
                })
            }
            return filteredLessons
        }
    }
})