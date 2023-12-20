import { LightningElement } from 'lwc';
export default class ParentProduct extends LightningElement {

selectedProduct = null;
productList = [
    {
        id: 1,
        name: 'Tata Harrier',
        imgUrl:
            'https://media.zigcdn.com/media/model/2023/Oct/harrier_360x240.jpg',
        productCost: '15.49 LAC',
        selected: false
    },
    {
        id: 2,
        name: 'Hyundai Exter',
        imgUrl:
            'https://media.zigcdn.com/media/model/2023/May/exter-7_360x240.jpg',
                productCost: '5.99 LAC',
        selected: false
    },
    {
        id: 3,
        name: 'Kane Williamson',
        imgUrl:
            'https://media.zigcdn.com/media/model/2021/Oct/xuv700-5_360x240.jpg',
            productCost: '14.02 LAC',
        selected: false
    },
    {
        id: 4,
        name: 'Land Rover Defender',
        imgUrl:
            'https://media.zigcdn.com/media/model/2021/Jun/5-door_360x240.jpg',
            productCost: '93.55 LAC',
        selected: false
    },
    {
        id: 5,
        name: 'Toyota Camary',
        imgUrl:
            'https://media.zigcdn.com/media/model/2023/Mar/toyota-camry-1_360x240.jpg',
        productCost: '46.17 LAC',
        selected: false
    }
];
selectedProductHandler(event) {
    const productName = event.detail;
    this.selectedProduct = this.productList.find(
        item => item.name === productName
    );
}

}