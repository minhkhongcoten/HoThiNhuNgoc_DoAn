//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1,
            title: 'BÓNG CHUYỀN 1',
            img: './assets/img/products/BC_1.jpg',
            category: 'BÓNG CHUYỀN',
            price: 200000,
            desc: ' '
        },
        {
            id: 2,
            status: 1,
            title: 'BÓNG CHUYỀN 2',
            img: './assets/img/products/BC_2.jpg',
            category: 'BÓNG CHUYỀN',
            price: 180000,
            desc: ''
        },
        {
            id: 3,
            status: 1,
            title: 'BÓNG CHUYỀN 3',
            img: './assets/img/products/BC_3.jpg',
            category: 'BÓNG CHUYỀN',
            price: 180000,
            desc: ''
        },
        {
            id: 4,
            status: 1,
            title: 'BÓNG CHUYỀN 4',
            img: './assets/img/products/BC_4.jpg',
            category: 'BÓNG CHUYỀN',
            price: 699000,
            desc: ''
        },
        {
            id: 5,
            status: 1,
            title: 'BÓNG CHUYỀN 5',
            img: './assets/img/products/BC_5.jpg',
            category: 'BÓNG CHUYỀN',
            price: 280000,
            desc: ''
        },

        {
            id: 6,
            status: 1,
            title: 'BÓNG CHUYỀN 6',
            img: './assets/img/products/BC_6.jpg',
            category: 'BÓNG CHUYỀN',
            price: 540000,
            desc: ''
        },

        {
            id: 7,
            status: 1,
            title: 'BÓNG CHUYỀN 7',
            category: 'BÓNG CHUYỀN',
            img: './assets/img/products/BC_7.jpg',
            price: 340000,
            desc: ''
        },

        {
            id: 8,
            status: 1,
            title: 'BÓNG CHUYỀN 8',
            img: './assets/img/products/BC_8.jpg',
            category: 'BÓNG CHUYỀN',
            price: 140000,
            desc: ''
        },

        {
            id: 9,
            status: 1,
            title: 'BÓNG CHUYỀN 9',
            category: "BÓNG CHUYỀN",
            img: './assets/img/products/BC_9.jpg',
            price: 34000,
            desc: '',
        },
        {
            id: 10,
            status: 1,
            title: 'BÓNG CHUYỀN 10 ',
            category: "BÓNG CHUYỀN",
            img: './assets/img/products/BC_10.jpg',
            price: 25000,
            desc: ''
        },
        {
            id: 11,
            status: 1,
            title: 'BÓNG ĐÁ 1',
            category: 'BÓNG ĐÁ',
            img: './assets/img/products/BD_1.jpg',
            price: 60000,
            desc: ' '
        },
        {
            id: 12,
            status: 1,
            title: 'BÓNG ĐÁ 2',
            img: './assets/img/products/BD_2.jpg',
            category: 'BÓNG ĐÁ',
            price: 140000,
            desc: ''
        },
        {
            id: 13,
            status: 1,
            title: 'BÓNG ĐÁ 3',
            img: './assets/img/products/BD_3.jpg',
            category: 'BÓNG ĐÁ',
            price: 60000,
            desc: ''
        },
        {
            id: 14,
            status: 1,
            title: 'BÓNG ĐÁ 4',
            img: './assets/img/products/BD_4.jpg',
            category: 'BÓNG ĐÁ',
            price: 60000,
            desc: ''
        },
        {
            id: 15,
            status: 1,
            title: 'BÓNG ĐÁ 5',
            img: './assets/img/products/BD_5.jpg',
            category: 'BÓNG ĐÁ',
            price: 60000,
            desc: ''
        },
        {
            id: 16,
            status: 1,
            title: 'BÓNG ĐÁ 6',
            img: './assets/img/products/BD_6.jpg',
            category: 'BÓNG ĐÁ',
            price: 60000,
            desc: ''
        },
        {
            id: 17,
            status: 1,
            title: 'BÓNG ĐÁ 7',
            img: './assets/img/products/BD_7.jpg',
            category: 'BÓNG ĐÁ',
            price: 60000,
            desc: ' '
        },
        {
            id: 18,
            status: 1,
            title: 'BÓNG ĐÁ 8',
            img: './assets/img/products/BD_8.jpg',
            category: 'BÓNG ĐÁ',
            price: 60000,
            desc: ' '
        },
        {
            id: 19,
            status: 1,
            title: 'BÓNG ĐÁ 9',
            img: './assets/img/products/BD_9.jpg',
            category: 'BÓNG ĐÁ',
            price: 130000,
            desc: ''
        },
        {
            id: 20,
            status: 1,
            title: 'BÓNG ĐÁ 10',
            img: './assets/img/products/BD_10.jpg',
            category: 'BÓNG ĐÁ',
            price: 130000,
            desc: ' '
        },
        {
            id: 21,
            status: 1,
            title: 'ÁO 1',
            category: 'ÁO',
            img: './assets/img/products/A1.jpg',
            price: 550000,
            desc: ''
        },
        {
            id: 22,
            status: 1,
            title: 'ÁO 2',
            category: 'ÁO',
            img: './assets/img/products/A2.jpg',
            price: 550000,
            desc: ''
        },

        {
            id: 23,
            status: 1,
            title: 'ÁO 3',
            category: 'ÁO',
            img: './assets/img/products/A3.jpg',
            price: 510000,
            desc: ''
        },

        {
            id: 24,
            status: 1,
            title: 'ÁO 4',
            img: './assets/img/products/A4.jpg',
            category: 'ÁO',
            price: 950000,
            desc: ''
        },
        {
            id: 25,
            status: 1,
            title: 'ÁO 5',
            img: './assets/img/products/A5.jpg',
            category: 'ÁO',
            price: 350000,
            desc: ''
        },

        {
            id: 26,
            status: 1,
            title: 'ÁO 6',
            category: 'ÁO',
            img: './assets/img/products/A6.jpg',
            price: 450000,
            desc: ' '
        },

        {
            id: 27,
            status: 1,
            title: 'ÁO 7',
            category: 'ÁO',
            img: './assets/img/products/A7.jpg',
            price: 520000,
            desc: ' '
        },

        {
            id: 28,
            status: 1,
            title: 'ÁO 8',
            category: 'ÁO',
            img: './assets/img/products/A9.jpg',
            price: 350000,
            desc: ''
        },

        {
            id: 29,
            status: 1,
            title: 'ÁO 9',
            category: 'ÁO',
            img: './assets/img/products/.A9.jpg',
            price: 420000,
            desc: ''
        },

        {
            id: 30,
            status: 1,
            title: 'ÁO 10',
            category: 'ÁO',
            img: './assets/img/products/A10.jpg',
            price: 175000,
            desc: ' '
        },

        {
            id: 31,
            status: 1,
            title: 'QUẦN 1',
            category: 'QUẦN',
            img: './assets/img/products/Q1.jpg',
            price: 350000,
            desc: ''
        },

        {
            id: 32,
            status: 1,
            title: 'QUẦN 2',
            category: 'QUẦN',
            img: './assets/img/products/Q2.jpg',
            price: 460000,
            desc: ''
        },

        {
            id: 33,
            status: 1,
            title: 'QUẦN 3',
            category: 'QUẦN',
            img: './assets/img/products/Q3.jpg',
            price: 200000,
            desc: ' '
        },

        {
            id: 34,
            status: 1,
            title: 'QUẦN 4 ',
            category: 'QUẦN',
            img: './assets/img/products/Q4.jpg',
            price: 270000,
            desc: ''
        },

        {
            id: 35,
            status: 1,
            title: 'QUẦN 5',
            category: 'QUẦN',
            img: './assets/img/products/Q5.jpg',
            price: 300000,
            desc: ''
        },

        {
            id: 36,
            status: 1,
            title: 'QUẦN 6',
            category: 'QUẦN',
            img: './assets/img/products/Q6.jpg',
            price: 280000,
            desc: ''
        },

        {
            id: 37,
            status: 1,
            title: 'QUẦN 7',
            category: 'QUẦN',
            img: './assets/img/products/Q7.jpg',
            price: 280000,
            desc: ''
        },
        {
            id: 38,
            status: 1,
            title: 'QUẦN 8',
            category: 'QUẦN',
            img: './assets/img/products/Q8.jpg',
            price: 140000,
            desc: ''
        },
        {
            id: 39,
            status: 1,
            title: 'QUẦN 9',
            category: 'QUẦN',
            img: './assets/img/products/Q9.jpg',
            price: 60000,
            desc: ' '
        },

        {
            id: 40,
            status: 1,
            title: 'QUẦN 10',
            category: 'QUẦN',
            img: './assets/img/products/Q10.jpg',
            price: 50000,
            desc: ''
        },

        {
            id: 41,
            status: 1,
            title: 'MŨ 1',
            category: 'MŨ',
            img: './assets/img/products/M1.jpg',
            price: 50000,
            desc: ' '
        },
        {
            id: 42,
            status: 1,
            title: 'MŨ 2',
            category: "MŨ",
            img: './assets/img/products/M2.jpg',
            price: 699000,
            desc: '',
        },
        {
            id: 43,
            status: 1,
            title: 'MŨ 3',
            category: "MŨ",
            img: './assets/img/products/M3.jpg',
            price: 550000,
            desc: '',
        },
        {
            id: 44,
            status: 1,
            title: 'MŨ 4',
            category: "MŨ",
            img: './assets/img/products/M4.jpg',
            price: 220000,
            desc: ' ',
        },
        {
            id: 45,
            status: 1,
            title: 'MŨ 5',
            category: "MŨ",
            img: './assets/img/products/M5.jpg',
            price: 75000,
            desc: '',
        },
        {
            id: 46,
            status: 1,
            title: 'MŨ 6',
            category: "MŨ",
            img: './assets/img/products/M6.jpg',
            price: 75000,
            desc: '',
        },
        {
            id: 47,
            status: 1,
            title: 'MŨ 7',
            category: "MŨ",
            img: './assets/img/products/M7.jpg',
            price: 170000,
            desc: '',
        },
        {
            id: 48,
            status: 1,
            title: 'MŨ 8',
            category: "MŨ",
            img: './assets/img/products/M8.jpg',
            price: 120000,
            desc: '',
        },
        {
            id: 49,
            status: 1,
            title: 'MŨ 9',
            category: "MŨ",
            img: './assets/img/products/M9.jpg',
            price: 80000,
            desc: ''
        },
        {
            id: 50,
            status: 1,
            title: 'MŨ 10',
            category: "MŨ",
            img: './assets/img/products/M10.jpg',
            price: 70000,
            desc: '',
        },
        {
            id: 51,
            status: 1,
            title: 'BÓNG RỔ 1',
            category: "BÓNG RỔ",
            img: './assets/img/products/R1.jpg',
            price: 160000,
            desc: '',
        },
        {
            id: 52,
            status: 1,
            title: 'BÓNG RỔ 2',
            category: "BÓNG RỔ",
            img: './assets/img/products/R2.jpg',
            price: 20000,
            desc: ' ',
        },
        {
            id: 53,
            status: 1,
            title: 'BÓNG RỔ 3',
            category: "BÓNG RỔ",
            img: './assets/img/products/R3.jpg',
            price: 10000,
            desc: ' ',
        },
        {
            id: 54,
            status: 1,
            title: 'BÓNG RỔ 4',
            category: "BÓNG RỔ",
            img: './assets/img/products/R4.jpg',
            price: 50000,
            desc: '',
        },
        {
            id: 55,
            status: 1,
            title: 'BÓNG RỔ 5',
            category: "BÓNG RỔ",
            img: './assets/img/products/R5.jpg',
            price: 60000,
            desc: ' ',
        },
        {
            id: 56,
            status: 1,
            title: 'BÓNG RỔ 6 ',
            category: "BÓNG RỔ",
            img: './assets/img/products/R6.jpg',
            price: 99000,
            desc: '',
        },
        {
            id: 57,
            status: 1,
            title: 'BÓNG RỔ 7',
            category: "BÓNG RỔ",
            img: './assets/img/products/R7.jpg',
            price: 49000,
            desc: ' ',
        },
        {
            id: 58,
            status: 1,
            title: 'BÓNG RỔ 8',
            category: "BÓNG RỔ",
            img: './assets/img/products/R8.jpg',
            price: 60000,
            desc: ''
        },
        {
            id: 59,
            status: 1,
            title: 'BÓNG RỔ 9',
            img: './assets/img/products/R9.jpg',
            category: 'BÓNG RỔ',
            price: 130000,
            desc: ' '
        },
        {
            id: 60,
            status: 1,
            title: 'BÓNG RỔ 10',
            img: './assets/img/products/R10.jpg',
            category: 'BÓNG RỔ',
            price: 100000,
            desc: ''
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Hồ Thị Như Ngọc",
            phone: "0123456789",
            password: "123456",
            address: '07 Nguyễn Huệ, Thành phố Trà Vinh',
            email: 'hothinhungoc@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })

        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();