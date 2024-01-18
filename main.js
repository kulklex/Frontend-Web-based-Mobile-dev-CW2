
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
                phoneNumber: "",
                lessonId: null,
                numOfSpaces: 0
            },
            lessons: [],
            searchInput: "",
        }
    },
    methods: {
        async fetchLessons() {
            try {
                const response = await fetch('https://web-based-mobile-dev-cw2.onrender.com/lessons');
                if (!response.ok) {
                    throw new Error('Failed to fetch lessons');
                }
                this.lessons = await response.json();
            } catch (error) {
                console.error(error);
            }
        },
        async updateLessonSpaces(lessonId, newSpaces) {
            try {
                const response = await fetch(`https://web-based-mobile-dev-cw2.onrender.com/lessons/${lessonId}`, {
                    method: 'PUT',
                    body: JSON.stringify([{ _id: lessonId, spaces: newSpaces }]),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                return await response.json();
            } catch (error) {
                console.error(error);
                throw new Error('Failed to update lesson spaces');
            }
        },
        
        async addToCart(lesson) {
            this.updateLessonSpaces(lesson._id, lesson.spaces - 1)
            .then(() => {
                lesson.spaces--;
                if (lesson.spaces >= 0) {
                    this.cart.push(lesson);
                }
            })
            .catch(error => {
                console.error(error);
            });
        },
        async removeFromCart(lesson) {
            try {
                // Increase the spaces for the lesson
                await this.updateLessonSpaces(lesson._id, lesson.spaces + 1);

                // Remove the lesson from the cart
                const lessonIndex = this.cart.findIndex(cartLesson => cartLesson._id === lesson._id);
                if (lessonIndex !== -1) {
                    this.cart.splice(lessonIndex, 1);
                }
            } catch (error) {
                console.error(error);
            }
        },
        async createOrder() {
            try {
                // Extracting lesson IDs from the lessons in the cart
                const lessonArray = this.cart.map(lesson => lesson.id);

                // Creating the order object
                const order = {
                    name: this.checkout.name,
                    phoneNumber: this.checkout.phoneNumber,
                    lessonIDs: this.cart.map(lesson => lesson.id),
                    numOfSpaces: this.cart.map(lesson => lesson.spaces),
                };

                // Sending a POST request to create a new order
                const response = await fetch('https://web-based-mobile-dev-cw2.onrender.com/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(order),
                });

                const result = await response.json();
                this.message = result.msg;
                alert('You have successfully checked out!')
                window.location.href = '/'
            } catch (error) {
                console.error(error);
                this.message = 'Error creating order';
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
        checkedOut(lesson) {
            this.updateLessonSpaces(lesson._id, lesson.spaces - 1)
            .then(() => {
                lesson.spaces--;
                if (lesson.spaces >= 0) {
                    this.cart.push(lesson);
                }
            })
            .catch(error => {
                console.error(error);
            });
        }
    },
    mounted() {
        // Fetch lessons when the app is mounted
        this.fetchLessons();
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