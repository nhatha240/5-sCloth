import { faker } from '@faker-js/faker';
export const generateFakeData = (count, imageList) => {
    let idCounter = 1;
    const fakeData = [];
   export const ORDER_STATUS = {
            'ready': 'Ready',
            'shipped': 'Shipped',
            'received': 'Received',
        }
    for (let i = 0; i < count; i++) {
        const id = idCounter++;
        const category = faker.commerce.department();
        const product_name = faker.commerce.productName();
        const product_image = imageList[Math.floor(Math.random() * imageList.length)];
        const color_list = [
            {
                color: faker.color.rgb(),
                active: true,
            },
            {
                color: faker.color.rgb(),
                active: false,
            },
            {
                color: faker.color.rgb(),
                active: false,
            },
        ];
        const price = parseFloat(faker.commerce.price());
        const sale_price = faker.datatype.boolean() ? parseFloat((price * 0.9).toFixed(2)) : 0;
        const rating = parseFloat((Math.random() * 5).toFixed(1));
        const rating_count = faker.number.int({ min: 0, max: 1000 });
        const bestSeller = faker.datatype.boolean();
        const is_like = faker.datatype.boolean();
        const color = faker.color.rgb();
        const brand_name = faker.commerce.productName()

        fakeData.push({
            id,
            category,
            product_name,
            product_image,
            color_list,
            price,
            sale_price,
            rating,
            rating_count,
            bestSeller,
            is_like,
            color,
            brand_name,
        });
    }

    return fakeData;
};

export const generateSingleData = (id, imageList, subImage) => {
    let fakeData = {};

    const category = faker.commerce.department();
    const product_name = faker.commerce.productName();
    const product_image = imageList;
    const sub_image = subImage;
    const color_list = [
        {
            color: faker.color.rgb(),
            active: true,
        },
        {
            color: faker.color.rgb(),
            active: false,
        },
        {
            color: faker.color.rgb(),
            active: false,
        },
    ];
    const price = parseFloat(faker.commerce.price());
    const sale_price = faker.datatype.boolean() ? parseFloat((price * 0.9).toFixed(2)) : 0;
    const rating = parseFloat((Math.random() * 5).toFixed(1));
    const rating_count = faker.number.int({ min: 0, max: 1000 });
    const bestSeller = faker.datatype.boolean();
    const is_like = faker.datatype.boolean();
    const color = faker.color.rgb();
    const brand_name = faker.commerce.productName()
    const quantity = 0
    const stock = faker.number.int({ min: 0, max: 100 });

    fakeData = {
        id,
        category,
        product_name,
        product_image,
        sub_image,
        color_list,
        price,
        sale_price,
        rating,
        rating_count,
        bestSeller,
        is_like,
        color,
        brand_name,
        quantity,
        stock,
    };

    return fakeData;
};
