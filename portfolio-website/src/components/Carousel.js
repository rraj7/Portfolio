import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import Card from './Calsrd';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.JPG';
import img3 from '../assets/3.jpg';


class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [ //Add more project details here
                {
                    id: 0,
                    title: 'Project 1',
                    subtitle: 'The text to display ',
                    imgSrc: img1,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Project 2',
                    subtitle: 'The text to display ',
                    imgSrc: img2,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 3',
                    subtitle: 'The text to display ',
                    imgSrc: img3,
                    link: '',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) =>{
        console.log(id);
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false: true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({items});
    }

    makeItems =(items) => {
        return items.map(item => {
            return <Card item = {item} click = {(e => this.handleCardClick(item.id,e))} key = {item.id} />
        });

    }

    render (){
        return(
            <Container fluid = {true}>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>

        );
    }


}

export default Carousel;