import React from 'react';

class Book extends React.Component {
    // constructor(){
    //     super()
    // }
    render(){

         return (
           // const {book} = this.props;
           // const {name, author, price, type_book:{description}} = book;
            <div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5 w5">
                <h4>Title:{name}</h4>
                <div>{author}</div>
                <div>{price}</div>
                <div>{description}</div>
            </div>
            ) 
    }
}





// const Book = (props) =>{
//     const {book} = props;
//     const {name, author, price, type_book:{description}} = book;
//     return (
//         <div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5 w5">
//             <h4>Title:{name}</h4>
//             <div>{author}</div>
//             <div>{price}</div>
//             <div>{description}</div>
//         </div>
//     )
// }
// export default Book